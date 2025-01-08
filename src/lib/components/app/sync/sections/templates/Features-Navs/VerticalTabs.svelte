<script>
	import { Database, Clock , Settings } from 'lucide-svelte';

	let activeTab = 0;

	const features = [
		{
			id: 0,
			title: 'Advanced tools',
			description:
				'Use Preline thoroughly thought and automated libraries to manage your businesses.',
			icon: Database,
			imgUrl:
				'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80'
		},
		{
			id: 1,
			title: 'Smart dashboards',
			description: 'Quickly Preline sample components, copy-paste codes, and start right off.',
			icon: Clock ,
			imgUrl:
				'https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80'
		},
		{
			id: 2,
			title: 'Powerful features',
			description: 'Reduce time and effort on building modern look design with Preline only.',
			icon: Settings,
			imgUrl:
				'https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80'
		}
	];

	/**
	 * @param {number} index
	 */
	function setActiveTab(index) {
		activeTab = index;
	}
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="relative p-6 md:p-16">
		<!-- Grid -->
		<div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
			<div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
				<h2 class="text-2xl font-bold text-gray-800 sm:text-3xl">
					Fully customizable rules to match your unique needs
				</h2>

				<!-- Tab Navs -->
				<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
				<nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist">
					{#each features as feature, index}
						<button
							type="button"
							class="rounded-xl p-4 text-start hover:bg-gray-200 md:p-5 {index === activeTab
								? 'active'
								: ''}"
							on:click={() => setActiveTab(index)}
							aria-controls={`tabs-with-card-${index}`}
							role="tab"
						>
							<span class="flex">
								<svelte:component this={feature.icon} class="mt-1 flex-shrink-0 text-blue-600" />
								<span class="ms-6 grow">
									<span
										class="block text-lg font-semibold {index === activeTab
											? 'text-blue-600'
											: 'text-gray-800'}"
									>
										{feature.title}
									</span>
									<span class="mt-1 block text-gray-800">{feature.description}</span>
								</span>
							</span>
						</button>
					{/each}
				</nav>
				<!-- End Tab Navs -->
			</div>
			<!-- End Col -->

			<div class="lg:col-span-6">
				<div class="relative">
					<!-- Tab Content -->
					{#each features as feature, index}
						<div
							id={`tabs-with-card-${index}`}
							class={index === activeTab ? '' : 'hidden'}
							role="tabpanel"
							aria-labelledby={`tabs-with-card-item-${index}`}
						>
							<img
								class="rounded-xl shadow-xl shadow-gray-200"
								src={feature.imgUrl}
								alt="Image Description"
							/>
						</div>
					{/each}
					<!-- End Tab Content -->

					<!-- SVG Element -->
					<div class="absolute end-0 top-0 hidden translate-x-20 md:block lg:translate-x-20">
						<svg
							class="h-auto w-16 text-orange-500"
							width="121"
							height="135"
							viewBox="0 0 121 135"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
								stroke="currentColor"
								stroke-width="10"
								stroke-linecap="round"
							/>
							<path
								d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
								stroke="currentColor"
								stroke-width="10"
								stroke-linecap="round"
							/>
							<path
								d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
								stroke="currentColor"
								stroke-width="10"
								stroke-linecap="round"
							/>
						</svg>
					</div>
					<!-- End SVG Element -->
				</div>
			</div>
			<!-- End Col -->
		</div>
		<!-- End Grid -->

		<!-- Background Color -->
		<div class="absolute inset-0 grid size-full grid-cols-12">
			<div
				class="col-span-full h-5/6 w-full rounded-xl bg-gray-100 sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"
			></div>
		</div>
		<!-- End Background Color -->
	</div>
</div>

<style>
	.active {
		background-color: white;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
</style>
