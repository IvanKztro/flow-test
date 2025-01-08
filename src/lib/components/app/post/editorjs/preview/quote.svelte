<script lang="ts">
	let { text, caption, alignment = 'left' } = $props();
</script>

<figure class="text-{alignment}">
	<blockquote class="mx-2 px-2 py-3 italic border-l-[4px] border-l-slate-300">
		{@html text}
	</blockquote>
	{#if caption}
		<figcaption class="text-right mt-2 font-semibold">— {@html caption}</figcaption>
	{/if}
</figure>

