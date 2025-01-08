<script lang="ts">
	import { taskManager } from '$lib/components/task-manager.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	//   import { projectValues } from "$lib/stores/project";
	//   import { taskValue, updateSubTask } from "$lib/stores/subtasks";
	import type { Task, urlDependencies } from '$lib/types/task';
	import { timeAgoDate } from '$lib/utils';
	import { Copy, ExternalLink, Ellipsis, Trash2, Check } from 'lucide-svelte';

	//   export let urldata: urlDependencies;
	//   export let islist: boolean;

	let {
		urldata,
		islist,
		taskValue
	}: { urldata: urlDependencies; islist: boolean; taskValue: Task } = $props();
	let wascopyURL: boolean = $state(false);

	function truncateText(text: string, maxLength: number) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(urldata?.url);
			wascopyURL = true;
			setTimeout(() => {
				wascopyURL = false;
			}, 3000);
		} catch (err) {
			console.error('Error al copiar al portapapeles:', err);
		}
	}

	async function deleteUrlDependency() {
		let urlstemp = taskValue?.urldependencies || [];
		const filterurls = urlstemp.filter((ur) => ur.url !== urldata.url);

		const updated: Partial<Task> = {
			urldependencies: filterurls
		};

		taskManager.updateTask(updated, taskValue.id);

		// await updateSubTask(
		//   $taskValue?.id as string,
		//   $projectValues.id as string,
		//   $taskValue?.milestoneId as string,
		//   updated
		// );
	}
</script>

{#if islist}
	<section class="flex flex-col justify-center border-b-[1px] border-b-slate-300 p-2">
		<div class="flex items-center justify-between">
			<h3 class="text-md font-semibold">{urldata.title}</h3>
			<div class="flex">
				<Button variant="ghost" size="icon" onclick={copyToClipboard}>
					{#if wascopyURL}
						<Check class="size-4"></Check>
					{:else}
						<Copy class="size-4"></Copy>
					{/if}
				</Button>
				<Button variant="ghost" size="icon" href={urldata.url} target="_blank">
					<ExternalLink class="size-4"></ExternalLink>
				</Button>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="">
						<Button variant="ghost" size="icon" onclick={(e) => e.stopPropagation()}>
							<Ellipsis class="h-4 w-4" />
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="z-[70] w-[200px] px-2 py-3 ">
						<DropdownMenu.Group>
							<DropdownMenu.Item onclick={() => deleteUrlDependency()} class="cursor-pointer">
								<Trash2 class="mr-2 h-4 w-4 text-red-500" />
								<span class=" text-red-500">Delete</span>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
		<div class="flex items-center justify-between">
			<small class="text-md font-semibold">{timeAgoDate(urldata.createdAt)}</small>
			<div class="flex"></div>
		</div>
	</section>
{:else}
	<section
		class=" my-2 flex cursor-pointer flex-col justify-center rounded-md border-[1px] border-slate-300"
	>
		<div class="ml-auto block">
			<Button variant="ghost" size="icon">
				<Ellipsis class="size-4"></Ellipsis>
			</Button>
		</div>
		<div class="grid grid-cols-12 items-center justify-between gap-1 px-4 py-2">
			<div class="col-span-7 flex flex-col gap-1">
				<h3 class="text-md font-semibold">{urldata.title}</h3>
				<small class="leading-4">{truncateText(urldata.description, 75)}</small>
			</div>
			<div class="col-span-5 flex">
				<img
					src={urldata.imageUrl}
					alt={urldata.title}
					srcset=""
					class="h-[80px] w-full object-contain"
				/>
			</div>
		</div>
		<div class="mt-2 flex items-center justify-between px-4 pb-2">
			<small class="text-md font-semibold">{timeAgoDate(urldata.createdAt)}</small>
			<div class="flex"></div>
		</div>
	</section>
{/if}
