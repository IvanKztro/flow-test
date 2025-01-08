<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import type { ActivityTask, Task } from '$lib/types/task';
	import { timeAgoDate } from '$lib/utils';
	import { Smile, ThumbsUp } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import * as Popover from '$lib/components/ui/popover';
	//   import "emoji-picker-element";
	import { currentCommentIndex, istypingComment, showReplies } from '$lib/stores/tasks-actions';
	import { taskManager } from '$lib/components/task-manager.svelte';
	import { firekitUser } from 'svelte-firekit';


	let {
		comment,
		isreply = false,
		index,
		taskValue
	}: { comment: ActivityTask | null; isreply: boolean; index: number; taskValue: Task } = $props();

	let showemojis: boolean = $state(false);
	let reactions: any = $state({});

	function setDataComment() {
		currentCommentIndex.set(index);
		showReplies.set(true);
		istypingComment.set(true);
	}

	$effect(() => {
		if (taskValue && ($currentCommentIndex || !isreply)) {
			reactions =
				isreply && taskValue?.activities[$currentCommentIndex]?.replies?.length > index
					? taskValue?.activities[$currentCommentIndex].replies[index]?.reactions || null
					: taskValue?.activities[index]?.reactions || null;
		}
	});

	async function handleLikeComment() {
		const tasktemp: any = taskValue;

		const target =
			isreply && tasktemp.activities[$currentCommentIndex]?.replies[index]
				? tasktemp.activities[$currentCommentIndex]?.replies[index]
				: tasktemp.activities[index];

		if (!target.likes) {
			target.likes = [];
		}

		if (target.likes.includes(firekitUser?.uid)) {
			target.likes = target.likes.filter((item) => item !== firekitUser?.uid);
		} else {
			target.likes.push(firekitUser?.uid);
		}

		taskManager.updateTask({ activities: tasktemp.activities }, taskValue.id);

	}

	function openEmojis() {
		setTimeout(() => {
			const emojiPicker = document.querySelector('emoji-picker');
			if (emojiPicker) {
				emojiPicker.addEventListener('emoji-click', (event) => {
					changeReactionComment(event.detail?.unicode);
				});
			}
		}, 250);
	}

	async function changeReactionComment(emojicode: any) {
		const tasktemp: any = taskValue;

		const target =
			isreply && tasktemp.activities[$currentCommentIndex]?.replies[index]
				? tasktemp.activities[$currentCommentIndex]?.replies[index]
				: tasktemp.activities[index];

		if (!target.reactions) {
			target.reactions = {};
		}

		if (!target.reactions[emojicode]) {
			target.reactions[emojicode] = [];
		}

		const reactionArray = target.reactions[emojicode];

		if (reactionArray.includes(firekitUser?.uid)) {
			const updatedArray = reactionArray.filter((item: string) => item !== firekitUser?.uid);
			if (updatedArray.length === 0) {
				delete target.reactions[emojicode];
			} else {
				target.reactions[emojicode] = updatedArray;
			}
		} else {
			reactionArray.push(firekitUser?.uid);
		}

		taskManager.updateTask({ activities: tasktemp.activities }, taskValue.id);

		showemojis = false;
	}
	let content = $state(comment?.description
		.replace(
			/@([^¬]+)/g,
			'<span class="mention bg-slate-200 text-black rounded p-1 mention-modal">@$1</span>'
		)
		.replaceAll('¬', ''));
</script>

<Card.Root class=" mb-4 " id={`reply-${index}`}>
	<Card.Header class=" px-6 pb-2 pt-3">
		<Card.Title>
			<div class="flex justify-between gap-2">
				<h2>{comment?.createdBy?.displayName}</h2>
				<small>{timeAgoDate(comment?.createdAt)}</small>
			</div>
		</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col items-start py-3">
		<small contenteditable="false" bind:innerHTML={content}></small>
	</Card.Content>
	{#if !isreply}
		<Separator />
	{/if}

	<Card.Footer class="flex items-end justify-between px-4 py-2">
		<div class="flex items-center gap-2">
			{#if reactions}
				{#each Object.entries(reactions) as [reaction, users]}
					<div>
						<small class="text-[14px]">{reaction}</small>
						<small>{users?.length}</small>
					</div>
				{/each}
			{/if}
			<Button size="xs" variant="ghost" class="flex gap-1 p-1" onclick={handleLikeComment}>
				<ThumbsUp
					class="size-4 {comment?.likes?.includes(firekitUser?.uid as string)
						? 'text-blue-700'
						: ''}"
				></ThumbsUp>
				<small>{comment?.likes?.length || 0}</small>
			</Button>
			<Popover.Root bind:open={showemojis}>
				<Popover.Trigger>
					<Button size="xs" variant="ghost" class="p-1" onclick={openEmojis}>
						<Smile class="size-4"></Smile>
					</Button>
				</Popover.Trigger>
				<Popover.Content class="w-100">
					<!-- <emoji-picker></emoji-picker> -->
				</Popover.Content>
			</Popover.Root>
		</div>
		<div>
			<Button size="xs" variant="ghost" class="p-1" onclick={setDataComment}>
				{#if !isreply}
					<small>{comment?.replies?.length || 0} reply</small>
				{/if}
			</Button>
		</div>
	</Card.Footer>
</Card.Root>
