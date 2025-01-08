<script lang="ts">
	import { Check, Minus } from 'lucide-svelte';
	import * as Table from '$lib/components/ui/table';

	type Feature = {
		feature: string;
		included: boolean;
	};

	type Plan = {
		name: string;
		features: {
			'Financial data': Feature[];
			'On-chain data': Feature[];
			'Social data': Feature[];
		};
	};

	const plansTable: Plan[] = [
		{
			name: 'Free',
			features: {
				'Financial data': [
					{ feature: 'Open/High/Low/Close', included: true },
					{ feature: 'Price-volume difference indicator', included: false }
				],
				'On-chain data': [
					{ feature: 'Network growth', included: true },
					{ feature: 'Average token age consumed', included: true },
					{ feature: 'Exchange flow', included: false },
					{ feature: 'Total ERC20 exchange funds flow', included: false },
					{ feature: 'Transaction volume', included: true },
					{ feature: 'Total circulation (beta)', included: true },
					{ feature: 'Velocity of tokens (beta)', included: true },
					{ feature: 'ETH gas used', included: true }
				],
				'Social data': [
					{ feature: 'Dev activity', included: false },
					{ feature: 'Topic search', included: true },
					{ feature: 'Relative social dominance', included: false },
					{ feature: 'Total social volume', included: false }
				]
			}
		},
		{
			name: 'Startup',
			features: {
				'Financial data': [
					{ feature: 'Open/High/Low/Close', included: true },
					{ feature: 'Price-volume difference indicator', included: true }
				],
				'On-chain data': [
					{ feature: 'Network growth', included: false },
					{ feature: 'Average token age consumed', included: false },
					{ feature: 'Exchange flow', included: true },
					{ feature: 'Total ERC20 exchange funds flow', included: true },
					{ feature: 'Transaction volume', included: true },
					{ feature: 'Total circulation (beta)', included: true },
					{ feature: 'Velocity of tokens (beta)', included: false },
					{ feature: 'ETH gas used', included: true }
				],
				'Social data': [
					{ feature: 'Dev activity', included: true },
					{ feature: 'Topic search', included: true },
					{ feature: 'Relative social dominance', included: false },
					{ feature: 'Total social volume', included: false }
				]
			}
		},
		{
			name: 'Team',
			features: {
				'Financial data': [
					{ feature: 'Open/High/Low/Close', included: true },
					{ feature: 'Price-volume difference indicator', included: true }
				],
				'On-chain data': [
					{ feature: 'Network growth', included: true },
					{ feature: 'Average token age consumed', included: true },
					{ feature: 'Exchange flow', included: true },
					{ feature: 'Total ERC20 exchange funds flow', included: true },
					{ feature: 'Transaction volume', included: true },
					{ feature: 'Total circulation (beta)', included: true },
					{ feature: 'Velocity of tokens (beta)', included: true },
					{ feature: 'ETH gas used', included: true }
				],
				'Social data': [
					{ feature: 'Dev activity', included: false },
					{ feature: 'Topic search', included: true },
					{ feature: 'Relative social dominance', included: true },
					{ feature: 'Total social volume', included: true }
				]
			}
		},
		{
			name: 'Enterprise',
			features: {
				'Financial data': [
					{ feature: 'Open/High/Low/Close', included: true },
					{ feature: 'Price-volume difference indicator', included: true }
				],
				'On-chain data': [
					{ feature: 'Network growth', included: true },
					{ feature: 'Average token age consumed', included: true },
					{ feature: 'Exchange flow', included: true },
					{ feature: 'Total ERC20 exchange funds flow', included: true },
					{ feature: 'Transaction volume', included: true },
					{ feature: 'Total circulation (beta)', included: true },
					{ feature: 'Velocity of tokens (beta)', included: true },
					{ feature: 'ETH gas used', included: true }
				],
				'Social data': [
					{ feature: 'Dev activity', included: true },
					{ feature: 'Topic search', included: true },
					{ feature: 'Relative social dominance', included: true },
					{ feature: 'Total social volume', included: true }
				]
			}
		}
	];

	const categories: ('Financial data' | 'On-chain data' | 'Social data')[] = [
		'Financial data',
		'On-chain data',
		'Social data'
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Comparison table -->
	<div class="mt-20 lg:mt-32">
		<div class="mb-10 lg:mb-20 lg:text-center">
			<h3 class="text-2xl font-semibold">Compare plans</h3>
		</div>
	</div>

	<!-- xs to lg -->
	<div class="space-y-24 lg:hidden">
		{#each plansTable as plan}
			<section>
				<div class="mb-4 px-4">
					<h2 class="text-lg font-medium leading-6 text-gray-800">{plan.name}</h2>
				</div>

				{#each categories as category}
					<Table.Root class="w-full">
						<Table.Caption
							class=":border-neutral-700 border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800"
						>
							{category}
						</Table.Caption>
						<Table.Header>
							<Table.Row>
								<Table.Head class="sr-only" scope="col">Feature</Table.Head>
								<Table.Head class="sr-only" scope="col">Included</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body class="divide-y divide-gray-200">
							{#each plan.features[category] as feature}
								<Table.Row class="border-t border-gray-200">
									<Table.Head
										class="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600"
										scope="row"
									>
										{feature.feature}
									</Table.Head>
									<Table.Cell class="py-5 pe-4">
										{#if feature.included}
											<Check class="ms-auto size-5 flex-shrink-0 text-blue-600" />
											<span class="sr-only">Yes</span>
										{:else}
											<Minus class="ms-auto size-5 flex-shrink-0 text-gray-400" />
											<span class="sr-only">No</span>
										{/if}
									</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				{/each}
			</section>
		{/each}
	</div>
	<!-- End xs to lg -->

	<!-- lg+ -->
	<div class="hidden lg:block">
		<Table.Root class="h-px w-full">
			<Table.Caption class="sr-only">Pricing plan comparison</Table.Caption>
			<Table.Header class="sticky inset-x-0 top-0 bg-white">
				<Table.Row>
					<Table.Head
						class="py-4 pe-6 ps-6 text-start text-sm font-medium text-gray-800"
						scope="col"
					>
						<span>Plans</span>
					</Table.Head>
					{#each plansTable as plan}
						<Table.Head
							class="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800"
							scope="col"
						>
							{plan.name}
						</Table.Head>
					{/each}
				</Table.Row>
			</Table.Header>
			<Table.Body class="divide-y divide-gray-200 border-t border-gray-200">
				{#each categories as category}
					<Table.Row>
						<Table.Head
							class="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800"
							colspan={plansTable.length + 1}
							scope="colgroup"
						>
							{category}
						</Table.Head>
					</Table.Row>
					{#each plansTable[0].features[category] as feature, index}
						<Table.Row>
							<Table.Head
								class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600"
								scope="row"
							>
								{feature.feature}
							</Table.Head>
							{#each plansTable as plan}
								<Table.Cell class="px-6 py-5">
									{#if plan.features[category][index].included}
										<Check class="mx-auto size-5 flex-shrink-0 text-blue-600" />
										<span class="sr-only">Included in {plan.name}</span>
									{:else}
										<Minus class="mx-auto size-5 flex-shrink-0 text-gray-400" />
										<span class="sr-only">Not included in {plan.name}</span>
									{/if}
								</Table.Cell>
							{/each}
						</Table.Row>
					{/each}
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<!-- End lg+ -->
</div>
