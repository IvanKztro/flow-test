<script lang="ts">
	import { taskManager } from '$lib/components/task-manager.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Popover from '$lib/components/ui/popover';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { ActivityTask } from '$lib/types/task';
	//   import { authStore } from "$lib/stores/auth-store";
	//   import { projectValues } from "$lib/stores/project";
	//   import { taskValue, updateSubTask } from "$lib/stores/task";
	import { Timestamp } from 'firebase/firestore';
	import { CircleX, Tag } from 'lucide-svelte';
	import { firekitUser } from 'svelte-firekit';

	// export let tags: any[];
	// export let typefield: string;

	let { tags, typefield, milestone, taskValue, pathids } = $props();
	let value: string = $state("");

	async function addNewTag() {
		if (!value || value.trim() === '') return;
		tags = [
			...(tags || []),
			{
				title: value,
				color: 'primary'
			}
		];
		if (typefield === 'input') {
			await updateTags(tags);
			const newactivity: ActivityTask = {
				createdBy: firekitUser?.uid as string,
				createdAt: Timestamp.now(),
				typeAct: 'act',
				description: `Added new Tag: ${value}`
			};
			taskManager.addNewActivity(newactivity, taskValue, pathids);
		}

		value = '';
	}

	async function deleteTag(i: number, array: any[]) {
		const tagdelete = array[i];
		array.splice(i, 1);
		tags = array;
		if (typefield === 'input') {
			await updateTags(tags);
			const newactivity: ActivityTask = {
				createdBy: firekitUser?.uid as string,
				createdAt: Timestamp.now(),
				typeAct: 'act',
				description: `Delete Tag: ${tagdelete.title}`
			};
			taskManager.addNewActivity(newactivity, taskValue, pathids);
		}
	}

	async function updateTags(tags: any[]) {
		taskManager.updateTask({ tags }, milestone.currentTask.id);
	}
</script>

<Popover.Root>
	<Popover.Trigger class="w-full">
		{#if typefield === 'icon'}
			<Button
				variant="outline"
				size="icon"
				class="flex h-6 w-auto gap-2 px-1 {tags && tags.length > 0 ? 'px-2' : ''} "
			>
				<Tag class="h-4 w-3.5"></Tag>
				{#if tags && tags.length > 0}
					<small>{tags?.length} tag{tags.length > 1 ? 's' : ''}</small>
				{/if}
			</Button>
		{:else}
			<Button
				variant="outline"
				size="icon"
				class="flex w-full justify-start gap-2 pl-3 text-start {tags && tags.length > 0
					? 'px-2'
					: ''} "
			>
				<Tag class="h-4 w-3.5"></Tag>
				{#if tags && tags.length > 0}
					<p>{tags?.length} tag{tags.length > 1 ? 's' : ''}</p>
				{/if}
			</Button>
		{/if}
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<section class="flex flex-col">
			{#if tags?.length > 0}
				<article class="wrap flex gap-1">
					{#each tags as tag, i}
						<Badge variant="outline" class="{tag.color} flex gap-1">
							<small>{tag.title}</small>
							<button
								type="button"
								onclick={() => {
									deleteTag(i, tags);
								}}
							>
								<CircleX class="size-3"></CircleX>
							</button>
						</Badge>
					{/each}
				</article>
				<Separator class="my-3"></Separator>
			{/if}
			<Input
				bind:value
				placeholder="Search or Create tag"
				onchange={addNewTag}
				onblur={addNewTag}
			/>
		</section>
	</Popover.Content>
</Popover.Root>
