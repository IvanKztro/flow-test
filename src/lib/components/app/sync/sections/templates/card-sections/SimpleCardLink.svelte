<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { UserRound , CircleHelp , Mail } from 'lucide-svelte';

	const cards = [
		{
			icon: UserRound , 
			title: 'Ask our community',
			description: 'Get help from 40k+ Preline users'
		},
		{
			icon: CircleHelp ,
			title: 'Get help in the app',
			description: 'Just head to «Help» in the app'
		},
		{
			icon: Mail,
			title: 'Email us',
			description: 'Reach us at info@site.com'
		}
	];
</script>

<!-- Card Section -->
<div class="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
		{#each cards as {icon: Icon, title, description}}
			<Card.Root>
				<Card.Header class="p-4 md:p-5">
					<div class="flex">
						<Icon class="mt-1 size-5 flex-shrink-0 text-gray-800" />
						<div class="ms-5 grow">
							<Card.Title class="font-semibold text-gray-800 group-hover:text-blue-600">
								{title}
							</Card.Title>
							<Card.Description class="text-sm text-gray-500">
								{description}
							</Card.Description>
						</div>
					</div>
				</Card.Header>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Section -->
