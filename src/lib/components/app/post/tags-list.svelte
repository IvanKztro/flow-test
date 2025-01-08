<script lang="ts">
	import { where } from 'firebase/firestore';
	import { firekitCollection } from 'svelte-firekit';
	import { Badge } from '$lib/components/ui/badge/index.js';

	let { tags } = $props();

	let tagsDocs = firekitCollection('tags_post', where('id', 'in', tags));

	let tagslist: any = $derived.by(() => {
		return tagsDocs.data
	});
</script>

<div class="flex gap-1 w-full">
	{#each tagslist as tag}
		<Badge variant="outline">
			{tag.name}
		</Badge>
	{/each}
</div>
