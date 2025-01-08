<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Timestamp, where } from 'firebase/firestore';
	import { Plus, Search } from 'lucide-svelte';
	import { firekitCollection, firekitDocMutations, firekitUser } from 'svelte-firekit';

	let syncs = $state(firekitCollection('syncs', where('createdBy', '==', firekitUser.uid)));
	import { Skeleton } from '$lib/components/ui/skeleton';
	import NoSyncs from '$lib/components/app/sync/no-syncs.svelte';

	async function addNewSync() {
		const id = await firekitDocMutations.set('syncs', {
			content: {},
			title: '',
			slug: '',
			status: 'draft',
			visibility: 'public',
			published_at: Timestamp.now(),
			author_id: firekitUser.uid
		});
		goto(`/sync/${id}`);
	}
</script>

<div class="flex flex-col gap-2 pb-2 sm:flex-row sm:items-center sm:justify-between">
	<h2 class="inline-block font-semibold text-gray-800 dark:text-neutral-200">Syncs</h2>

	<div class="flex items-center gap-x-2 sm:justify-end">
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-3">
				<Search class="size-4 shrink-0 text-gray-500 dark:text-neutral-500" />
			</div>
			<Input class="block w-40 rounded-lg   px-8 py-1.5   sm:w-full" placeholder="Search" />
		</div>

		<Button onclick={addNewSync}><Plus /> Add Sync</Button>
	</div>
</div>

{#if syncs.loading}
	<div class="flex items-center space-x-4">
		<Skeleton class="size-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>
{:else if syncs.data.length === 0}
	<NoSyncs />
{:else}
	{#each syncs.data as { id, title, description }}
		<div class="relative flex flex-col rounded-xl border border-gray-200 bg-white p-4">
			<div class="grid gap-x-4 gap-y-2 lg:grid-cols-12 lg:gap-y-0">
				<div class="lg:col-span-3">
					<p>
						<a
							class="inline-flex items-center gap-x-1 font-semibold text-gray-800 decoration-2 hover:text-blue-600 hover:underline focus:text-blue-600 focus:underline focus:outline-none dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:focus:outline-none"
							href={`/sync/${id}`}
						>
							{title ? title : 'Untitled'}
						</a>
					</p>

					<!-- Badge Group -->
					<div class="-mx-0.5 mt-1 sm:-mx-1 lg:mt-2">
						<span
							class="m-0.5 inline-block rounded-md bg-gray-100 p-1.5 text-xs text-gray-800 dark:bg-neutral-700 dark:text-neutral-200 sm:m-1 sm:p-2"
							>Marketing</span
						>
						<span
							class="m-0.5 inline-block rounded-md bg-gray-100 p-1.5 text-xs text-gray-800 dark:bg-neutral-700 dark:text-neutral-200 sm:m-1 sm:p-2"
							>Digital</span
						>
					</div>
					<!-- End Badge Group -->
				</div>
				<!-- End Col -->

				<div class="lg:col-span-6">
					<p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
						{description ? description : 'No description'}
					</p>

					<!-- Avatar Group -->
					<div class="mt-2 flex items-center gap-x-3">
						<h4 class="text-xs uppercase text-gray-500 dark:text-neutral-200">Members:</h4>
						<div class="flex items-center -space-x-2">
							<img
								class="size-7 shrink-0 rounded-full"
								src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
								alt="Avatar"
							/>
							<span
								class="flex size-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-medium uppercase text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
								>L</span
							>
							<img
								class="size-7 shrink-0 rounded-full"
								src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
								alt="Avatar"
							/>
							<img
								class="size-7 shrink-0 rounded-full"
								src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
								alt="Avatar"
							/>
							<span
								class="flex size-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-medium uppercase text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
								>O</span
							>
						</div>
					</div>
					<!-- End Avatar Group -->
				</div>
				<!-- End Col -->

				<div class="flex flex-col justify-center lg:col-span-3">
					<div
						class="flex items-center justify-end gap-2 border-t border-gray-200 pt-3 dark:border-neutral-700 lg:flex-col lg:border-t-0 lg:pt-0"
					>
						<div class="lg:order-2 lg:ms-auto">
							<Button href={`/sync/${id}`}>Edit</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
{/if}
