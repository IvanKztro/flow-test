<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { currentTaskID, openmodaltask } from '$lib/stores/tasks-batch';
	import { X } from 'lucide-svelte';
	import ModalCenter from './modal-center.svelte';
	import { firekitCollection, firekitDoc } from 'svelte-firekit';
	import type { Milestone } from '$lib/types/milestone';
	import { get } from 'svelte/store';
	import type { Task } from '$lib/types/task';
	import ModalSidebarRight from './modal-sidebar-right.svelte';
	import ModalHeaderTask from './modal-header-task.svelte';
	import RelationshipsPopover from '../../popover/relationships-popover.svelte';

	let { milestone, project, membersByProject, pathids } = $props();

	const tasksCollection = $derived(
		firekitCollection<Milestone>(
			`projects/${milestone?.projectId}/milestones/${milestone?.id}/tasks`
		)
	);
	const tasks = $derived(tasksCollection.data);

	const taskDoc = $derived(
		firekitDoc<Task>(
			`projects/${milestone?.projectId}/milestones/${milestone?.id}/tasks/${$currentTaskID}`
		)
	);
	const currentTask:Task|null = $derived(taskDoc.data);

	let milestoneData = $derived.by(() => {
		if (!tasks.length && !currentTask) return milestone;

		return {
			...milestone,
			currentTask: {
				assignees: [],
				...currentTask
			},
			tasks: buildTaskTree(currentTask?.id)
		};
	});

	function buildTaskTree(parentId = ''): any {
		return tasks
			.filter((task: any) => task.parentId === parentId)
			.map((task: any) => ({
				...JSON.parse(JSON.stringify(task)),
				tasks: buildTaskTree(task.id)
			}))
			.sort((a, b) => a.position - b.position);
	}

</script>

<Dialog.Root open={$openmodaltask}>
	<Dialog.Trigger class="hidden">Open Dialog</Dialog.Trigger>
	<Dialog.Content class="z-50 h-[660px] w-[95%] lg:w-[70%] max-w-[95%]  p-0 ">
		<Dialog.Header class="">
			<Dialog.Title class="h-[45px] w-full border-b-[1px] border-b-slate-200 ">

				<ModalHeaderTask taskValue={milestoneData.currentTask} {project} {milestone} portfolioId={project?.portfolioId}/>
			</Dialog.Title>
		</Dialog.Header>
		<Dialog.Description class="h-[595px]  w-full -mt-5">
			<section class="flex h-full w-full">
				{#if currentTask}
					<ModalCenter taskValue={milestoneData.currentTask} milestone={milestoneData} {project} {membersByProject} {pathids} alltasks={tasks}></ModalCenter>
				{/if}
				<!-- {#if $sideleft == 'threeview'}
					<ModalSidebar />
				{/if}
				<ModalCentral bind:milestone bind:arrayFiles bind:ref bind:ref2></ModalCentral>
				-->
				<ModalSidebarRight taskValue={milestoneData.currentTask} {membersByProject} {pathids}></ModalSidebarRight>
			</section>
		</Dialog.Description>
		<Dialog.Close
			onclick={() => openmodaltask.set(false)}
			class=" active:scale-98  absolute right-3  top-3 z-10 bg-background/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		>
			<div>
				<X class="size-5"></X>
			</div>
		</Dialog.Close>
		<!-- <Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer> -->
	</Dialog.Content>
</Dialog.Root>

<RelationshipsPopover taskValue={milestoneData.currentTask} {project} {pathids} alltasks={tasks} ></RelationshipsPopover>
