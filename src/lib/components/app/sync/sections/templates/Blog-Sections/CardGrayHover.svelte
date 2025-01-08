<script>
	import * as Card from '$lib/components/ui/card';
	import { ChevronRight } from 'lucide-svelte';

	const cards = [
		{
			title: 'Unity’s inside sales team drives 80% of its revenue with Preline.',
			imgSrc:
				'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
			link: '#'
		},
		{
			title: 'Living Spaces creates a unified experience across the customer journey.',
			imgSrc:
				'https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
			link: '#'
		},
		{
			title: 'Atlassian powers sales and support at scale with Preline.',
			imgSrc:
				'https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Customer stories</h2>
		<p class="mt-1 text-gray-600">
			See how game-changing companies are making the most of every engagement with Preline.
		</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<Card.Root class="group rounded-xl p-5 transition-all hover:bg-gray-100">
				<a href={card.link}>
					<div class="aspect-w-full aspect-h-full">
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img class="w-auto rounded-xl object-cover" src={card.imgSrc} alt="Image Description" />
					</div>
					<Card.Content>
						<Card.Title class="mt-5 text-xl text-gray-800">{card.title}</Card.Title>
						<p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
							Learn more
							<ChevronRight />
						</p>
					</Card.Content>
				</a>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Blog -->
