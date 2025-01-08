<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	const cards = [
		{
			imgSrc:
				'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80',
			title: 'Workplace personalities',
			link: '#'
		},
		{
			imgSrc:
				'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
			title: 'Women in engineering',
			link: '#'
		},
		{
			imgSrc:
				'https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
			title: 'Pride 2021',
			link: '#'
		},
		{
			imgSrc:
				'https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
			title: 'Data at Preline',
			link: '#'
		},
		{
			imgSrc:
				'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80',
			title: 'Empowered management',
			link: '#'
		}
	];
</script>

<div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-12">
		{#each cards as card, index}
			<div
				class="col-span-12 {index === 0
					? 'sm:col-span-7 sm:self-end md:col-span-8 lg:col-span-5 lg:col-start-3'
					: ''} {index === 1
					? 'sm:col-span-5 sm:self-end md:col-span-4 lg:col-span-3'
					: ''} {index === 2 ? 'md:col-span-4' : ''} {index > 2
					? 'sm:col-span-6 md:col-span-4'
					: ''}"
			>
				<!-- Card -->
				<Card.Root class="group relative block overflow-hidden rounded-xl">
					<Card.Content class="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
						<img
							class="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={card.imgSrc}
							alt="Image Description"
						/>
					</Card.Content>
					<Card.Footer class="absolute bottom-0 end-0 start-0 justify-center p-2 sm:p-4">
						<Badge class="rounded-lg p-1 text-sm font-bold md:text-xl">
							{card.title}
						</Badge>
					</Card.Footer>
				</Card.Root>
				<!-- End Card -->
			</div>
		{/each}
	</div>
	<!-- End Grid -->
</div>
