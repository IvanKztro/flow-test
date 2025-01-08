<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	//   import  firekitUserm "$lib/stores/auth-store";
	//   import { projectValues } from "$lib/stores/project";
	import { sideleft } from '$lib/stores/tasks-actions';
	//   import { taskValue, updateSubTask } from "$lib/stores/subtasks";
	import type { ActivityTask, Task, urlDependencies } from '$lib/types/task';
	//   import { addNewActivity } from "$lib/utils";
	import { Timestamp } from 'firebase/firestore';
	import { toast } from 'svelte-sonner';
	import { firekitUser } from 'svelte-firekit';
	import { taskManager } from '$lib/components/task-manager.svelte';

	let { taskValue, pathids } = $props();

	let url = $state('');
	let title: string = $state('');
	let description: string = $state('');
	let imageUrl: string = $state('');

	async function fetchLinkPreview() {
		try {
			const response = await fetch(
				`https://api.linkpreview.net/?key=784ae02bc19efa1abc33ab4f0570b010&q=${url}`
			);
			const data: any = await response.json();
			title = data.title;
			description = data.description;
			imageUrl = data.image;
		} catch (error) {
			console.error('Error fetching link preview:', error);
		}
	}

	function handleKeydown(event: any) {
		if (event.key === 'Enter') {
			fetchLinkPreview();
		}
	}

	async function addURLDependencie() {
		let urlstemp = taskValue?.urldependencies || [];
		const hasurl = urlstemp.find((ur:any) => ur.url === url);
		if (hasurl) {
			toast.error('This URL already exists!');

			return;
		}

		const urlnewdata: urlDependencies = {
			title: title,
			description: description,
			url,
			imageUrl: imageUrl,
			createdAt: Timestamp.now(),
			createdBy: firekitUser.uid as string
		};
		if (urlstemp.length > 0) urlstemp.push(urlnewdata);
		else urlstemp = [urlnewdata];

		const updated: Partial<Task> = {
			urldependencies: urlstemp
		};
        taskManager.updateTask(updated, taskValue.id)

		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Added new dependency (url): ${title} `
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids )
		// await addNewActivity(newactivity);

		//reset Values
		sideleft.set('urls');
		title = '';
		description = '';
		imageUrl = '';
		toast.success('URL added successfully!');
	}
</script>

<!-- <div>
	<Label for="urlrelationship">Connect a URL</Label>
	<Input
		class="mt-2"
		placeholder="Enter URL"
		bind:value={url}
		onkeydown={handleKeydown}
		onclick={(event) => event.stopPropagation()}
	/>
</div> -->

{#if title || description || imageUrl}
	<div class="preview mt-3 flex flex-col items-center rounded-md border-[1px] border-slate-400 p-2">
		{#if imageUrl}
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img src={imageUrl} alt="Site preview image" />
		{/if}
		<div class="mt-4 flex w-full flex-col gap-3">
			<div class="flex flex-col">
				<Label for="websitetitle">Title</Label>
				<Input class="mt-2" placeholder="title" value={title} />
			</div>
			<div class="flex flex-col">
				<Label for="websitedescription">Description</Label>
				<Input class="mt-2" placeholder="description" value={description} />
			</div>
		</div>
		<Button
			onclick={addURLDependencie}
			variant="secondary"
			class="mt-3 w-full bg-blue-400 text-white hover:bg-blue-500">Add Link</Button
		>
	</div>
{/if}

<style>
	.preview img {
		max-width: 95%;
		height: auto;
	}
</style>
