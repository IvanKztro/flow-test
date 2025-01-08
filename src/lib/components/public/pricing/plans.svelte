<script lang="ts">
	import { Check } from 'lucide-svelte';
	import { Switch } from '$lib/components/ui/switch';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';

	let isAnnual = $state(false);
	let gridCols = $state('');

	const plans = $state([
		{
			title: 'Free',
			monthlyPrice: 'Free',
			annualPrice: 'Free',
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
			monthlyPrice: '$ 39',
			annualPrice: '$ 35',
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
			monthlyPrice: '$ 89',
			annualPrice: '$ 80',
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
			monthlyPrice: '$ 149',
			annualPrice: '$ 134',
			description: 'Advanced features for scaling your business',
			features: ['10 users', 'Plan features', 'Product support'],
			mostPopular: false,
			bgColor: '',
			textColor: '',
			borderColor: 'border-gray-200',
			shadow: ''
		}
	]);

	const getPrice = $derived((plan: any) => (isAnnual ? plan.annualPrice : plan.monthlyPrice));

	$effect(() => {
		gridCols =
			plans.length <= 3
				? `grid-cols-1 md:grid-cols-${plans.length}`
				: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
	});

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
</script>

<!-- Title -->
<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
	<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Pricing</h2>
	<p class="mt-1 text-gray-600">Whatever your status, our offers evolve according to your needs.</p>
</div>

<!-- Switch -->
<div class="mb-14 flex items-center justify-center">
	<label class="me-3 min-w-14 text-sm text-gray-500">Monthly</label>

	<Switch checked={isAnnual} onchange={() => (isAnnual = !isAnnual)} />

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
<div class={`grid gap-6 ${gridCols}`}>
	{#each plans as plan}
		<Card.Root
			class="flex flex-col rounded-xl border {plan.borderColor} p-8 text-center {plan.shadow}"
		>
			<Card.Header>
				<Card.Title class="text-lg font-medium text-gray-800">{plan.title}</Card.Title>
				<Card.Description class="mt-5 text-5xl font-bold text-gray-800">
					<span class="-me-2 text-2xl font-bold">{getPrice(plan).startsWith('$') ? '$' : ''}</span
					>{getPrice(plan).replace('$', '')}
					{#if isAnnual && plan.title !== 'Free'}
						<span class="text-sm font-normal text-gray-500">/year</span>
					{:else if plan.title !== 'Free'}
						<span class="text-sm font-normal text-gray-500">/month</span>
					{/if}
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
				<Button href="#">Sign up</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
