<script>
	import { Phone, BarChart, CheckCircle, Activity, PhoneCall } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button";

	const steps = [
		{
			number: 1,
			title: 'Market Research and Analysis:',
			description:
				'Identify your target audience and understand their needs, preferences, and behaviors.',
			icon: Phone
		},
		{
			number: 2,
			title: 'Product Development and Testing:',
			description:
				'Develop digital products or services that address the needs and preferences of your target audience.',
			icon: BarChart
		},
		{
			number: 3,
			title: 'Marketing and Promotion:',
			description:
				'Develop a comprehensive marketing strategy to promote your digital products or services.',
			icon: CheckCircle
		},
		{
			number: 4,
			title: 'Launch and Optimization:',
			description:
				'Launch your digital products or services to the market, closely monitoring their performance and user feedback.',
			icon: Activity
		}
	];
</script>

<div class="bg-neutral-900">
	<div class="mx-auto max-w-5xl px-4 py-10 lg:pb-20 lg:pt-20 xl:px-0">
		<div class="mb-10 max-w-3xl lg:mb-14">
			<h2 class="text-2xl font-semibold text-white md:text-4xl md:leading-tight">Our approach</h2>
			<p class="mt-1 text-neutral-400">
				This profound insight guides our comprehensive strategy — from meticulous research and
				strategic planning to the seamless execution of brand development and website or product
				deployment.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
			<div class="aspect-w-16 aspect-h-9 lg:aspect-none">
				<img
					class="w-full max-w-sm rounded-xl object-cover"
					src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Image Description"
				/>
			</div>

			<div>
				<div class="mb-4">
					<h3 class="text-xs font-medium uppercase text-[#ff0]">Steps</h3>
				</div>

				{#each steps as step}
					<div class="ms-1 flex gap-x-5">
						<div
							class="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800 last:after:hidden"
						>
							<div class="relative z-10 flex size-8 items-center justify-center">
								<span
									class="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-neutral-800 text-xs font-semibold uppercase text-[#ff0]"
								>
									{step.number}
								</span>
							</div>
						</div>

						<div class="grow pb-8 pt-0.5 sm:pb-12">
							<p class="text-sm text-neutral-400 lg:text-base">
								<span class="text-white">{step.title}</span>
								{step.description}
							</p>
						</div>
					</div>
				{/each}

				<Button>
					<PhoneCall />
					Schedule a call
				</Button>
			</div>
		</div>
	</div>
</div>
