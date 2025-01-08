<script lang="ts">
	import { goto } from '$app/navigation';
	import { firekitUser, presenceService } from 'svelte-firekit';
	import AppSidebar from '$lib/components/app/sidebar/app-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Breadcrumb from '$lib/components/app/breadcrumb.svelte';
	import DarkModeToggle from '$lib/components/shared/dark-mode-toggle.svelte';
	import OnboardingNotCompleted from '$lib/components/onboarding/onboardingNotCompleted.svelte';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	let { children } = $props();
	const config: any = {
		geolocation: {
			enabled: true,
			type: 'custom',
			requireConsent: true
		},
		sessionTTL: 30 * 60 * 1000, // 30 minutes
		updateInterval: 60 * 1000 // 1 minute
	};

	$effect(() => {
		if (firekitUser.initialized && !firekitUser.isLoggedIn) {
			goto('/sign-in');
		}
		if (firekitUser.initialized && !presenceService.isInitialized) {
			presenceService.initialize(firekitUser.user, config);
		}
		if (!workspaceManager.selectedWorkspace && workspaceManager.workspaces.length > 0) {
			const savedId = localStorage.getItem('selectedWorkspace');
			if (savedId) {
				const workspace = workspaceManager.workspaces.find((wp) => wp.id === savedId);
				if (workspace) {
					workspaceManager.selectedWorkspace = workspace.id;
				} else {
					// If the saved workspace is not found, select the first available one
					workspaceManager.selectedWorkspace = workspaceManager.workspaces[0].id;
					localStorage.setItem('selectedWorkspace', workspaceManager.workspaces[0].id);
				}
			} else {
				// If no workspace was previously selected, select the first one
				workspaceManager.selectedWorkspace = workspaceManager.workspaces[0].id;
				localStorage.setItem('selectedWorkspace', workspaceManager.workspaces[0].id);
			}
		}
	});
</script>

{#if firekitUser.initialized && firekitUser.isLoggedIn}
	<OnboardingNotCompleted></OnboardingNotCompleted>

	<Sidebar.Provider style="--sidebar-width: 320px;">
		{#if workspaceManager.workspaces.length > 0}
			<AppSidebar />
		{/if}
		<Sidebar.Inset>
			<header
				class="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-2 border-b bg-background px-4"
			>
				<div class="flex h-16 items-center gap-2">
					<Sidebar.Trigger class="-ml-1" />
					<Separator orientation="vertical" class="mr-2 h-4" />
					<Breadcrumb />
				</div>

				<div class="flex items-center gap-2">
					<DarkModeToggle />
				</div>
			</header>
			<div class="container mx-auto">
				{@render children()}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
{/if}
