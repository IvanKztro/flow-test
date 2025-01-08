<script>
	import { onMount } from 'svelte';

	let isVisible = true;

</script>

{#if isVisible}
	<!-- Announcement Banner -->
	<a
		class="group block rounded-lg bg-gray-100 p-4 text-center transition-all duration-300 hover:bg-gray-200"
		href="#"
	>
		<div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 mt-24">
			<p class="me-2 inline-block text-sm text-gray-800">
				Shop for everyone on your list with the Preline Guide.
			</p>
			<span
				class="inline-flex items-center justify-center gap-x-2 text-sm font-semibold text-blue-600 decoration-2 group-hover:underline"
			>
				Shop now
				<svg
					class="size-4 flex-shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</span>
		</div>
	</a>
	<!-- End Announcement Banner -->
{/if}
