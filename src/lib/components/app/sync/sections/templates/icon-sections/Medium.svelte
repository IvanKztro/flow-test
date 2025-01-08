<script lang="ts">
	import { Building, Users, Monitor } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl">
		<!-- Grid -->
		<div class="grid gap-12">
			<div>
				<h2 class="text-3xl font-bold text-gray-800">Our vision</h2>
				<p class="mt-3 text-gray-800">
					For as long as there have been cities, the public square has been a fundamental part of
					the urban landscape - an open, approachable space to meet and engage with friends and
					neighbours. Space aims to capture this spirit of bringing people together in an exciting,
					welcoming environment.
				</p>
			</div>

			<div class="space-y-6 lg:space-y-10">
				<!-- Icon Block -->
				<div class="flex">
					<Building class="mt-2 size-6 flex-shrink-0 text-gray-800" />
					<div class="ms-5 sm:ms-8">
						<h3 class="text-base font-semibold text-gray-800">
							High quality Co-Living spaces
						</h3>
						<p class="mt-1 text-gray-600">
							Our fully furnished spaces are designed and purpose-built with Co-Living in mind,
							featuring high-end finishes and amenities that go far beyond traditional apartment
							buildings.
						</p>
					</div>
				</div>
				<!-- End Icon Block -->

				<!-- Icon Block -->
				<div class="flex">
					<Users class="mt-2 size-6 flex-shrink-0 text-gray-800" />
					<div class="ms-5 sm:ms-8">
						<h3 class="text-base font-semibold text-gray-800">
							Fostering vibrant communities
						</h3>
						<p class="mt-1 text-gray-600">
							Our passion is bringing people together. Beyond creating beautiful spaces, we provide
							shared experiences.
						</p>
					</div>
				</div>
				<!-- End Icon Block -->

				<!-- Icon Block -->
				<div class="flex">
					<Monitor class="mt-2 size-6 flex-shrink-0 text-gray-800" />
					<div class="ms-5 sm:ms-8">
						<h3 class="text-base font-semibold text-gray-800">
							Simple and all-inclusive
						</h3>
						<p class="mt-1 text-gray-600">
							We worry about the details so that our residents don't have to. From our online
							application process to simple, all-inclusive billing we aim to make the living
							experience as effortless as possible.
						</p>
					</div>
				</div>
				<!-- End Icon Block -->
			</div>
		</div>
		<!-- End Grid -->
	</div>
</div>
<!-- End Icon Blocks -->
