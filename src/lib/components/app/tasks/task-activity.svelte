<script lang="ts">
	//   import {
	//     taskValue,
	//   } from "$lib/stores/subtasks";
	//   import { allUsers } from "$lib/stores/users";
	import type { ActivityTask } from '$lib/types/task';
	import { timeAgoDate } from '$lib/utils';
	import { ArrowLeft, Dot } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import CommentPreview from '../comments/comment-preview.svelte';
	import CommentCard from '../comments/comment-card.svelte';
	//   import RepliesList from "../comments/replies-list.svelte";
	import Button from '$lib/components/ui/button/button.svelte';
	import { currentCommentIndex, istypingComment, showReplies } from '$lib/stores/tasks-actions';
	//   import ModalUserInfo from "../comments/modal-user-info.svelte";
	//     import ModalTaskWatchers from "./modal/modal-task-watchers.svelte";
	import { firekitUser } from 'svelte-firekit';
	import { userManager } from '$lib/components/user-manager.svelte';
	import RepliesList from '../comments/replies-list.svelte';

	let { taskValue, membersByProject, pathids } = $props();

	let activities: ActivityTask[] | [] = $state([]);

	$effect(() => {
		if (taskValue?.activities && userManager.allUsers) {
			const allus: any = userManager.allUsers;
			activities = taskValue?.activities.map((activity) => {
				const user = allus?.find((u: any) => u.uid === activity.createdBy);
				return {
					...activity,
					createdBy: {
						displayName:
							firekitUser.uid === activity.createdBy ? 'You' : user?.displayName || 'None',
						email: user?.email || 'None',
						photoURL: user?.photoURL || 'None'
					}
				};
			});
		} else {
			activities = [];
		}
	});
	// let height = $istypingComment ? 'calc(100% - 215px)' : 'calc(100% -880px)';
	let height = $state('');
	$effect(() => {
		height = $istypingComment ? 'calc(100% - 185px)' : 'calc(100% - 85px)';
	});
</script>

<div class=" h-full bg-transparent">
	<!-- <small>{height}</small>
    <small>{$istypingComment}</small> -->
	<section class=" overflow-y-auto transition-all duration-300" style="height: {height};">
		<div class="flex w-full items-center justify-between border-b-[1px] border-slate-300 px-3">
			<div>
				{#if $showReplies}
					<Button
						size="icon"
						variant="ghost"
						onclick={() => {
							showReplies.set(false);
							currentCommentIndex.set(0);
						}}
					>
						<ArrowLeft class="size-5"></ArrowLeft>
					</Button>
				{/if}
				<h3 class="px-2 py-2 text-lg font-semibold text-black dark:text-white">Activity</h3>
			</div>
			<!-- <ModalTaskWatchers/> -->
		</div>
		{#if !$showReplies}
			<article
				class="  items-between flex flex-col px-5 {$istypingComment ? 'h-[380px]' : 'h-[480px]'} "
			>
				<div class="flex flex-col gap-3 pt-2">
					{#each activities as act, index}
						{#if act?.typeAct !== 'comment'}
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2">
									<Dot class="size-4"></Dot>
									<small>
										<span class="font-semibold">
											{act.createdBy?.displayName}
										</span>
										{act.description}</small
									>
								</div>
								<small>{timeAgoDate(act.createdAt, "MMM d 'at' h:mm a", true)}</small>
							</div>
						{:else}
							<CommentCard comment={act} isreply={false} {index} {taskValue}></CommentCard>
						{/if}
					{/each}
					<div></div>
				</div>
			</article>
		{:else}
			<RepliesList {activities} {taskValue}></RepliesList>
		{/if}
	</section>
	<section class="mb-auto block h-auto">
		<CommentPreview {taskValue} {membersByProject} {pathids}></CommentPreview>
	</section>
</div>
<!-- {#if activities}
<ModalUserInfo activities={activities}/>
  
{/if} -->
