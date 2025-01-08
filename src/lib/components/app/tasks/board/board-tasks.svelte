<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { EllipsisVertical, GitMerge, MessageCircle, Paperclip, Plus } from 'lucide-svelte';
	import type { Milestone } from '$lib/types/milestone';
	import type { Task } from '$lib/types/task';
	import Button from '$lib/components/ui/button/button.svelte';
	import { currentTaskID, openmodaltask } from '$lib/stores/tasks-batch';
	import { taskManager } from '$lib/components/task-manager.svelte';
	import { firekitCollection } from 'svelte-firekit';
	import { where } from 'firebase/firestore';
	import { getInitials, getLengthComments } from '$lib/utils';
	import BoardTasks from './board-tasks.svelte';
	import AddNewTask from './AddNewTask.svelte';

	let {
		task,
		taskIndex,
		milestonec,
		milestone,
		statusIndex,
		status,
		sprintIndex,
		dragStartIndex = $bindable(),
		taskdropdata = $bindable()
	} = $props();

	let dragStartPositionSprint: number | null = null;

	let showcardtocreatesubtask: boolean = $state(false);
	let subtasksshow: string | null = $state(null);
	let showcardsubtaskform: boolean = $state(false);

	function dragStart(
		event: DragEvent,
		statusIndex: number,
		itemIndex: number,
		task: Task,
		milestone: Milestone
		// milestoneIndexDrag: number
	): void {
		const data = {
			statusIndex,
			itemIndex,
			task,
			dragsprint: task?.positionsprint - 1 || 0,
			milestone
			// milestoneIndexDrag
		};
		event.dataTransfer?.setData('text/plain', JSON.stringify(data));
		dragStartIndex = itemIndex;
		dragStartPositionSprint = task?.positionsprint || 1;
	}

	let allusers = $derived.by(() => {
		if (task?.assignees && task?.assignees.length > 0)
			return firekitCollection(
				'users',
				where(
					'uid',
					'in',
					task?.assignees?.map((aa: any) => aa.uid)
				)
			);
		else {
			return { data: [] };
		}
	});

	function showSubtasks(e: any, task: Task) {
		e.stopPropagation();
		if (task?.id === subtasksshow) subtasksshow = null;
		else subtasksshow = task?.id;
	}

	function scrollToCardForm() {
		showcardsubtaskform = true;
		setTimeout(() => {
			if (cardsubtaskform && container) {
				cardsubtaskform.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest'
				});
			}
		}, 100);
	}
</script>

<div
	role="listitem"
	draggable={true}
	ondragstart={(event) => dragStart(event, statusIndex, taskIndex, task, milestonec)}
	ondragover={(e) => {
		e.preventDefault();
		dragStartIndex = taskIndex;
		taskdropdata = task;
	}}
>
	<Card.Root
		class="cursor-pointer border  shadow-sm transition-shadow duration-200 hover:bg-muted hover:shadow-md"
		onclick={() => {
			openmodaltask.set(false);
			openmodaltask.set(true);
			currentTaskID.set(task.id);
			taskManager.setIds(milestone.projectId, milestone.id);
		}}
	>
		<Card.Header>
			<section
				class="-my-2 flex items-center {task.tags.length > 0 ? 'justify-between' : 'justify-end'}"
			>
				<div class="flex gap-1">
					{#each task.tags as tag}
						<div>
							<Badge class="rounded-full text-xs">{tag.title}</Badge>
						</div>
					{/each}
				</div>

				<Button variant="ghost" size="xs" class="p-1">
					<EllipsisVertical class="size-5" />
				</Button>
			</section>
		</Card.Header>
		<Card.Content class="border-b pt-4">
			<p>{task.name}</p>

			<div class="mt-2 flex items-center gap-1">
				<!-- <GitMerge class="size-[12px]"></GitMerge> -->
				<!-- <small class="text-[10px]">{task?.tasks.length} subtasks</small> -->
				<!-- {#if task?.tasks && task?.tasks?.length > 0} -->
				<Button
					variant="ghost"
					size="icon"
					class="mt-2 flex h-auto w-auto gap-2 px-1"
					onclick={(e) => {
						showcardtocreatesubtask = false;
						showSubtasks(e, task);
					}}
				>
					<div class="flex items-center gap-1">
						<GitMerge class="size-[12px]"></GitMerge>
						<small class="text-[10px]">{task?.tasks.length}</small>
					</div>
					<small>subtasks</small>
				</Button>
				<!-- {:else if !task.parentId}
					<Button
						variant="default"
						size="icon"
						class="mt-2 flex h-auto w-auto gap-2 px-1 "
						onclick={(e) => {
							showcardtocreatesubtask = !showcardtocreatesubtask;
							showSubtasks(e, task);
						}}
					>
						<small>Create subtask</small>
					</Button> -->
				<!-- {/if} -->
			</div>
		</Card.Content>
		<Card.Footer
			class="flex items-center {allusers.data.length > 0
				? 'justify-between'
				: 'justify-end'} p-4 py-2 "
		>
			<div class="flex -space-x-2">
				{#each allusers.data as member}
					<Avatar.Root class="relative size-7 ring-1 ring-primary">
						<Avatar.Image src={member.photoURL} alt="" />
						<Avatar.Fallback>{getInitials(member?.displayName)}</Avatar.Fallback>
					</Avatar.Root>
				{/each}
			</div>
			<div class="flex items-center gap-2 text-sm text-muted-foreground">
				<div class="flex items-center gap-1">
					<MessageCircle class="size-4" />
					<p class="text-xs">{getLengthComments(task)}</p>
				</div>
				<div class="flex items-center gap-1">
					<Paperclip class="size-4" />
					<p class="text-xs">{task?.files?.length || 0}</p>
				</div>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
{#if subtasksshow === task.id || showcardtocreatesubtask}
	<div class="ml-6 flex flex-col gap-2 py-4">
		{#if !showcardsubtaskform && !showcardtocreatesubtask && !task.parentId}
			<!-- <Button
				variant="outline"
				onclick={() => scrollToCardForm()}
				class="flex w-full items-center gap-1"
			>
				<Plus class="size-4"></Plus>
				<span>Add Subtask</span>
			</Button> -->
			<AddNewTask
				status={status?.status}
				milestoneId={milestone.id}
				taskslength={status?.tasks?.length}
				{sprintIndex}
				parentId={task.id}
			/>
			<!-- {:else} -->

			<!-- <BoardForm
				typeform="last"
				bind:showcardform={showcardsubtaskform}
				{milestonec}
				{bucket}
				{sprintIndex}
				{task}
				typetask="subtask"
			></BoardForm> -->
		{/if}
		{#each task.tasks as tk}
			<BoardTasks
				task={tk}
				{taskIndex}
				{milestonec}
				{milestone}
				{statusIndex}
				{status}
				{sprintIndex}
				bind:dragStartIndex
				bind:taskdropdata
			></BoardTasks>
		{/each}
	</div>
{/if}
