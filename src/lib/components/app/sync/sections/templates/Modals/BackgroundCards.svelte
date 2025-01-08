<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Briefcase } from 'lucide-svelte';

	let modalVisible = false;

	const categories = [
		{
			category: 'Base',
			items: [
				{
					title: 'Accordion',
					description: 'A framework for building web user interfaces.',
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				},
				{
					title: 'Tabs',
					description: 'A framework for building web user interfaces.',
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				},
				{
					title: 'Scrollspy',
					description: 'A framework for building web user interfaces.',
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				},
				{
					title: 'Mega Menu',
					description: 'A framework for building web user interfaces.',
					isNew: true,
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				},
				{
					title: 'Dropdown',
					description: 'A framework for building web user interfaces.',
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				}
			]
		},
		{
			category: 'Advanced',
			items: [
				{
					title: 'Modal',
					description: 'A framework for building web user interfaces.',
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				},
				{
					title: 'Offcanvas',
					description: 'A framework for building web user interfaces.',
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				},
				{
					title: 'Sidebar',
					description: 'A framework for building web user interfaces.',
					isNew: true,
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				},
				{
					title: 'Popover',
					description: 'A framework for building web user interfaces.',
					link: '../docs/frameworks-vuejs.html',
					icon: Briefcase
				}
			]
		}
	];
</script>

<div class="text-center mt-12">
	<Button on:click={() => (modalVisible = true)}>
		Open modal
	</Button>
</div>

{#if modalVisible}
	<div
		class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/50"
		role="dialog"
	>
		<div class="h-auto w-full max-w-4xl rounded-lg bg-white shadow-lg">
			<div class="flex items-center justify-between border-b p-4">
				<h3 class="font-bold text-gray-800">Plugins</h3>
				<Button class="text-white" on:click={() => (modalVisible = false)}>
					Close
				</Button>
			</div>
			<div class="overflow-y-auto p-4">
				{#each categories as category}
					<h4 class="mb-2 text-xs font-semibold uppercase text-gray-600">{category.category}</h4>
					<div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
						{#each category.items as card}
							<Card.Root class="hover:bg-gray-100 focus:bg-gray-100">
								<Card.Header>
									<div class="flex items-center">

										<!-- Insert the SVG icon here -->

										<div>
											<Card.Title>{card.title}</Card.Title>
											<Card.Description>{card.description}</Card.Description>
										</div>
									</div>
								</Card.Header>
							</Card.Root>
						{/each}
					</div>
					<hr class="my-4" />
				{/each}
			</div>
			<div class="flex justify-end border-t p-4">
				<a href="../docs/index.html" class="text-sm text-blue-600 hover:underline">Installation Guide</a>
			</div>
		</div>
	</div>
{/if}
