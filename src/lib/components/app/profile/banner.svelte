<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { ArrowRightLeft, Files, Laugh, Pencil, SquareUser, User, Users } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { firekitDoc, firekitUser } from 'svelte-firekit';
	import { getInitials } from '$lib/utils';
	import { profileTab } from './tabs/profile-tab.svelte';

	const tabs = [
		{ id: 'profile', label: 'My Profile', icon: SquareUser },
		{ id: 'teams', label: 'Teams', icon: Users },
		{ id: 'files', label: 'Files', icon: Files },
		{ id: 'connections', label: 'Connections', icon: ArrowRightLeft }
	];

	let userInfo = firekitDoc(`users/${firekitUser.uid}`);

	function handleTabChange(tab: string) {
		profileTab.changeTab(tab);
		console.log(profileTab.currentTab);
	}
</script>

{#if userInfo && userInfo.data}
	<Card.Root>
		<Card.Content>
			<figure>
				<svg
					class="w-full"
					preserveAspectRatio="none"
					width="1113"
					height="161"
					viewBox="0 0 1113 161"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_666_220723)">
						<rect x="0.5" width="1112" height="161" rx="12" fill="white"></rect>
						<rect x="1" width="1112" height="348" fill="#D9DEEA"></rect>
						<path
							d="M512.694 359.31C547.444 172.086 469.835 34.2204 426.688 -11.3096H1144.27V359.31H512.694Z"
							fill="#C0CBDD"
						></path>
						<path
							d="M818.885 185.745C703.515 143.985 709.036 24.7949 726.218 -29.5801H1118.31V331.905C1024.49 260.565 963.098 237.945 818.885 185.745Z"
							fill="#8192B0"
						></path>
					</g>
					<defs>
						<clipPath id="clip0_666_220723">
							<rect x="0.5" width="1112" height="161" rx="12" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>
			</figure>
			<div class="-mt-24">
				<div
					class="relative mx-auto flex h-[120px] w-[120px] rounded-full border-4 border-white dark:border-neutral-800"
				>
					<Avatar.Root class="size-full rounded-full object-cover">
						<Avatar.Image src={userInfo.data.photoURL} alt={userInfo.data.displayName} />
						<Avatar.Fallback class="rounded-lg"
							>{getInitials(userInfo.data.displayName)}</Avatar.Fallback
						>
					</Avatar.Root>
					<div class="absolute -end-2 bottom-0">
						<Button size="icon" class="rounded-full border border-gray-200 ">
							<Laugh />
							<span class="hidden group-hover:block">Set status</span>
						</Button>
					</div>
				</div>
			</div>
		</Card.Content>
		<Card.Footer>
			<div class="flex w-full items-center justify-between">
				<Tabs.Root value={profileTab.currentTab}>
					<Tabs.List>
						{#each tabs as tab (tab.id)}
							<Tabs.Trigger value={tab.id} onclick={() => handleTabChange(tab.id)}>
								<tab.icon class="mr-1 size-4" />
								{tab.label}
							</Tabs.Trigger>
						{/each}
					</Tabs.List>
				</Tabs.Root>
				<div class="pb-3">
					<Button>
						<Pencil />
						Edit Profile
					</Button>
				</div>
			</div>
		</Card.Footer>
	</Card.Root>
{/if}
