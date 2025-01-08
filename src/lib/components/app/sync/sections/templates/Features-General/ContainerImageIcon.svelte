<script lang="ts">
	import { Briefcase, Camera, FileText, Users } from 'lucide-svelte';

	// Array de objetos con la información de cada bloque de icono
	const features = [
		{
			icon: Briefcase,
			title: 'Creative minds',
			description: 'We choose our teams carefully. Our people are the secret to great work.'
		},
		{
			icon: Camera,
			title: 'Simple and affordable',
			description:
				"From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline."
		},
		{
			icon: FileText,
			title: 'Industry-leading documentation',
			description:
				'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration.'
		},
		{
			icon: Users,
			title: 'Designing for people',
			description:
				'We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.'
		}
	];
</script>

<div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	<div class="aspect-w-16 aspect-h-7">
		<img
			class="w-full rounded-xl object-cover"
			src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
			alt="Image Description"
		/>
	</div>

	<!-- Grid -->
	<div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
		<div class="lg:col-span-1">
			<h2 class="text-2xl font-bold text-gray-800 md:text-3xl">
				We tackle the challenges start-ups face
			</h2>
			<p class="mt-2 text-gray-500 md:mt-4">
				Besides working with start-up enterprises as a partner for digitalization, we have built
				enterprise products for common pain points that we have encountered in various products and
				projects.
			</p>
		</div>
		<!-- End Col -->

		<div class="lg:col-span-2">
			<div class="grid gap-8 sm:grid-cols-2 md:gap-12">
				{#each features as feature}
					<!-- Icon Block -->
					<div class="flex gap-x-5">
						<svelte:component this={feature.icon} class="mt-1 flex-shrink-0 text-blue-600" />
						<div class="grow">
							<h3 class="text-lg font-semibold text-gray-800">
								{feature.title}
							</h3>
							<p class="mt-1 text-gray-600">
								{feature.description}
							</p>
						</div>
					</div>
					<!-- End Icon Block -->
				{/each}
			</div>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->
