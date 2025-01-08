<script lang="ts">
	import { taskManager } from '$lib/components/task-manager.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	//   import { authStore } from "$lib/stores/auth-store";
	//   import { milestoneValues } from "$lib/stores/milestone";
	//   import { projectValues } from "$lib/stores/project";
	//   import { openhasrelationship } from "$lib/stores/subtask-actions";
	//   import { taskValue, updateSubTask } from "$lib/stores/subtasks";
	import { TaskStatus, type ActivityTask, type Task } from '$lib/types/task';
	import { Timestamp } from 'firebase/firestore';
	import { firekitUser } from 'svelte-firekit';

	let { typestatus, milestone, taskValue, pathids } = $props();

	function handleSelect(status: string) {
		const dependecies = milestone.currentTask?.relationships?.find((rs) => rs.type !== 'link');
		if (dependecies && status === TaskStatus.Complete) {
			//   openhasrelationship.set(true);
		} else {
			setStatusType(status);
		}
	}

	async function setStatusType(status: string) {
		const newactivity: ActivityTask = {
			createdBy: firekitUser?.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Changed status from ${typestatus} to  ${status}`
		};
		const task: Partial<Task> = {
			status: status,
			position: status === milestone.currentTask?.position ? milestone.currentTask?.position : 1
		};
		if (status === TaskStatus.Complete) {
			task.endDate = Timestamp.now();
		}

		taskManager.updateTask(task, milestone.currentTask.id);
		taskManager.addNewActivity(newactivity, taskValue, pathids);

		typestatus = status;
	}

	const isSelected = (state: string) => typestatus == state;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="flex items-center gap-2 ">
		<Button variant="ghost" size="icon" class="flex w-full justify-start pl-3 text-start">
			{#if milestone != null && milestone.arrayStatus}
				{#each milestone.arrayStatus as state}
					{#if isSelected(state.status)}
						<div
							style="background-color: {state.color};"
							class="flex items-center justify-start gap-2 rounded-md px-3 py-1 text-white"
						>
							<h1 class="text-xs font-semibold">{state.name}</h1>
						</div>
					{/if}
				{/each}
			{/if}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="z-[70] w-56">
		{#if milestone != null && milestone.arrayStatus}
			{#each milestone.arrayStatus as state}
				<DropdownMenu.Item
					onclick={() => handleSelect(state.status)}
					class={`${isSelected(state.status) && 'bg-blue-200'}`}
				>
					<span style="background-color: {state.color};" class="mr-2 h-4 w-4 rounded-full"
					></span>{state.name}
				</DropdownMenu.Item>
			{/each}
		{/if}
	</DropdownMenu.Content>
</DropdownMenu.Root>
