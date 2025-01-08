<script lang="ts">
	import { istypingComment } from '$lib/stores/tasks-actions';
	import Button from '$lib/components/ui/button/button.svelte';
	import MentionsOptions from './mentions-options.svelte';
	let { taskValue, membersByProject, pathids } = $props();
</script>

<section>
	<div
		class="flex justify-between border-red-200 px-2 {$istypingComment
			? 'border-t-[2px] border-t-slate-300'
			: 'mx-3 rounded-lg shadow-lg'} "
	>
		{#if $istypingComment}
			<div class="mt-2 flex h-auto w-full flex-col justify-between gap-2">
				<MentionsOptions {taskValue} members={membersByProject} {pathids}></MentionsOptions>
			</div>
		{:else}
			<div class="flex w-full justify-between border-red-200 px-2 py-4">
				<Button
					variant="ghost"
					class="w-full"
					onclick={() => {
						istypingComment.set(true);
					}}
				>
					<span class="mr-auto block">Write a comment...</span>
				</Button>
				<Button disabled={!$istypingComment} class="bg-blue-500">
					<span>Send</span>
				</Button>
			</div>
		{/if}
	</div>
</section>
