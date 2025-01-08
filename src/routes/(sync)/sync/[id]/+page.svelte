<script lang="ts">
	import { sectionConfigs } from '$lib/components/app/sync/sections';
	import { sectionProps } from '$lib/components/app/sync/sections/currentSection.svelte';
	import { syncManager } from '$lib/components/app/sync/sync-manager.svelte';

	import type { Section } from '$lib/types/section';

	// Register all section configurations
	sectionConfigs.forEach((config) => {
		syncManager.registerSectionDefinition(config);
	});

	// Get the component for a section type
	function getSectionComponent(type: string) {
		return sectionConfigs.find((config) => config.type === type)?.component;
	}
	function handleClick(section: Section) {
		sectionProps.setSection(section);
	}
</script>

<div class="flex min-h-screen flex-col">
	{#each syncManager.getSections() as section (section.id)}
		{@const Component = getSectionComponent(section.type)}
		{#if Component}
			<div
				class=" cursor-pointer border-dashed border-blue-400 hover:border hover:bg-blue-100"
				onclick={() => handleClick(section)}
			>
				<Component {section} />
			</div>
		{/if}
	{/each}

	<!-- Section picker/editor UI -->
</div>
