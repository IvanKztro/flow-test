<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Cookie } from 'lucide-svelte';
    import type { Section } from '$lib/types/section';
    import { page } from '$app/stores';

    const {section} = $props();

	const isInline = () =>section.settings.inlineButtons ? ' ' : 'flex-col'
	const getPadding = () => `p-${section.settings.padding}`
	// console.log($page.url.pathname)

	const isModal = () => $page.url.pathname!='/builder' && 'fixed inset-0 z-[60]'
</script>

<!-- <div class="fixed inset-0 z-[60] flex items-center justify-center px-6 py-4"> -->
<div class="{isModal()} flex items-center justify-center">
	<Card.Root class="w-full max-w-xl rounded-xl border border-gray-200 bg-white shadow-sm">
		<div class="flex gap-x-5 {getPadding()}">
            {#if section.settings.showIcon}
			    <Cookie class="mt-2 size-28"/>
            {/if}

			<Card.Content class="grow flex {isInline()} ">
				<div>
					<Card.Header>
						<h2 class="text-lg font-semibold text-gray-800">
							{section.settings.title}
						</h2>
					</Card.Header>
					<p class="mt-2 text-sm text-gray-600">
						By clicking "Allow all", you agree to use of all cookies. Visit our <a
							class="inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none"
							href="#">Cookies Policy</a
						> to learn more.
					</p>
				</div>
				<Card.Footer class="mt-2 inline-flex gap-x-2">
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


<!-- 
<div
	class="fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center justify-center space-y-4 px-6 py-4"
>
	Primer Aviso de Cookies
	<Card.Root class="w-full max-w-xl rounded-xl border border-gray-200 bg-white shadow-sm">
		<Card.Content
			class="flex flex-col gap-y-3 p-4 sm:flex-row sm:items-center sm:gap-x-5 sm:gap-y-0"
		>
			<div class="grow">
				<h2 class="text-gray-500">
					<span class="font-semibold text-gray-800">We use cookies</span> to analyze our traffic and
					create a smooth user experience.
				</h2>
			</div>
			<div class="inline-flex gap-x-2">
				<button
					type="button"
					class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Reject
				</button>
				<button
					type="button"
					class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Accept
				</button>
			</div>
		</Card.Content>
	</Card.Root>

	Segundo Aviso de Cookies (Si es necesario)
</div> -->