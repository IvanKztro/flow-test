<script lang="ts">
	import { Check, Minus, Star } from 'lucide-svelte';
	import { Switch } from '$lib/components/ui/switch';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	let isAnnual = true; 

	const plans = [
		{
			title: 'Free',
			price: 'Free',
			description: 'Forever free',
			features: ['1 user', 'Plan features', 'Product support'],
			mostPopular: false,
			bgColor: '',
			textColor: '',
			borderColor: 'border-gray-200',
			shadow: ''
		},
		{
			title: 'Startup',
			price: '$ 39',
			description: 'All the basics for starting a new business',
			features: ['2 users', 'Plan features', 'Product support'],
			mostPopular: true,
			bgColor: 'bg-blue-100',
			textColor: 'text-blue-800',
			borderColor: 'border-blue-600',
			shadow: 'shadow-xl'
		},
		{
			title: 'Team',
			price: '$ 89',
			description: 'Everything you need for a growing business',
			features: ['5 users', 'Plan features', 'Product support'],
			mostPopular: false,
			bgColor: '',
			textColor: '',
			borderColor: 'border-gray-200',
			shadow: ''
		},
		{
			title: 'Enterprise',
			price: '$ 149',
			description: 'Advanced features for scaling your business',
			features: ['10 users', 'Plan features', 'Product support'],
			mostPopular: false,
			bgColor: '',
			textColor: '',
			borderColor: 'border-gray-200',
			shadow: ''
		}
	];

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
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Pricing</h2>
		<p class="mt-1 text-gray-600">
			Whatever your status, our offers evolve according to your needs.
		</p>
	</div>
	<!-- End Title -->

	<!-- Switch -->
	<div class="mb-14 flex items-center justify-center">
		<label class="me-3 min-w-14 text-sm text-gray-500">Monthly</label>

		<Switch />

		<label class="relative ms-3 min-w-14 text-sm text-gray-500">
			Annual
			<span class="absolute -end-28 -top-10 start-auto">
				<span class="flex items-center">
					<svg
						class="-me-6 h-8 w-14"
						width="45"
						height="25"
						viewBox="0 0 45 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
							fill="currentColor"
							class="fill-gray-300"
						/>
					</svg>
					<Badge
						variant="outline"
						class="mt-3 inline-block whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white"
					>
						Save up to 10%
					</Badge>
				</span>
			</span>
		</label>
	</div>

	<!-- Grid -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each plans as plan}
			<Card.Root
				class="flex flex-col rounded-xl border {plan.borderColor} p-8 text-center {plan.shadow}"
			>
				<Card.Header>
					<Card.Title class="text-lg font-medium text-gray-800"
						>{plan.title}</Card.Title
					>
					<Card.Description class="mt-5 text-5xl font-bold text-gray-800">
						<span class="-me-2 text-2xl font-bold">{plan.price.startsWith('$') ? '$' : ''}</span
						>{plan.price.replace('$', '')}
					</Card.Description>
					<p class="mt-2 text-sm text-gray-500">{plan.description}</p>
				</Card.Header>
				<Card.Content>
					<ul class="mt-7 space-y-2.5 text-sm">
						{#each plan.features as feature}
							<li class="flex space-x-2">
								<Check class="mt-0.5 size-4 flex-shrink-0 text-blue-600" />
								<span class="text-gray-800">{feature}</span>
							</li>
						{/each}
					</ul>
				</Card.Content>
				<Card.Footer>
					<Button
						href="#"
					>
						Sign up
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
	<!-- End Grid -->

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
							class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 :border-neutral-700"
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
											<Check
												class="ms-auto size-5 flex-shrink-0 text-blue-600"
											/>
											<span class="sr-only">Yes</span>
										{:else}
											<Minus
												class="ms-auto size-5 flex-shrink-0 text-gray-400"
											/>
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
			<Table.Body
				class="divide-y divide-gray-200 border-t border-gray-200"
			>
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
										<Minus
											class="mx-auto size-5 flex-shrink-0 text-gray-400"
										/>
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
