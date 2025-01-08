<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { CalendarDays, ChevronRight, Play } from 'lucide-svelte';
	import { firekitUser } from 'svelte-firekit';
</script>

<div class="p-2 sm:p-5 sm:pb-0">
	<div class="mx-auto">
		<!-- Header -->
		<div class="relative z-10 flex flex-col items-center justify-between sm:flex-row">
			<div>
				<h2 class="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
					Welcome, {firekitUser.displayName}
				</h2>
			</div>

			<div class="flex items-center gap-x-2">
				<Button variant="ghost">
					<CalendarDays />
					Book a demo
				</Button>
				<Button>
					<Play />
					Watch intro
				</Button>
			</div>
		</div>
		<!-- End Header -->

		<div class="my-4">
			<div class="space-y-4">
				<!-- Card -->
				<div
					class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
				>
					<div class="grid gap-4 sm:grid-cols-12">
						<div class="sm:order-2 sm:col-span-6">
							<div class="overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-700">
								<img class="w-full" src="./analytics.png" alt="Analytics" />
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:order-1 sm:col-span-6">
							<div class="flex h-full flex-col justify-between space-y-3">
								<div>
									<h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-lg">
										Explore your Hyvflow dashboard with analytics
									</h3>
									<p class="mt-1 text-gray-500 dark:text-neutral-500 sm:mt-3">
										Create workflows, manage projects, and track your team's progress
									</p>
									<Button variant="link" class="p-0">Explore <ChevronRight /></Button>
								</div>
							</div>
						</div>
						<!-- End Col -->
					</div>
				</div>
				<!-- End Card -->

				<!-- Card -->
				<div
					class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
				>
					<div class="grid gap-4 sm:grid-cols-12">
						<div class="sm:order-2 sm:col-span-6">
							<img class="w-full" src="/documentation.png" alt="documentation" />
						</div>
						<!-- End Col -->

						<div class="sm:order-1 sm:col-span-6">
							<div class="flex h-full flex-col justify-between space-y-3">
								<div>
									<h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-lg">
										Documentation
									</h3>
									<p class="mt-1 text-gray-500 dark:text-neutral-500 sm:mt-3">
										Whether you're a startup or a global enterprise, learn how to integrate with
										Hyvflow.
									</p>
									<p>
										<Button variant="link" class="p-0">Learn more <ChevronRight /></Button>
									</p>
								</div>
							</div>
						</div>
						<!-- End Col -->
					</div>
				</div>
				<!-- End Card -->
			</div>
		</div>

		<!-- Card -->
		<div
			class="relative overflow-hidden rounded-xl border border-gray-200 bg-white px-5 py-10 text-center shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
		>
			<div class="relative z-10">
				<h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-200 sm:text-2xl">
					Invite friends
				</h3>
				<p class="mt-1 text-gray-500 dark:text-neutral-500">
					Invite teammates to collaborate in Hyvflow
				</p>
				<div class="mt-3 sm:mt-5">
					<Button>Send an invite</Button>
				</div>
			</div>

			<div class="absolute start-10 top-5">
				<img
					class="size-10 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute start-20 top-20 hidden sm:block">
				<img
					class="size-14 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute bottom-5 start-40">
				<img
					class="size-8 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute bottom-3 start-8">
				<img
					class="size-8 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute -top-5 end-40">
				<img
					class="size-14 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute end-14 top-7">
				<img
					class="size-8 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute end-20 top-20 hidden sm:block">
				<img
					class="size-14 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute bottom-5 end-40 hidden sm:block">
				<img
					class="size-8 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>

			<div class="absolute bottom-3 end-8">
				<img
					class="size-8 shrink-0 rounded-full"
					src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
					alt="Avatar"
				/>
			</div>
		</div>
		<!-- End Card -->
	</div>
</div>
