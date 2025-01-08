<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	//   import { authStore } from "$lib/stores/auth-store";
	//   import { projectValues } from "$lib/stores/project";
	//   import {  taskValue, updateSubTask } from "$lib/stores/subtasks";
	import type { ActivityTask } from '$lib/types/task';
	import { Timestamp } from 'firebase/firestore';
	import { CirclePause, Play, Ellipsis } from 'lucide-svelte';
	import * as Popover from '$lib/components/ui/popover';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { taskManager } from '$lib/components/task-manager.svelte';
	import { firekitUser } from 'svelte-firekit';

	let running: boolean = $state(false);
	let startTime: number = 0;
	//   export let trackTime: number;

	let { trackTime, milestone, taskValue, pathids } = $props();
	let interval: any;
	let displayTime: string = $state('');

	function startStopwatch() {
		if (!running) {
			running = true;
			startTime = Date.now() - trackTime * 1000;
			interval = setInterval(() => {
				const elapsedTime = Date.now() - startTime;
				updateDisplayTime(elapsedTime);
			}, 1000);
		} else {
			running = false;
			clearInterval(interval);
			changeTrackTime();
		}
	}

	function updateDisplayTime(elapsedTime: number) {
		trackTime = Math.floor(elapsedTime / 1000);
		const minutes = Math.floor(trackTime / 60);
		const seconds = trackTime % 60;
		displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	}

	async function changeTrackTime() {
		taskManager.updateTask({ trackTime: trackTime }, milestone.currentTask.id);
		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Updated Track Time: ${displayTime}`
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids)
	}

	const trackt: number = trackTime ? trackTime : 0;
	updateDisplayTime(trackt * 1000);

	$effect(() => {
		if (milestone.currentTask) {
			const trackt: number = trackTime ? trackTime : 0;
			updateDisplayTime(trackt * 1000);
		}
	});

	let initial = '00:00';
	let start = initial;
	let end = initial;
	let isEditing = false;

	function changeFocus(e: MouseEvent) {
		const { name, value } = e.target as HTMLInputElement;
		if (name == 'start') {
			start = start.replace(':', '');
		} else {
			end = end.replace(':', '');
		}
		isEditing = true;
	}
	function handleBlur(e: FocusEvent) {
		const { name, value } = e.target as HTMLInputElement;
		if (name == 'start') {
			start = getFormatedTime(value);
		} else {
			end = getFormatedTime(value);
		}
		isEditing = false;
	}

	function getFormatedTime(input: string) {
		if (input.trim() == '') {
			return '00:00';
		}
		let str = input; // String de 4 caracteres
		let numero = parseInt(str, 10); // Convertir el string a número

		// Obtener horas y minutos
		let horas = Math.floor(numero / 100); // Obtener las horas
		let minutos = numero % 100; // Obtener los minutos
		let extra = minutos - 60;
		if (extra >= 0) {
			horas++;
			minutos = extra;
		}

		return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
	}

	function getTotalTime(start: string, end: string) {
		const startN = start.replace(':', '');
		const endN = end.replace(':', '');
		if (startN == '0000' || endN == '0000' || startN.length != 4 || endN.length != 4 || isEditing)
			return oldValue;
		const [startH, startM] = start.split(':').map(Number);
		const [endH, endM] = end.split(':').map(Number);
		let totalTime = (endH - startH) * 60 + (endM - startM);
		if (totalTime < 0) {
			totalTime = totalTime + 24 * 60;
		}
		const totalHH = Math.floor(totalTime / 60);
		const totalMM = totalTime % 60;
		const totalFormated = `${totalHH.toString().padStart(2, '0')}:${totalMM.toString().padStart(2, '0')}`;
		return totalFormated;
	}
	let totalTime = $derived.by(() => {
		const startN = start.replace(':', '');
		const endN = end.replace(':', '');
		if (startN == '0000' || endN == '0000' || startN.length != 4 || endN.length != 4 || isEditing)
			return oldValue;
		const [startH, startM] = start.split(':').map(Number);
		const [endH, endM] = end.split(':').map(Number);
		let totalTime = (endH - startH) * 60 + (endM - startM);
		if (totalTime < 0) {
			totalTime = totalTime + 24 * 60;
		}
		const totalHH = Math.floor(totalTime / 60);
		const totalMM = totalTime % 60;
		const totalFormated = `${totalHH.toString().padStart(2, '0')}:${totalMM.toString().padStart(2, '0')}`;
		return totalFormated;
	});
	// svelte-ignore state_referenced_locally
	let oldValue: string = $state('00:00');

	async function handleSave() {
		try {
			trackTime = timeToSeconds();
			await changeTrackTime();
		} catch (error) {
			console.error(error);
		}
	}
	function timeToSeconds() {
		const [hours, minutes] = totalTime.split(':').map(Number);
		return hours * 3600 + minutes * 60;
	}
</script>

<div class="flex items-center gap-2">
	<Button variant="outline" class="ml-auto block w-full">
		<div class="flex items-center gap-2">
			<Button
				variant="outline"
				size="xs"
				class=" {!running
					? 'bg-blue-400'
					: 'bg-red-400'} flex items-center justify-center rounded-full p-[4px] text-white"
				onclick={(event) => {
					startStopwatch();
				}}
			>
				{#if !running}
					<Play class="size-[14px]"></Play>
				{:else}
					<CirclePause class="size-[14px]"></CirclePause>
				{/if}
			</Button>
			<span class="stopwatch">
				{displayTime || 'Add time'}
			</span>
		</div>
	</Button>

	<!-- <Popover.Root>
		<Popover.Trigger>
			<Button variant="outline">
				<Ellipsis />
			</Button>
		</Popover.Trigger>
		<Popover.Content class="w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="font-medium leading-none">Time</h4>
					<p class="text-sm text-muted-foreground">Time in this task (hh:mm)</p>
				</div>
				<div class="grid gap-2">
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="width">Start:</Label>
						<Input
							bind:value={start}
							onclick={changeFocus}
							onblur={handleBlur}
							class="col-span-2 h-8"
							name="start"
							id="start-time"
						/>
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="maxWidth">End</Label>
						<Input
							bind:value={end}
							onclick={changeFocus}
							onblur={handleBlur}
							class="col-span-2 h-8"
							name="end"
							id="end-time"
						/>
					</div>
					<div class="mt-2 grid grid-cols-3 items-center gap-4">
						<Label>{totalTime}</Label>
						<Button onclick={handleSave}>Save</Button>
					</div>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root> -->
</div>

<style>
	.stopwatch {
		font-size: 14px;
		cursor: pointer;
		user-select: none;
	}
</style>
