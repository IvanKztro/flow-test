<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { Check, Minus } from "lucide-svelte";

	type PlanFeatureKey =
		| 'seats'
		| 'storage'
		| 'emailSharing'
		| 'access'
		| 'priceVolumeIndicator'
		| 'transactionVolume'
		| 'networkGrowth'
		| 'averageTokenAge'
		| 'exchangeFlow'
		| 'erc20Flow'
		| 'circulation'
		| 'velocity'
		| 'ethGas'
		| 'devActivity'
		| 'topicSearch'
		| 'socialDominance'
		| 'accountManager'
		| 'support'
		| 'rewards'
		| 'api';

	type Plan = {
		name: string;
		price: string;
		seats: string;
		storage: string;
		emailSharing: boolean;
		access: boolean;
		priceVolumeIndicator: boolean;
		transactionVolume: boolean;
		networkGrowth: boolean;
		averageTokenAge: boolean;
		exchangeFlow: boolean;
		erc20Flow: boolean;
		circulation: boolean;
		velocity: boolean;
		ethGas: boolean;
		devActivity: boolean;
		topicSearch: boolean;
		socialDominance: boolean;
		accountManager: boolean;
		support: boolean;
		rewards: boolean;
		api: boolean;
	};

	const plans: Plan[] = [
		{
			name: 'Free',
			price: 'Free forever',
			seats: '1',
			storage: '15 GB',
			emailSharing: true,
			access: false,
			priceVolumeIndicator: false,
			transactionVolume: false,
			networkGrowth: false,
			averageTokenAge: false,
			exchangeFlow: false,
			erc20Flow: false,
			circulation: false,
			velocity: false,
			ethGas: false,
			devActivity: false,
			topicSearch: false,
			socialDominance: false,
			accountManager: false,
			support: false,
			rewards: false,
			api: false
		},
		{
			name: 'Startup',
			price: '$39 per month billed annually',
			seats: 'Up to 3',
			storage: '1 TB',
			emailSharing: true,
			access: true,
			priceVolumeIndicator: true,
			transactionVolume: true,
			networkGrowth: true,
			averageTokenAge: true,
			exchangeFlow: true,
			erc20Flow: true,
			circulation: true,
			velocity: true,
			ethGas: true,
			devActivity: true,
			topicSearch: true,
			socialDominance: true,
			accountManager: false,
			support: true,
			rewards: false,
			api: false
		},
		{
			name: 'Team',
			price: '$89 per month billed annually',
			seats: 'Up to 10',
			storage: '15 TB',
			emailSharing: true,
			access: true,
			priceVolumeIndicator: true,
			transactionVolume: true,
			networkGrowth: true,
			averageTokenAge: true,
			exchangeFlow: true,
			erc20Flow: true,
			circulation: true,
			velocity: true,
			ethGas: true,
			devActivity: true,
			topicSearch: true,
			socialDominance: true,
			accountManager: true,
			support: true,
			rewards: true,
			api: true
		},
		{
			name: 'Enterprise',
			price: '$149 per month billed annually',
			seats: 'Unlimited',
			storage: 'Unlimited',
			emailSharing: true,
			access: true,
			priceVolumeIndicator: true,
			transactionVolume: true,
			networkGrowth: true,
			averageTokenAge: true,
			exchangeFlow: true,
			erc20Flow: true,
			circulation: true,
			velocity: true,
			ethGas: true,
			devActivity: true,
			topicSearch: true,
			socialDominance: true,
			accountManager: true,
			support: true,
			rewards: true,
			api: true
		}
	];

	const features: { name: string; key: PlanFeatureKey }[] = [
		{ name: 'Number of seats', key: 'seats' },
		{ name: 'Storage', key: 'storage' },
		{ name: 'Email sharing', key: 'emailSharing' },
		{ name: 'Any time, anywhere access', key: 'access' },
		{ name: 'Price-volume difference indicator', key: 'priceVolumeIndicator' },
		{ name: 'Transaction volume', key: 'transactionVolume' },
		{ name: 'Network growth', key: 'networkGrowth' },
		{ name: 'Average token age consumed', key: 'averageTokenAge' },
		{ name: 'Exchange flow', key: 'exchangeFlow' },
		{ name: 'Total ERC20 exchange funds flow', key: 'erc20Flow' },
		{ name: 'Total circulation (beta)', key: 'circulation' },
		{ name: 'Velocity of tokens (beta)', key: 'velocity' },
		{ name: 'ETH gas used', key: 'ethGas' },
		{ name: 'Dev activity', key: 'devActivity' },
		{ name: 'Topic search', key: 'topicSearch' },
		{ name: 'Relative social dominance', key: 'socialDominance' },
		{ name: 'Dedicated account manager', key: 'accountManager' },
		{ name: '24/7 support', key: 'support' },
		{ name: 'Rewards', key: 'rewards' },
		{ name: 'Business API', key: 'api' }
	];
</script>

<div class="relative">
	<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20">
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold md:text-3xl md:leading-tight">Simple, transparent pricing</h2>
			<p class="mt-1 text-gray-600">
				Increase your team's productivity. Get things done in rapid time.
			</p>
		</div>

		

		<div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each plans as plan}
				<Card.Root>
					<Card.Header>
						<Card.Title>{plan.name}</Card.Title>
						<Card.Description>{plan.price}</Card.Description>
					</Card.Header>
					<Card.Content>
						{#each Object.keys(plan).filter((key) => key !== 'name' && key !== 'price') as feature}
							<!-- <p class="text-sm text-gray-800">{feature}: {plan[feature as PlanFeatureKey] ? '✔' : '—'}</p> -->
						{/each}
					</Card.Content>
					<Card.Footer>
						<Button href="#">Get started</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
		
		<Collapsible.Root>
			<Collapsible.Trigger class="flex justify-center">
				<Button variant="outline">View all features</Button>
			</Collapsible.Trigger>
			<Collapsible.Content class="space-y-4">
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>Feature</Table.Head>
							{#each plans as plan}
								<Table.Head class="text-center">{plan.name}</Table.Head>
							{/each}
						</Table.Row>
					</Table.Header>	
					<Table.Body>
						{#each features as feature}
							<Table.Row>
								<Table.Cell>{feature.name}</Table.Cell>
								{#each plans as plan}
									<Table.Cell class="text-center">{plan[feature.key] ? '✔' : '—'}</Table.Cell>
								{/each}
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Collapsible.Content>
		</Collapsible.Root>
	</div>
</div>
