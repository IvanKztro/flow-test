<script lang="ts">
	import { TaskStatus, TaskType, type Task } from '$lib/types/task';
	import { Circle, Diamond } from 'lucide-svelte';

	export let task: Task | null;
	export let className: string = '';
</script>

<section class="flex items-center gap-2 {className}">
	{#if task?.taskType === TaskType.Task}
		<div>
			{#if task?.status === TaskStatus.Complete}
				<Circle class="w-4 text-green-400"></Circle>
			{:else if task?.status === TaskStatus.Active}
				<Circle class="w-4 text-slate-400"></Circle>
			{:else}
				<Circle class="w-4 text-blue-400"></Circle>
			{/if}
		</div>
	{:else}
		<div>
			{#if task?.status === TaskStatus.Complete}
				<Diamond class="w-4 text-green-400"></Diamond>
			{:else if task?.status === TaskStatus.Active}
				<Diamond class="w-4 text-slate-400"></Diamond>
			{:else}
				<Diamond class="w-4 text-blue-400"></Diamond>
			{/if}
		</div>
	{/if}
	<small>
		{task?.name}
	</small>
</section>
