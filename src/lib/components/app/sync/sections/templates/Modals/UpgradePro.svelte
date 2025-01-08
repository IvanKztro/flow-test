<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { CircleDollarSign, Scissors, Bell } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	let modalVisible = false;

	const modalData = {
		title: 'Advanced features',
		description: '"Compare to" Price, Bulk Discount Pricing, Inventory Tracking',
		features: [
			{
				title: '"Compare to" price',
				description:
					'Use this feature when you want to put a product on sale or show savings off suggested retail pricing.',
				icon: CircleDollarSign
			},
			{
				title: 'Bulk discount pricing',
				description: 'Encourage higher purchase quantities with volume discounts.',
				icon: Scissors
			},
			{
				title: 'Inventory tracking',
				description:
					'Automatically keep track of product availability and receive notifications when inventory levels get low.',
				icon: Bell
			}
		]
	};

	function closeModal() {
		modalVisible = false;
	}

	function openModal() {
		modalVisible = true;
	}
</script>

<div class="mt-12 text-center">
	<Button
		aria-haspopup="dialog"
		aria-expanded={modalVisible}
		aria-controls="modal"
		on:click={openModal}
	>
		Open modal
	</Button>
</div>

{#if modalVisible}
	<div
		class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/50"
		role="dialog"
		aria-labelledby="modal-label"
	>
		<div class="w-full max-w-lg rounded-lg bg-white p-4 shadow-lg">
			<Card.Root>
				<Card.Header>
					<div class="flex justify-center">
						<Card.Title>{modalData.title}</Card.Title>
					</div>
					<div class="flex justify-center">
						<Card.Description class="">{modalData.description}</Card.Description>
					</div>
					<a href="/" class="mb-4 flex justify-center text-blue-600 hover:underline">Sign up here</a
					>
					<Button href="#">Upgrade to get these features</Button>
				</Card.Header>
				<Card.Content>
					{#each modalData.features as { title, description, icon: Icon }}
						<div class="my-4 flex items-start gap-x-4">
							<Icon class="h-6 w-6" />
							<div>
								<h3 class="font-semibold text-gray-800">{title}</h3>
								<p class="text-sm text-gray-500">{description}</p>
							</div>
						</div>
					{/each}
				</Card.Content>
				<Card.Footer class="flex items-center justify-end gap-x-2">
					<Button on:click={closeModal}>Cancel</Button>
					<Button href="#">Upgrade now</Button>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
{/if}
