<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { firekitAuth, firekitUploadTask, firekitUser } from 'svelte-firekit';

	import { getInitials } from '$lib/utils.js';

	let {user}= $props();

	$effect(() => {
		if (progress === 100 && uploadTask?.downloadURL) {
			console.log('updated data');
			firekitAuth.updateUserProfile({
				displayName: firekitUser.displayName as string,
				photoURL: uploadTask?.downloadURL
			});
			progress = 0;
		}
	});

	

	let uploadTask: any = $state(null);
	let progress: number = $derived(uploadTask?.progress || 0 * 1);
	let imageUrl: string = $state('');
	let selectedImage: File | null = $state(null);
	let inputfile: any;

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

<section class="space-y-5 border-t-[2px] border-t-slate-200 pt-4">
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3">
			<p class="text-foreground-500 inline-block text-sm sm:mt-2.5">Profile</p>
		</div>

		<div class="sm:col-span-8 xl:col-span-9">
			<div class="flex flex-wrap items-center justify-around gap-3 sm:gap-5">
				<div class="flex items-center gap-2">
					<button onclick={() => inputfile.click()}>
						<Avatar.Root class="size-[70px]">
							<Avatar.Image src={user?.photoURL} alt="Avatar" />
							<Avatar.Fallback>
								{getInitials(user?.displayName)}
							</Avatar.Fallback>
						</Avatar.Root>
					</button>
					<input
						bind:this={inputfile}
						onchange={handleImageUpload}
						type="file"
						accept="image/*"
						class="hidden"
					/>
					<div class="grid flex-1 text-left text-sm leading-tight">
						<span class="truncate font-semibold">{user?.displayName}</span>
						<span class="truncate text-sm text-slate-400">{user?.email}</span>
						{#if progress > 0 && !uploadTask?.completed}
							<div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
								<div class="h-2.5 rounded-full bg-blue-600" style="width: {progress}%"></div>
							</div>
							<p class="mt-1 text-xs text-gray-500">
								Progress: {progress.toFixed(2)}%
							</p>
						{/if}
					</div>
				</div>
				<div></div>
			</div>
		</div>
	</div>
</section>
