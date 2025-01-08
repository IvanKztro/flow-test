<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { where } from 'firebase/firestore';
	import { firekitCollection } from 'svelte-firekit';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import MilestonesMenu from './milestones-menu.svelte';
	import { currentTaskID, openmodaltask } from '$lib/stores/tasks-batch';

	let { portfolioId }: { portfolioId: string } = $props();
	const projectsCollection = $derived(
		firekitCollection<Project>('projects', where('portfolioId', '==', portfolioId))
	);

	const projects = $derived(projectsCollection.data ?? []);

</script>

{#if projects}
	{#each projects as project}
		<Sidebar.Menu>
			<Collapsible.Root class="group/collapsible">
				{#snippet child({ props })}
					<Sidebar.MenuItem {...props}>
						<Collapsible.Trigger onclick={()=>{
							openmodaltask.set(false)
							currentTaskID.set(undefined)
						}}>
							{#snippet child({ props })}
								<Sidebar.MenuButton {...props} >
									{#snippet tooltipContent()}
										{project.name}
									{/snippet}

									<span>{project.name}</span>
									<ChevronRight
										class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
									/>
								</Sidebar.MenuButton>
							{/snippet}
						</Collapsible.Trigger>
						<Collapsible.Content>
							<MilestonesMenu projectId={project.id} {portfolioId} />
						</Collapsible.Content>
					</Sidebar.MenuItem>
				{/snippet}
			</Collapsible.Root>
		</Sidebar.Menu>
	{/each}
{/if}
