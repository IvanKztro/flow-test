<script>
	import * as Card from '$lib/components/ui/card';


	const cards = [
		{
			title: 'Unity’s inside sales team drives 80% of its revenue with Preline.',
			imgSrc:
				'https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
			date: 'September 12, 2022',
			link: '#'
		},
		{
			title: 'Living Spaces creates a unified experience across the customer journey.',
			imgSrc:
				'https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80',
			date: 'September 12, 2022',
			link: '#'
		},
		{
			title: 'Atlassian powers sales and support at scale with Preline.',
			imgSrc:
				'https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
			date: 'September 12, 2022',
			link: '#'
		},
		{
			title: 'Everything you need to know about Preline Pro.',
			imgSrc:
				'https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
			date: 'September 12, 2022',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mb-10 max-w-2xl">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Customer stories</h2>
		<p class="mt-1 text-gray-600">
			See how game-changing companies are making the most of every engagement with Preline.
		</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each cards as card}
			<Card.Root class="group block rounded-xl">
				<a href={card.link}>
					<div class="aspect-w-16 aspect-h-9">
						<img class="w-full h-auto rounded-xl object-cover" src={card.imgSrc} alt="Image Description" />
					</div>
					<Card.Content>
						<Card.Title class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600"
							>{card.title}</Card.Title
						>
						<p class="mt-2 text-sm text-gray-600">{card.date}</p>
					</Card.Content>
				</a>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Blog -->
