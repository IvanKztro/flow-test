<script lang="ts">
	import FooterMain from '$lib/components/public/footer-main.svelte';
	import NavMain from '$lib/components/public/nav-main.svelte';

	const { children } = $props();
</script>

<NavMain />
{@render children()}
<FooterMain />
