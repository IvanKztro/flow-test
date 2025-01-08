<script lang="ts">
	import { flip } from 'svelte/animate';
	import BoardStatus from './board-status.svelte';
	import type { Milestone, SprintApp } from '$lib/types/milestone';

	let {
		sprint,
		sprintIndex,
		milestonec,
		milestone
	}: { sprint: SprintApp; sprintIndex: number; milestonec: any; milestone: Milestone } = $props();
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';

	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { ChevronsUpDown } from 'lucide-svelte';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let value = $state<DateValue>();
</script>

<Collapsible.Root>
	<Collapsible.Trigger class=" flex w-full items-center justify-between">
		<h3 class=" flex text-center text-primary">
			<ChevronsUpDown />{sprint.name}
		</h3>
		<div>
			<Popover.Root>
				<Popover.Trigger>
					{#snippet child({ props })}
						<Button
							variant="outline"
							class={cn(' justify-start text-left font-normal', !value && 'text-muted-foreground')}
							{...props}
						>
							<CalendarIcon class="mr-2 size-4" />
							{value ? df.format(value.toDate(getLocalTimeZone())) : 'Select a Start Date'}
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0">
					<Calendar bind:value type="single" initialFocus />
				</Popover.Content>
			</Popover.Root>
			<Popover.Root>
				<Popover.Trigger>
					{#snippet child({ props })}
						<Button
							variant="outline"
							class={cn(' justify-start text-left font-normal', !value && 'text-muted-foreground')}
							{...props}
						>
							<CalendarIcon class="mr-2 size-4" />
							{value ? df.format(value.toDate(getLocalTimeZone())) : 'Select a End Date'}
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0">
					<Calendar bind:value type="single" initialFocus />
				</Popover.Content>
			</Popover.Root>
		</div>
	</Collapsible.Trigger>
	<Collapsible.Content>
		<section class="grid grid-cols-3 gap-4 py-6">
			{#each sprint.statuses as status, statusIndex (status.position)}
				<div class="h-auto w-auto" animate:flip>
					<BoardStatus {status} {statusIndex} {sprintIndex} {milestonec} {milestone}></BoardStatus>
				</div>
			{/each}
		</section>
	</Collapsible.Content>
</Collapsible.Root>
