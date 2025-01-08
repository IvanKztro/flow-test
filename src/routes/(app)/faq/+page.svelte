<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';

	const faqs = [
		{
			question: 'Can I cancel at anytime?',
			answer:
				'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.'
		},
		{
			question: 'My team has credits. How do we use them?',
			answer:
				'Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.'
		},
		{
			question: "How does Hyvblox's pricing work?",
			answer:
				'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.'
		},
		{
			question: 'How secure is Hyvblox?',
			answer:
				'Protecting the data you trust to Hyvblox is our first priority. This part is really crucial in keeping the project in line to completion.'
		},
		{
			question: 'How do I get access to a theme I purchased?',
			answer:
				"If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with."
		},
		{
			question: 'Upgrade License Type',
			answer:
				'There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.'
		}
	];
</script>

<!-- FAQ Section -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
		<p class="mt-1 text-gray-600">Answers to the most frequently asked questions.</p>
	</div>
	<!-- End Title -->

	<div class="mx-auto max-w-2xl">
		<!-- Accordion -->
		<Accordion.Root>
			{#each faqs as faq, index}
				<Accordion.Item value={`item-${index}`}>
					<Accordion.Trigger
						class="group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 md:text-lg"
					>
						{faq.question}
						<svg
							class="hs-accordion-active:block hidden size-5 flex-shrink-0 text-gray-600 group-hover:text-gray-500"
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
					<Accordion.Content
						class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
					>
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
