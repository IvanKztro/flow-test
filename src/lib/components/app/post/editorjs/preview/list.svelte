<script lang="ts">
	let { items, style, alignment } = $props();
	let alignmenttype: string =
		alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left';
</script>

<ul class=" px-4 {style === 'ordered' ? 'list-decimal' : 'list-disc'} {alignmenttype}">
	{#each items as item}
		<li>{@html item}</li>
	{/each}
</ul>
