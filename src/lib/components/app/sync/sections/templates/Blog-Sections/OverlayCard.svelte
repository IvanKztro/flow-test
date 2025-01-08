<script>
	import { ChevronRight } from 'lucide-svelte';

	const insights = [
		{
			title: 'Studio by Preline',
			description:
				"Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
			imgSrc:
				'https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
			link: '#',
			badge: 'Sponsored'
		},
		{
			title: 'Onsite',
			description:
				'Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval',
			imgSrc:
				'https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
			link: '#'
		},
		{
			title: 'Preline Press',
			description: 'Preline Press publishes books about economic and technological advancement.',
			imgSrc:
				'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
			link: '#',
			isBgImage: true
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Insights</h2>
		<p class="mt-1 text-gray-600">Stay in the know with insights from industry experts.</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each insights as insight}
			<a class="group" href={insight.link}>
				{#if insight.isBgImage}
					<div
						class="group relative flex h-full w-full flex-col rounded-xl bg-cover bg-center transition hover:shadow-lg"
						style="background-image: url({insight.imgSrc});"
					>
						<div class="flex-auto p-4 md:p-6">
							<h3 class="text-xl text-white/90 group-hover:text-white">
								<span class="font-bold">{insight.title}</span>
								{insight.description}
							</h3>
						</div>
						<div class="p-4 pt-0 md:p-6">
							<div
								class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70"
							>
								Visit the site
								<ChevronRight />
							</div>
						</div>
					</div>
				{:else}
					<div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
						<img
							class="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={insight.imgSrc}
							alt="Image Description"
						/>
						{#if insight.badge}
							<span
								class="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white"
							>
								{insight.badge}
							</span>
						{/if}
					</div>
					<div class="mt-7">
						<h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
							{insight.title}
						</h3>
						<p class="mt-3 text-gray-800">{insight.description}</p>
						<p
							class="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline"
						>
							Read more
							<ChevronRight />
						</p>
					</div>
				{/if}
			</a>
		{/each}
	</div>
	<!-- End Grid -->
</div>
