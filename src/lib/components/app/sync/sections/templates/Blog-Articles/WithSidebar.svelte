<script lang="ts">
	import * as Card from '$lib/components/ui/card';
    import { Badge } from "$lib/components/ui/badge";
    import Button from '$lib/components/ui/button/button.svelte';
    import Avatar from '$lib/components/ui/avatar/avatar.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import {
		ChevronLeft,
		ThumbsUp,
		MessageCircle,
		Share,
		UserPlus,
		Link,
		Twitter,
		Facebook,
		Linkedin
	} from 'lucide-svelte';
</script>

<!-- Blog Article -->
<div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
	<div class="grid gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
		<!-- Content -->
		<div class="lg:col-span-2">
			<div class="py-8 lg:pe-8">
				<div class="space-y-5 lg:space-y-8">
					<a
						class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-500"
						href="#"
					>
						<ChevronLeft />
						Back to Blog
					</a>

					<h2 class="text-3xl font-bold dark:text-white lg:text-5xl">
						Announcing a free plan for small teams
					</h2>

					<div class="flex items-center gap-x-5">
						<div
							class="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 sm:px-4 sm:py-2 sm:text-sm"
						>
							Company News
						</div>
						<p class="text-xs text-gray-800 dark:text-neutral-200 sm:text-sm">January 18, 2023</p>
					</div>

					<p class="text-lg text-gray-800 dark:text-neutral-200">
						At preline, our mission has always been focused on bringing openness and transparency to
						the design process. We've always believed that by providing a space where designers can
						share ongoing work not only empowers them to make better products, it also helps them
						grow.
					</p>

					<p class="text-lg text-gray-800 dark:text-neutral-200">
						We're proud to be a part of creating a more open culture and to continue building a
						product that supports this vision.
					</p>

					<div class="text-center">
						<div class="grid gap-3 lg:grid-cols-2">
							<div class="grid grid-cols-2 gap-3 lg:grid-cols-1">
								<figure class="relative h-60 w-full">
									<img
										class="absolute start-0 top-0 size-full rounded-xl object-cover"
										src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
										alt="Image Description"
									/>
								</figure>
								<figure class="relative h-60 w-full">
									<img
										class="absolute start-0 top-0 size-full rounded-xl object-cover"
										src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
										alt="Image Description"
									/>
								</figure>
							</div>
							<figure class="relative h-72 w-full sm:h-96 lg:h-full">
								<img
									class="absolute start-0 top-0 size-full rounded-xl object-cover"
									src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
									alt="Image Description"
								/>
							</figure>
						</div>

						<span class="mt-3 block text-center text-sm text-gray-500 dark:text-neutral-500">
							Working process
						</span>
					</div>

					<p class="text-lg text-gray-800 dark:text-neutral-200">
						As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft,
						Airbnb, Facebook, and Intercom bring their designers closer together to create amazing
						things. We've also learned that when the culture of sharing is brought in earlier, the
						better teams adapt and communicate with one another.
					</p>

					<p class="text-lg text-gray-800 dark:text-neutral-200">
						That's why we are excited to share that we now have a <a
							class="font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
							href="#">free version of Preline</a
						>, which will allow individual designers, startups and other small teams a chance to
						create a culture of openness early on.
					</p>

					<blockquote class="p-4 text-center sm:px-7">
						<p
							class="text-xl font-medium text-gray-800 dark:text-neutral-200 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal"
						>
							To say that switching to Preline has been life-changing is an understatement. My
							business has tripled and I got my life back.
						</p>
						<p class="mt-5 text-gray-800 dark:text-neutral-200">Nicole Grazioso</p>
					</blockquote>

					<figure>
						<img
							class="w-full rounded-xl object-cover"
							src="https://images.unsplash.com/photo-1671726203454-488ab18f7eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							alt="Image Description"
						/>
						<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-neutral-500">
							A man and a woman looking at a cell phone.
						</figcaption>
					</figure>

					<div class="space-y-3">
						<h3 class="text-2xl font-semibold dark:text-white">
							Bringing the culture of sharing to everyone
						</h3>

						<p class="text-lg text-gray-800 dark:text-neutral-200">
							We know the power of sharing is real, and we want to create an opportunity for
							everyone to try Preline and explore how transformative open communication can be. Now
							you can have a team of one or two designers and unlimited spectators (think PMs,
							management, marketing, etc.) share work and explore the design process earlier.
						</p>
					</div>

					<ul
						class="list-outside list-disc space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200"
					>
						<li class="ps-2">
							Preline allows us to collaborate in real time and is a really great way for leadership
							on the team to stay up-to-date with what everybody is working on," <a
								class="font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
								href="#">said</a
							> Stewart Scott-Curran, Intercom's Director of Brand Design.
						</li>
						<li class="ps-2">
							Preline opened a new way of sharing. It's a persistent way for everyone to see and
							absorb each other's work," said David Scott, Creative Director at <a
								class="font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
								href="#">Eventbrite</a
							>.
						</li>
					</ul>

					<p class="text-lg text-gray-800 dark:text-neutral-200">
						Small teams and individual designers need a space where they can watch the design
						process unfold, both for themselves and for the people they work with – no matter if
						it's a fellow designer, product manager, developer or client. Preline allows you to
						invite more people into the process, creating a central place for conversation around
						design. As those teams grow, transparency and collaboration becomes integrated in how
						they communicate and work together.
					</p>

					<div class="grid gap-y-5 lg:flex lg:items-center lg:justify-between lg:gap-y-0">
						<!-- Badges/Tags -->
						<div>
							<Badge color="gray" class="m-0.5 rounded-full px-3 py-2 text-sm">Plan</Badge>
							<Badge color="gray" class="m-0.5 rounded-full px-3 py-2 text-sm">
								Web development
							</Badge>
							<Badge color="gray" class="m-0.5 rounded-full px-3 py-2 text-sm">Free</Badge>
							<Badge color="gray" class="m-0.5 rounded-full px-3 py-2 text-sm">Team</Badge>
						</div>
						<!-- End Badges/Tags -->

						<div class="flex items-center justify-end gap-x-1.5">
							<!-- Button -->
							<Tooltip.Root>
								<Tooltip.Trigger>
									<Button>
										<ThumbsUp />
										875
									</Button>
								</Tooltip.Trigger>
								<Tooltip.Content>
									<p>Like</p>
								</Tooltip.Content>
							</Tooltip.Root>
							<!-- Button -->

							<div class="mx-3 block h-3 border-e border-gray-300 dark:border-neutral-600"></div>

							<!-- Button -->
							<Tooltip.Root>
								<Tooltip.Trigger>
									<Button>
										<MessageCircle />
										16
									</Button>
								</Tooltip.Trigger>
								<Tooltip.Content>
									<p>Comment</p>
								</Tooltip.Content>
							</Tooltip.Root>
							<!-- Button -->

							<div class="mx-3 block h-3 border-e border-gray-300 dark:border-neutral-600"></div>

							<!-- Button -->
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Button
										class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									>
										<Share />
										Share
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Group>
										<DropdownMenu.Item>
											<Link class="size-4" />
											Copy link
										</DropdownMenu.Item>
										<DropdownMenu.Item>
											<Twitter class="size-4" />
											Share on Twitter
										</DropdownMenu.Item>
										<DropdownMenu.Item>
											<Facebook class="size-4" />
											Share on Facebook
										</DropdownMenu.Item>
										<DropdownMenu.Item>
											<Linkedin class="size-4" />
											Share on LinkedIn
										</DropdownMenu.Item>
									</DropdownMenu.Group>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
							<!-- Button -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Content -->

		<!-- Sidebar -->
		<div
			class="dark:from-neutral-800 lg:col-span-1 lg:h-full lg:w-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent"
		>
			<div class="sticky start-0 top-0 py-8 lg:ps-8">
				<!-- Avatar Media -->
				<Card.Root class="group mb-8 flex items-center gap-x-3 border-b border-gray-200 pb-8 dark:border-neutral-700">
					<Card.Header class="flex items-center">
						<Avatar
						/>
						<div class="ml-4">
                            <Card.Title class="text-sm font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-200 dark:group-hover:text-neutral-400">
								Leyla Ludic
							</Card.Title>
							<Card.Description class="text-sm text-gray-500 dark:text-neutral-500">
								UI/UX enthusiast
							</Card.Description>
						</div>
					</Card.Header>
					<Card.Footer class="flex justify-end">
						<Button
							class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
						>
							<UserPlus />
							Follow
						</Button>
					</Card.Footer>
				</Card.Root>
				<!-- End Avatar Media -->

				<div class="space-y-6">
					<!-- Media -->
					<Card.Root class="group flex items-center gap-x-6">
						<Card.Content>
							<span
								class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500"
							>
								5 Reasons to Not start a UX Designer Career in 2022/2023
							</span>
						</Card.Content>
						<Card.Content class="relative size-20 flex-shrink-0 overflow-hidden rounded-lg">
							<img
								class="absolute start-0 top-0 size-full rounded-lg object-cover"
								src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
								alt="Image Description"
							/>
						</Card.Content>
					</Card.Root>
					<!-- End Media -->

					<!-- Media -->
					<Card.Root class="group flex items-center gap-x-6">
						<Card.Content>
							<span
								class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500"
							>
								If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result
							</span>
						</Card.Content>
						<Card.Content class="relative size-20 flex-shrink-0 overflow-hidden rounded-lg">
							<img
								class="absolute start-0 top-0 size-full rounded-lg object-cover"
								src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
								alt="Image Description"
							/>
						</Card.Content>
					</Card.Root>
					<!-- End Media -->

					<!-- Media -->
					<Card.Root class="group flex items-center gap-x-6">
						<Card.Content>
							<span
								class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500"
							>
								7 Principles of Icon Design
							</span>
						</Card.Content>
						<Card.Content class="relative size-20 flex-shrink-0 overflow-hidden rounded-lg">
							<img
								class="absolute start-0 top-0 size-full rounded-lg object-cover"
								src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
								alt="Image Description"
							/>
						</Card.Content>
					</Card.Root>
					<!-- End Media -->
				</div>
			</div>
		</div>
		<!-- End Sidebar -->
	</div>
</div>
<!-- End Blog Article -->
