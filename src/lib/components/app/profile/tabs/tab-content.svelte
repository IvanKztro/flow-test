<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import MyProfile from './my-profile.svelte';
	import { profileTab } from './profile-tab.svelte';

	let currentTab = $state(profileTab.currentTab);
</script>

<Card.Root>
	<Card.Content>
		{#if currentTab === 'profile'}
			<MyProfile />
		{:else}
			<p>Coming soon...</p>
		{/if}
	</Card.Content>
</Card.Root>
