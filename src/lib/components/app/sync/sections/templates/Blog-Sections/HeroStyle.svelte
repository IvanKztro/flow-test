<script>
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
    import { ChevronRight } from 'lucide-svelte';

	// Array de objetos con los datos de las tarjetas
	const cards = [
		{
			category: 'Business insight',
			title: 'How to get buy-in and budget for direct hiring',
			imgSrc:
				'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Louise Donadieu',
			authorTitle: 'Strategic Marketing Consultant',
			link: '#'
		},
		{
			category: 'Marketing strategies',
			title: 'The future of social media marketing',
			imgSrc:
				'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'John Smith',
			authorTitle: 'Digital Marketing Expert',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-8 sm:grid-cols-2 sm:items-center">
		{#each cards as card, index}
			<Card.Root class="sm:order-{index % 2 === 0 ? '2' : '1'}">
				<div class="relative rounded-lg pt-[50%] sm:pt-[100%]">
					<img
						class="absolute start-0 top-0 size-full rounded-lg object-cover"
						src={card.imgSrc}
						alt="Image Description"
					/>
				</div>
			</Card.Root>
			<!-- End Col -->

			<Card.Root class="sm:order-{index % 2 === 0 ? '1' : '2'}">
				<Card.Header>
					<Badge>
						{card.category}s
					</Badge>
					<Card.Title class="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
						<a class="hover:text-blue-600" href={card.link}>
							{card.title}
						</a>
					</Card.Title>
				</Card.Header>

				<Card.Content>
					<!-- Avatar -->
					<div class="mt-6 flex items-center sm:mt-10">
						<Avatar.Root class="flex-shrink-0">
							<Avatar.Image
								class="size-10 rounded-full sm:h-14 sm:w-14"
								src={card.authorImg}
								alt="Image Description"
							/>
							<Avatar.Fallback>AD</Avatar.Fallback>
						</Avatar.Root>
						<div class="ms-3 sm:ms-4">
							<p class="font-semibold text-gray-800 sm:mb-1">
								{card.authorName}
							</p>
							<p class="text-xs text-gray-500">
								{card.authorTitle}
							</p>
						</div>
					</div>
					<!-- End Avatar -->
				</Card.Content>

				<Card.Footer>
					<div class="mt-5">
						<a
							class="inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline"
							href={card.link}
						>
							Read more

                            <ChevronRight />
						</a>
					</div>
				</Card.Footer>
			</Card.Root>
			<!-- End Col -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Blog -->
