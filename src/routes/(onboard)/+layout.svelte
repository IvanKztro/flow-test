<script lang="ts">
	import OnboardingCompleted from '$lib/components/onboarding/onboardingCompleted.svelte';
	import { firekitUser } from 'svelte-firekit';
	let { children } = $props();
</script>

{#if firekitUser.initialized && firekitUser.isLoggedIn}
	<OnboardingCompleted></OnboardingCompleted>

	<div class="flex h-[100dvh] items-center justify-center gap-4 p-4 pt-0">
		{@render children()}
	</div>
{/if}
