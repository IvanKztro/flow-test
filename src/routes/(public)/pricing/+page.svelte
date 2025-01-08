<script lang="ts">
	import { Check, Minus, Star } from 'lucide-svelte';
	import { Switch } from '$lib/components/ui/switch';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import Plans from '$lib/components/public/pricing/plans.svelte';
	import ComparePlans from '$lib/components/public/pricing/compare-plans.svelte';

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
	<Plans />
	<ComparePlans />
</div>
