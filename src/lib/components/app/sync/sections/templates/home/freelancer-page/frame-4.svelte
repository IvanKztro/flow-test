<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Search } from 'lucide-svelte';

	const items = [
		{
			id: 'item-1',
			title: 'Company ONE'
		},
		{
			id: 'item-2',
			title: 'Company TWO'
		},
		{
			id: 'item-3',
			title: 'Company THREE'
		}
	];
	let value = ['item-1', 'item-2', 'item-3'];
</script>

<section
	class="container mx-auto grid grid-cols-1 flex-col space-y-4 py-4 pt-1 sm:grid-cols-3 sm:flex-row sm:space-x-4 sm:space-y-0"
>
	<div class="col-span-2 flex-row items-center py-9 pl-36">
		<span class="text-sm">HIGHLIGHTS OF YOUR RESUME</span>
		<h1 class="mb-0 mt-5 h-24 w-11/12 whitespace-pre-line text-4xl font-extrabold">
			These Are the Amazing Companies You Worked For
		</h1>
		<p class="mt-8 whitespace-pre-line text-lg">
			Give your readers a summary of the kind of companies you work with, and you like to work the
			most.
		</p>
		<Accordion.Root bind:value class="w-11/12">
			{#each items as { id, title }}
				<Accordion.Item value={id}>
					<Accordion.Trigger class="flex justify-start space-x-8 text-xl font-semibold">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 140 140">
							<path d="M0 0h140v140H0z" fill="#e5e7eb" />
							<path
								d="M88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z"
								fill="#e5e7eb"
							/>
							<path
								d="M89.48 52.32H50.29a4.52 4.52 0 00-4.52 4.52V84a4.53 4.53 0 004.52 4.52h39.19A4.52 4.52 0 0094 84V56.84a4.52 4.52 0 00-4.52-4.52zm-33.16 5.27a5.28 5.28 0 11-5.27 5.28 5.27 5.27 0 015.27-5.28zM88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z"
								fill="#d1d5db"
							/>
						</svg>
						<span>{title}</span>
					</Accordion.Trigger>
					<Accordion.Content class="text-lg">
						<ul class="ml-16">
							<li>Company location</li>
							<li>How long did you work there?</li>
							<li>What did you do there?</li>
						</ul>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
	<div class="flex w-full flex-col items-start space-y-4 pt-64">
		<div class="mb-8 ml-3 text-center">
			<h1 class="text-sm">CRUCIAL SKILLS 1</h1>
			<h2 class="mb-10 text-xl font-semibold">Lorem ipsum dolor sit</h2>

			<h1 class="text-sm">CRUCIAL SKILLS 2</h1>
			<h2 class="mb-10 text-xl font-semibold">Lorem ipsum dolor sit</h2>

			<h1 class="text-sm">CRUCIAL SKILLS 3</h1>
			<h2 class="mb-10 text-xl font-semibold">Lorem ipsum dolor sit</h2>

			<h1 class="text-sm">CRUCIAL SKILLS 4</h1>
			<h2 class="text-xl font-semibold">Lorem ipsum dolor sit</h2>
		</div>
		<div>
			<Card.Root class="flex w-full items-center py-2">
				<Search size="36" class="ml-4" />
				<Card.Content class="mt-2 space-y-1 whitespace-pre-line">
					<h2 class="text-lg">Tell them that you can even more but they can reach out and ask</h2>
					<Button variant="link" class="self-start">
						<span class="text-lg">Contact Me Now</span>
					</Button>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>
