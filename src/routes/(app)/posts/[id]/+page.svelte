<script lang="ts">
	import { page } from '$app/stores';
	import { firekitDoc } from 'svelte-firekit';
	const id = $page.params.id;
	const post = firekitDoc(`posts/${id}`);
	import PostForm from '$lib/components/app/post/post-form.svelte';

	
</script>

{#if post.data}
	<PostForm error={post.error} loading={post.loading} post={post.data}></PostForm>
{/if}
