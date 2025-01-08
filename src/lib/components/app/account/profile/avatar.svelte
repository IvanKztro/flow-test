<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Image, ImageUp } from 'lucide-svelte';
	import { getInitials } from '$lib/utils.js';
	import { firekitAuth, firekitUploadTask, firekitUser } from 'svelte-firekit';
	import { userStore } from '$lib/stores/sessions';

	// let { user } = $props();

	let imageUrl: string = $state('');
	let selectedImage: File | null = $state(null);
	let uploadTask: any = $state(null);
	let progress: number = $derived(uploadTask?.progress || 0 * 1);
	let inputfile: any;

	$effect(() => {
		if (progress === 100 && uploadTask?.downloadURL) {
			// setTimeout(() => {
				firekitAuth.updateUserProfile({
					displayName: firekitUser.displayName as string,
					photoURL: uploadTask?.downloadURL
				});
			// }, 3000);
		}
	});

	async function handleImageUpload(event: Event) {
		const target = event.target as HTMLInputElement;
		const file: File = target.files?.[0] as File;

		if (file) {
			imageUrl = URL.createObjectURL(file);
			selectedImage = file;
		}

		uploadTask = firekitUploadTask(`users-profile/${firekitUser.uid}/profile`, file);
	}
</script>

<div class="border-foreground-200 space-y-5 border-t py-6 first:border-t-0 sm:py-8">
	<!-- Grid -->
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3 2xl:col-span-3">
			<p class="text-foreground-500 inline-block text-sm sm:mt-2.5">Avatar</p>
		</div>
		<!-- End Col -->

		<div class="sm:col-span-8 xl:col-span-6">
			<!-- Logo Upload Group -->
			<div class="flex flex-wrap items-center gap-3 sm:gap-5">
				<span
					class="border-foreground-300 text-foreground-400 flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-dotted"
				>
					<Avatar.Root class="size-[70px]">
						<Avatar.Image src={$userStore?.photoURL} alt="Avatar" />
						<Avatar.Fallback>
							{getInitials($userStore?.displayName)}
						</Avatar.Fallback>
					</Avatar.Root>
					<!-- <Image /> -->
				</span>

				<div class="grow">
					<div class="flex items-center gap-x-2">
						<Button onclick={() => inputfile.click()} variant="secondary">
							<ImageUp />
							Upload photo
						</Button>
						<input
							bind:this={inputfile}
							onchange={handleImageUpload}
							type="file"
							accept="image/*"
							class="hidden"
						/>
						<!-- <Button variant="destructive" disabled>Delete</Button> -->
					</div>
					<p class="mt-2 text-xs text-gray-500 dark:text-neutral-500">Pick a photo up to 1MB.</p>
					{#if progress > 0 && !uploadTask?.completed}
						<div class="h-2.5 w-[150px] rounded-full bg-gray-200 dark:bg-gray-700">
							<div class="h-2.5 rounded-full bg-blue-600" style="width: {progress}%"></div>
						</div>
						<p class="mt-1 text-xs text-gray-500">
							Progress: {progress.toFixed(2)}%
						</p>
					{/if}
				</div>
			</div>
			<!-- End Logo Upload Group -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
