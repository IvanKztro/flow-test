<!-- <script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';

	import * as Sidebar from '$lib/components/ui/sidebar';
	import Label from './ui/label/label.svelte';
	import Switch from './ui/switch/switch.svelte';

	import { firekitCollection, firekitUser } from 'svelte-firekit';
	import WorkspaceSwitcher from './workspace-switcher.svelte';
	import { workspaceManager } from './workspace-manager.svelte';
	import {
		BriefcaseBusiness,
		ChevronsUpDown,
		FolderKanban,
		LayoutList,
		Plus,
		Star
	} from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import type { Project } from '$lib/types/project';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import PortfolioForm from './app/forms/portfolio-form.svelte';
	import Button from './ui/button/button.svelte';
	import ProjectForm from './app/forms/project-form.svelte';

	let isopenportfolio: boolean = $state(false);
	let isopenproject: boolean = $state(false);

	let currentWorkspace = $derived(workspaceManager.selectedWorkspace || undefined);
	let currentPortfolio = $derived.by(() => {

		const portfolio =
			workspaceManager.selectedPortfolio || currentWorkspace?.portfolios[0] || undefined;

		return portfolio;
	});
	let favs: Project[] = $state([]);
	$effect(() => {
		console.log('default: ', currentWorkspace);
		if (workspaceManager.selectedWorkspace && !workspaceManager.selectedPortfolio) {
			console.log('workspaceManager.selectedPortfolio: ', workspaceManager.selectedPortfolio);
			workspaceManager.selectedPortfolio = workspaceManager.selectedWorkspace.portfolios[0].id;
		}
	});

	async function addFavorite(id: Project) {
		try {
			favs = [...favs, id];
			toast.success(`added to favs`);
		} catch (error) {
			console.log(error);
		}
	}
	async function removeFavorite(id: string) {
		favs = favs.filter((f) => f.id !== id);
		toast.success(`deleted fav`);
	}
</script>

{#if workspaceManager.loading}
	<div>Loading...</div>
{:else}
	<Sidebar.Header class="gap-3.5 border-b px-0">
		<WorkspaceSwitcher />

		<di class="px-2">
			<Sidebar.Input placeholder="Type to search..." />
		</di>
	</Sidebar.Header>
	<Sidebar.Content class="gap-0">
		<div class="flex w-full items-center justify-between p-4 pb-0">
			<div class="text-base font-medium text-foreground">Projects</div>
			<Label class="flex items-center gap-2 text-sm">
				<span>Archivedd</span>
				<Switch class="shadow-none" />
			</Label>
		</div>
		<div class="flex w-full items-center justify-between p-4 pb-0">
			<div class="text-sm font-medium text-foreground">Favorites</div>
			<Star class="size-5 text-primary" />
		</div>
		<div class="grid p-4">
			{#if favs.length > 0}
				{#each favs as fav}
					<button onclick={() => removeFavorite(fav.id)} class="flex">
						{fav.name} <Star class="ml-2 size-4 text-yellow-500" /></button
					>
				{/each}
			{:else}
				<p>No favorites</p>
			{/if}
		</div>
		<div class="flex w-full items-center justify-between p-4 pb-0">
			<div class="text-base font-medium text-foreground">Portfolios</div>
		</div>
		<Sidebar.Group class="pt-0">
			<Sidebar.GroupContent>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Sidebar.MenuButton
								{...props}
								size="lg"
								class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<div
									class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
								>
									<BriefcaseBusiness class="size-4" />
								</div>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-semibold">
										{currentPortfolio?.name || 'Select Portfolio'}
									</span>
									<span class="truncate text-[9px]"
										>{currentPortfolio?.id || 'portfolio not selected'}</span
									>
								</div>
								<ChevronsUpDown class="ml-auto" />
							</Sidebar.MenuButton>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content
						class="max-h-96 w-[--bits-dropdown-menu-anchor-width] min-w-56 overflow-y-scroll rounded-lg"
						align="start"
						sideOffset={4}
					>
						<DropdownMenu.Label class="text-xs text-muted-foreground">Portfolios</DropdownMenu.Label
						>
						{#if currentWorkspace?.portfolios}
							{#each currentWorkspace.portfolios as portfolio, index (portfolio.id)}
								<DropdownMenu.Item
									class="gap-2 p-2"
									onclick={() => {
										// console.log(portfolio.name)
										// console.log(portfolio.id)
										workspaceManager.selectedPortfolio = portfolio.id;
									}}
								>
									<div class="flex size-6 items-center justify-center rounded-sm border">
										<BriefcaseBusiness class="size-4" />
									</div>
									{portfolio.name}
									<DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
								</DropdownMenu.Item>
							{/each}
						{/if}
						<DropdownMenu.Separator />
						<DropdownMenu.Item class="gap-2 p-2" onclick={() => (isopen = true)}>
							<div class="flex size-6 items-center justify-center rounded-md border bg-background">
								<Plus class="size-4" />
							</div>
							<div class="font-medium text-muted-foreground">Add Portfolio</div>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Sidebar.GroupContent>
		</Sidebar.Group>

			<div class="flex w-full items-center justify-between p-4 pb-0">
				<div class="text-sm font-medium text-foreground">All Projects</div>
				<Button variant="default" size="xs" class="p-1" onclick={()=>isopenproject = true}>
					<Plus class="size-4"></Plus>
				</Button>
			</div>
		<Sidebar.Group class="pt-0">
			<Sidebar.GroupContent>
				<Sidebar.Group class=" mt-3 h-[35dvh] rounded-md border border-slate-200 p-3">
					{#if workspaceManager.projects.length > 0}
						{#each workspaceManager.projects as project}
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton onclick={() => addFavorite(project)}>
										{#snippet child({ props })}
											<a href={'#'} {...props}>
												<FolderKanban />
												<span>{project.name}</span>
											</a>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						{/each}
					{:else}
						<p>Portoflio empty</p>
					{/if}
				</Sidebar.Group>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
{/if}

<Dialog.Root bind:open={isopenportfolio}>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Create Portfolio</Dialog.Title>
			<Dialog.Description>
				Make changes to your portfolio here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<PortfolioForm bind:isopenportfolio></PortfolioForm>
	</Dialog.Content>
</Dialog.Root>

<Dialog.Root bind:open={isopenproject}>
	<Dialog.Content class="sm:max-w-[525px]">
		<Dialog.Header>
			<Dialog.Title>Create Project</Dialog.Title>
			<Dialog.Description>
				Make changes to your project here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		 <ProjectForm bind:isopenproject></ProjectForm>
	</Dialog.Content>
</Dialog.Root> -->
