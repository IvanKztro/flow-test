<script lang="ts">
	import { syncManager } from '$lib/components/app/sync/sync-manager.svelte';
	import SyncSidebar from '$lib/components/app/sync/sync-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { Redo2, Undo2 } from 'lucide-svelte';
	let { children } = $props();
	let canUndo = $derived(syncManager.canUndo);
	let canRedo = $derived(syncManager.canRedo);
</script>

<Sidebar.Provider style="--sidebar-width: 350px;">
	<SyncSidebar />
	<Sidebar.Inset>
		<header
			class="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b bg-background p-4"
		>
			<div class="flex items-center gap-2">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Profile Builder</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Home</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
			<div class="flex items-center gap-2">
				<Button disabled={!canUndo} onclick={() => syncManager.undo()}>
					<Undo2 />
					Undo
				</Button>
				<Button disabled={!canRedo} onclick={() => syncManager.redo()}>
					<Redo2 />
					Redo
				</Button>
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
