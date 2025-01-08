<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Plus, Search } from 'lucide-svelte';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import TasksType from './task-type.svelte';
	import {
		opendependencies,
		typerelation,
		taskcurrentrelationships
	} from '$lib/stores/tasks-actions';
	import IconFlag from '../icon-flag.svelte';

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});

	function showTaskToRelationships() {
		typerelation.set($taskcurrentrelationships?.type);
		opendependencies.set(true);
	}
</script>

<section>
	<article class="flex justify-between border-b-[2px] border-slate-200 px-4 py-3">
		<h1 class="text-xl capitalize text-black">{$taskcurrentrelationships?.type}</h1>
		<div class="flex">
			<Button variant="ghost">
				<Search class="w-4"></Search>
			</Button>
		</div>
	</article>

	<article class="container mx-auto px-5">
		<h4 class="mb-3 mt-5 text-lg">
			{$taskcurrentrelationships?.type}
			<span class="text-sm">
				{$taskcurrentrelationships?.items?.length}
			</span>
		</h4>

		<table class="flex flex-col">
			<thead class="">
				<tr class="grid grid-cols-12 bg-slate-100 px-2 py-1">
					<th class="col-span-4 text-start"><small>Name</small></th>
					<th class="col-span-3 text-start"><small>Status</small></th>
					<th class="col-span-3 text-start"><small>Due Date</small></th>
					<th class="col-span-2 text-start"><small>Priority</small></th>
				</tr>
			</thead>
			<tbody class=" ">
				{#each $taskcurrentrelationships?.items as task}
					<tr class="grid grid-cols-12 px-2 py-1 hover:bg-slate-100">
						<td class="col-span-4">
							<div class="flex items-center gap-2">
								<TasksType task={task?.taskDetails}></TasksType>
							</div>
						</td>
						<td class="col-span-3">
							<div class="flex items-center gap-2">
								<small>{task?.taskDetails.status}</small>
							</div>
						</td>
						<td class="col-span-3 text-start">
							<small>
								{task?.taskDetails?.dueDate && task?.taskDetails?.dueDate?.seconds
									? df.format(new Date(task?.taskDetails?.dueDate?.seconds * 1000))
									: 'None'}
							</small>
						</td>
						<td class="col-span-2 text-start">
							<IconFlag flagtype={task?.taskDetails?.priority}></IconFlag>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<div class="mt-3 flex">
			<Button
				variant="ghost"
				size="icon"
				class="flex w-auto gap-2 text-slate-400 hover:text-blue-400"
				onclick={showTaskToRelationships}
			>
				<Plus class="h-4 w-4"></Plus>
				<span class="">Add dependency</span>
			</Button>
		</div>
	</article>
</section>
