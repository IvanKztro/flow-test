<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { ActivityTask, Task } from '$lib/types/task';
	import { get } from 'svelte/store';
	import CommentCard from './comment-card.svelte';
	import { firekitUser } from 'svelte-firekit';
	import { userManager } from '$lib/components/user-manager.svelte';
	import { currentCommentIndex } from '$lib/stores/tasks-actions';

	let { activities, taskValue }: { activities: ActivityTask[]; taskValue: Task } = $props();
	let currentcomment: ActivityTask | any = $state();
	let replies: ActivityTask[] | any[] = $state([]);

	$effect(()=>{
		if ($currentCommentIndex || $currentCommentIndex === 0) {
			currentcomment = activities[$currentCommentIndex];
			if (currentcomment?.replies && currentcomment?.replies?.length > 0) replies = getDataUser();
			else replies = [];
		}
	})

	function getDataUser() {
		const allus: any = userManager.allUsers;
		return currentcomment?.replies
			?.sort((a: any, b: any) => a.createdAt - b.createdAt)
			.map((activity: any) => {
				const user = allus?.find((u: any) => u.uid === activity.createdBy);
				return {
					...activity,
					createdBy: {
						displayName:
							firekitUser?.uid === activity.createdBy ? 'You' : user?.displayName || 'None',
						email: user?.email || 'None',
						photoURL: user?.photoURL || 'None'
					}
				};
			});
	}
</script>

<div class=" mx-4 my-2">
	<!-- {#if currentcomment}
		<CommentCard
			{taskValue}
			comment={currentcomment}
			isreply={true}
			index={get(currentCommentIndex)}
		></CommentCard>
	{/if}
	<Separator></Separator> -->
	<small>Replies: {replies?.length || 0}</small>

	{#if replies?.length > 0}
		{#each replies as reply, index}
			<CommentCard {taskValue} comment={reply} isreply={true} {index}></CommentCard>
		{/each}
	{/if}
</div>
