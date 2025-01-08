<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";

	let {
		data
	}: {
		data: {
			caption: string;
			service: string;
			height: number;
			width: number;
			embed: string;
			source: string;
		};
	} = $props();
</script>

<section class="container mx-auto  ">
	<!-- Video Embed -->
	<div class="a bg-gray-200 w-full h-[300px]">
		<iframe
			src={data.embed}
			width={data.width}
			height={data.height}
			class="h-full w-full border-none"
			allowfullscreen
			loading="lazy"
			title="Embedded Video"
		></iframe>
	</div>
	<!-- Caption -->
	<Button
		href={data.source}
        variant="link"
		target="_blank"
		rel="noopener noreferrer"
		class="mt-1 block text-center text-blue-600 underline transition-colors hover:text-blue-800"
	>
		{data.caption}
	</Button>
</section>
