<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { X } from 'lucide-svelte';
	import { Send } from 'lucide-svelte';

	let modalVisible = false;

	function toggleModal() {
		modalVisible = !modalVisible;
	}

	let email = '';
	let password = '';
	let rememberMe = false;
</script>

<div class="mt-16 text-center">
	<Button on:click={toggleModal}>Open modal</Button>
</div>

{#if modalVisible}
	<div class="overlay">
		<Card.Root class="m-3 w-full max-w-lg rounded-xl bg-white p-7 shadow-lg">
			<Card.Header>
				<h3 class="text-center text-2xl font-bold text-gray-800">Sign Up</h3>
				<p class="mt-2 text-center text-sm text-gray-600">
					Don't have an account yet?
					<a class="text-blue-600 hover:underline" href="../examples/html/modal-signup.html"
						>Sign in here</a
					>
				</p>
				<Button>
					<Send />
					Sign Up whith Google
				</Button>
				<Button on:click={toggleModal} class="absolute right-3 top-3">
					<X />
				</Button>
			</Card.Header>
			<Card.Content>
				<form>
					<div class="space-y-6">
						<Input id="email" bind:value={email} placeholder="Enter your email" required />
						<Input
							id="password"
							bind:value={password}
							type="password"
							placeholder="Enter your password"
							required
						/>
                        <Input id="confirm-password" bind:value={password} placeholder="Confirm Password" type="password" required />
						<Checkbox id="remember-me" bind:checked={rememberMe} />
						<!-- svelte-ignore a11y-missing-attribute -->
						<Label class="ml-2">I accept the Terms and Conditions</Label>
						<Button type="submit" class="w-full">Sign Up</Button>
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
		z-index: 80; /* Asegurándose de que el overlay esté encima de otros elementos */
	}
</style>
