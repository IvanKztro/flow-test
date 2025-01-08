<script lang="ts">
	import type { Milestone } from '$lib/types/milestone';
	import { firekitCollection } from 'svelte-firekit';
	let { milestone, milestoneId }: { milestone: Milestone; milestoneId: string } = $props();
	import BoardSprints from './board-sprints.svelte';
	import { flip } from 'svelte/animate';
	import AddNewTask from './AddNewTask.svelte';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';

	const tasksCollection = $derived(
		firekitCollection<Milestone>(`projects/${milestone.projectId}/milestones/${milestone.id}/tasks`)
	);
	const tasks = $derived(tasksCollection.data);

	const buildTaskTree = (tasks, parentId = undefined) => {
		return tasks
			.filter((task) => {
				const rawTask = JSON.parse(JSON.stringify(task));
				return rawTask.parentId === parentId;
			})
			.map((task) => {
				const rawTask = JSON.parse(JSON.stringify(task));
				return {
					...rawTask,
					tasks: buildTaskTree(tasks, rawTask.id)
				};
			})
			.sort((a, b) => a.position - b.position);
	};

	const getRelatedTasks = (tasks, taskId) => {
		const result = new Set();

		result.add(taskId);

		const findChildren = (parentId) => {
			tasks.forEach((task) => {
				if (task.parentId === parentId) {
					result.add(task.id);
					findChildren(task.id);
				}
			});
		};

		const findParent = (childId) => {
			const task = tasks.find((t) => t.id === childId);
			if (task?.parentId) {
				result.add(task.parentId);
				findParent(task.parentId);
			}
		};

		findChildren(taskId);
		findParent(taskId);

		return Array.from(result);
	};

	let milestonesstatus = $derived.by(() => {
		if (tasks.length > 0) {
			return milestone?.arraySprints?.map((sprint) => {
				const statusesWithTasks = milestone?.arrayStatus.map((statusItem) => {
					const mainTasks = tasks.filter((task) => {
						const rawTask = JSON.parse(JSON.stringify(task));
						return (
							!rawTask.parentId &&
							rawTask.status === statusItem.status &&
							rawTask.positionsprint === sprint.position
						);
					});

					const relatedTaskIds = new Set();
					mainTasks.forEach((task) => {
						getRelatedTasks(tasks, task.id).forEach((id) => relatedTaskIds.add(id));
					});

					const filteredTasks = tasks.filter(
						(task) =>
							relatedTaskIds.has(task.id) ||
							(task.status === statusItem.status && task.positionsprint === sprint.position)
					);

					return {
						...statusItem,
						tasks: buildTaskTree(filteredTasks)
					};
				});
				return {
					...sprint,
					statuses: statusesWithTasks
				};
			});
		} else return [];
	});
</script>

<!-- <pre>{JSON.stringify(tasks)}</pre> -->

{#if tasks.length > 0 && milestonesstatus}
	{#each milestonesstatus as sprint, sprintIndex (sprint.position)}
		<div class="mb-4 h-auto w-full rounded-md bg-white p-4" animate:flip>
			<BoardSprints {sprint} {sprintIndex} milestonec={milestonesstatus} {milestone}></BoardSprints>
		</div>
	{/each}
{:else}
	<div class="mt-8 flex flex-col items-center justify-center gap-3">
		<h3>No tasks created yet. Start by adding a new one!:</h3>
		<div class="w-[60px]">
			<AddNewTask status="Active" sprintIndex={0} taskslength={0} {milestoneId}></AddNewTask>
		</div>
	</div>
{/if}
