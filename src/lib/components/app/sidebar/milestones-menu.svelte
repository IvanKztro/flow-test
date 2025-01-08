<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import type { Milestone } from '$lib/types/milestone';
	import { PlusSquare } from 'lucide-svelte';
	import { firekitCollection } from 'svelte-firekit';
	let { projectId, portfolioId }: { projectId: string, portfolioId:string } = $props();
	const milestonesCollection = $derived(
		firekitCollection<Milestone>(`projects/${projectId}/milestones`)
	);

	const milestones: Milestone[] = $derived(milestonesCollection.data ?? []);
</script>

{#if milestones}
	<Sidebar.MenuSub>
		{#each milestones as milestone}
			<Sidebar.MenuSubItem>
				<Sidebar.MenuSubButton>
					{#snippet child({ props })}
					<!-- href="/pf/{workspaceManager.selectedWorkspace?.id}/p/{projectId}/m/{milestone.id}" -->
						<a
							href="/{workspaceManager.selectedWorkspace?.id}/pf/{portfolioId}/p/{projectId}/m/{milestone.id}"
							{...props}
						>
							<span>{milestone.name}</span>
						</a>
					{/snippet}
				</Sidebar.MenuSubButton>
			</Sidebar.MenuSubItem>
		{/each}
		<Sidebar.MenuSubItem>
			<Sidebar.MenuSubButton>
				{#snippet child({ props })}
					<Button {...props} variant="ghost" class="px-1 text-primary"
						><PlusSquare /> Milestone</Button
					>
				{/snippet}
			</Sidebar.MenuSubButton>
		</Sidebar.MenuSubItem>
	</Sidebar.MenuSub>
{/if}
