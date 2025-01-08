<script>
	import { Check } from 'lucide-svelte';

	const features = [
		{
			text: 'Easy & fast designing'
		},
		{
			text: 'Powerful features'
		},
		{
			text: 'User Experience Design'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
		<div>
			<img
				class="rounded-xl"
				src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
				alt="Image Description"
			/>
		</div>

		<div class="mt-5 sm:mt-10 lg:mt-0">
			<div class="space-y-6 sm:space-y-8">
				<div class="space-y-2 md:space-y-4">
					<h2 class="text-3xl font-bold text-gray-800 lg:text-4xl">
						We tackle the challenges start-ups face
					</h2>
					<p class="text-gray-500">
						Besides working with start-up enterprises as a partner for digitalization, we have built
						enterprise products for common pain points that we have encountered in various products
						and projects.
					</p>
				</div>

				<ul class="space-y-2 sm:space-y-4">
					{#each features as feature}
						<li class="flex space-x-3">
							<span
								class="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600"
							>
								<Check />
							</span>
							<span class="text-sm text-gray-500 sm:text-base">
								{@html feature.text}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
