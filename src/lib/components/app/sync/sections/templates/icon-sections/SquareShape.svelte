<script lang="ts">
	import { User, Package, Zap, Trophy, Users, ThumbsUp, Briefcase, Home } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';

	const cards = [
		{
			icon: User,
			title: 'Creative minds'
		},
		{
			icon: Package,
			title: 'Effortless updates'
		},
		{
			icon: Zap,
			title: 'Strong empathy'
		},
		{
			icon: Trophy,
			title: 'Conquer the best'
		},
		{
			icon: Users,
			title: 'Designing for people'
		},
		{
			icon: ThumbsUp,
			title: 'Simple and affordable'
		},
		{
			icon: Briefcase,
			title: 'Get freelance work'
		},
		{
			icon: Home,
			title: 'Sell your goods'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
		{#each cards as { icon: Icon, title }}
			<!-- Icon Block -->
			<Card.Root
				class="flex h-36 flex-col justify-center rounded-xl border border-gray-200 p-4 text-center sm:h-56 md:p-5"
			>
				<Card.Header>
					<div
						class="mx-auto flex size-12 items-center justify-center rounded-lg"
					>
						<Icon />
					</div>
				</Card.Header>
				<Card.Content>
					<div class="mt-3">
						<Card.Title class="text-sm font-semibold text-gray-800 sm:text-lg">
							{title}
						</Card.Title>
					</div>
				</Card.Content>
			</Card.Root>
			<!-- End Icon Block -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Icon Blocks -->
<!-- End Icon Blocks -->
