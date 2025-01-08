<script>
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { ChevronRight } from 'lucide-svelte';

	const cards = [
		{
			title: 'Announcing a free plan for small teams',
			description: 'At Wake, our mission has always been focused on bringing openness.',
			imgSrc:
				'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Lauren Waller',
			link: '#'
		},
		{
			title: 'How Google Assistant now helps you record stories for kids',
			description:
				'Google is constantly updating its consumer AI, Google Assistant, with new features.',
			imgSrc:
				'https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Aaron Larsson',
			link: '#'
		},
		{
			title: "Front accounts - let's work together",
			description: 'Are you an accountant? Are you a company formation advisor?',
			imgSrc:
				'https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Lauren Waller',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">The Blog</h2>
		<p class="mt-1 text-gray-600">
			See how game-changing companies are making the most of every engagement with Preline.
		</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<Card.Root
				class="group flex h-full flex-col rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:border-transparent hover:shadow-lg"
			>
				<a href={card.link}>
					<div class="aspect-w-16 aspect-h-11">
						<img class="w-full rounded-xl object-cover" src={card.imgSrc} alt="Image Description" />
					</div>
					<Card.Content class="my-6">
						<Card.Title class="text-xl font-semibold text-gray-800">{card.title}</Card.Title>
						<Card.Description class="mt-5 text-gray-600">{card.description}</Card.Description>
					</Card.Content>
					<div class="mt-auto flex items-center gap-x-3">
						<Avatar.Root>
							<Avatar.Image
								class="size-10 rounded-full"
								src={card.authorImg}
								alt="Image Description"
							/>
							<Avatar.Fallback>AD</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<h5 class="text-sm text-gray-800">By {card.authorName}</h5>
						</div>
					</div>
				</a>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->

	<!-- Card -->
	<div class="mt-12 text-center">
		<a
			class="inline-flex items-center gap-x-1 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-blue-600 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
			href="#"
		>
			Read more
			<ChevronRight />
		</a>
	</div>
	<!-- End Card -->
</div>
<!-- End Card Blog -->
