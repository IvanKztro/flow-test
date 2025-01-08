<script lang="ts">
	let { text, level, alignment = "left" } = $props();

	let alignmenttype:string = alignment === "center" ? 'text-center' :  alignment === "right" ? 'text-right' : 'text-left'
</script>

{#if level === 1}
	<h1 class={alignmenttype}>{@html text}</h1>
{:else if level === 2}
	<h2 class={alignmenttype}>{@html text}</h2>
{:else if level === 3}
	<h3 class={alignmenttype}>{@html text}</h3>
{:else if level === 4}
	<h4 class={alignmenttype}>{@html text}</h4>
{:else if level === 5}
	<h5 class={alignmenttype}>{@html text}</h5>
{:else if level === 6}
	<h6 class={alignmenttype}>{@html text}</h6>
{/if}
