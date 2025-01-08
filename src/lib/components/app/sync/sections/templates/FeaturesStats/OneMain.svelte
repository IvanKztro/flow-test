<script>
	import Badge from "$lib/components/ui/badge/badge.svelte";
    import { BadgeCheck } from 'lucide-svelte';
</script>
<!-- Features -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12">
		<div class="lg:col-span-4">
			<!-- Stats -->
			<div class="lg:pe-6 xl:pe-12">
				<p class="text-6xl font-bold leading-10">
					92%
					<Badge variant="outline">

                        <BadgeCheck />
						+7% this month
					</Badge>
				</p>
				<p class="mt-2 text-gray-500">
					of U.S. adults have bought from businesses <br/> using Space
				</p>
			</div>
			<!-- End Stats -->
		</div>
		<!-- End Col -->

		<div
			class="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-gray-200"
		>
			<div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3">
				<!-- Stats -->
				<div>
					<p class="text-3xl font-semibold">99.95%</p>
					<p class="mt-1 text-gray-500">in fulfilling orders</p>
				</div>
				<!-- End Stats -->

				<!-- Stats -->
				<div>
					<p class="text-3xl font-semibold">2,000+</p>
					<p class="mt-1 text-gray-500">partner with Preline</p>
				</div>
				<!-- End Stats -->

				<!-- Stats -->
				<div>
					<p class="text-3xl font-semibold">85%</p>
					<p class="mt-1 text-gray-500">this year alone</p>
				</div>
				<!-- End Stats -->
			</div>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
