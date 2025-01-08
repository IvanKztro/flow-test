<script lang="ts">
	import SettingsDialog from './settings-dialog.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { getInitials } from '$lib/utils.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { firekitAuth, firekitUser } from 'svelte-firekit';
	import { LogOut } from 'lucide-svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	let isOpen = $state(false);

	async function handleLogout() {
		await firekitAuth.logOut();
	}
</script>

{#if !firekitUser.initialized}
	<div class="mx-4 flex items-center gap-2">
		<Skeleton class="size-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-3 w-[100px]" />
			<Skeleton class="h-3 w-[150px]" />
		</div>
	</div>
{:else if firekitUser.isLoggedIn}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Avatar.Root>
				<Avatar.Image src={firekitUser.photoURL} alt={firekitUser.displayName} />
				<Avatar.Fallback>
					{getInitials(firekitUser.displayName)}
				</Avatar.Fallback>
			</Avatar.Root>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.GroupHeading>
					<div class="flex items-center gap-3">
						<Avatar.Root>
							<Avatar.Image src={firekitUser.photoURL} alt={firekitUser.displayName} />
							<Avatar.Fallback>
								{getInitials(firekitUser.displayName)}
							</Avatar.Fallback>
						</Avatar.Root>
						<div class="grow">
							<span class="block text-sm font-medium text-gray-800 dark:text-neutral-200">
								{firekitUser.displayName}
							</span>
							<p class="text-foreground-500 text-xs">
								{firekitUser.email}
							</p>
						</div>
					</div>
				</DropdownMenu.GroupHeading>
				<DropdownMenu.Separator />
				<DropdownMenu.Item onclick={() => (isOpen = true)}>
					{#snippet child({ props })}
						<SettingsDialog />
					{/snippet}
				</DropdownMenu.Item>

				<DropdownMenu.Separator />
				<DropdownMenu.Item onclick={handleLogout}>
					<LogOut /> Logout
				</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<AlertDialog.Root bind:open={isOpen}>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<Avatar.Root>
								<Avatar.Image src={firekitUser.photoURL} alt="Avatar" />
								<Avatar.Fallback>
									{getInitials(firekitUser.displayName)}
								</Avatar.Fallback>
							</Avatar.Root>
							<div class="grow">
								<span class="block text-sm font-medium text-gray-800 dark:text-neutral-200">
									{firekitUser.displayName}
								</span>
								<p class="text-foreground-500 text-xs">
									{firekitUser.email}
								</p>
							</div>
						</div>
						<Button onclick={handleLogout} variant="link">
							<LogOut />Logout
						</Button>
					</div>
				</AlertDialog.Title>
				<AlertDialog.Description>
					Manage your name, password and account settings.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Continue</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
{:else}
	<Button href="/sign-in">Sign In</Button>
{/if}
