<script>
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';

	const cards = [
		{
			title: 'Facebook is creating a news section in Watch to feature breaking news',
			description: 'Facebook launched the Watch platform in August',
			imgSrc:
				'https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Gloria',
			date: 'Jan 09, 2021',
			link: '#'
		},
		{
			title: 'What CFR (Conversations, Feedback, Recognition) really is about',
			description: 'For a lot of people these days, Measure What Matters.',
			imgSrc:
				'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
			authorImg:
				'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
			authorName: 'Gloria',
			date: 'May 30, 2021',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 lg:grid-cols-2">
		{#each cards as card}
			<Card.Root class="group relative block overflow-hidden rounded-xl">
				<a href={card.link}>
					<div class="relative h-[350px] w-full flex-shrink-0">
						<img
							class="absolute start-0 top-0 h-full w-full object-cover"
							src={card.imgSrc}
							alt="Image Description"
						/>
						<div class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-gray-900/70"></div>
					</div>
					<div class="absolute inset-x-0 top-0 z-10 flex h-full flex-col p-4 sm:p-6">
						<Avatar.Root>
							<Avatar.Image
								src={card.authorImg}
								alt={card.authorName}
							/>
							<Avatar.Fallback>AD</Avatar.Fallback>
						</Avatar.Root>
                        <div class="ms-2.5 sm:ms-4">
                            <h4 class="font-semibold text-white">{card.authorName}</h4>
                            <p class="text-xs text-white/80">{card.date}</p>
                        </div>
					</div>
					<div class="absolute inset-x-0 bottom-0 z-10 flex h-auto flex-col p-4 sm:p-6">
						<Card.Title
							class="text-lg font-semibold text-white group-hover:text-white/80 sm:text-3xl"
							>{card.title}</Card.Title
						>
						<Card.Description class="mt-2 text-white/80">{card.description}</Card.Description>
					</div>
				</a>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Blog -->
