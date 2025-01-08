<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Ellipsis } from 'lucide-svelte';
	import type { Task } from '$lib/types/task';
	import type { Milestone } from '$lib/types/milestone';
	import { flip } from 'svelte/animate';
	import BoardTasks from './board-tasks.svelte';
	import { updateTasksPositionsByDragDrop } from '$lib/stores/tasks-batch';
	import AddNewTask from './AddNewTask.svelte';

	let { status, statusIndex, milestonec, milestone, sprintIndex } = $props();

	interface DataJson {
		statusIndex: number;
		itemIndex: number;
		task: Task;
		dragsprint: number;
		milestone: Milestone;
		milestoneIndexDrag: number;
	}

	let hoveringOverStatus: string | null = $state(null);
	let container: HTMLDivElement | null = $state(null);
	let dragStartIndex: number | null = $state(null);
	let taskdropdata: Task | null = $state(null);

	async function drop(event: DragEvent, statusIndex: number): Promise<void> {
		event.preventDefault();
		const json = event.dataTransfer?.getData('text/plain');
		if (!json) {
			hoveringOverStatus = null;
			return;
		}
		const data: DataJson = JSON.parse(json);

		let tasksdrag = milestonec[data.dragsprint].statuses[data.statusIndex].tasks;
		let tasksdrop = milestonec[sprintIndex].statuses[statusIndex].tasks;
		const statusdrop = milestonec[sprintIndex].statuses[statusIndex].status;

		let [item] = tasksdrag.splice(data.itemIndex, 1);
		item.milestoneId = milestone.id;
		item.positionsprint = sprintIndex + 1;
		item.status = statusdrop;
		tasksdrop.splice(statusIndex, 0, item);

		updateTasksPositionsByDragDrop(tasksdrag, milestone);
		updateTasksPositionsByDragDrop(tasksdrop, milestone);

		hoveringOverStatus = null;
	}
</script>

<article class="mb-1 flex flex-col">
	<div class="mb-2 flex items-center justify-between">
		<!-- style="background-color: {status?.color}; color: {getContrastingColor(status?.color)}" -->
		<h2 class=" rounded-md px-3 py-1 text-xs text-gray-600">
			<div
				class="inline-flex size-2 rounded-full bg-blue-400"
				style="background-color: {status?.color};"
			></div>
			{status?.name}
			{status?.tasks?.length}
		</h2>
		<div class="flex items-center gap-1">
			<Button variant="ghost" size="xs" class="p-1">
				<Ellipsis class="size-5" />
			</Button>
		</div>
	</div>
	<div
		class="flex h-[58dvh] flex-col gap-2 overflow-y-auto rounded-md px-2 py-2"
		bind:this={container}
		class:hovering={hoveringOverStatus === status?.name}
		ondragenter={() => (hoveringOverStatus = status?.name)}
		ondragleave={() => (hoveringOverStatus = null)}
		ondrop={(event) => drop(event, statusIndex)}
		role="listbox"
		tabindex={0}
		ondragover={(e) => {
			e.preventDefault();
		}}
	>
		<!-- <Button variant="ghost" class="bg-white hover:bg-black/5"> <Plus class="size-3" /> </Button> -->
		<AddNewTask
			status={status.status}
			taskslength={status?.tasks.length}
			milestoneId={milestone.id}
			{sprintIndex}
		/>

		<!-- on:dragover|preventDefault -->
		{#each status?.tasks as task, taskIndex (task.id)}
			<div animate:flip>
				<BoardTasks
					{task}
					{taskIndex}
					{milestonec}
					{milestone}
					{status}
					{statusIndex}
					{sprintIndex}
					bind:dragStartIndex
					bind:taskdropdata
				></BoardTasks>
			</div>
		{/each}
	</div>
</article>
