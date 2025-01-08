<script lang="ts">
	import { BookOpen, MessageSquare, Monitor, ArrowRight } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-12 md:grid-cols-2">
		<div class="lg:w-3/4">
			<h2 class="text-3xl font-bold text-gray-800 lg:text-4xl">
				Collaborative tools to design better user experience
			</h2>
			<p class="mt-3 text-gray-800">
				We help businesses bring ideas to life in the digital world, by designing and implementing
				the technology tools that they need to win.
			</p>
			<p class="mt-5">
				<a class="inline-flex items-center gap-x-1 font-medium text-blue-600" href="#">
					Contact sales to learn more
					<ArrowRight />
				</a>
			</p>
		</div>
		<!-- End Col -->

		<div class="space-y-6 lg:space-y-10">
			<!-- Icon Block -->
			<div class="flex">
				<!-- Icon -->
				<span
					class="mx-auto inline-flex size-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm"
				>
					<BookOpen />
				</span>
				<div class="ms-5 sm:ms-8">
					<h3 class="text-base font-semibold text-gray-800 sm:text-lg">
						Industry-leading documentation
					</h3>
					<p class="mt-1 text-gray-600">
						Our documentation and extensive Client libraries contain everything a business needs to
						build a custom integration in a fraction of the time.
					</p>
				</div>
			</div>
			<!-- End Icon Block -->

			<!-- Icon Block -->
			<div class="flex">
				<!-- Icon -->
				<span
					class="mx-auto inline-flex size-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm"
				>
					<MessageSquare class="size-5 flex-shrink-0" />
				</span>
				<div class="ms-5 sm:ms-8">
					<h3 class="text-base font-semibold text-gray-800 sm:text-lg">
						Developer community support
					</h3>
					<p class="mt-1 text-gray-600">
						We actively contribute to open-source projects—giving back to the community through
						development, patches, and sponsorships.
					</p>
				</div>
			</div>
			<!-- End Icon Block -->

			<!-- Icon Block -->
			<div class="flex">
				<!-- Icon -->
				<span
					class="mx-auto inline-flex size-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm"
				>
					<Monitor class="size-5 flex-shrink-0" />
				</span>
				<div class="ms-5 sm:ms-8">
					<h3 class="text-base font-semibold text-gray-800">
						Simple and affordable
					</h3>
					<p class="mt-1 text-gray-600">
						From boarding passes to movie tickets, there's pretty much nothing you can't store with
						Preline.
					</p>
				</div>
			</div>
			<!-- End Icon Block -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Icon Blocks -->
