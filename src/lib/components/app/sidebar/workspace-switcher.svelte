<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { Rocket } from 'lucide-svelte';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import Plus from 'lucide-svelte/icons/plus';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import WorkspaceForm from '../forms/workspace-form.svelte';

	const sidebar = useSidebar();
	let isopen: boolean = $state(false);
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
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
							<Rocket class="size-4 text-primary" />
						</div>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">
								{workspaceManager.selectedWorkspace
									? workspaceManager.selectedWorkspace.name
									: 'Select Workspace'}
							</span>
							<span class="truncate text-xs"
								>Members: {workspaceManager.selectedWorkspace
									? workspaceManager.selectedWorkspace.members
										? workspaceManager.selectedWorkspace.members.length > 1
											? `${workspaceManager.selectedWorkspace.members.length} members`
											: 'Only you'
										: 'No members'
									: 'Select Workspace'}</span
							>
						</div>
						<ChevronsUpDown class="ml-auto text-primary" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="max-h-96 w-[--bits-dropdown-menu-anchor-width] min-w-56 overflow-y-scroll rounded-lg"
				align="start"
				side={sidebar.isMobile ? 'bottom' : 'right'}
				sideOffset={4}
			>
				<DropdownMenu.Label class="text-xs text-muted-foreground">Workspace</DropdownMenu.Label>
				{#each workspaceManager.workspaces as workspace, index (workspace.id)}
					<DropdownMenu.Item
						class="gap-2 p-2"
						onclick={() => {
							workspaceManager.selectedWorkspace = workspace.id;
						}}
					>
						<div class="flex size-6 items-center justify-center rounded-sm border">
							<Rocket class="size-4" />
						</div>
						{workspace.name}
						<DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				{/each}
				<DropdownMenu.Separator />
				<DropdownMenu.Item class="gap-2 p-2" onclick={() => (isopen = true)}>
					<div class="flex size-6 items-center justify-center rounded-md border bg-background">
						<Plus class="size-4" />
					</div>
					<div class="font-medium text-muted-foreground">Add Workspace</div>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>

<Dialog.Root bind:open={isopen}>
	<!-- <Dialog.Trigger class={buttonVariants({ variant: "outline" })}
    >Edit Profile</Dialog.Trigger
  > -->
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Create Workspace</Dialog.Title>
			<Dialog.Description>
				Make changes to your workspace here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<WorkspaceForm bind:isopen></WorkspaceForm>
	</Dialog.Content>
</Dialog.Root>
