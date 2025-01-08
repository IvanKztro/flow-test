<script lang="ts">
	import { taskManager } from '$lib/components/task-manager.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	//   import { authStore } from "$lib/stores/auth-store";
	//   import { projectValues } from "$lib/stores/project";
	//   import { taskValue, updateSubTask } from "$lib/stores/subtasks";
	import { TaskPriority, type ActivityTask } from '$lib/types/task';
	import { Timestamp } from 'firebase/firestore';
	import { firekitUser } from 'svelte-firekit';
	import IconFlag from '../../icon-flag.svelte';
	//   import IconFlag from "../../icon-flag.svelte";
	//   export let priority: string = "";
	//   export let typefield: string = "";
	let { milestone, priority, typefield, taskValue, pathids } = $props();

	const arraypriorities = [
		TaskPriority.Urgent,
		TaskPriority.High,
		TaskPriority.Normal,
		TaskPriority.Low
	];

	async function setStatusType(prior: TaskPriority) {
		if (typefield === 'field') {
			const newactivity: ActivityTask = {
				createdBy: firekitUser.uid as string,
				createdAt: Timestamp.now(),
				typeAct: 'act',
				description: `Changed Priority Task from ${priority} to  ${prior}`
			};
			taskManager.updateTask({ priority: prior }, milestone.currentTask.id);
			taskManager.addNewActivity(newactivity, taskValue, pathids)
		}
		priority = prior;
	}
</script>

{#if typefield === 'icon'}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class="flex items-center gap-2  rounded-md px-1 text-xs font-medium">
			<Button
				variant="outline"
				size="xs"
				class="h-6 w-auto px-1 {priority ? 'flex gap-1 px-2' : ''}"
			>
				<IconFlag className="w-3.5 h-4" flagtype={priority}></IconFlag>
				<small>{priority}</small>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="z-[70] w-56">
			{#each arraypriorities as priori}
				<DropdownMenu.Item
					onclick={() => setStatusType(priori)}
					class={priori === priority ? 'bg-blue-200' : ''}
				>
					<div class="flex items-center justify-start gap-2 rounded-md px-3 py-1">
						<IconFlag flagtype={priori}></IconFlag>
						<h1 class="text-xs font-medium text-slate-500">{priori}</h1>
					</div>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{:else if typefield === 'field'}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class="flex  w-full  gap-2 rounded-md text-xs font-medium ">
			<Button variant="outline" size="icon" class=" -px-8 flex w-full justify-start pl-2">
				<IconFlag className="w-3.5 h-4" flagtype={priority}></IconFlag>
				<p class="pl-2">{priority}</p>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="z-[70] w-56">
			{#each arraypriorities as priori}
				<DropdownMenu.Item
					onclick={() => setStatusType(priori)}
					class={priori === priority ? 'bg-blue-200' : ''}
				>
					<div class="flex items-center justify-start gap-2 rounded-md px-3 py-1">
						<IconFlag flagtype={priori}></IconFlag>
						<h1 class="text-xs font-medium text-slate-500">{priori}</h1>
					</div>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{:else}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class="flex  w-full  gap-2 rounded-md text-xs font-medium">
			<Button variant="ghost" size="icon" class=" -px-8 flex w-full justify-start pl-2">
				<p class="pl-2 text-[14px] text-slate-500">{priority === '' ? 'Add priority' : priority}</p>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="z-[70] w-56">
			{#each arraypriorities as priori}
				<DropdownMenu.Item
					onclick={() => setStatusType(priori)}
					class={priori === priority ? 'bg-blue-200' : ''}
				>
					<div class="flex items-center justify-start gap-2 rounded-md px-3 py-1">
						<IconFlag flagtype={priori}></IconFlag>
						<h1 class="text-xs font-medium text-slate-500">{priori}</h1>
					</div>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/if}
