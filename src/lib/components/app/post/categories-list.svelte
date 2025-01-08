<script lang="ts">
	import { where } from 'firebase/firestore';
	import { firekitCollection } from 'svelte-firekit';
	import { Badge } from '$lib/components/ui/badge/index.js';

	let { categories } = $props();

	let categoriesDocs = firekitCollection('categories_post', where('id', 'in', categories));

	let categorieslist: any = $derived.by(() => {
		return categoriesDocs.data
	});
</script>

<div class="flex gap-1 w-full mt-3">
	{#each categorieslist as categorie}
		<Badge variant="outline">
			{categorie.name}
		</Badge>
	{/each}
</div>
