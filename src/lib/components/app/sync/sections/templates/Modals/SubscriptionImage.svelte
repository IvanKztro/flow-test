<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { X } from 'lucide-svelte';

	let modalVisible = false;

	function toggleModal() {
		modalVisible = !modalVisible;
	}
</script>

<div class="mt-12 text-center">
	<Button on:click={toggleModal}>Open modal</Button>
</div>

{#if modalVisible}
	<div class="overlay">
		<Card.Root class="m-3 w-full max-w-lg rounded-xl bg-white shadow-lg">
			<div class="relative">
				<Button on:click={toggleModal} class="absolute right-2 top-2 z-10">
					<X />
				</Button>
				<img
					class="modal-image"
					src="https://images.unsplash.com/photo-1648747067020-73f77da74e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
					alt="Modal Hero Image"
				/>
			</div>
			<Card.Content class="p-10 text-center">
				<h3 class="text-2xl font-bold text-gray-800">Yeahhhh 🎉</h3>
				<p class="text-gray-500">
					Thank you for your subscription. You will be sent the next issue of our newsletter
					shortly.
				</p>
				<div class="mt-6 flex justify-center gap-x-4">
					<Button on:click={toggleModal}>Got it</Button>
					<a
						class="inline-flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
						href="#">Settings</a
					>
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
	.modal-image {
		aspect-ratio: 16 / 8;
		width: 100%;
		object-fit: cover;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}
</style>
