<script>

	let isVisible = true;

</script>

{#if isVisible}
	<div class="bg-neutral-900 mt-24">
		<div class="mx-auto max-w-[85rem] px-4 py-4 text-center sm:px-6 lg:px-8">
			<!-- Announcement Banner -->
			<a
				class="group inline-block rounded-full border border-white/10 bg-white/10 p-1 ps-4 shadow-md hover:bg-white/10"
				href="../figma.html"
			>
				<p class="me-2 inline-block text-sm text-white">Preline UI Figma is live.</p>
				<span
					class="inline-flex items-center justify-center gap-x-2 rounded-full bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white group-hover:bg-white/10"
				>
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
			</a>
			<!-- End Announcement Banner -->
		</div>
	</div>
{/if}
