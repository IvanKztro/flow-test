<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const testimonials = [
		{
			icon: 'path-to-logo4.svg',
			quote:
				"I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer.",
			name: 'Nicole Grazioso',
			position: 'Director Payments & Risk | HubSpot'
		},
		{
			icon: 'path-to-logo4.svg',
			quote:
				"With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
			name: 'Josh Tyson',
			position: 'Product Manager | Capsule'
		},
		{
			icon: 'path-to-logo4.svg',
			quote:
				"In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team.",
			name: 'Luisa',
			position: 'Senior Director of Operations | Fitbit'
		}
	];
</script>

<!-- Testimonials -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as testimonial}
			<Card.Root class="flex flex-col">
				<Card.Content class="flex-auto p-4 md:p-6">
					<svg
						class="h-auto w-20 text-gray-700 sm:w-24"
						width="140"
						height="47"
						viewBox="0 0 140 47"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d={testimonial.icon} fill="currentColor"></path>
					</svg>
					<p class="mt-3 text-base text-gray-800 sm:mt-6 md:text-xl">
						<em>{testimonial.quote}</em>
					</p>
				</Card.Content>
				<Card.Footer class="mt-6 flex flex-col rounded-b-xl p-4 md:px-6">
					<h3 class="text-sm font-semibold text-gray-800 sm:text-base">{testimonial.name}</h3>
					<p class="text-sm text-gray-500">{testimonial.position}</p>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
<!-- End Testimonials -->
