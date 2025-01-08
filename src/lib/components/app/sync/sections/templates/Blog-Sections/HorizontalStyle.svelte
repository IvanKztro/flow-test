<script>
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
    import { Badge } from "$lib/components/ui/badge";


	const cards = [
		{
			category: 'Business',
			title: 'Preline becomes an official Instagram Marketing Partner',
			description: "Great news we're eager to share.",
			imgSrc:
				'https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Aaron Larsson',
			date: 'Feb 15, 2021',
			link: '#'
		},
		{
			category: 'Announcements',
			title: 'Announcing a free plan for small teams',
			description: 'At Wake, our mission has always been focused on bringing openness.',
			imgSrc:
				'https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Hanna Wolfe',
			date: 'Feb 4, 2021',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 lg:grid-cols-2">
		{#each cards as card}
			<Card.Root class="group rounded-xl sm:flex">
				<a
					href={card.link}
					class="relative h-[200px] w-full flex-shrink-0 overflow-hidden rounded-xl sm:h-[350px] sm:w-[250px]"
				>
					<img
						class="absolute start-0 top-0 size-full h-full w-full object-cover"
						src={card.imgSrc}
						alt="Image Description"
					/>
				</a>

				<Card.Content class="flex h-full grow flex-col p-4 sm:p-6">
					<div class="mb-3">
						<Badge>
							{card.category}
						</Badge>
					</div>
					<Card.Title class="text-lg font-semibold text-gray-800 group-hover: sm:text-2xl">
						{card.title}
					</Card.Title>
					<Card.Description class="mt-2 text-gray-600">
						{card.description}
					</Card.Description>

					<div class="mt-5 sm:mt-auto">
						<!-- Avatar -->
						<div class="flex items-center">
							<Avatar.Root class="flex-shrink-0">
								<Avatar.Image
									class="size-[46px] rounded-full"
									src={card.authorImg}
									alt={card.authorName}
								/>
								<Avatar.Fallback>AD</Avatar.Fallback>
							</Avatar.Root>
							<div class="ms-2.5 sm:ms-4">
								<h4 class="font-semibold text-gray-800">
									{card.authorName}
								</h4>
								<p class="text-xs text-gray-500">
									{card.date}
								</p>
							</div>
						</div>
						<!-- End Avatar -->
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Blog -->
