<script>
	import * as Card from '$lib/components/ui/card';
    import { Star } from 'lucide-svelte';

	const testimonials = [
		{
			logo: 'path-to-logo1.svg',
			text: 'Truly great template and customer support.',
			stars: 5
		},
		{
			logo: 'path-to-logo2.svg',
			text: "The best one I've ever come across.",
			stars: 5
		},
		{
			logo: 'path-to-logo3.svg',
			text: 'This is a truly beautiful template.',
			stars: 5
		},
		{
			logo: 'path-to-logo4.svg',
			text: 'There is one theme that you want.',
			stars: 5
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 flex justify-center">
	<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-20 lg:grid-cols-4 lg:gap-8">
		{#each testimonials as testimonial}
			<Card.Root>
				<Card.Header>
					<img src={testimonial.logo} alt="Company Logo" class="mx-auto h-8 w-auto text-gray-800" />
				</Card.Header>
				<Card.Content class="mt-2 text-center sm:mt-6">
					<p class="text-gray-800">{testimonial.text}</p>
				</Card.Content>
				<Card.Footer class="mt-3 flex justify-center space-x-1">
					{#each Array(testimonial.stars) as _, i}
						<Star />
					{/each}
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
