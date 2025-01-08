<script>
	import { syncManager } from './sync-manager.svelte';

	// Register some sections
	syncManager.registerSectionDefinition({
		name: 'Hero Banner',
		type: 'hero',
		settings: [
			{
				type: 'text',
				id: 'heading',
				label: 'Heading',
				default: 'Welcome'
			}
		]
	});

	// Using derived states

	let sections = $derived(syncManager.getSections());
</script>

<div class="flex flex-col gap-4">
	{#each sections as section (section.id)}
		<div class="border p-4">
			<h3>{section.type}</h3>
			<pre>{JSON.stringify(section.settings, null, 2)}</pre>
		</div>
	{/each}

	<button class="btn" onclick={() => syncManager.addSection('hero')}> Add Hero Section </button>
</div>
