<script>
	import { Check } from 'lucide-svelte';

	const features = [
		{
			text: 'Less routine – more creativity'
		},
		{
			text: 'Hundreds of thousands saved'
		},
		{
			text: 'Scale budgets efficiently'
		}
	];

	const images = [
		'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80',
		'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
		'https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
		<div class="lg:col-span-7">
			<div class="grid grid-cols-12 items-center gap-2 sm:gap-6 lg:-translate-x-10">
				{#each images as img, index}
					<div class={index === 0 ? 'col-span-4' : index === 1 ? 'col-span-3' : 'col-span-5'}>
						<img class="rounded-xl" src={img} alt="Image Description" />
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0">
			<div class="space-y-6 sm:space-y-8">
				<div class="space-y-2 md:space-y-4">
					<h2 class="text-3xl font-bold text-gray-800 lg:text-4xl">
						Collaborative tools to design user experience
					</h2>
					<p class="text-gray-500">
						Use our tools to explore your ideas and make your vision come true. Then share your work
						easily.
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
