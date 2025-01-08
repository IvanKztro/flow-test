<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	import Input from '$lib/components/ui/input/input.svelte';
	import { toast } from 'svelte-sonner';
	import { firekitAuth, firekitUser } from 'svelte-firekit';
	import { userStore } from '$lib/stores/sessions';

	// let { user } = $props();

	let email: string = $state('');
	let haserror = $state(false);

	$effect(() => {
		email = $userStore?.email as string;
	});

	async function handleChangeEmail() {
		haserror = false;
		if (email === firekitUser.user?.email) {
			toast.error('The email is the same as your current email.');
			haserror = true;
			return;
		}

		if (!isValidEmail()) {
			toast.error('Please enter a valid email address.');
			haserror = true;
			return;
		}

		try {
			await firekitUser.updateEmailUser(email);
			toast.success('Email updated successfully!');
			setTimeout(async () => {
				await firekitAuth.logOut();
			}, 4500);
		} catch (error) {
			toast.error(error.code, { description: error.message });
		}
	}

	function isValidEmail() {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
</script>

<section class="space-y-5 border-t-[2px] border-t-slate-200 pt-4">
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3">
			<p class="inline-block text-sm sm:mt-2.5 {haserror ? 'text-red-500' : 'text-foreground-500'}">
				Email address
			</p>
		</div>

		<div class="sm:col-span-8 xl:col-span-6 ">
			<div class="flex flex-wrap items-center gap-3 sm:gap-5">
				<div class="flex w-full items-center gap-2">
					<div class="flex w-full flex-col gap-2 text-sm leading-tight">
						<div class=" my-2 w-auto space-y-1">
							<!-- <Label class={haserror ? "text-red-500" : ""}>Email:</Label> -->
							<Input
								class=" w-full {haserror ? 'border border-red-500' : ''}"
								bind:value={email}
								placeholder="Introduce email"
							/>
						</div>
						<Button
							onclick={handleChangeEmail}
							variant="default"
							class="ml-auto block"
						>
							Save
						</Button>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	</div>
</section>
