<script>
    import { Badge } from "$lib/components/ui/badge";
    import * as Card from "$lib/components/ui/card";


	const cards = [
		{
			title: 'eYoga',
			description: 'A revamped and dynamic approach to yoga analytics',
			imgSrc:
				'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '#',
			tags: ['Discovery', 'Brand Guidelines', 'Yoga']
		},
		{
			title: 'Nike React',
			description: "Rewriting sport's playbook for billions of athletes",
			imgSrc:
				'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '#',
			tags: ['Brand Strategy', 'Visual Identity']
		},
		{
			title: 'Day Spa',
			description: 'Designing a new cocktail can',
			imgSrc:
				'https://images.unsplash.com/photo-1649999920973-ab6bfd0c0017?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '#',
			tags: ['Brand Strategy', 'Visual Identity']
		},
		{
			title: 'Diamond Dynamics',
			description: 'From cutting-edge equipment to stylish apparel',
			imgSrc:
				'https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '#',
			tags: ['Sports Gear', 'Equipment', 'Discovery']
		}
	];
</script>

<div class="grid grid-cols-2 gap-4 py-12 sm:gap-6 md:gap-8 lg:gap-12 pr-40 pl-20">
	{#each cards as card}
		<a class="group block" href={card.link}>
			<Card.Root class="overflow-hidden rounded-2xl bg-gray-100">
				<div class="aspect-w-16 aspect-h-9">
					<img
						src={card.imgSrc}
						alt="Image Description"
						class="h-96 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
					/>
				</div>
				<Card.Content class="pt-4">
					<Card.Title
						class="relative inline-block text-lg font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-lime-400 before:transition group-hover:before:scale-x-100"
					>
						{card.title}
					</Card.Title>
					<Card.Description class="mt-1 text-gray-600">
						{card.description}
					</Card.Description>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each card.tags as tag}
							<Badge
								class="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 sm:text-sm"
							>
								{tag}
							</Badge>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</div>
