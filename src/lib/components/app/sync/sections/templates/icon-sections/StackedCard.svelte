<script>
	import * as Card from '$lib/components/ui/card';
	import { Globe, Briefcase, ShoppingCart, Aperture, TrendingUp, Star } from 'lucide-svelte';

	const cards = [
		{
			icon: Globe,
			title: 'Build your portfolio',
			description: 'The simplest way to keep your portfolio always up-to-date.'
		},
		{
			icon: Briefcase,
			title: 'Get freelance work',
			description: 'New design projects delivered to your inbox each morning.'
		},
		{
			icon: ShoppingCart,
			title: 'Sell your goods',
			description: 'Get your goods in front of millions of potential customers with ease.'
		},
		{
			icon: Aperture,
			title: 'Get freelance work',
			description: 'New design projects delivered to your inbox each morning.'
		},
		{
			icon: TrendingUp,
			title: 'Sell your goods',
			description: 'Get your goods in front of millions of potential customers with ease.'
		},
		{
			icon: Star,
			title: 'Build your portfolio',
			description: 'The simplest way to keep your portfolio always up-to-date.'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid items-center gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
		{#each cards as { icon: Icon, title, description }}
			<Card.Root>
				<Card.Header>
					<div class="mb-3 flex items-center gap-x-4">
						<div
							class="inline-flex size-[62px] items-center justify-center rounded-full border-4"
						>
							<Icon class="size-6 flex-shrink-0" />
						</div>
						<div class="flex-shrink-0">
							<Card.Title class="block text-lg font-semibold text-gray-800">
								{title}
							</Card.Title>
						</div>
					</div>
				</Card.Header>
				<Card.Content>
					<p class="text-gray-600">
						{description}
					</p>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
