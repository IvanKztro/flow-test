<script lang="ts">
	import { goto } from '$app/navigation';
	import { firekitUser, presenceService } from 'svelte-firekit';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Breadcrumb from '$lib/components/app/breadcrumb.svelte';
	import DarkModeToggle from '$lib/components/shared/dark-mode-toggle.svelte';
	import AppSidebar from '$lib/components/app/app-sidebar.svelte';
	import OnboardingNotCompleted from '$lib/components/onboarding/onboardingNotCompleted.svelte';
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
	});


</script>



{#if firekitUser.initialized && firekitUser.isLoggedIn}
	 <OnboardingNotCompleted></OnboardingNotCompleted>
	<Sidebar.Provider>
		<AppSidebar />
		<Sidebar.Inset>
			<header
				class="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
			>
				<div class="flex items-center gap-2 px-4">
					<Sidebar.Trigger class="-ml-1" />
					<Separator orientation="vertical" class="mr-2 h-4" />
					<Breadcrumb />
				</div>
				<div class="flex items-center gap-2 px-4">
					<DarkModeToggle />
				</div>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
				{@render children()}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
{/if}
