<script lang="ts">
	let { text, alignment = 'left' } = $props();

	let alignmenttype: string =
		alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left';
</script>

<p class={alignmenttype}>{@html text}</p>
