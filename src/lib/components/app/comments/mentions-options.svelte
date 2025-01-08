<script lang="ts">
	import { Clipboard, Mail, X } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	//   import { addNewActivity, setMentionsToNotification } from "$lib/utils";
	//   import { authStore } from "$lib/stores/auth-store";
	import { Timestamp } from 'firebase/firestore';
	//   import { taskValue, updateSubTask } from "$lib/stores/subtasks";
	import type { ActivityTask, Member } from '$lib/types/task';
	import { toast } from 'svelte-sonner';
	//   import {
	//     createNotification,
	//     type AppNotification,
	//   } from "$lib/stores/notification-store";
	//   import { currentWorkspaceId } from "$lib/stores/workspace";
	//   import { currentPortfolioId } from "$lib/stores/portfolio";
	//   import { milestoneValues } from "$lib/stores/milestone";
	import {
		currentCommentIndex,
		istypingComment,
		showReplies
	} from '$lib/stores/tasks-actions';
	//   import {
	//     getProjectMembers,
	//     members,
	//     type Member,
	//   } from "$lib/stores/members-store";
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import { firekitUser } from 'svelte-firekit';
	import type { AppNotification } from '$lib/types/notifications';
	import { page } from '$app/stores';
	import { taskManager } from '$lib/components/task-manager.svelte';

	const path = $derived($page.url.pathname);
	const segments = $derived(path.split('/'));
	const workspaceId: string = $derived(segments[1]);
	const portfolioId: string = $derived(segments[3]);
	const projectId: string = $derived(segments[5]);
	const milestoneId: string = $derived(segments[7]);

	let { taskValue, members, pathids } = $props();

	let comment: string = $state('');

	let mentionIndex: number = $state(-1);
	let modalIndex = $state(0);
	let error: boolean = $state(false);
	let isOpen: boolean = $state(false);
	let mentionList = members;
	// let mentionList: any = [];
	let mentions: Member[] = $state([]);
	let filteredUsers: Member[] = $state([]);

	let hoveredElement = $state('');
	let formattedValue = $state('');

	let currentInfo: Partial<Member> = $state({
		displayName: '',
		name: '',
		typeitem: '',
		photoURL: '',
		id: '',
		email: ''
	});

	onMount(() => {
		const container = document.getElementById('styled-input');
		container?.addEventListener('mouseover', handleMouseEnter);
		container?.addEventListener('mouseout', handleMouseLeave);
	});

	function handleKeyUp(e: KeyboardEvent) {
		if (e.key === 'Backspace') {
			const parts = comment.split('@');
			if (parts.length <= 1) return;
			let indexToDelete = -1;
			parts.shift();
			parts.forEach((element, index) => {
				const men = mentions[index];
				if (men?.typeitem === 'User') {
					const substrs = element.slice(0, men.displayName.length);
					if (substrs != men?.displayName) {
						indexToDelete = index;
						comment = comment.replace(`@${substrs}`, '');
						mentionList.push(men);
					}
				} else {
					const substrs = element.slice(0, men.name.length);
					if (substrs != men?.name) {
						indexToDelete = index;
						comment = comment.replace(`@${substrs}`, '');
						mentionList.push(men);
					}
				}
			});
			if (indexToDelete > -1) {
				mentions.splice(indexToDelete, 1);
			}
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		const selection = window.getSelection();
		const range = selection?.getRangeAt(0);
		const startOffset = range?.startOffset || 0;
		const endOffset = range?.endOffset || 0;

		// Verifica si el cursor está dentro de una mención
		const mentionMatch = comment.slice(0, mentionIndex).match(/@(\w+)$/);
		const isInMention = mentionMatch && startOffset >= mentionIndex && endOffset <= comment.length;

		if (isOpen && filteredUsers.length > 0) {
			if (event.key == 'ArrowUp' && modalIndex > 0) {
				modalIndex--;
			}
			if (event.key == 'ArrowDown' && modalIndex < filteredUsers.length - 1) {
				modalIndex++;
			}
			if (event.key == 'Enter' && filteredUsers[modalIndex]) {
				handleAddUser(filteredUsers[modalIndex]);
				setTimeout(() => {
					if (comment.endsWith('\n')) {
						comment = comment.slice(0, -1);
					}
				}, 10);
			}
		}
	}

	function handleAddUser(user: Member) {
		const beforeMention = comment.slice(0, mentionIndex);
		const afterMention = comment
			.slice(mentionIndex)
			.replace(/@(\w+)?/, `@${user?.displayName || user?.name} `);
		comment = beforeMention + afterMention;
		formattedValue = formatInput(comment);
		mentions.push(user);
		mentionList = mentionList.filter((usr: any) => usr.uid != user.uid);
		isOpen = false;
	}

	async function handleComment() {
		error = false;

		// const mm = setMentionsToNotification(mentions || []);
		const mm: any = [];

		if (comment.trim() === '') {
			error = true;
			return;
		}

		if ($showReplies) {
			addReplyToComment();
		} else {
			createComment();
		}
		if (mentions.length > 0) {
			const notify: Partial<AppNotification> = {
				title: `${firekitUser?.displayName} mention`,
				typeNotification: 'link',
				description: 'Some mate mentioned you on a task discussion',
				createdBy: firekitUser!.uid,
				mentions: mm,
				readedBy: [],
				link: `/${workspaceId}/pf/${portfolioId}/p/${projectId}/m/${milestoneId}/${taskValue.id}`
			};
			//   await createNotification(notify);
		}
		reset();
	}

	async function handleInput(e: InputEvent) {
		const inputValue = (e.target as HTMLTextAreaElement).value;
		const mentionIndex = inputValue.lastIndexOf('@');
		if (mentionIndex == -1 || inputValue.split('@').length - 1 <= mentions.length) {
			isOpen = false;
			return;
		}
		isOpen = true;
		// await getProjectMembers();
		const mentionQuery = inputValue.slice(mentionIndex + 1);

		filteredUsers = mentionList.filter((member: any) => {
			if (member?.typeitem === 'User')
				return member.displayName.toLocaleLowerCase().startsWith(mentionQuery.toLocaleLowerCase());
			else return member.name.toLocaleLowerCase().startsWith(mentionQuery.toLocaleLowerCase());
		});
	}

	function getFormatedComment() {
		const parts = comment.split('@');
		if (parts.length <= 1) {
			return comment;
		}
		let commentFormated = parts.shift();
		parts.forEach((element, index) => {
			const men = mentions[index];
			if (men.typeitem === 'User') {
				const substrs = element.slice(0, men.displayName.length);
				if (substrs == men.displayName) {
					commentFormated += element.replace(`${substrs}`, `@${substrs}¬`);
				} else {
					commentFormated += element;
				}
			} else {
				const substrs = element.slice(0, men.name.length);
				if (substrs == men.name) {
					commentFormated += element.replace(`${substrs}`, `@${substrs}¬`);
				} else {
					commentFormated += element;
				}
			}
		});
		return commentFormated!;
	}
	function reset() {
		comment = '';
		formattedValue = comment;
		error = false;
		mentions = [];
		mentionList = members;
		// mentionList = [];
	}

	async function addReplyToComment() {
		const reply = {
			createdBy: firekitUser?.uid as string,
			createdAt: Timestamp.now(),
			description: getFormatedComment()
		};
		const tasktemp: any = taskValue;
		if (!tasktemp.activities[$currentCommentIndex].replies) {
			tasktemp.activities[$currentCommentIndex].replies = [];
		}

		tasktemp.activities[$currentCommentIndex].replies.push(reply);
		taskManager.updateTask({ activities: tasktemp.activities }, taskValue.id);

		setTimeout(() => {
			const replyId = `reply-${tasktemp.activities[$currentCommentIndex].replies.length - 1}`;
			const replyElement = document.getElementById(replyId);
			if (replyElement) {
				replyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 200);
	}

	function formatInput(value: string): string {
		const tempVar = value.slice();
		return tempVar.replace(
			/@([^¬]+)/g,
			'<span class="mention bg-slate-200 text-black rounded p-1" >@$1</span>'
		);
	}

	async function createComment() {
		const newactivity: ActivityTask = {
			createdBy: firekitUser?.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'comment',
			description: getFormatedComment()
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids);
		// await addNewActivity(newactivity);
	}

	function handleMouseEnter(event: Event) {
		const target: any = event.target;
		if (target.tagName === 'SPAN') {
			if (hoveredElement == target.textContent) return;
			hoveredElement = target.textContent;
			setCurrentUserInfo(hoveredElement);
		}
	}

	function handleMouseLeave(event: Event) {
		// return;
		const target: any = event.target;
		if (target.tagName === 'SPAN') {
			hoveredElement = '';
		}
	}

	function setCurrentUserInfo(displayName: string) {
		// const finded = $members.data.find(
		const finded = members.find((u: any) => u.displayName == displayName.slice(1));
		if (finded) {
			currentInfo = finded;
		}
	}

	function handleMouseLeaveHover() {
		hoveredElement = '';
		currentInfo = { displayName: '', photoURL: '', uid: '', email: '' };
	}

	async function copyToClipboard(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			toast.success('Copied to clipboard');
		} catch (error) {
			console.log(error);
			toast.error('failed to copy to clipboard');
		}
	}
</script>

<section class="flex w-full flex-col justify-between">
	<div class="ml-auto block">
		<Button
			variant="ghost"
			size="xs"
			onclick={() => {
				istypingComment.set(false);
			}}
			class="transition-all duration-300 "
		>
			<div>
				<X
					class="text-black transition-all duration-300 dark:text-white {$istypingComment
						? 'size-5'
						: 'size-0'} "
				></X>
			</div>
		</Button>
		{#if isOpen}
			<ul
				class="absolute bottom-40 right-[250px] w-56 list-none overflow-y-auto rounded border bg-slate-700 p-1 text-white dark:bg-slate-400 dark:text-black"
			>
				<!-- {#each filteredUsers as user, i} -->
				{#if members}
					{#if members.length > 0 && filteredUsers.length > 0}
						{#each filteredUsers as user, i (user.uid)}
							<button
								onclick={() => handleAddUser(user)}
								class="{modalIndex == i
									? 'bg-slate-500'
									: ''} flex w-full cursor-pointer items-center px-2 py-1 hover:bg-slate-500"
							>
								<Avatar.Root class="mr-2 h-6 w-6">
									<Avatar.Image src={user.photoURL ?? ''} alt={user?.displayName || user?.name} />
									{#if user.typeitem === 'User'}
										<Avatar.Fallback class="text-blue-500"
											>{user.displayName
												.split(' ')
												.map((w: any) => w.charAt(0))
												.join('')}</Avatar.Fallback
										>
									{:else}
										<Avatar.Fallback class="text-blue-500"
											>{user.name
												.split(' ')
												.map((w: any) => w.charAt(0))
												.join('')}</Avatar.Fallback
										>
									{/if}
								</Avatar.Root>
								<div class="flex flex-col items-start">
									<small>
										{user?.displayName || user?.name}
									</small>
									<small>
										{user?.typeitem}: {user?.rolews}
									</small>
								</div>
							</button>
						{/each}
					{:else}
						<li class="px-2 py-1">No results found</li>
					{/if}
				{:else}
					<li class="px-2 py-1">Loading...</li>
				{/if}
			</ul>
		{/if}
	</div>
	<div class="group relative inline-block h-[1px]">
		<span class="hidden cursor-pointer rounded bg-black/5 px-2 py-1 text-blue-500 dark:bg-white/5">
			Mostrar Lista
		</span>
		<ul
			onmouseleave={handleMouseLeaveHover}
			class="{hoveredElement == ''
				? 'hidden'
				: 'block'} absolute bottom-6 left-0 w-64 rounded border border-gray-300 bg-white p-2 shadow-lg group-hover:visible group-hover:block dark:bg-black"
		>
			<li class="flex gap-1 px-4 py-2">
				<div class="relative">
					<Avatar.Root class="mr-1 h-8 w-8">
						<Avatar.Image
							src={currentInfo.photoURL ?? 'https://github.com/shadcn.png'}
							alt={currentInfo.displayName + ' avatar'}
						/>
						<Avatar.Fallback
							>{currentInfo?.displayName.split(' ').map((l: any) => l.charAt(0))}</Avatar.Fallback
						>
					</Avatar.Root>
					<span
						class="absolute bottom-1 right-0 h-2 w-2 rounded-full border border-white bg-green-500"
					></span>
				</div>
				<div>
					<button class="text-lg">
						{currentInfo.displayName}
					</button>
				</div>
			</li>
			<li class="flex items-center px-4 py-2">
				<Mail class="h-4 w-4" />
				<button
					class="group ml-4 flex items-center opacity-80"
					onclick={() => copyToClipboard(currentInfo?.email || '')}
				>
					{currentInfo.email}
					<Clipboard class="ml-2 hidden h-3 w-3 group-hover:inline-block" />
				</button>
			</li>
			<li class="flex gap-1 px-4 py-2">
				<a class="rounded bg-black/10 px-2 py-1 dark:bg-white/10" href="#{currentInfo.uid}"
					>See profile</a
				>
				<button>option</button>
			</li>
		</ul>
	</div>
	<Textarea
		bind:value={comment}
		oninput={handleInput}
		onkeydown={handleKeyDown}
		onkeyup={handleKeyUp}
		placeholder="Comment about this tasks/subtask"
		class="h-[80px] {error ? 'border-[2px] border-red-600' : ''}"
	/>
	<Button onclick={() => handleComment()} class="mt-3" variant="default">
		<span>Send</span>
	</Button>
</section>
