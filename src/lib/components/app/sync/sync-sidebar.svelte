<script lang="ts" module>
	import {
		Component,
		GripVertical,
		LayoutGrid,
		LayoutTemplate,
		Plus,
		Settings
	} from 'lucide-svelte';

	// This is sample data
	const data = {
		user: {
			name: 'shadcn',
			email: 'm@example.com',
			avatar: '/avatars/shadcn.jpg'
		},
		navMain: [
			{
				title: 'Sections',
				url: '#',
				icon: LayoutTemplate,
				isActive: true
			},
			{
				title: 'Theme Settings',
				url: '#',
				icon: Settings,
				isActive: true
			},
			{
				title: 'Apps Settings',
				url: '#',
				icon: LayoutGrid,
				isActive: true
			}
		]
	};
</script>

<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import Command from 'lucide-svelte/icons/command';
	import type { ComponentProps } from 'svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import AddNewSection from './add-new-section.svelte';
	import NavUser from './nav-user.svelte';
	import AddSectionDialog from './add-section-dialog.svelte';
	import { syncManager } from './sync-manager.svelte';
	import { sectionConfigs } from './sections';
	import PropsEditor from './sections/props-editor.svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	let activeItem = $state(data.navMain[0]);
	const sidebar = useSidebar();

	function getSectionComponent(type: string) {
		return sectionConfigs.find((config) => config.type === type)?.component;
	}
</script>

<Sidebar.Root
	bind:ref
	collapsible="icon"
	class="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
	{...restProps}
>
	<!-- This is the first sidebar -->
	<!-- We disable collapsible and adjust width to icon. -->
	<!-- This will make the sidebar appear as icons. -->
	<Sidebar.Root collapsible="none" class="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r">
		<Sidebar.Header>
			<Sidebar.Menu>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton size="lg" class="md:h-8 md:p-0">
						{#snippet child({ props })}
							<a href="/syncs" {...props}>
								<div
									class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
								>
									<Component class="size-4" />
								</div>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-semibold"> Hyvsync </span>
									<span class="truncate text-xs">Free Plan</span>
								</div>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupContent class="px-1.5 md:px-0">
					<Sidebar.Menu>
						{#each data.navMain as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton
									tooltipContentProps={{
										hidden: false
									}}
									onclick={() => {
										activeItem = item;
										sidebar.setOpen(true);
									}}
									isActive={activeItem.title === item.title}
									class="px-2.5 md:px-2"
								>
									{#snippet tooltipContent()}
										{item.title}
									{/snippet}
									<item.icon />
									<span>{item.title}</span>
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
		<Sidebar.Footer>
			<NavUser />
		</Sidebar.Footer>
	</Sidebar.Root>

	<Sidebar.Root collapsible="none" class="hidden flex-1 md:flex">
		<Sidebar.Header class="gap-3.5 border-b p-4">
			<div class="flex w-full items-center justify-between">
				<div class="text-base font-medium text-foreground">
					{activeItem.title}
				</div>
				<Label class="flex items-center gap-2 text-sm">
					<span>Published</span>
					<Switch class="shadow-none" />
				</Label>
			</div>
			<Sidebar.Input placeholder="Type to search..." />
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Sections</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each syncManager.getSections() as section (section.id)}
							{@const Component = getSectionComponent(section.type)}
							{#if Component}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton>
										{#snippet child({ props })}
											<div
												class="mb-2 flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-muted"
											>
												<GripVertical />
												<span>{section.id}</span>
											</div>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							{/if}
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>

			<PropsEditor />
		</Sidebar.Content>
		<Sidebar.Footer>
			<AddSectionDialog />
		</Sidebar.Footer>
	</Sidebar.Root>
</Sidebar.Root>
