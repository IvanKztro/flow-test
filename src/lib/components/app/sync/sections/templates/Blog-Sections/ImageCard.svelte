<script>
    import { ChevronRight } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';

	const cards = [
		{
			category: 'Product',
			title: 'Better is when everything works together',
			imgSrc:
				'https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
			link: '#'
		},
		{
			category: 'Business',
			title: 'What CFR really is about',
			imgSrc:
				'https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80',
			link: '#'
		},
		{
			category: 'Business',
			title: 'Should Product Owners think like entrepreneurs?',
			imgSrc:
				'https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
			link: '#'
		},
		{
			category: 'Facilitate',
			title: 'Announcing Front Strategies: Ready-to-use rules',
			imgSrc:
				'https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Read our latest news</h2>
		<p class="mt-1 text-gray-600">
			We've helped some great companies brand, design and get to market.
		</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-4">
		{#each cards as card}
			<Card.Root
				class="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md"
			>
				<a href={card.link}>
					<div class="aspect-w-16 aspect-h-9">
						<img
							class="w-full rounded-t-xl object-cover"
							src={card.imgSrc}
							alt="Image Description"
						/>
					</div>
					<Card.Content class="p-4 md:p-5">
						<p class="mt-2 text-xs uppercase text-gray-600">
							{card.category}
						</p>
						<Card.Title class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
							{card.title}
						</Card.Title>
					</Card.Content>
				</a>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->

	<!-- Card -->
	<div class="text-center">
		<div class="inline-block rounded-full border bg-white shadow-sm">
			<div class="flex items-center gap-x-2 px-4 py-3">
				<p class="text-gray-600">Want to read more?</p>
				<a
					class="inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline"
					href="../docs/index.html"
				>
					Go here
				<ChevronRight />
				</a>
			</div>
		</div>
	</div>
	<!-- End Card -->
</div>
<!-- End Card Blog -->
