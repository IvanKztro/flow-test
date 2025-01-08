<script>
	import { Play } from 'lucide-svelte';
    import Button from '$lib/components/ui/button/button.svelte';

	const feature = {
		title: 'How does Preline work?',
		description: 'Learn more about Preline.',
		linkText: 'Watch our story',
		linkUrl: '#',
		imageUrl:
			'https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
	};
</script>

<div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div
		class="relative min-h-[35vh] rounded-xl bg-cover bg-center bg-no-repeat md:min-h-[75vh]"
		style="background-image: url({feature.imageUrl});"
	>
		<div
			class="absolute bottom-0 end-0 start-0 mx-auto max-w-xs p-6 text-center md:start-auto md:mx-0 md:text-start"
		>
			<div class="inline-block rounded-lg bg-white px-5 py-4 md:p-7">
				<div class="hidden md:block">
					<h3 class="text-lg font-bold text-gray-800 sm:text-2xl">{feature.title}</h3>
					<p class="mt-2 text-gray-800">{feature.description}</p>
				</div>

				<div class="md:mt-16">
					<a
						class="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500"
						href={feature.linkUrl}
					>
						<Play />
						{feature.linkText}
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
