<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	const cards = [
		{
			bgColor: 'bg-blue-600',
			title: 'Atlassian',
			subtitle: 'Atlassian API',
			description: 'A software that develops products for software developers and developments.',
			link1: 'View sample',
			link2: 'View API'
		},
		{
			bgColor: 'bg-rose-500',
			title: 'Asana',
			subtitle: 'Asana API',
			description: 'Track tasks and projects, use agile boards, measure progress.',
			link1: 'View sample',
			link2: 'View API'
		},
		{
			bgColor: 'bg-amber-500',
			title: 'Slack',
			subtitle: 'Slack API',
			description: 'Email collaboration and email service desk made easy.',
			link1: 'View sample',
			link2: 'View API'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as { bgColor, title, subtitle, description, link1, link2 }}
			<!-- Card -->
			<div class="group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
				<div class={`flex h-52 flex-col items-center justify-center ${bgColor} rounded-t-xl`}>
					<!-- Placeholder for image -->
					<div class="size-28 bg-white"></div>
				</div>
				<div class="p-4 md:p-6">
					<span
						class={`mb-1 block text-xs font-semibold uppercase ${bgColor.replace('bg-', 'text-')}`}
					>
						{subtitle}
					</span>
					<h3 class="text-xl font-semibold text-gray-800">
						{title}
					</h3>
					<p class="mt-3 text-gray-500">
						{description}
					</p>
				</div>
				<div class="text-center">
					<Button href="#">
						{link1}
					</Button>
					<Button href="#">
						{link2}
					</Button>
				</div>
			</div>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Card Blog -->
