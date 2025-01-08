<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
    import { Button } from "$lib/components/ui/button";
    import { CircleX, CircleCheck  } from 'lucide-svelte';

	const plans = [
		{
			title: 'Professional',
			description: 'Everything a small team needs.',
			price: 18,
			currency: 'USD',
			period: 'monthly',
			features: [
				{ name: 'Up to 10 people', available: true },
				{ name: 'Collect data', available: true },
				{ name: 'Code extensibility', available: true },
				{ name: 'Custom reports', available: false },
				{ name: 'Product support', available: false },
				{ name: 'Activity reporting', available: false }
			],
			note: 'Cancel anytime. No card required.',
			button: 'Start free trial'
		},
		{
			title: 'Teams',
			description: 'For growing businesses.',
			price: 36.99,
			currency: 'USD',
			period: 'monthly',
			features: [
				{ name: 'Up to 10 people', available: true },
				{ name: 'Collect data', available: true },
				{ name: 'Code extensibility', available: true },
				{ name: 'Custom reports', available: true },
				{ name: 'Product support', available: true },
				{ name: 'Activity reporting', available: true }
			],
			note: 'Cancel anytime. No card required.',
			button: 'Start free trial',
			popular: true
		}
	];

	const comparisonData = [
		{
			category: 'General',
			features: [
				{ name: 'Number of seats', values: [1, 'Up to 3', 'Up to 10', 'Unlimited'] },
				{ name: 'Storage', values: ['15 GB', '1 TB', '15 TB', 'Unlimited'] },
				{ name: 'Email sharing', values: [true, true, true, true] },
				{ name: 'Any time, anywhere access', values: [false, true, true, true] }
			]
		},
		{
			category: 'Financial data',
			features: [
				{ name: 'Open/High/Low/Close', values: [false, false, true, true] },
				{ name: 'Price-volume difference indicator', values: [false, true, true, true] }
			]
		},
		{
			category: 'On-chain data',
			features: [
				{ name: 'Network growth', values: [false, false, true, true] },
				{ name: 'Average token age consumed', values: [false, false, true, true] },
				{ name: 'Exchange flow', values: [false, false, false, true] },
				{ name: 'Total ERC20 exchange funds flow', values: [false, true, true, true] },
				{ name: 'Transaction volume', values: [false, false, true, true] },
				{ name: 'Total circulation (beta)', values: [false, false, true, true] },
				{ name: 'Velocity of tokens (beta)', values: [false, false, true, true] },
				{ name: 'ETH gas used', values: [false, true, true, true] }
			]
		},
		{
			category: 'Social data',
			features: [
				{ name: 'Dev activity', values: [false, false, true, true] },
				{ name: 'Topic search', values: [false, true, true, true] },
				{ name: 'Relative social dominance', values: [false, false, true, true] }
			]
		}
	];
</script>

<!-- Features -->
<div class="overflow-hidden">
	<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
		<!-- Title -->
		<div class="mx-auto mb-8 max-w-2xl text-center lg:mb-14">
			<h2 class="text-3xl font-bold text-gray-800 lg:text-4xl">
				Solo, agency or team? We’ve got you covered.
			</h2>
		</div>
		<!-- End Title -->

		<div class="relative xl:mx-auto xl:w-10/12">
			<!-- Grid -->
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
				{#each plans as plan}
					<Card.Root>
						<Card.Header>
							<Card.Title>{plan.title}</Card.Title>
							<Card.Description>{plan.description}</Card.Description>
							{#if plan.popular}
								<span
									class="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white"
								>
									Most popular
								</span>
							{/if}
						</Card.Header>
						<Card.Content>
							<div class="mt-5">
								<span class="text-6xl font-bold text-gray-800">${plan.price}</span>
								<span class="text-lg font-bold text-gray-800">.00</span>
								<span class="ms-3 text-gray-500">{plan.currency} / {plan.period}</span>
							</div>
							<div
								class="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0"
							>
								<!-- List -->
								<ul class="space-y-2 text-sm sm:text-base">
									{#each plan.features.slice(0, 3) as feature}
										<li class="flex space-x-3">
                                            <CircleCheck />
											<span class="text-gray-800">{feature.name}</span>
										</li>
									{/each}
								</ul>
								<!-- End List -->

								<!-- List -->
								<ul class="space-y-2 text-sm sm:text-base">
									{#each plan.features.slice(3) as feature}
										<li class="flex space-x-3">
                                            <CircleX />
											<span class="text-gray-800">{feature.name}</span>
										</li>
									{/each}
								</ul>
								<!-- End List -->
							</div>
						</Card.Content>
						<Card.Footer>
							<div class="grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
								<div>
									<p class="text-sm text-gray-500">{plan.note}</p>
								</div>
								<div class="flex justify-end">
									<Button>
										{plan.button}
									</Button>
								</div>
							</div>
						</Card.Footer>
					</Card.Root>
				{/each}
			</div>
			<!-- End Grid -->
		</div>

		<div class="mt-7 text-center">
			<p class="text-xs text-gray-400">Prices in USD. Taxes may apply.</p>
		</div>
	</div>
</div>
<!-- End Features -->

<!-- Comparison Table -->
<div class="relative">
	<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20">
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold md:text-3xl md:leading-tight">Compare plans</h2>
		</div>

		<!-- Table -->
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="col-span-2">Features</Table.Head>
					<Table.Head>Free</Table.Head>
					<Table.Head>Startup</Table.Head>
					<Table.Head>Team</Table.Head>
					<Table.Head>Enterprise</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each comparisonData as category}
					<Table.Row>
						<Table.Cell class="col-span-6 font-bold">{category.category}</Table.Cell>
					</Table.Row>
					{#each category.features as feature}
						<Table.Row>
							<Table.Cell class="col-span-2">{feature.name}</Table.Cell>
							{#each feature.values as value}
								<Table.Cell>
									{#if typeof value === 'boolean'}
										{#if value}
											<!-- <svg
												class="h-5 w-5 text-blue-600"
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<polyline points="20 6 9 17 4 12" />
											</svg> -->
										{:else}
											<svg
												class="h-5 w-5 text-gray-400"
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M5 12h14" />
											</svg>
										{/if}
									{:else}
										{value}
									{/if}
								</Table.Cell>
							{/each}
						</Table.Row>
					{/each}
				{/each}
			</Table.Body>
		</Table.Root>
		<!-- End Table -->

		<div class="mt-6 hidden lg:block">
			<div class="grid grid-cols-6 gap-6">
				<div class="col-span-2"></div>
				<div class="col-span-1">
					<Button>
						Get started
					</Button>
				</div>
				<div class="col-span-1">
					<Button>
						Get started
					</Button>
				</div>
				<div class="col-span-1"> 
					<Button>
						Get started
					</Button>
				</div>
				<div class="col-span-1">
					<Button>
						Get started
					</Button>
				</div>
			</div>
		</div>

		<div class="mt-8 flex items-center justify-center gap-x-3 md:mt-12">
			<p class="text-sm text-gray-500">Need a custom plan?</p>
			<Button>
				Contact us
			</Button>
		</div>
	</div>
</div>
<!-- End Comparison Table -->
