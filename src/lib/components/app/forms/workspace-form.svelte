<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { workspaceSchema } from '$lib/schemas/workspace';
	import { firekitCollection, firekitDocMutations, firekitUser } from 'svelte-firekit';
	import { toast } from 'svelte-sonner';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';
	import Members from '$lib/components/app/workspace/members-select.svelte';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import { Timestamp } from 'firebase/firestore';
	import { userManager } from '$lib/components/user-manager.svelte';

	let { isopen = $bindable(false) } = $props();
	// let allusers = $derived(firekitCollection('users'));


	const data = defaults(valibot(workspaceSchema));

	const form = superForm(data, {
		validators: valibot(workspaceSchema),
		dataType: 'json',
		SPA: true,
		resetForm: false,
		clearOnSubmit: 'errors-and-message',
		async onUpdate({ form }) {
			if (!form.valid) return;
			const { data } = form;
			data.members = data.members.map((member) => member.id);
			const wpdata = {
				...data,
				createdBy: firekitUser.uid as string,
				createdAt: Timestamp.now(),
				color: '',
				portfolios: [
					{
						id: crypto.randomUUID(),
						color: '',
						createdBy: firekitUser.uid as string,
						createdAt: Timestamp.now(),
						members: [],
						name: 'New Portfolio Beta'
					}
				]
			};
			const response = await firekitDocMutations.add(`workspaces`, wpdata);

			if (response.success) {
				workspaceManager.selectedWorkspace = response.id as string;
				isopen = false;
				toast.success('Workspace created in successfully');
			} else toast.error('Error to create Workspace');
		}
	});
	const { form: formData, enhance } = form;
</script>

<div>
	<!-- <pre>{JSON.stringify($formData, null, '  ')}</pre> -->

	<form method="POST" use:enhance class="w-full space-y-2">
		<Form.Field {form} name="name">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Workspace Name</Form.Label>
					<Input {...props} bind:value={$formData.name} placeholder="Workspace Name" />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="members">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Members</Form.Label>
					<Members bind:value={$formData.members} users={userManager.allUsers}></Members>
					<!-- <Input {...props} bind:value={$formData.name} placeholder="Workspace Name" /> -->
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<div class=" flex items-center justify-end gap-2">
			<Form.Button class="ml-auto block px-5" variant="default">Save</Form.Button>
		</div>
	</form>
</div>
