<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { taskcurrentrelationships, taskrelationships, sideleft } from '$lib/stores/tasks-actions';
	import {
		CircleMinus,
		Clock,
		MessageCircle,
		Paperclip,
		Plus,
		SquareCheckBig
	} from 'lucide-svelte';
	import TaskUrlDependencies from '../../tasks/task-url-dependencies.svelte';
	//   import TaskActivity from "../../task-activity.svelte";
	import { fade } from 'svelte/transition';
	import TaskRelationships from '../../tasks/task-relationships.svelte';
	import TaskDepencencyCurrent from '../../tasks/task-depencendy-current.svelte';
	import TaskActivity from '../../tasks/task-activity.svelte';

	let { taskValue, membersByProject, pathids } = $props();

	function setSideBar(typesidebar: string, tr?: any) {
		if (tr?.type) setDataDependency(tr);
		if (typesidebar === 'urls') setDataURLS(tr);
		sideleft.set(typesidebar);
	}

	function setDataDependency(tr: any) {
		taskcurrentrelationships.set(tr);
	}
	function setDataURLS(urldependencies: any) {
		console.log('urldependencies');
	}
</script>

<article
	class={$sideleft === '' || $sideleft === 'threeview'
		? 'w-0'
		: $sideleft === 'chat'
			? 'sm:w-full lg:w-[680px] border-l-[2px] border-l-slate-200 bg-background/70'
			: 'sm:w-full lg:w-[580px] overflow-y-auto border-l-[2px] border-l-slate-200 bg-background/70'}
	transition:fade={{ delay: 500 }}
>
	{#if $sideleft === 'relationship'}
		<TaskRelationships {taskValue} {pathids}></TaskRelationships>
	{:else if $sideleft === 'items'}
		<TaskDepencencyCurrent></TaskDepencencyCurrent>
	{:else if $sideleft === 'urls'}
		<TaskUrlDependencies {taskValue}></TaskUrlDependencies>
	{:else if $sideleft === 'chat'}
		<TaskActivity {taskValue} {membersByProject} {pathids}></TaskActivity>
	{/if}
</article>
<article class="col-span-0 flex w-[90px] flex-col gap-2 border-l-[2px] border-l-slate-200 px-2">
	<Button
		variant="ghost"
		size="icon"
		onclick={() => setSideBar($sideleft === 'chat' ? '' : 'chat')}
		class="mt-2 flex w-auto flex-col  items-center rounded-md py-7 {$sideleft === 'chat'
			? 'bg-blue-200 text-blue-600'
			: ''}"
	>
		<div class="flex flex-col items-center">
			<MessageCircle class="h-5 w-5"></MessageCircle>
			<small>Activity</small>
		</div>
	</Button>
	{#each $taskrelationships as tr}
		<Button
			variant="ghost"
			size="icon"
			onclick={() => setSideBar('items', tr)}
			class="mt-2 flex w-auto flex-col  items-center rounded-md py-7 {$sideleft === 'items' &&
			tr.type === taskValue?.type
				? 'bg-blue-200 text-blue-600'
				: ''}"
		>
			<div class="icon-wrapper">
				{#if tr.type === 'waiting'}
					<span class="badge bg-yellow-500 text-[10px] text-white">{tr.items.length}</span>
					<Clock class="h-5 w-5"></Clock>
				{:else if tr.type === 'blocking'}
					<span class="badge bg-red-500 text-[10px] text-white">{tr.items.length}</span>
					<CircleMinus class="h-5 w-5"></CircleMinus>
				{:else if tr.type === 'link'}
					<span class="badge bg-slate-200 text-[10px] text-black">{tr.items.length}</span>
					<SquareCheckBig class="h-5 w-5"></SquareCheckBig>
				{/if}
			</div>
			<small class="capitalize">{tr.type}</small>
		</Button>
	{/each}

	<Separator></Separator>
	<div class="flex flex-col gap-1">
		{#if taskValue?.urldependencies && taskValue?.urldependencies.length > 0}
			<Button
				onclick={() => setSideBar('urls', taskValue?.urldependencies)}
				variant="ghost"
				size="icon"
				class="mt-2 flex w-auto flex-col  items-center rounded-md py-7 {$sideleft === 'items'
					? 'bg-blue-200 text-blue-600'
					: ''}"
			>
				<div class="icon-wrapper">
					<span class="badge bg-green-500 text-[10px] text-white"
						>{taskValue?.urldependencies.length}</span
					>
					<Paperclip class="h-5 w-5"></Paperclip>
				</div>
				<small class="capitalize">URLS</small>
			</Button>
		{/if}

		<Button
			variant="ghost"
			size="icon"
			onclick={() => setSideBar($sideleft === 'relationship' ? '' : 'relationship')}
			class="mt-2 flex w-auto flex-col items-center  justify-center rounded-md  py-7 {$sideleft ===
			'relationship'
				? 'bg-blue-200 text-blue-600'
				: ''}"
		>
			<div class="flex flex-col items-center">
				<Plus class="h-5 w-5 text-blue-500"></Plus>
				<small class="text-blue-500">More</small>
			</div>
		</Button>
	</div>
</article>

<style>
	.icon-wrapper {
		position: relative;
		display: inline-block;
	}

	.icon-wrapper .badge {
		position: absolute;
		top: -10px;
		right: -10px;
		border-radius: 50%;
		padding: 0px 6px;
		height: auto;
		width: auto;
		font-size: 10px;
		text-align: center;
	}
</style>
