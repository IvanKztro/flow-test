<script lang="ts">
	import type { Milestone } from '$lib/types/milestone';
	let { milestone, milestoneId }: { milestone: Milestone, milestoneId:string } = $props();
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { List, SlidersHorizontal, SquareKanban, Table } from 'lucide-svelte';
	import Kanban from './board/kanban.svelte';
	const tabs = [
		{ name: 'Kanban', value: 'kanban', component: Kanban, icon: SquareKanban },
		{ name: 'Table', value: 'table', icon: Table },
		{ name: 'List View', value: 'list', icon: List }
	];
	let currentTab = $state('kanban');

	const activeTab = (value: string) => currentTab === value 
	?'bg-black/10 dark:bg-white/10'
	:'bg-transparent';
</script>

<Tabs.Root bind:value={currentTab}>
	<div class="mb-2 flex items-center justify-between">
		<Tabs.List>
			{#each tabs as tab}
			{@const Icon = tab.icon}
				<Tabs.Trigger value={tab.value} 
				class=" {activeTab(tab.value)}  "
				>
					<Icon class="size-4 mr-1"/>
					{tab.name}
				</Tabs.Trigger>
			{/each}
		</Tabs.List>
		<Button variant="ghost"><SlidersHorizontal /> Filters</Button>
	</div>

	<Separator />
	{#each tabs as tab}
		<Tabs.Content value={tab.value}>
			{#if tab.component}
				<tab.component {milestone} {milestoneId} />
			{:else}
				{tab.name}
			{/if}
		</Tabs.Content>
	{/each}
</Tabs.Root>
