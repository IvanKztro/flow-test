<script lang="ts">
	import Label from '$lib/components/ui/label/label.svelte';
	import { userStore } from '$lib/stores/sessions';

	import { ImagePlus } from 'lucide-svelte';
	import { firekitDocMutations, firekitUploadTask, firekitUser } from 'svelte-firekit';


	let imageUrl: string = $state('');
	let selectedImage: File | null = $state(null);
	let uploadTask: any = $state(null);
	let progress: number = $derived(uploadTask?.progress || 0 * 1);
	let inputfile: any;

	$effect(() => {
		if (progress === 100 && uploadTask?.downloadURL) {
			console.log('updated data');
			setTimeout(async () => {
				await firekitDocMutations.update(`users/${firekitUser.uid}`, {
					coverPhoto: uploadTask?.downloadURL
				});
			}, 200);
		}
	});

	async function handleImageUpload(event: Event) {
		const target = event.target as HTMLInputElement;
		const file: File = target.files?.[0] as File;

		if (file) {
			imageUrl = URL.createObjectURL(file);
			selectedImage = file;
		}

		uploadTask = firekitUploadTask(`users-profile/${firekitUser.uid}/cover`, file);
	}
</script>

<div
	class="space-y-5 border-t border-gray-200 py-6 first:border-t-0 dark:border-neutral-700 sm:py-8"
>
	<!-- Grid -->
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3 2xl:col-span-3">
			<Label class="inline-block text-sm text-gray-500 dark:text-neutral-500 sm:mt-2.5">
				Cover photo
			</Label>
		</div>
		<!-- End Col -->

		<div class="sm:col-span-8 xl:col-span-6">
			<!-- Drag 'n Drop -->
			<div
				class="mt-2 flex justify-center rounded-xl bg-white {$userStore.coverPhoto
					? ''
					: 'border border-dashed border-gray-300 p-12'}  dark:border-neutral-600 dark:bg-neutral-800"
			>
				<input
					bind:this={inputfile}
					onchange={handleImageUpload}
					id="hs-pro-dapcp"
					type="file"
					class="sr-only"
					name="hs-pro-dapcp"
				/>
				{#if $userStore?.coverPhoto}
					<button onclick={() => inputfile.click()}>
						<img src={$userStore.coverPhoto} alt="logo" class=" rounded-xl dark:hidden" />
					</button>
				{:else}
					<div class="text-center">
						<ImagePlus class="mx-auto size-[120px] text-gray-400 dark:text-neutral-400 " />

						<div class="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
							<span class="pe-1 font-medium text-gray-800 dark:text-neutral-200">
								Drop your file here or
							</span>
							<label
								for="hs-pro-dapcp"
								class="relative cursor-pointer rounded-lg bg-white font-semibold text-blue-600 decoration-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-700 hover:underline dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600"
							>
								<span>browse</span>
							</label>
						</div>

						<p class="mt-1 text-xs text-gray-400 dark:text-neutral-400">Pick a photo up to 2MB.</p>
						{#if progress > 0 && !uploadTask?.completed}
							<div class="mx-auto mt-2 h-2.5 w-[150px] rounded-full bg-gray-200 dark:bg-gray-700">
								<div class="h-2.5 rounded-full bg-blue-600" style="width: {progress}%"></div>
							</div>
							<p class="mt-1 text-xs text-gray-500">
								Progress: {progress.toFixed(2)}%
							</p>
						{/if}
					</div>
				{/if}
			</div>

			<!-- End Drag 'n Drop -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
