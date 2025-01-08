<script lang="ts">
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import type { Workspace } from '$lib/types/workspace';
	let { workspace }: { workspace: Workspace } = $props();
</script>

<button
	class="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900"
	onclick={() => {
		workspaceManager.selectedWorkspace = workspace.id;
	}}
>
	<div class="mb-4 flex h-full flex-col items-center justify-center">
		<span
			class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-secondary text-white dark:bg-teal-800/30 xl:size-16"
		>
			<svg
				class="dark:text-primaryxl:h-6 size-5 shrink-0 text-primary xl:w-6"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M2 3h20"></path>
				<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
				<path d="m7 21 5-5 5 5"></path>
			</svg>
		</span>
	</div>
	<div class="mt-auto text-center">
		<p
			class="truncate text-xs font-medium text-gray-800 group-hover:text-primary group-focus:text-primary dark:text-neutral-200 dark:group-hover:text-neutral-400 dark:group-focus:text-neutral-400 xl:text-sm"
		>
			{workspace.name}
		</p>
	</div>
</button>
