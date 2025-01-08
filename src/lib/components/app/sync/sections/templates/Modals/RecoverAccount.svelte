<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { X } from 'lucide-svelte';
    import { Label } from "$lib/components/ui/label";


	let modalVisible = false;
	let email = '';

	function toggleModal() {
		modalVisible = !modalVisible;
	}

	function handleSubmit() {
		// Aquí podrías agregar una llamada a una API o alguna lógica de validación
		console.log('Attempting to reset password for:', email);
		toggleModal(); // Cerrar el modal después de enviar el formulario
	}
</script>

<div class="text-center mt-12">
	<Button
		on:click={toggleModal}
	>
		Open modal
	</Button>
</div>

{#if modalVisible}
	<div class="overlay">
		<Card.Root class="m-3 w-full max-w-lg rounded-xl bg-white p-7 shadow-lg">
			<Card.Header>
				<h3 class="text-center text-2xl font-bold text-gray-800">Forgot password?</h3>
				<p class="mt-2 text-center text-sm text-gray-600">
					Remember your password?
					<a class="text-blue-600 hover:underline" href="../examples/html/modal-signin.html"
						>Sign in here</a
					>
				</p>
				<!-- Botón para cerrar el modal -->
				<Button on:click={toggleModal} class="absolute right-3 top-3">
					<X />
				</Button>
			</Card.Header>
			<Card.Content>
				<form on:submit|preventDefault={handleSubmit}>
					<div class="space-y-6">
                        <Label>Email address</Label>
						<Input id="email" bind:value={email} placeholder="Enter your email" required />
						<Button type="submit" class="w-full">Reset password</Button>
					</div>
				</form>
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
		z-index: 80; /* Asegúrese de que está sobre otros contenidos */
	}
</style>
