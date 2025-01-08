<script lang="ts">
	import { CircleHelp, User, Mail } from 'lucide-svelte';

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
</script>

<!-- FAQ Section -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl lg:mb-14">
		<h2 class="text-2xl font-bold">
			You might be wondering...
		</h2>
	</div>
	<!-- End Title -->

	<div class="mx-auto max-w-2xl divide-y divide-gray-200">
		{#each faqs as {icon: Icon, question, answer}}
			<div class="py-8 first:pt-0 last:pb-0">
				<div class="flex gap-x-5">
					<Icon class="mt-1 size-6 flex-shrink-0 text-gray-500" />
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
<!-- End FAQ Section -->
