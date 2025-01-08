<script lang="ts">
	const stats = [
		{
			icon: `
          <svg class="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
        `,
			value: '2,000+',
			description: 'Preline partners'
		},
		{
			icon: `
          <div class="flex justify-center items-center -space-x-5">
            <img class="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            <img class="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            <img class="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
          </div>
        `,
			value: '85%',
			description: 'Happy customers'
		},
		{
			icon: `
          <svg class="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
        `,
			value: '$55M+',
			description: 'Ads managed yearly'
		}
	];
</script>

<!-- Stats Section -->
<div class="bg-neutral-900">
	<div class="mx-auto max-w-5xl px-4 py-10 xl:px-0">
		<div class="rounded-xl border border-neutral-800">
			<div
				class="rounded-xl bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 p-4 lg:p-8"
			>
				<div class="grid grid-cols-1 items-center gap-x-12 gap-y-20 sm:grid-cols-3">
					{#each stats as stat}
						<!-- Stats -->
						<div class="relative text-center before:absolute before:-top-full before:start-1/2 before:mt-3.5 before:h-20 before:w-px before:-translate-x-1/2 before:rotate-[60deg] before:transform before:bg-neutral-800 first:before:hidden sm:before:-start-6 sm:before:top-1/2 sm:before:mt-0 sm:before:-translate-x-0 sm:before:-translate-y-1/2 sm:before:rotate-12">
							{@html stat.icon}
							<div class="mt-3 sm:mt-5">
								<h3 class="text-lg font-semibold text-white sm:text-3xl">{stat.value}</h3>
								<p class="mt-1 text-sm text-neutral-400 sm:text-base">{stat.description}</p>
							</div>
						</div>
						<!-- End Stats -->
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
<!-- End Stats Section -->
