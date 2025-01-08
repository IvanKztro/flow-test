<script lang="ts">
	import { CircleHelp } from 'lucide-svelte';
    import * as Accordion from "$lib/components/ui/accordion";

	const {section} = $props()

	const faqs = [
		{
			icon: CircleHelp,
			question: 'Can I cancel at anytime?',
			answer:
				'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.'
		},
		{
			icon: CircleHelp,
			question: 'My team has credits. How do we use them?',
			answer:
				'Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.'
		},
		{
			icon: CircleHelp,
			question: "How does Preline's pricing work?",
			answer:
				'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.'
		},
		{
			icon: CircleHelp,
			question: 'How secure is Preline?',
			answer:
				'Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.'
		},
		{
			icon: CircleHelp,
			question: 'How do I get access to a theme I purchased?',
			answer:
				"If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with."
		},
		{
			icon: CircleHelp,
			question: 'Upgrade License Type',
			answer:
				'There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.'
		}
	];
	const getLayout = ()=> {
		const container = section.settings.layout == 'y'
		? ''
		: 'grid gap-10 md:grid-cols-2 bg-red-500'
		const col1 = section.settings.layout == 'y'
		? ''
		: 'md:col-span-2'
		const col2 = section.settings.layout == 'y'
		? ''
		: 'md:col-span-3'
		return {container,col1,col2}
	}
	const getCols = ()=> section.settings.itemsCol == 'col-1' ? 'mx-auto max-w-2xl divide-y divide-gray-200' : 'grid sm:grid-cols-2 gap-6 md:gap-12'
</script>

<!-- FAQ Section -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  ">
	<div class="{getLayout().container}" >
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl lg:mb-14 {getLayout().col1}">
		<h2 class="text-2xl font-bold">
			{section.settings.title}
		</h2>
		{#if section.settings.subtitle}
			<p class="mt-1 text-gray-600">{section.settings.subtitle}</p>
		{/if}
	</div>
	<!-- End Title -->

	<div class="{getCols()} {getLayout().col2}">
		{#each faqs as {icon: Icon, question, answer}}
			<div class="py-8 first:pt-0 last:pb-0">
				<div class="flex gap-x-5" >
						{#if section.settings.showIcon}
							<Icon class="mt-1 size-6 flex-shrink-0 text-gray-500" />
						{/if}
						<div>
							<h3 class="font-semibold text-gray-800">
								{question}
							</h3>
							<p class="mt-1 text-gray-500">
								{answer}
							</p>
						</div>
					</div>
			</div>
		{/each}
	</div>
</div>
</div>
<!-- End FAQ Section -->



  <!-- FAQ Section -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
        Frequently Asked Questions
      </h2>
    </div>
    <!-- End Title -->
  
    <div class="max-w-5xl mx-auto">
      <!-- Grid -->
      <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
        {#each faqs as faq}
          <div>
            <h3 class="text-lg font-semibold text-gray-800">
              {faq.question}
            </h3>
            <p class="mt-2 text-gray-600">
              {faq.answer}
            </p>
          </div>
          <!-- End Col -->
        {/each}
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End FAQ Section -->




  <!-- FAQ Section -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
      <p class="mt-1 text-gray-600">Answers to the most frequently asked questions.</p>
    </div>
    <!-- End Title -->
  
    <div class="max-w-2xl mx-auto">
      <!-- Accordion -->
      <Accordion.Root>
        {#each faqs as faq, index}
          <Accordion.Item value={`item-${index}`}>
            <Accordion.Trigger class="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500">
              {faq.question}
              <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </Accordion.Trigger>
            <Accordion.Content class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
              <p class="text-gray-800">
                {faq.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        {/each}
      </Accordion.Root>
      <!-- End Accordion -->
    </div>
  </div>
  <!-- End FAQ Section -->



<!-- FAQ Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	<!-- Grid -->
	<div class="grid gap-10 md:grid-cols-5">
		<div class="md:col-span-2">
			<div class="max-w-xs">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
					Frequently<br />asked questions
				</h2>
				<p class="mt-1 hidden text-gray-600 md:block">
					Answers to the most frequently asked questions.
				</p>
			</div>
		</div>
		<!-- End Col -->

		<div class="md:col-span-3">
			<!-- Accordion -->
			<Accordion.Root>
				{#each faqs as faq, index}
					<Accordion.Item value={`item-${index}`} class="border-b border-gray-200">
						<Accordion.Trigger
							class="group flex w-full items-center justify-between gap-x-3 rounded-lg py-4 text-start font-semibold text-gray-800 transition hover:text-gray-500 md:text-lg"
						>
							{faq.question}
							<svg
								class="hidden size-5 flex-shrink-0 text-gray-600 group-hover:text-gray-500 group-data-[state=open]:block"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
							>
						</Accordion.Trigger>
						<Accordion.Content class="overflow-hidden transition-[height] duration-300">
							<p class="py-4 text-gray-600">
								{faq.answer}
							</p>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
			<!-- End Accordion -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End FAQ Section -->
