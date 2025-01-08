<script lang="ts">
	import NavMain from '$lib/components/app/nav-main.svelte';
	import NavUser from '$lib/components/app/nav-user.svelte';
	import TeamSwitcher from '$lib/components/app/team-switcher.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { firekitDoc, firekitUser } from 'svelte-firekit';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();

	let userdata = $state(firekitDoc(`users/${firekitUser.uid}`));
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header>
		<TeamSwitcher />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain />
	</Sidebar.Content>
	<Sidebar.Footer>
		{#if userdata.data}
			<NavUser user={userdata.data} />
		{/if}
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
