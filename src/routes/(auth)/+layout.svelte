<script>
	import { goto } from '$app/navigation';
	import { firekitUser } from 'svelte-firekit';
	let { children } = $props();
	$effect(() => {
		if (firekitUser.initialized && firekitUser.isLoggedIn) {
			goto('/');
		}
	});
</script>

{#if firekitUser.initialized && !firekitUser.isLoggedIn}
	<main class="flex h-[100dvh] flex-col items-center justify-center">
		{@render children()}
	</main>
{/if}

<style>
	main {
		background: url('/sign-in-bg.svg');
		background-size: cover;
		background-position: center;
	}
</style>
