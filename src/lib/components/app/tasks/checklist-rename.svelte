<script lang="ts">
	import { taskManager } from '$lib/components/task-manager.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { checklistindexselected } from '$lib/stores/tasks-actions';
	import type { Task, TaskChecklist } from '$lib/types/task';
	import { CircleX } from 'lucide-svelte';

	let { indexitem, name, taskValue }: { indexitem: number; name: string; taskValue: Task } =
		$props();
	let checkname: string = $state(name);
	let haserror: boolean = $state(false);
	function handleKeydown(event: any) {
		if (event.key === 'Enter') {
			renameChecklist();
		}
	}

	async function renameChecklist() {
		haserror = false;

		if (checkname.trim() === '') {
			haserror = true;
			return;
		}
		const checklisttemp: TaskChecklist[] | [] = taskValue?.checklist as TaskChecklist[];

		checklisttemp[indexitem].name = checkname;
		taskManager.updateTask({ checklist: checklisttemp }, taskValue.id);

		checklistindexselected.set(null);
	}
</script>

<div class="item-center mx-1 flex gap-2">
	<Button variant="ghost" size="xs" class="p-1" onclick={() => checklistindexselected.set(null)}>
		<CircleX class="size-4 text-red-600" />
	</Button>
</div>
<input
	bind:value={checkname}
	onkeydown={handleKeydown}
	class="w-full rounded-sm focus:outline-none {haserror ? 'border border-red-700 ' : ''}"
	placeholder="New checklist item"
/>
