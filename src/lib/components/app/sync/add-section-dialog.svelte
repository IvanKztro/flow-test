<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Bell from 'lucide-svelte/icons/bell';
	import Globe from 'lucide-svelte/icons/globe';
	import House from 'lucide-svelte/icons/house';
	import Keyboard from 'lucide-svelte/icons/keyboard';
	import Link from 'lucide-svelte/icons/link';
	import Lock from 'lucide-svelte/icons/lock';
	import Menu from 'lucide-svelte/icons/menu';
	import MessageCircle from 'lucide-svelte/icons/message-circle';
	import Paintbrush from 'lucide-svelte/icons/paintbrush';
	import Video from 'lucide-svelte/icons/video';
	import Button from '$lib/components/ui/button/button.svelte';
	import { sectionConfigs } from '$lib/components/app/sync/sections';
	import { syncManager } from '$lib/components/app/sync/sync-manager.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';

	const data = {
		nav: [
			{ name: 'Notifications', icon: Bell },
			{ name: 'Navigation', icon: Menu },
			{ name: 'Home', icon: House },
			{ name: 'Messages & media', icon: MessageCircle },
			{ name: 'Hero', icon: Globe },
			{ name: 'Features', icon: Keyboard },
			{ name: 'Pricing', icon: Lock },
			{ name: 'CTA', icon: Link },
			{ name: 'Footer', icon: Paintbrush },
			{ name: 'Video', icon: Video }
		]
	};

	let open = $state(false);
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button size="sm" {...props}>Add Section</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
		<Dialog.Title class="sr-only">Add New Section</Dialog.Title>
		<Dialog.Description class="sr-only">Add sections to your profile</Dialog.Description>
		<Sidebar.Provider class="items-start">
			<Sidebar.Root collapsible="none" class="hidden md:flex">
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								{#each data.nav as item (item.name)}
									<Sidebar.MenuItem>
										<Sidebar.MenuButton isActive={item.name === 'Messages & media'}>
											{#snippet child({ props })}
												<a href="##" {...props}>
													<item.icon />
													<span>{item.name}</span>
												</a>
											{/snippet}
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								{/each}
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
			</Sidebar.Root>
			<main class="flex h-[480px] flex-1 flex-col overflow-hidden">
				<header
					class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
				>
					<div class="flex items-center gap-2 px-4">
						<Breadcrumb.Root>
							<Breadcrumb.List>
								<Breadcrumb.Item class="hidden md:block">
									<Breadcrumb.Link href="#">Category</Breadcrumb.Link>
								</Breadcrumb.Item>
								<Breadcrumb.Separator class="hidden md:block" />
								<Breadcrumb.Item>
									<Breadcrumb.Page>Messages & media</Breadcrumb.Page>
								</Breadcrumb.Item>
							</Breadcrumb.List>
						</Breadcrumb.Root>
					</div>
				</header>
				<div class="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
					<div class="flex flex-col gap-2">
						{#each sectionConfigs as config}
							<div
								onclick={() => syncManager.addSection(config.type)}
								class="rounded-md border p-4"
							>
								<Badge variant="outline">{config.type}</Badge>

								<h2 class="capitalize">{config.name}</h2>
							</div>
						{/each}
					</div>
				</div>
			</main>
		</Sidebar.Provider>
	</Dialog.Content>
</Dialog.Root>
