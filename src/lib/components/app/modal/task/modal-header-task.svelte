<script lang="ts">
	import { Minus, PanelLeft } from 'lucide-svelte';
	import BreadcrumbProject from './breadcrumb-project.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	//   import AddToFav from "$lib/components/app/fav/AddToFav.svelte";
	import { sideleft } from '$lib/stores/tasks-actions';

	let { taskValue, portfolioId, project, milestone } = $props();

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
	type SideleftValues = 'items' | 'relationship' | 'urls' | 'chat' | 'threeview';
	function toggleSidebar() {
		sideleft.update((n) => (n == '' ? 'threeview' : ''));
	}
</script>

<section class=" flex h-full items-center justify-between px-4">
	<article class="flex items-center gap-3">
		<Button variant="ghost" size="xs" class="h-5 w-5 p-0" onclick={toggleSidebar}>
			<PanelLeft class="h-4 w-4" />
		</Button>
		<!-- portfolioId, project, task, milestone -->
		<BreadcrumbProject task={taskValue} {portfolioId} {project} {milestone}></BreadcrumbProject>
	</article>
	<article class="flex items-center gap-3 pr-7">
		<small class="text-xs text-slate-600">
			Created
			{taskValue?.created && taskValue?.created?.seconds
				? df.format(new Date(taskValue.created?.seconds * 1000))
				: 'None'}
		</small>
		<Minus class="h-5 w-4 rotate-90 text-slate-400"></Minus>
		<!-- <AddToFav accept="subtask" /> -->
	</article>
</section>
