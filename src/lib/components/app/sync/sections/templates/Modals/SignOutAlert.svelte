<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { X } from 'lucide-svelte';
    import { CircleAlert } from 'lucide-svelte';


	let modalVisible = false;

	function toggleModal() {
		modalVisible = !modalVisible;
	}

	function signOut() {
		console.log('Signing out...');
		toggleModal();
		// Aquí se agregaría la lógica para manejar el cierre de sesión
	}
</script>

<div class="text-center mt-12">
	<Button on:click={toggleModal}>
		Open modal
	</Button>
</div>

{#if modalVisible}
	<div class="overlay">
		<Card.Root class="m-3 w-full max-w-lg rounded-xl bg-white p-7 shadow-lg">
			<Card.Header>
                <div class="flex justify-center">
                    <CircleAlert class="size-20"/>
                </div>
				<h3 class="text-center text-2xl font-bold text-gray-800">Sign out</h3>
				<p class="mt-2 text-center text-sm text-gray-600">
					Are you sure you would like to sign out of your Preline account?
				</p>
				<Button on:click={toggleModal} class="absolute right-3 top-3">
					<X />
				</Button>
			</Card.Header>
			<Card.Content class="text-center">
				<div class="mt-6 flex justify-center gap-x-4">
					<Button class="px-3 py-2" on:click={signOut}>Sign out</Button>
					<Button class="px-3 py-2" on:click={toggleModal}>Cancel</Button>
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
