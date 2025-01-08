<script lang="ts">
	let {
		imgURL,
		caption,
		alignment = 'center',
		width,
		height,
		stretched,
		withBackground,
		withBorder
	} = $props();

	let figureClasses = $derived(
		`text-${alignment} flex flex-col justify-center items-center ${
			stretched ? 'w-full' : ''
		} ${withBackground ? 'bg-gray-300 p-4' : ''} ${withBorder ? 'border border-gray-300' : ''}`
	);

	let imgClasses = $derived(
		`${stretched ? `object-scale-down w-[280px] h-auto` : `w-[${width}px] h-[${height}px]`}`
	);
</script>

<figure class={figureClasses}>
	<img src={imgURL} alt="IMG" class={imgClasses} />
</figure>
{#if caption}
	<figcaption class="mt-2 text-{alignment}">{@html caption}</figcaption>
{/if}
