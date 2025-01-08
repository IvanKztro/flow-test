<script lang="ts">
	import NoWorkspaces from '$lib/components/app/workspace/no-workspaces.svelte';
	import WorkspaceCard from '$lib/components/app/workspace/workspace-card.svelte';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import WorkspaceForm from '$lib/components/app/forms/workspace-form.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Plus } from 'lucide-svelte';
	let isopen: boolean = $state(false);
</script>

{#if workspaceManager.workspaces.length > 0}
	<div class="mb-4 flex items-center justify-between mt-2">
		<h2 class="font-semibold text-gray-800 dark:text-neutral-200">Workspaces</h2>

		<div class="flex items-center gap-2">
			<Button variant="outline">Invite</Button>
			<Button onclick={() => (isopen = true)}>
				<Plus class="size-4" />
				Workspace
			</Button>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:gap-4 xl:grid-cols-6">
		{#each workspaceManager.workspaces as workspace}
			<WorkspaceCard {workspace} />
		{/each}
	</div>
{:else}
	<NoWorkspaces />
{/if}

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
