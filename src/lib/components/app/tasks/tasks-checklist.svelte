<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	import { Plus, Circle, CircleCheckBig } from 'lucide-svelte';
	import type { ActivityTask, TaskChecklist } from '$lib/types/task';
	import { Timestamp } from 'firebase/firestore';
	import { get } from 'svelte/store';
	//   import ChecklistDropdownOptions from "./checklist-dropdown-options.svelte";
	//   import ChecklistRename from "./checklist-rename.svelte";
	import { checklistindexselected } from '$lib/stores/tasks-actions';
	import { taskManager } from '$lib/components/task-manager.svelte';
	import { firekitUser } from 'svelte-firekit';
	import ChecklistRename from './checklist-rename.svelte';

	let { taskValue, pathids } = $props();

	let itemsdone = $derived(taskValue?.checklist?.filter((item: any) => item.done === true) || []);

	let haserror: boolean = $state(false);

	let checkname: string = $state('');

	async function createChecklist() {
		haserror = false;
		if (checkname.trim() === '') {
			haserror = true;
			return;
		}
		const checklist: TaskChecklist = {
			createdAt: Timestamp.now(),
			createdBy: firekitUser?.uid as string,
			done: false,
			name: checkname
		};
		let arraychecklist = [];
		if (taskValue?.checklist) arraychecklist = [...taskValue.checklist, checklist];
		else arraychecklist.push(checklist);

		taskManager.updateTask({ checklist: arraychecklist }, taskValue.id);
		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Added new checklist: ${checkname}`
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids);
		checkname = '';
	}

	function handleKeydown(event: any) {
		if (event.key === 'Enter') {
			createChecklist();
		}
	}

	async function handleItemStatus(item: TaskChecklist, index: number) {
		const checklisttemp: TaskChecklist[] | [] = get(taskValue)?.checklist;

		checklisttemp[index].done = !item.done;

		taskManager.updateTask({ checklist: checklisttemp }, taskValue.id);

		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Updated checklist status: ${checklisttemp[index].name} `
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids);
	}
</script>

<div class="mt-2 rounded-lg border-[1px] border-slate-100">
	<section class="flex gap-1 bg-slate-100 px-4 py-2">
		<p class="font-semibold">CheckList</p>
		<small>({itemsdone.length}/{taskValue?.checklist?.length || 0})</small>
	</section>

	<section class="flex flex-col">
		{#if taskValue?.checklist && taskValue?.checklist.length > 0}
			{#each taskValue?.checklist as item, itemindex}
				<div class=" flex items-center justify-between gap-1 border-[1px] border-b-slate-100 py-1">
					{#if $checklistindexselected === itemindex}
						<ChecklistRename indexitem={itemindex} name={item.name} {taskValue}></ChecklistRename>
					{:else}
						<div class="flex items-center gap-2">
							<Button
								variant="ghost"
								size="xs"
								class="p-1"
								onclick={() => handleItemStatus(item, itemindex)}
							>
								{#if item.done}
									<CircleCheckBig class="size-4 text-green-600" />
								{:else}
									<Circle class="size-4" />
								{/if}
							</Button>
							<small class={item?.done ? 'line-through' : ''}>{item.name}</small>
						</div>
					{/if}
					<div>
						<!-- <ChecklistDropdownOptions checklistitem={item} {itemindex}></ChecklistDropdownOptions> -->
					</div>
				</div>
			{/each}
		{/if}
	</section>

	<section class="flex gap-2 border border-slate-100 py-1">
		<Button variant="ghost" size="xs" class="p-[2px]" onclick={createChecklist}>
			<Plus class="size-5"></Plus>
		</Button>
		<input
			bind:value={checkname}
			onkeydown={handleKeydown}
			class="w-full rounded-sm focus:outline-none {haserror ? 'border border-red-700 ' : ''}"
			placeholder="New checklist item"
		/>
	</section>
</div>

<style>
	/* .input-checklist :focus {
    outline: none!important;
    border: 0;
    background-color: transparent;
  } */
</style>
