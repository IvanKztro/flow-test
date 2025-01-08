<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';

	import Input from '$lib/components/ui/input/input.svelte';
	import { where } from 'firebase/firestore';
	import { Plus, Search, Trash, Pencil } from 'lucide-svelte';
	import { firekitCollection, firekitDocMutations, firekitUser } from 'svelte-firekit';

	
	let searchinput = $state('');
	let isopen = $state(false);
	let postidtodeleted: string = $state('');
	
	let post = $state(firekitCollection('posts', where('createdBy', '==', firekitUser.uid)));
	

	let postlistfilter: any[] = $state([]);
	import { Skeleton } from '$lib/components/ui/skeleton';
	import NoPosts from '$lib/components/app/post/no-posts.svelte';
	import { toast } from 'svelte-sonner';
	import TagsList from '$lib/components/app/post/tags-list.svelte';
	import CategoriesList from '$lib/components/app/post/categories-list.svelte';

	$effect(() => {
		if (searchinput === '') postlistfilter = post.data;
		else
			postlistfilter = post.data.filter((pp) =>
				pp.title.trim().toLowerCase().includes(searchinput.trim().toLowerCase())
			);
	});

	async function deletePost() {
		try {
			await firekitDocMutations.delete(`posts/${postidtodeleted}`);
			toast.success('Post was deleted successfuly!');
		} catch (error) {
			toast.error(error.message);
		}

		isopen = false;
		postidtodeleted = '';
	}
</script>

<div class="flex flex-col gap-2 pb-2 sm:flex-row sm:items-center sm:justify-between">
	<h2 class="inline-block font-semibold text-gray-800 dark:text-neutral-200">Posts</h2>

	<div class="flex items-center gap-x-2 sm:justify-end">
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-3">
				<Search class="size-4 shrink-0 text-gray-500 dark:text-neutral-500" />
			</div>
			<Input
				class="block w-40 rounded-lg   px-8 py-1.5   sm:w-full"
				placeholder="Search"
				bind:value={searchinput}
			/>
		</div>

		<Button href="posts/create"><Plus /> Add Post</Button>
	</div>
</div>

{#if post.loading}
	<div class="flex items-center space-x-4">
		<Skeleton class="size-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>
{:else if post.data.length === 0}
	<NoPosts />
{:else}
	{#each postlistfilter || post.data as { id, title, status, tags, categories }}
		<div class="relative flex flex-col rounded-xl border border-gray-200  p-4">
			<div class="grid gap-x-4 gap-y-2 lg:grid-cols-12 lg:gap-y-0">
				<div class="lg:col-span-3">
					<p>
						<a
							class="inline-flex items-center gap-x-1 font-semibold text-gray-800 decoration-2 hover:text-blue-600 hover:underline focus:text-blue-600 focus:underline focus:outline-none dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:focus:outline-none"
							href={`/posts/${id}`}
						>
							{title ? title : 'Untitled'}
						</a>
					</p>

					<!-- Badge Group -->
					<div class="-mx-0.5 mt-1 flex sm:-mx-1 lg:mt-2">
						<CategoriesList {categories}></CategoriesList>
					</div>
					<!-- End Badge Group -->
				</div>
				<!-- End Col -->

				<div class="lg:col-span-6">
					<h4 class="text-xs uppercase text-gray-500 dark:text-neutral-200">
						Status:
						<span class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
							{status ? status : 'No description'}
						</span>
					</h4>

					<!-- Avatar Group -->
					<div class="mt-2 flex items-center gap-3">
						<h4 class="text-xs uppercase text-gray-500 dark:text-neutral-200">Tags:</h4>
						<TagsList {tags}></TagsList>
					</div>
					<!-- End Avatar Group -->
				</div>
				<!-- End Col -->

				<div class="flex flex-col justify-center lg:col-span-3">
					<div
						class="flex items-center justify-end gap-2 border-t border-gray-200 pt-3 dark:border-neutral-700 lg:flex-col lg:border-t-0 lg:pt-0"
					>
						<div class="lg:order-2 lg:ms-auto">
							<Button href={`/posts/${id}`} class="" variant="default" size="icon">
								<Pencil class="size-4"></Pencil>
							</Button>
							<Button
								variant="destructive" size="icon"
								onclick={() => {
									isopen = true;
									postidtodeleted = id;
								}}
							>
								<Trash class="size-4"></Trash>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
{/if}

<AlertDialog.Root bind:open={isopen}>
	<AlertDialog.Trigger class="hidden">Open</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This will permanently delete your post and remove your data
				from our servers.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel onclick={() => (isopen = false)}>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action onclick={() => deletePost()}>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
