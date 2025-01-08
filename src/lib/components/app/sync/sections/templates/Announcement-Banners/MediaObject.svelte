<script lang="ts">
	const {section} = $props()
	const {justifyContent,backgroundColor,width} = section.settings

	type BackgroundColorConfig = {
  		[key: string]: string;
	};
	const getBackgroundColor = () => {
		const backgroundColorConfig:BackgroundColorConfig = {
			gray: 'bg-white/60 backdrop-blur-lg',
			blue: 'bg-blue-600',
			dark: 'bg-neutral-900',
			'gradient-red-purple-blue': 'bg-gradient-to-r from-red-500 via-purple-400 to-blue-500',
			'blue-abstract': "bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center",
			'gradient-blue-purple': 'bg-gradient-to-r from-purple-600 to-blue-400'
		};
		return backgroundColorConfig[section.settings.backgroundColor]
};

	const getWidth = () =>  section.settings.width === 'full' ? '' : 'max-w-[85rem] mx-auto rounded-lg';

</script>


<!-- Announcement Banner -->
<div class="{getWidth()} {getBackgroundColor()}">
	<div class="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
		<!-- Grid -->
		<div class="grid {section.settings.justifyContent} gap-4 sm:grid-cols-2 sm:items-center">
			<div class="flex items-center gap-x-3 md:gap-x-5">
				{#if section.settings.icon}
					<img src={section.settings.icon} class="size-10 flex-shrink-0 md:size-14" alt="logo" />
				{/if}

				<div class="grow">
					<p class="font-semibold text-gray-800 md:text-xl">{section.settings.title ||"Get started today."}</p>
					<p class="text-sm text-gray-800 md:text-base">{section.settings.description}</p>
				</div>
			</div>
			<!-- End Col -->

			<div class="flex gap-x-3 text-center sm:items-center sm:justify-end sm:text-start md:gap-x-4">
				<a
					class="inline-flex items-center gap-x-2 rounded-full border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
					href="#">Free trial</a
				>
				<a
					class="inline-flex items-center gap-x-2 rounded-full border border-gray-800 px-4 py-3 text-sm font-semibold text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:pointer-events-none disabled:opacity-50"
					href="#">Buy now</a
				>
			</div>
			<!-- End Col -->
		</div>
		<!-- End Grid -->
	</div>
</div>
<!-- End Announcement Banner -->
