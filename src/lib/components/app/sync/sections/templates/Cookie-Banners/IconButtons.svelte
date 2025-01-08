<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Cookie } from 'lucide-svelte';
</script>

<div class="fixed inset-0 z-[60] flex items-center justify-center px-6 py-4">
	<Card.Root class="w-full max-w-xl rounded-xl border border-gray-200 bg-white shadow-sm">
		<div class="flex gap-x-5 p-4">
			<Cookie class="mt-2 size-28"/>

			<Card.Content class="grow">
				<Card.Header>
					<h2 class="text-lg font-semibold text-gray-800">
						We are using cookies to improve your experience!
					</h2>
				</Card.Header>
				<p class="mt-2 text-sm text-gray-600">
					By clicking "Allow all", you agree to use of all cookies. Visit our <a
						class="inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none"
						href="#">Cookies Policy</a
					> to learn more.
				</p>
				<Card.Footer class="mt-5 inline-flex gap-x-2">
					<Button>
						Allow all
					</Button>
					<Button>
						Manage cookies
					</Button>
				</Card.Footer>
			</Card.Content>
		</div>
	</Card.Root>
</div>
