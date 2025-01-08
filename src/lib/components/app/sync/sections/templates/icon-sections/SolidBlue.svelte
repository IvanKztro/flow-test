<script>
	import { BookOpen, Code, Smartphone, MessageSquare, ArrowRight } from 'lucide-svelte';

	const features = [
		{
			href: '#',
			icon: Smartphone,
			title: 'Responsive',
			description: 'Responsive, and mobile-first project on the web',
			learnMore: 'Learn more'
		},
		{
			href: '#',
			icon: Code,
			title: 'Customizable',
			description: 'Components are easily customized and extendable',
			learnMore: 'Learn more'
		},
		{
			href: '#',
			icon: BookOpen,
			title: 'Documentation',
			description: 'Every component and plugin is well documented',
			learnMore: 'Learn more'
		},
		{
			href: '#',
			icon: MessageSquare,
			title: '24/7 Support',
			description: 'Contact us 24 hours a day, 7 days a week',
			learnMore: 'Learn more'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid items-center gap-2 sm:grid-cols-2 lg:grid-cols-4">
		{#each features as feature}
			<!-- Icon Block -->
			<a
				href={feature.href}
				class="group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 md:p-7"
			>
				<div class="flex size-12 items-center justify-center rounded-xl">
					<svelte:component this={feature.icon} />
				</div>
				<div class="mt-5">
					<h3 class="text-lg font-semibold text-gray-800 group-hover:text-gray-600">
						{feature.title}
					</h3>
					<p class="mt-1 text-gray-600">
						{feature.description}
					</p>
					<span
						class="mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium group-hover:underline"
					>
						{feature.learnMore}
						<ArrowRight />
					</span>
				</div>
			</a>
			<!-- End Icon Block -->
		{/each}
	</div>
</div>
