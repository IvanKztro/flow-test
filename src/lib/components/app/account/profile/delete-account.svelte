<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { firekitAuth } from 'svelte-firekit';
	
	let isOpen = $state(false);
	


</script>

<div class="border-foreground-200 space-y-5 border-t py-6 first:border-t-0 sm:py-8">
	<!-- Grid -->
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3 2xl:col-span-3">
			<p class="text-foreground-500 inline-block text-sm sm:mt-2.5">Danger zone</p>
		</div>
		<!-- End Col -->

		<div class="sm:col-span-8 xl:col-span-6">
			<Button
				variant="destructive"
				class="mr-auto mt-3 block w-auto "
				onclick={()=>isOpen = true}
			>
				<span class="">Delete my account</span>
			</Button>
            <p class="text-red-600 leading-[15px] text-xs mt-2">This will immediately delete all of your data. This action is not reversible, so please continue with caution.</p>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<AlertDialog.Root bind:open={isOpen}>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>
					 Confirm Account Deletion
				</AlertDialog.Title>
				<AlertDialog.Description>
					Deleting your account is a permanent action that cannot be undone. All your data will be erased. Are you sure you want to proceed?
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action onclick={()=>firekitAuth.deleteUserAccount()}>Continue</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>