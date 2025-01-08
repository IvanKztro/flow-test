<script>
	import { Columns, Activity, Aperture } from 'lucide-svelte';

	let activeTab = 0;

	const tabs = [
		{
			id: 0,
			title: 'All-in-one workspace',
			description: 'Create a business, whether you’ve got a fresh idea.',
			icon: Columns,
			imgUrlMobile: 'https://preline.co/assets/img/mockups/img9.jpg',
			imgUrlBrowser: 'https://preline.co/assets/img/mockups/img8.jpg',
			bgColor: 'bg-gray-100',
			textColor: 'text-gray-800'
		},
		{
			id: 1,
			title: 'Automation on a whole new level',
			description: 'Use automation to scale campaigns profitably and save time doing it.',
			icon: Activity,
			imgUrlMobile: 'https://preline.co/assets/img/mockups/img11.jpg',
			imgUrlBrowser: 'https://preline.co/assets/img/mockups/img10.jpg',
			bgColor: 'bg-gray-700',
			textColor: 'text-gray-200'
		},
		{
			id: 2,
			title: 'Solving problems for every team',
			description: 'One tool for your company to share knowledge and ship projects.',
			icon: Aperture,
			imgUrlMobile: 'https://preline.co/assets/img/mockups/img13.jpg',
			imgUrlBrowser: 'https://preline.co/assets/img/mockups/img12.jpg',
			bgColor: 'bg-white',
			textColor: 'text-gray-800'
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
	<!-- Tab Nav -->
	<nav
		class="mx-auto grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0"
		aria-label="Tabs"
		role="tablist"
	>
		{#each tabs as tab, index}
			<button
				type="button"
				class="hs-tab-active:hover:border-transparent flex w-full flex-col rounded-xl p-3 text-start hover:bg-gray-100 md:p-5 {index ===
				activeTab
					? 'active'
					: ''}"
				on:click={() => setActiveTab(index)}
				aria-controls={`tabs-with-card-${index}`}
				role="tab"
			>
            <svelte:component this={tab.icon} class="mt-1 flex-shrink-0 text-blue-600" />

				<span class="mt-5">
					<span class="hs-tab-active:text-blue-600 block font-semibold text-gray-800"
						>{tab.title}</span
					>
					<span class="mt-2 hidden text-gray-800 lg:block">{tab.description}</span>
				</span>
			</button>
		{/each}
	</nav>
	<!-- End Tab Nav -->

	<!-- Tab Content -->
	<div class="mt-12 md:mt-16">
		{#each tabs as tab, index}
			<div
				id={`tabs-with-card-${index}`}
				class={index === activeTab ? '' : 'hidden'}
				role="tabpanel"
				aria-labelledby={`tabs-with-card-item-${index}`}
			>
				<!-- Devices -->
				<div class="relative max-w-[1140px] lg:pb-32">
					<!-- Mobile Device -->
					<figure
						class="absolute bottom-0 start-0 z-[2] mb-20 ms-20 hidden h-auto w-60 max-w-full lg:block"
					>
						<div
							class="p-1.5 {tab.bgColor} rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]"
						>
							<img
								class="h-auto max-w-full rounded-[1.25rem]"
								src={tab.imgUrlMobile}
								alt="Image Description"
							/>
						</div>
					</figure>
					<!-- End Mobile Device -->

					<!-- Browser Device -->
					<figure
						class="relative z-[1] me-20 ms-auto h-auto w-[50rem] max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]"
					>
						<div
							class="relative flex max-w-[50rem] items-center {tab.bgColor} rounded-t-lg border-b border-gray-100 px-24 py-2"
						>
							<div class="absolute start-4 top-2/4 flex -translate-y-1 space-x-1">
								<span class="size-2 {tab.bgColor} rounded-full"></span>
								<span class="size-2 {tab.bgColor} rounded-full"></span>
								<span class="size-2 {tab.bgColor} rounded-full"></span>
							</div>
							<div
								class="flex size-full items-center justify-center bg-gray-200 text-[.25rem] sm:text-[.5rem] {tab.textColor} rounded-sm"
							>
								www.preline.co
							</div>
						</div>

						<div class="{tab.bgColor} rounded-b-lg">
							<img
								class="h-auto max-w-full rounded-b-lg"
								src={tab.imgUrlBrowser}
								alt="Image Description"
							/>
						</div>
					</figure>
					<!-- End Browser Device -->
				</div>
				<!-- End Devices -->
			</div>
		{/each}
	</div>
	<!-- End Tab Content -->
</div>
<!-- End Features -->

<style>
    .active {
      background-color: var(--tw-bg-opacity) !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  </style>