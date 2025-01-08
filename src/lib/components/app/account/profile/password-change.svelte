<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	import Input from '$lib/components/ui/input/input.svelte';
	import { toast } from 'svelte-sonner';
	import { firekitAuth, firekitUser } from 'svelte-firekit';
	import { Label } from '$lib/components/ui/label';
	import { Eye, EyeClosed } from 'lucide-svelte';
	import Progress from '$lib/components/ui/progress/progress.svelte';
	import { checkPasswordStrength } from '$lib/utils';

	let newpassword: string = $state('');
	let repeatpassword: string = $state('');
	let currentpassword: string = $state('');
	let visiblepassword: boolean = $state(false);
	let visiblerepeatpassword: boolean = $state(false);
	let visiblecurremtpassword: boolean = $state(false);
	let haserror = $state(false);
	let progress: number = $state(0);

	function checkStrengthPassword() {
		progress = checkPasswordStrength(newpassword);
	}

	async function handleChangePassword() {
		haserror = false;

		if (newpassword.trim() === '' || repeatpassword.trim() === '') {
			toast.error('Password fields cannot be empty', {
				description: 'Please fill in both the new password and the confirmation fields.'
			});
			haserror = true;
			return;
		}

		if (newpassword !== repeatpassword) {
			toast.error('Passwords do not match', {
				description: 'Ensure the new password and its confirmation are identical.'
			});
			haserror = true;
			return;
		}

		try {
			await firekitAuth.updateUserPassword(newpassword);
			toast.success('Password updated successfully!', {
				description: 'You will be logged out automatically in 5 seconds for security.'
			});
			setTimeout(async () => {
				await firekitAuth.logOut();
			}, 4500);
		} catch (error) {
			toast.error(error.code, { description: error.message });
		}
	}
</script>

<section class="space-y-5 border-t-[2px] border-t-slate-200 pt-4">
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3 2xl:col-span-3">
			<p class="inline-block text-sm sm:mt-2.5 {haserror ? 'text-red-500' : 'text-foreground-500'}">
				Password
			</p>
		</div>

		<div class="sm:col-span-8 xl:col-span-6 ">
			<div class="flex flex-wrap items-center gap-3 sm:gap-5">
				<div class="flex w-full items-center gap-2">
					<div class="flex w-full flex-col gap-2 text-sm leading-tight">
						<div class=" my-2 w-auto space-y-1">
							<!-- <Label class={haserror ? 'text-red-500' : ''}>Current password:</Label> -->
							<div class=" flex gap-2 rounded-md border border-[1px] border-slate-300">
								<Input
									class=" w-full {haserror
										? 'border border-red-500'
										: ' border-none shadow-none focus-visible:outline-none focus-visible:ring-0'}"
									type={visiblecurremtpassword ? 'text' : 'password'}
									bind:value={currentpassword}
									placeholder="Enter current password"
								/>
								<Button
									variant="ghost"
									size="icon"
									onclick={() => (visiblecurremtpassword = !visiblecurremtpassword)}
								>
									{#if visiblecurremtpassword}
										<Eye class="size-4"></Eye>
									{:else}
										<EyeClosed class="size-4"></EyeClosed>
									{/if}
								</Button>
							</div>
						</div>
						<div class=" my-2 w-auto space-y-1">
							<!-- <Label class={haserror ? 'text-red-500' : ''}>New password:</Label> -->
							<div class=" flex gap-2 rounded-md border border-[1px] border-slate-300">
								<Input
									oninput={checkStrengthPassword}
									class=" w-full {haserror
										? 'border border-red-500'
										: ' border-none shadow-none focus-visible:outline-none focus-visible:ring-0'}"
									type={visiblepassword ? 'text' : 'password'}
									bind:value={newpassword}
									placeholder="Enter new password"
								/>
								<Button
									variant="ghost"
									size="icon"
									onclick={() => (visiblepassword = !visiblepassword)}
								>
									{#if visiblepassword}
										<Eye class="size-4"></Eye>
									{:else}
										<EyeClosed class="size-4"></EyeClosed>
									{/if}
								</Button>
							</div>
						</div>
						<div class=" my-2 w-auto space-y-1">
							<!-- <Label class={haserror ? 'text-red-500' : ''}>Repeat password:</Label> -->
							<div class=" flex gap-2 rounded-md border border-[1px] border-slate-300">
								<Input
									class=" w-full {haserror
										? 'border border-red-500'
										: ' border-none shadow-none focus-visible:outline-none focus-visible:ring-0'}"
									type={visiblerepeatpassword ? 'text' : 'password'}
									bind:value={repeatpassword}
									placeholder="Repeat new password"
								/>
								<Button
									variant="ghost"
									size="icon"
									onclick={() => (visiblerepeatpassword = !visiblerepeatpassword)}
								>
									{#if visiblerepeatpassword}
										<Eye class="size-4"></Eye>
									{:else}
										<EyeClosed class="size-4"></EyeClosed>
									{/if}
								</Button>
							</div>
						</div>
						<section class="grid w-full grid-cols-5 gap-4">
							<div
								class="rounded-md p-1 {progress === 0
									? 'bg-slate-300'
									: progress >= 20 && progress < 41
										? 'bg-red-600'
										: progress >= 41 && progress < 100
											? 'bg-yellow-600'
											: 'bg-green-600'}"
							></div>
							<div
								class="rounded-md p-1 {progress >= 0 && progress < 40
									? 'bg-slate-300'
									: progress == 40
										? 'bg-red-600'
										: progress > 40 && progress <= 80
											? 'bg-yellow-600'
											: 'bg-green-600'}"
							></div>
							<div
								class="rounded-md p-1 {progress < 60
									? 'bg-slate-300'
									: progress < 81
										? 'bg-yellow-600'
										: 'bg-green-600'}"
							></div>
							<div
								class="rounded-md p-1 {progress < 80
									? 'bg-slate-300'
									: progress === 80
										? 'bg-yellow-600'
										: 'bg-green-600'}"
							></div>
							<div
								class="rounded-md p-1 {progress === 100 ? 'bg-green-600' : 'bg-slate-300'}"
							></div>
						</section>
						<div class="ml-auto mt-2 block gap-2">
							<Button
								variant="link"
								onclick={async () => {
									await firekitAuth.sendPasswordReset(firekitUser.email as string);
									toast.success('Password Change Request', {
										description:
											'A password change request has been successfully sent to your email. Please follow the instructions in the email to reset your password.'
									});
								}}>I forgot my password</Button
							>

							<Button
								onclick={handleChangePassword}
								variant="default"
							>
								Save
							</Button>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	</div>
</section>
