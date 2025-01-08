<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import WorkspaceForm from '$lib/components/app/forms/workspace-form.svelte';
	import { Plus } from 'lucide-svelte';
	let isopen: boolean = $state(false);
</script>

<div class="flex h-full min-h-96 flex-col items-center justify-center p-5 text-center">
	<div class="mb-2 flex items-center space-x-4 rounded-lg p-2 shadow">
		<Skeleton class="size-10 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[200px]" />
			<Skeleton class="h-4 w-[150px]" />
		</div>
	</div>
	<div class="z-10 flex items-center space-x-4 rounded-lg p-2 shadow">
		<Skeleton class="size-10 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[170px]" />
			<Skeleton class="h-4 w-[120px]" />
		</div>
	</div>
	<div class="mx-auto max-w-sm">
		<p class="mt-2 text-lg font-medium text-gray-800 dark:text-neutral-200">No workspaces</p>
		<p class="mb-5 text-sm text-gray-500 dark:text-neutral-500">
			You don't have any workspaces yet. Create a workspace to get started.
		</p>
		<Button variant="outline" onclick={() => (isopen = true)}>
			<Plus class="size-4" />
			Add Workspace
		</Button>
	</div>
</div>

<Dialog.Root bind:open={isopen}>
	<!-- <Dialog.Trigger class={buttonVariants({ variant: "outline" })}
    >Edit Profile</Dialog.Trigger
  > -->
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Create Workspace</Dialog.Title>
			<Dialog.Description>
				Make changes to your workspace here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<WorkspaceForm bind:isopen></WorkspaceForm>
	</Dialog.Content>
</Dialog.Root>
