<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
    import { X, Cookie } from 'lucide-svelte';

	let modalVisible = false;

	function toggleModal() {
		modalVisible = !modalVisible;
	}
</script>

<div class="text-center mt-12">
	<Button
		aria-haspopup="dialog"
		aria-expanded={modalVisible}
		aria-controls="hs-cookies"
		on:click={toggleModal}
	>
		Open modal
	</Button>
</div>

{#if modalVisible}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
		role="dialog"
		aria-labelledby="hs-cookies-label"
	>
		<div class="relative m-3 w-full max-w-lg rounded-xl bg-white shadow-lg">
			<Card.Root>
				<Card.Header>
					<div class="flex items-center justify-between p-4">
						<Card.Title>Cookies!</Card.Title>
						<Button
							aria-label="Close"
							on:click={toggleModal}
						>
							<X />
						</Button>
					</div>
				</Card.Header>
				<Card.Content class="overflow-y-auto p-4 text-center sm:p-14">
                    <div class="flex justify-center">
                        <Cookie class="size-20 mb-8"/>
                    </div>
					<p class="text-gray-500">This website uses cookies to make your experience better.</p>
				</Card.Content>
				<Card.Footer class="flex justify-center">
					<Button
						on:click={toggleModal}
					>
						Privacy Policy
					</Button>
					<Button class="ml-5"
						on:click={toggleModal}
					>
						Got it
					</Button>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
{/if}
