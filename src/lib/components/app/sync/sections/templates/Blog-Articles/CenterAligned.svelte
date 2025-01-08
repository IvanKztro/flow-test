<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { User, Heart, MessageCircle, Share2, Twitter } from 'lucide-svelte';
</script>

<!-- Blog Article -->
<div class="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10">
	<div class="max-w-2xl">
		<!-- Avatar Media -->
		<div class="mb-6 flex items-center justify-between">
			<div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
				<div class="flex-shrink-0">
					<Avatar.Root>
						<Avatar.Image
							src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
							alt="@shadcn"
						/>
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</div>
				<div class="grow">
					<div class="flex items-center justify-between gap-x-2">
						<div>
							<!-- Tooltip -->
							<div class="hs-tooltip inline-block [--placement:bottom] [--trigger:hover]">
								<div class="hs-tooltip-toggle block cursor-pointer text-start sm:mb-1">
									<span class="font-semibold text-gray-800">
										Leyla Ludic
									</span>

									<!-- Dropdown Card -->
									<div
										class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible invisible absolute z-10 inline-block max-w-xs cursor-default divide-y divide-gray-700 rounded-xl bg-gray-900 opacity-0 shadow-lg transition-opacity"
										role="tooltip"
									>
										<!-- Body -->
										<div class="p-4 sm:p-5">
											<div class="mb-2 flex w-full gap-x-5 sm:items-center sm:gap-x-3">
												<div class="flex-shrink-0">
													<img
														class="size-8 rounded-full"
														src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
														alt="Image Description"
													/>
												</div>

												<div class="grow">
													<p class="text-lg font-semibold text-gray-200">
														Leyla Ludic
													</p>
												</div>
											</div>
											<p class="text-sm text-gray-400">
												Leyla is a Customer Success Specialist at Preline and spends her time
												speaking to in-house recruiters all over the world.
											</p>
										</div>
										<!-- End Body -->

										<!-- Footer -->
										<div class="flex items-center justify-between px-4 py-3 sm:px-5">
											<ul class="space-x-3 text-xs">
												<li class="inline-block">
													<span class="font-semibold text-gray-200">56</span>
													<span class="text-gray-400">articles</span>
												</li>
												<li class="inline-block">
													<span class="font-semibold text-gray-200">1k+</span>
													<span class="text-gray-400">followers</span>
												</li>
											</ul>

											<div>
												<button
													type="button"
													class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
												>
													<User class="size-3.5 flex-shrink-0" />
													Follow
												</button>
											</div>
										</div>
										<!-- End Footer -->
									</div>
									<!-- End Dropdown Card -->
								</div>
							</div>
							<!-- End Tooltip -->

							<ul class="text-xs text-gray-500">
								<li
									class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden"
								>
									Jan 18
								</li>
								<li
									class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden"
								>
									8 min read
								</li>
							</ul>
						</div>

						<!-- Button Group -->
						<div>
							<button
								type="button"
								class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
							>
								<Twitter class="size-3.5" />
								Tweet
							</button>
						</div>
						<!-- End Button Group -->
					</div>
				</div>
			</div>
		</div>
		<!-- End Avatar Media -->

		<!-- Content -->
		<div class="space-y-5 md:space-y-8">
			<div class="space-y-3">
				<h2 class="text-2xl font-bold">
					Announcing a free plan for small teams
				</h2>

				<p class="text-lg text-gray-800">
					At preline, our mission has always been focused on bringing openness and transparency to
					the design process. We've always believed that by providing a space where designers can
					share ongoing work not only empowers them to make better products, it also helps them
					grow.
				</p>
			</div>

			<p class="text-lg text-gray-800">
				We're proud to be a part of creating a more open culture and to continue building a product
				that supports this vision.
			</p>

			<figure>
				<img
					class="w-full rounded-xl object-cover"
					src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="Image Description"
				/>
				<figcaption class="mt-3 text-center text-sm text-gray-500">
					A woman sitting at a table.
				</figcaption>
			</figure>

			<p class="text-lg text-gray-800">
				As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft,
				Airbnb, Facebook, and Intercom bring their designers closer together to create amazing
				things. We've also learned that when the culture of sharing is brought in earlier, the
				better teams adapt and communicate with one another.
			</p>

			<p class="text-lg text-gray-800">
				That's why we are excited to share that we now have a <a
					class="font-medium text-blue-600 decoration-2 hover:underline"
					href="#">free version of Preline</a
				>, which will allow individual designers, startups and other small teams a chance to create
				a culture of openness early on.
			</p>

			<blockquote class="p-4 text-center sm:px-7">
				<p
					class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal"
				>
					To say that switching to Preline has been life-changing is an understatement. My business
					has tripled and I got my life back.
				</p>
				<p class="mt-5 text-gray-800">Nicole Grazioso</p>
			</blockquote>

			<figure>
				<img
					class="w-full rounded-xl object-cover"
					src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="Image Description"
				/>
				<figcaption class="mt-3 text-center text-sm text-gray-500">
					A man and a woman looking at a cell phone.
				</figcaption>
			</figure>

			<div class="space-y-3">
				<h3 class="text-2xl font-semibold">
					Bringing the culture of sharing to everyone
				</h3>

				<p class="text-lg text-gray-800">
					We know the power of sharing is real, and we want to create an opportunity for everyone to
					try Preline and explore how transformative open communication can be. Now you can have a
					team of one or two designers and unlimited spectators (think PMs, management, marketing,
					etc.) share work and explore the design process earlier.
				</p>
			</div>

			<ul class="list-outside list-disc space-y-5 ps-5 text-lg text-gray-800">
				<li class="ps-2">
					Preline allows us to collaborate in real time and is a really great way for leadership on
					the team to stay up-to-date with what everybody is working on," <a
						class="font-medium text-blue-600 decoration-2 hover:underline"
						href="#">said</a
					> Stewart Scott-Curran, Intercom's Director of Brand Design.
				</li>
				<li class="ps-2">
					Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb
					each other's work," said David Scott, Creative Director at <a
						class="font-medium text-blue-600 decoration-2 hover:underline"
						href="#">Eventbrite</a
					>.
				</li>
			</ul>

			<p class="text-lg text-gray-800">
				Small teams and individual designers need a space where they can watch the design process
				unfold, both for themselves and for the people they work with – no matter if it's a fellow
				designer, product manager, developer or client. Preline allows you to invite more people
				into the process, creating a central place for conversation around design. As those teams
				grow, transparency and collaboration becomes integrated in how they communicate and work
				together.
			</p>

			<div>
				<Button>Plan</Button>
				<Button>Web development</Button>
				<Button>Free</Button>
				<Button>Team</Button>
			</div>
		</div>
		<!-- End Content -->
	</div>
</div>
<!-- End Blog Article -->

<!-- Sticky Share Group -->
<div class="sticky inset-x-0 bottom-6 text-center">
	<div class="inline-block rounded-full px-4 py-3 shadow-md">
		<div class="flex items-center gap-x-1.5">
			<!-- Button -->
			<div class="hs-tooltip inline-block">
				<Button>
					<Heart />
					875
				</Button>
			</div>
			<!-- Button -->

			<div class="mx-3 block h-3 border-e border-gray-300"></div>

			<!-- Button -->
			<div class="hs-tooltip inline-block">
				<Button>
					<MessageCircle />
					16
				</Button>
			</div>
			<!-- Button -->

			<div class="mx-3 block h-3 border-e border-gray-300"></div>

			<!-- Button -->
			<div class="hs-dropdown relative inline-flex">
				<Button>
					<Share2 />
					Share
				</Button>
			</div>
			<!-- Button -->
		</div>
	</div>
</div>
<!-- End Sticky Share Group -->
