<script lang="ts">
	import TaskTableFormModal from './task-table-form-modal.svelte';
	import { sideleft } from '$lib/stores/tasks-actions';

	let {
		milestone = $bindable(),
		project,
		membersByProject,
		taskValue,
		pathids,
		alltasks
	} = $props();
</script>

<article
	class="flex h-full w-full flex-col overflow-y-auto py-6 {$sideleft === 'chat' ||
	$sideleft === 'relationship'
		? 'hidden w-[0px] md:flex md:w-[90%]'
		: ''}"
>
	<div
		class="mx-auto block {$sideleft === '' || $sideleft === 'threeview' ? 'w-[70%]' : 'w-[90%]'} "
	>
		<div class="">
			{#if taskValue}
				<TaskTableFormModal
					{milestone}
					{project}
					{membersByProject}
					{taskValue}
					{pathids}
					{alltasks}
				/>
			{:else}
				<div class="mx-auto my-auto mt-8 block h-full">loading</div>
			{/if}
		</div>
	</div>
</article>
