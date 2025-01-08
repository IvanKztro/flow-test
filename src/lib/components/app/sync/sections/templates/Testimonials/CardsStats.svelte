<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';

	const testimonials = [
		{
			content:
				"With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
			name: 'Josh Tyson',
			title: 'Product Manager | Capsule',
			image:
				'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			content:
				"In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team.",
			name: 'Luisa',
			title: 'Senior Director of Operations | Fitbit',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			content:
				'Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color.',
			name: 'Alisa Williams',
			title: 'Entrepreneur | Happy customer',
			image:
				'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		}
	];
</script>

<!-- Testimonials -->
<div class="overflow-hidden">
	<div class="relative mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
		<!-- Title -->
		<div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2">
			<h2 class="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
				Loved by business and individuals across the globe
			</h2>
		</div>
		<!-- End Title -->

		<!-- Grid -->
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<Card.Root>
					<Card.Header>
						<p class="text-base italic text-gray-800 md:text-lg">
							"{testimonial.content}"
						</p>
					</Card.Header>
					<Card.Content>
						<div class="flex items-center">
							<Avatar.Root>
								<Avatar.Image src={testimonial.image} alt={`Image of`} />
								<Avatar.Fallback>CN</Avatar.Fallback>
							</Avatar.Root>
							<div class="ms-3 grow">
								<p class="text-sm font-semibold text-gray-800 sm:text-base">
									{testimonial.name}
								</p>
								<p class="text-xs text-gray-500">
									{testimonial.title}
								</p>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
		<!-- End Grid -->

		<!-- Grid -->
		<div class="mt-20 grid grid-cols-2 gap-6 sm:gap-12 lg:grid-cols-3 lg:gap-8">
			<!-- Stats -->
			<div>
				<h4 class="text-lg font-semibold sm:text-xl">Accuracy rate</h4>
				<p class="mt-2 text-4xl font-bold sm:mt-3 sm:text-6xl">99.95%</p>
				<p class="mt-1 text-gray-400">in fulfilling orders</p>
			</div>
			<!-- End Stats -->

			<!-- Stats -->
			<div>
				<h4 class="text-lg font-semibold sm:text-xl">Startup businesses</h4>
				<p class="mt-2 text-4xl font-bold sm:mt-3 sm:text-6xl">2,000+</p>
				<p class="mt-1 text-gray-400">partner with Preline</p>
			</div>
			<!-- End Stats -->

			<!-- Stats -->
			<div>
				<h4 class="text-lg font-semibold sm:text-xl">Happy customer</h4>
				<p class="mt-2 text-4xl font-bold sm:mt-3 sm:text-6xl">85%</p>
				<p class="mt-1 text-gray-400">this year alone</p>
			</div>
			<!-- End Stats -->
		</div>
		<!-- End Grid -->
	</div>
</div>
<!-- End Testimonials -->
