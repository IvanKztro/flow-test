<script>
	import { Phone, Link2, MessageCircle } from 'lucide-svelte';

	const features = [
		{
			icon: Phone,
			title: 'Responsive'
		},
		{
			icon: Link2,
			title: 'Customizable'
		},
		{
			icon: MessageCircle,
			title: '24/7 Support'
		}
	];

	const images = [
		'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80',
		'https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80',
		'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80',
		'https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto mb-8 max-w-2xl text-center lg:mb-14">
		<h2 class="text-3xl font-bold text-gray-800 lg:text-4xl">Explore tools</h2>
		<p class="mt-3 text-gray-800">The powerful and flexible theme for all kinds of businesses.</p>
	</div>

	<div class="mx-auto grid max-w-3xl grid-cols-12 gap-6 lg:gap-8">
		{#each features as feature}
			<div class="col-span-6 text-center sm:col-span-4">
				<svelte:component this={feature.icon} class="mx-auto h-auto w-7 text-gray-800 md:w-9" />
				<div class="mt-2 sm:mt-6">
					<h3 class="text-lg font-semibold text-gray-800">
						{feature.title}
					</h3>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
		{#each images as image}
			<div class="col-span-4 md:col-span-3">
				<img class="rounded-xl" src={image} alt="Image Description" />
			</div>
		{/each}
	</div>
</div>
