<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/stores';

	const routes = [
		{
			title: 'Profile',
			href: '/account/profile',
			description: 'Manage your profile information'
		},
		{
			title: 'Notifications',
			href: '/account/notifications',
			description: 'Set up notification preferences'
		},
		{
			title: 'Integrations',
			href: '/account/integrations',
			description: 'Manage integrations with other services'
		},
		{
			title: 'Preferences',
			href: '/account/preferences',
			description: 'Customize your account preferences'
		},
		{
			title: 'Workspace',
			href: '/account/workspace',
			description: 'Configure workspace settings'
		},
		{
			title: 'Billing',
			href: '/account/billing',
			description: 'View and update billing information'
		},
		{
			title: 'Members',
			href: '/account/members',
			description: 'Manage members in your account'
		}
	];
	const { children } = $props();
	function getCurrentRoute(pathname: string) {
		const currentRoute = routes.find((route) => route.href === pathname);
		return currentRoute || routes[0];
	}
</script>

<div>
	{#each routes as { href, title }}
		<!-- Highlight current path and disable the button if it's the current route -->
		{#if href === $page.url.pathname}
			<Button {href} variant="outline" disabled={true}>{title}</Button>
		{:else}
			<Button {href} variant="ghost">{title}</Button>
		{/if}
	{/each}
</div>
<!-- Render the child content in a styled container with the current route title and description -->
<div class="border-foreground-200 rounded-xl border p-5 shadow-sm md:p-8">
	<div class="mb-4 xl:mb-8">
		<h1 class="text-lg font-semibold">{getCurrentRoute($page.url.pathname).title}</h1>
		<p class="text-foreground-500 text-sm">{getCurrentRoute($page.url.pathname).description}</p>
	</div>
	{@render children()}
</div>
