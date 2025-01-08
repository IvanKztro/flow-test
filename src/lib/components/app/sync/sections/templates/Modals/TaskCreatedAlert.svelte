<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { X, Zap } from 'lucide-svelte';

	let modalVisible = false;

	function toggleModal() {
		modalVisible = !modalVisible;
	}
</script>

<div class="text-center mt-12">
	<Button on:click={toggleModal}>Open modal</Button>
</div>

{#if modalVisible}
	<div class="overlay">
		<Card.Root class="m-3 w-full max-w-lg rounded-xl bg-white p-7 shadow-lg">
			<Card.Header>
				<div class="flex justify-center">
					<Zap />
				</div>
				<h3 class="text-center text-xl font-bold text-gray-800">Task successfully created!</h3>
				<p class="mt-2 text-center text-sm text-gray-600">
					You can see the progress of your task in your <a
						class="text-blue-600 hover:underline"
						href="#">personal account</a
					>. You will be notified of its completion.
				</p>
				<!-- Botón para cerrar el modal -->
				<Button on:click={toggleModal} class="absolute right-2 top-2">
					<X />
				</Button>
			</Card.Header>
			<Card.Content class="text-center">
				<div class="mt-6 flex justify-center gap-x-4">
					<Button class="px-3 py-2" on:click={toggleModal}>Close</Button>
				</div>
			</Card.Content>
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
