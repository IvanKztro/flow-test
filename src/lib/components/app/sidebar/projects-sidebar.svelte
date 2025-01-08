<script lang="ts">
	import WorkspaceSwitcher from './workspace-switcher.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import Label from '$lib/components/ui/label/label.svelte';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import FavoritesMenu from './favorites-menu.svelte';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import ProjectsMenu from './projects-menu.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { PlusSquare } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import ProjectForm from '../forms/project-form.svelte';
	import type { Portfolio } from '$lib/types/portfolio';


	let selectedWorkspace = $derived(workspaceManager.selectedWorkspace);
	let isopenproject: boolean = $state(false);
	let portfolioId: string = $state("");
	let portfolioSelected: Portfolio = $derived(workspaceManager.selectedWorkspace?.portfolios.find(portfolio => portfolio.id === portfolioId));

</script>

<Sidebar.Header class="gap-3.5 border-b px-0">
	<WorkspaceSwitcher />

	<di class="px-2">
		<Sidebar.Input placeholder="Type to search..." />
	</di>
</Sidebar.Header>

{#if selectedWorkspace}
	<Sidebar.Content class="gap-0">
		<FavoritesMenu />

		<div class="flex w-full items-center justify-between p-4 pb-0">
			<div class="text-sm font-medium text-foreground">Portfolios</div>
			<Label class="flex items-center gap-2 text-sm">
				<span>Archived</span>
				<Switch class="shadow-none" />
			</Label>
		</div>
		{#each selectedWorkspace.portfolios as portfolio}
			<Sidebar.Group>
				<div class="flex items-center justify-between">
					<Sidebar.GroupLabel>{portfolio.name}</Sidebar.GroupLabel>
					<Button size="icon" variant="ghost" class="text-primary" onclick={() => {
						isopenproject = true;
						portfolioId = portfolio.id;
					}}><PlusSquare /></Button>
				</div>
				<section class="pl-2">
					<ProjectsMenu portfolioId={portfolio.id} />

				</section>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
{/if}


<Dialog.Root bind:open={isopenproject}>
	<!-- <Dialog.Trigger class={buttonVariants({ variant: "outline" })}
    >Edit Profile</Dialog.Trigger
  > -->
	<Dialog.Content class="sm:max-w-[525px]">
		<Dialog.Header>
			<Dialog.Title>Create Project</Dialog.Title>
			<Dialog.Description>
				Make changes to your project here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		 <ProjectForm bind:isopenproject portfolio={portfolioSelected}></ProjectForm>
	</Dialog.Content>
</Dialog.Root>
