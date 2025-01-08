<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Table from '$lib/components/ui/table'; 

	let pricingPlans = [
		{
			name: 'Free',
			price: 'Free',
			features: ['1 user', 'Plan features', 'Product support'],
			cta: 'Sign up'
		},
		{
			name: 'Startup',
			price: '$39',
			features: ['2 users', 'Plan features', 'Product support'],
			cta: 'Sign up'
		},
		{
			name: 'Team',
			price: '$89',
			features: ['5 users', 'Plan features', 'Product support'],
			cta: 'Sign up'
		},
		{
			name: 'Enterprise',
			price: '$149',
			features: ['10 users', 'Plan features', 'Product support'],
			cta: 'Sign up'
		}
	];

	let comparisonData = [
		{
			category: 'Financial data',
			features: [
				{ name: 'Open/High/Low/Close', values: [true, true, true, true] },
				{ name: 'Price-volume difference indicator', values: [false, true, true, true] }
			]
		},
		{
			category: 'On-chain data',
			features: [
				{ name: 'Network growth', values: [true, false, true, true] },
				{ name: 'Average token age consumed', values: [false, true, true, true] },
				{ name: 'Exchange flow', values: [false, false, true, false] },
				{ name: 'Total ERC20 exchange funds flow', values: [false, false, true, true] },
				{ name: 'Transaction volume', values: [true, true, true, true] },
				{ name: 'Total circulation (beta)', values: [false, false, true, true] },
				{ name: 'Velocity of tokens (beta)', values: [true, true, false, true] },
				{ name: 'ETH gas used', values: [false, true, true, true] }
			]
		},
		{
			category: 'Social data',
			features: [
				{ name: 'Dev activity', values: [false, false, true, true] },
				{ name: 'Topic search', values: [true, true, true, true] },
				{ name: 'Relative social dominance', values: [false, false, true, true] },
				{ name: 'Total social volume', values: [true, true, true, true] }
			]
		}
	];
</script>

<!-- Pricing -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
			Find the right plan for your team
		</h2>
		<p class="mt-1 text-gray-600">Pay as you go service, cancel anytime.</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div
		class="relative mt-12 before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)]"
	>
		<div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
			{#each pricingPlans as plan}
				<!-- Card -->
				<div class="flex h-full flex-col text-center">
					<div class="bg-white px-8 pb-5 pt-8">
						<h4 class="text-lg font-medium text-gray-800">{plan.name}</h4>
					</div>

					<div class="h-full bg-white px-8 lg:mt-px lg:py-5">
						<span class="mt-7 text-5xl font-bold text-gray-800">
							{plan.price}
						</span>
					</div>

					<div class="flex justify-center bg-white px-8 pt-7 lg:mt-px">
						<ul class="space-y-2.5 text-center text-sm">
							{#each plan.features as feature}
								<li class="text-gray-800">
									{feature}
								</li>
							{/each}
						</ul>
					</div>

					<div class="bg-white px-8 py-8">
						<a
							class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:pointer-events-none disabled:opacity-50"
							href="#"
						>
							{plan.cta}
						</a>
					</div>
				</div>
				<!-- End Card -->
			{/each}
		</div>
	</div>
	<!-- End Grid -->

	<!-- Comparison table -->
	<div class="mt-20">
		<Collapsible.Root>
			<Collapsible.Trigger
				class="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50"
			>
				<span>View pricing comparison</span>
				<svg
					class="size-4 flex-shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg
				>
			</Collapsible.Trigger>
			<Collapsible.Content class="w-full overflow-hidden transition-[height] duration-300">
				<Table.Root>
					<Table.Caption>Pricing plan comparison</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head class="py-4 pe-6 ps-6 text-start text-sm font-medium text-gray-800"
								>Feature</Table.Head
							>
							{#each pricingPlans as plan}
								<Table.Head
									class="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800"
									>{plan.name}</Table.Head
								>
							{/each}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each comparisonData as data}
							<Table.Row>
								<Table.Cell
									class="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800"
									colspan={pricingPlans.length + 1}>{data.category}</Table.Cell
								>
							</Table.Row>
							{#each data.features as feature}
								<Table.Row>
									<Table.Cell
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600"
										>{feature.name}</Table.Cell
									>
									{#each feature.values as value}
										<Table.Cell class="px-6 py-5">
											{#if value}
												<svg
													class="mx-auto size-5 flex-shrink-0 text-blue-600"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg
												>
											{:else}
												<svg
													class="mx-auto size-5 flex-shrink-0 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"><path d="M5 12h14" /></svg
												>
											{/if}
										</Table.Cell>
									{/each}
								</Table.Row>
							{/each}
						{/each}
					</Table.Body>
				</Table.Root>
			</Collapsible.Content>
		</Collapsible.Root>
	</div>
	<!-- End Comparison table -->
</div>
<!-- End Pricing -->
