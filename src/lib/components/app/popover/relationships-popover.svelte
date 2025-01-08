<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { type ActivityTask, type Task } from '$lib/types/task';
	import { Plus, Search } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	import { Timestamp } from 'firebase/firestore';
	import {
		opendependencies,
		taskcurrentrelationships,
		typerelation
	} from '$lib/stores/tasks-actions';
	import { firekitUser } from 'svelte-firekit';
	import { taskManager } from '$lib/components/task-manager.svelte';
	import TaskType from '../tasks/task-type.svelte';

	let { taskValue, pathids, alltasks } = $props();

	let loading: boolean = $state(false);

	let taskfilter: Task[] | [] = $state([]);
	let isfilter: boolean = $state(false);
	let taskID: string = $state('');
	let erroraddbytaskid: string = $state('');

	$effect(() => {
		taskfilter = alltasks;
	});

	function searchTask(e: any) {
		const value = e.target.value;
		const temptasks = alltasks;
		if (value.trim() === '' || !value) {
			isfilter = false;
			taskfilter = temptasks;
		} else {
			taskfilter = temptasks?.filter(
				(task: Task) =>
					task?.name?.toLowerCase().includes(value.toLowerCase()) ||
					task?.id?.toLowerCase().includes(value.toLowerCase())
			);
			isfilter = true;
		}
	}

	async function addRelationship(task: Task) {
		loading = true;

		let newrelationship = [];

		if (!taskValue?.relationships || taskValue?.relationships?.length === 0) {
			newrelationship = [{ taskuid: task?.id, type: get(typerelation) }];
		} else {
			const relationshipIndex = taskValue?.relationships.findIndex(
				(t: any) => t.taskuid === task?.id
			);

			if (relationshipIndex !== -1) {
				newrelationship = taskValue?.relationships.filter((t: any) => t.taskuid !== task?.id);
			} else {
				newrelationship = [
					...taskValue?.relationships,
					{ taskuid: task?.id, type: get(typerelation) }
				];
			}
		}

		taskManager.updateTask({ relationships: newrelationship }, taskValue.id);

		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Added new Task dependency: ${task.name}`
		};

		taskManager.addNewActivity(newactivity, taskValue, pathids);

		loading = false;
		const tc = get(taskcurrentrelationships);
		const newitem = {
			taskuid: task?.id,
			type: get(typerelation),
			taskDetails: task
		};
		tc.items.push(newitem);
		taskcurrentrelationships.set(tc);
		toast.success('Dependency added successfully');
	}

	function hasTaskRelationship(tt: Task) {
		const res = taskValue?.relationships?.find((tr: any) => tr.taskuid === tt.id);
		return res ? true : false;
	}

	async function addByTaskID() {
		let newrelationship = [];

		erroraddbytaskid = '';
		const tldtemp = alltasks;

		if (taskValue?.relationships?.some((rr: any) => rr.taskuid === taskID)) {
			erroraddbytaskid = 'This task has already been added as a dependency';
			return;
		}

		if (tldtemp.some((td: any) => td.id === taskID) === false) {
			erroraddbytaskid = 'this taskid does not exist';
			return;
		}

		const taskcurrent = taskfilter.find((td) => td.id === taskID);

		if (!taskValue?.relationships || taskValue?.relationships?.length === 0)
			newrelationship = [{ taskuid: taskcurrent?.id, type: get(typerelation) }];
		else
			newrelationship = [
				...taskValue?.relationships,
				{ taskuid: taskcurrent?.id, type: get(typerelation) }
			];

		loading = true;
		taskManager.updateTask({ relationships: newrelationship }, taskValue.id);

		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Added new Task dependency ${taskcurrent?.name}`
		};

		taskManager.addNewActivity(newactivity, taskValue, pathids);

		toast.success('Dependency added successfully');
		loading = false;
		const tc = get(taskcurrentrelationships);
		const newitem = {
			taskuid: taskcurrent?.id,
			type: get(typerelation),
			taskDetails: taskcurrent
		};
		tc.items.push(newitem);
		taskcurrentrelationships.set(tc);
	}
</script>

<Popover.Root bind:open={$opendependencies}>
	<Popover.Trigger>
		<Button class=" hidden "></Button>
	</Popover.Trigger>
	<Popover.Content
		class="popover_relationships relative  max-h-[500px] w-[650px] overflow-y-auto bg-slate-100 dark:bg-slate-700"
	>
		<section class="flex flex-col">
			<h1 class="mb-2">{$typerelation}</h1>
			<div class="flex flex-col gap-1">
				<small>Do you have the taskID? You can add it here:</small>
				<div class="my-1 flex gap-1">
					<Input
						class=" w-11/12 {erroraddbytaskid ? 'border-red-600' : ''}"
						placeholder="Introduce TaskID"
						bind:value={taskID}
					/>
					<Button
						variant="outline"
						class="w-auto bg-blue-500 text-white hover:bg-blue-800 hover:text-white"
						onclick={() => addByTaskID()}
					>
						<Plus class="size-4" />
					</Button>
				</div>
				<small class="-mt-2 text-red-600">{erroraddbytaskid}</small>
			</div>
			<div class="relative mt-3">
				<Input class="w-full ps-11 " placeholder="Search task" oninput={() => searchTask(event)} />
				<div
					class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50"
				>
					<Search class="size-5" strokeWidth={1.5} />
				</div>
			</div>
			<Separator class="mt-2"></Separator>
			<small class="my-2"
				>tasks
				{#if isfilter}
					<span>: {taskfilter?.length}</span>
				{/if}
			</small>
			<section class="items-between flex flex-col justify-between h-[120px] overflow-y-auto border-[1px] border-slate-200 rounded-md py-1">
				{#if !loading}
					{#each taskfilter as tt}
						{#if tt?.id !== taskValue?.id && !hasTaskRelationship(tt)}
							<button onclick={() => addRelationship(tt)} class="hover:bg-slate-200">
								<article
									class="flex cursor-pointer justify-between rounded-md px-2 py-[2px] hover:bg-slate-200 dark:hover:text-black {hasTaskRelationship(
										tt
									)
										? 'bg-blue-00'
										: ''} "
								>
									<TaskType task={tt}></TaskType>
									<div></div>
								</article>
							</button>
						{/if}
					{/each}
				{:else}
					<h2>Loading data</h2>
				{/if}
			</section>
		</section>
	</Popover.Content>
</Popover.Root>
