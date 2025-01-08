<script lang="ts">
	import { page } from '$app/stores';
	import { firekitCollection, firekitDoc, firekitDocMutations, firekitUser } from 'svelte-firekit';
	const id = $page.params.id;
	// const post = firekitDoc(`posts/${id}`);
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Input from '$lib/components/ui/input/input.svelte';
	// import Editor from '$lib/components/app/post/editorjs/editor.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Select from '$lib/components/ui/select';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import { SveltyEditor } from 'svelty-editor';
	import type { API, OutputData } from '@editorjs/editorjs';
	import { tools } from '$lib/components/app/post/editorjs/tools';
	import { toast } from 'svelte-sonner';
	import { formatString, slugFormatString } from '$lib/general';
	import { goto } from '$app/navigation';

	let {
		post = $bindable({
			title: '',
			content: { blocks: [] },
			SEOKey: '',
			SEOTitle: '',
			SEODescription: '',
			status: 'public',
			categories: [],
			tags: []
		}),
		loading = $bindable(false),
		error = $bindable(null)
	}: {
		post: {
			title: string;
			content: OutputData;
			SEOKey: string;
			SEOTitle: string;
			SEODescription: string;
			status: string;
			categories: string[];
			tags: string[];
		};
		loading: boolean;
		error: any;
	} = $props();

	
	const editorConfig = {
		autofocus: true,
		placeholder: 'Start writing.',
		tools,
		// onChange: (api: any, event: any) => {
		// 	console.log('Content changed:', event);
		// },
		// onReady: () => {
		// 	console.log('Editor is ready!');
		// }
	};

	let categories = firekitCollection('categories_post');
	let tags = firekitCollection('tags_post');

	// let categorieslist = $derived(categories.data)

	let stringreadstatus = $derived.by(() => {
		return formatString(post.status) || 'Select status';
	});

	let value: { tagname: string; categoryname: string } = $state({ categoryname: '', tagname: '' });
	// let tagname = $state('');

	const handleChange = async (api: API) => {
		const data: OutputData = await api.saver.save();
		console.log('Content changed:', data);
		post.content = { ...data };
	};

	async function addItemFirebase(collection: string, valuename: 'categoryname' | 'tagname') {
		if (value[valuename].trim() === '') {
			toast.error('Name is requiere to create category');
			return;
		}
		const newcat = {
			name: value[valuename],
			slug: slugFormatString(value[valuename])
		};

		const res = await firekitDocMutations.add(collection, newcat);
		if (res.success) {
			toast.success('Category created successsfully!');
			value[valuename] = '';
		} else toast.error('Error to create new Category!');
	}

	async function addItem(id: string, value: 'categories' | 'tags') {
		if (!Array.isArray(post[value])) {
			post[value] = [];
		}
		post[value] = [...post[value], id];
	}

	async function removeItem(id: string, value: 'categories' | 'tags') {
		post[value] = post[value].filter((pv: any) => pv !== id);
		// await firekitDocMutations.update('posts', { categories: categ });
	}

	async function handlePostAction() {
		if (post.title.trim() === '') {
			toast.error('Title is required');
			return;
		}

		const slug = slugFormatString(post.title);

		const newpost = {
			...post,
			slug
		};

		let res;
		if (id) res = await firekitDocMutations.update(`posts/${id}`, newpost);
		else res = await firekitDocMutations.add(`posts`, newpost);
		if (res.success) {
			toast.success('Post created successfully!');
			goto(`/posts`);
		} else {
			toast.error(res.error?.message);
		}
	}

	function handleEnter(event: any, collectionname: string, valuename: 'categoryname' | 'tagname') {
		if (event.key === 'Enter') {
			addItemFirebase(collectionname, valuename);
		}
	}
</script>

{#if loading}
	<div class="flex items-center space-x-4">
		<Skeleton class="size-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>
{:else if error}
	<p>{error.message}</p>
{:else}
	<!-- <pre>{JSON.stringify(categorieslist, null, 2)}</pre> -->

	<Button variant="default" class="ml-auto mt-5 block " onclick={() => handlePostAction()}
		>Save</Button
	>
	<div class="grid grid-cols-4">
		<div class="col-span-3 flex flex-col gap-4 pr-4">
			<Input placeholder="Add Title" bind:value={post.title} />
			<!-- <Editor fieldName="editorjs" data={post.data.content}></Editor> -->
			<div class="h-[75dvh] overflow-y-auto rounded-lg border">
				<SveltyEditor
					onChange={handleChange}
					data={post.content}
					{...editorConfig}
				/>
			</div>

			<div class="rounded-lg border">
				<div class="flex flex-col gap-6 p-4">
					<h3 class="text-lg">SEO Settings</h3>
					<div class="flex flex-col gap-4">
						<div class="grid w-full items-center gap-1.5">
							<Label for="keyboard">Focus Keyword</Label>
							<Input id="keyboard" placeholder="SEO keyboard" bind:value={post.SEOKey} />
							<p class="text-sm text-muted-foreground">
								This is the main keyword that you want this post to rank for.
							</p>
						</div>
						<div class="grid w-full items-center gap-1.5">
							<Label for="title">Title</Label>
							<Input id="title" placeholder="SEO Title" bind:value={post.SEOTitle} />
							<p class="text-sm text-muted-foreground">
								This is what will appear in the first line when this post shows up in the search
								results.
							</p>
						</div>
						<div class="grid w-full gap-1.5">
							<Label for="description">Description</Label>
							<Textarea
								placeholder="SEO Description "
								id="description"
								bind:value={post.SEODescription}
							/>
							<p class="text-sm text-muted-foreground">
								This is what will appear as the description when this post shows up in the search
								results.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class=" flex h-full flex-col gap-4 border-l pl-4">
			<div class="grid w-full items-center gap-1.5">
				<Label for="keyboard">Status</Label>

				<Select.Root type="single" bind:value={post.status}>
					<Select.Trigger>{stringreadstatus}</Select.Trigger>
					<Select.Content>
						<Select.Item value="draft">Draft</Select.Item>
						<Select.Item value="published">Published</Select.Item>
						<Select.Item value="private">Private</Select.Item>
					</Select.Content>
				</Select.Root>
			</div>
			<div class="grid w-full items-center gap-1.5">
				<Label for="permalink">Permalink</Label>
				<Input
					disabled={true}
					id="permalink"
					placeholder="permalink"
					value={`${post.title}-${firekitUser.uid}`}
				/>
				<p class="text-sm text-muted-foreground">This is the unique URL of this page</p>
			</div>
			<Separator />
			<div class="grid w-full items-center gap-2">
				<Label for="category ">Category</Label>
				<div class="mb-4 flex flex-col gap-2">
					{#each categories?.data as cat}
						<div class="flex items-center gap-2">
							<Checkbox
								value={cat.id}
								checked={post?.categories?.includes(cat.id)}
								onCheckedChange={(v) => {
									if (v) {
										addItem(cat.id, 'categories');
									} else {
										removeItem(cat.id, 'categories');
									}
								}}
							/>
							<small>{cat.name}</small>
						</div>
					{/each}
				</div>
				<div class="flex gap-2">
					<Input
						id="category"
						placeholder="Add new Category"
						bind:value={value.categoryname}
						onkeydown={(e) => handleEnter(e, 'categories_post', 'categoryname')}
					/>
					<Button
						variant="outline"
						onclick={() => addItemFirebase('categories_post', 'categoryname')}>Add</Button
					>
				</div>
			</div>
			<Separator />
			<div class="grid w-full items-center gap-2">
				<Label for="tag ">Tag</Label>
				<div class="mb-4 flex flex-col gap-2">
					{#each tags.data as tag}
						<div class="flex items-center gap-2">
							<!-- <Checkbox value={tag.id} /> -->
							<Checkbox
								value={tag.id}
								checked={post?.tags?.includes(tag.id)}
								onCheckedChange={(v) => {
									if (v) {
										addItem(tag.id, 'tags');
									} else {
										removeItem(tag.id, 'tags');
									}
								}}
							/>
							<small>{tag.name}</small>
						</div>
					{/each}
				</div>
				<div class="flex gap-2">
					<Input
						id="tag"
						placeholder="Add new tag"
						bind:value={value.tagname}
						onkeydown={(e) => handleEnter(e, 'tags_post', 'tagname')}
					/>
					<Button variant="outline" onclick={() => addItemFirebase('tags_post', 'tagname')}
						>Add</Button
					>
				</div>
			</div>
		</div>
	</div>
{/if}
