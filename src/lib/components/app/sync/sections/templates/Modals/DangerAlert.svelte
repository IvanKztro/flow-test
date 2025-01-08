<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { X, TriangleAlert } from 'lucide-svelte';

	let modalVisible = false;

	function toggleModal() {
		modalVisible = !modalVisible;
	}

	function deleteAccount() {
		console.log('Deleting account...');
		toggleModal();
	}
</script>

<div class="text-center mt-12">
	<Button on:click={toggleModal}>Open modal</Button>
</div>

{#if modalVisible}
	<div class="overlay">
		<Card.Root class="m-3 w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg">
			<div class="relative">
				<Button on:click={toggleModal} class="absolute right-2 top-2">
					<X />
				</Button>
			</div>
			<div class="p-4 sm:p-10">
				<div class="flex gap-x-4">
					<span
						class="inline-flex size-[46px] shrink-0 items-center justify-center rounded-full border-4 border-red-50 bg-red-100 text-red-500 sm:h-[62px] sm:w-[62px]"
					>
						<TriangleAlert />
					</span>
					<div class="grow">
						<h3 class="text-xl font-bold">Delete Personal Account</h3>
						<p class="text-gray-500">
							Permanently remove your Personal Account and all of its contents from the platform.
							This action is not reversible, so please continue with caution.
						</p>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-end gap-x-2 border-t bg-gray-50 px-4 py-3">
				<Button on:click={toggleModal}>Cancel</Button>
				<Button variant="destructive" on:click={deleteAccount}>Delete personal account</Button>
			</div>
		</Card.Root>
	</div>
{/if}

<style>
	.overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 80;
	}
</style>
