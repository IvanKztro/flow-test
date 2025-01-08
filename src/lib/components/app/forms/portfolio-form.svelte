<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { workspaceManager } from '$lib/components/workspace-manager.svelte';
	import { portfolioSchema } from '$lib/schemas/portfolio';
	import type { Portfolio } from '$lib/types/portfolio';
	import { arrayUnion, Timestamp } from 'firebase/firestore';
	import { firekitDocMutations, firekitUser } from 'svelte-firekit';
	import { toast } from 'svelte-sonner';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';

	let { isopenportfolio = $bindable(false) } = $props();

	const data = defaults(valibot(portfolioSchema));

	const form = superForm(data, {
		validators: valibot(portfolioSchema),
		dataType: 'json',
		SPA: true,
		resetForm: false,
		clearOnSubmit: 'errors-and-message',
		async onUpdate({ form }) {
			if (!form.valid) return;
			const { data } = form;
			const newportfolio: Portfolio = {
				...data,
				id: crypto.randomUUID(),
				created: Timestamp.now(),
				createdBy: firekitUser.uid as string,
				color: ''
			};
			const currentwsid = localStorage.getItem('currentWorkspace');

			const response = await firekitDocMutations.update(
				`workspaces/${workspaceManager.selectedWorkspace?.id || currentwsid}`,
				{
					['portfolios']: arrayUnion(newportfolio)
				}
			);

			if (response.success) {
				isopenportfolio = false;
				toast.success('Portfolio created in successfully');
			} else toast.error('Error to create Portfolio');
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
					<Form.Label>Portfolio Name</Form.Label>
					<Input {...props} bind:value={$formData.name} placeholder="Portfolio Name" />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<div class=" flex items-center justify-end gap-2">
			<Form.Button class="ml-auto block px-5" variant="default">Save</Form.Button>
		</div>
	</form>
</div>
