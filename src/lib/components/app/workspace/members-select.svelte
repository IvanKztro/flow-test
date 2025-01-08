<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/';
	import { getInitials } from '$lib/utils';
	import { X, CircleHelp } from 'lucide-svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Search } from 'lucide-svelte';

	let {
		value = $bindable([]),
		classNameBTN,
		users = [],
		typecomp = 'all',
		updatedField = false,
		updatedClick
	}: {
		value: any[];
		classNameBTN?: string;
		users: any;
		typecomp: string;
		updatedField: boolean;
		updatedClick: Function;
	} = $props();

	let search: string = $state('');
	let usersfilter: any = $state(typecomp === 'all' ? [] : users);

	let usersdata = $derived(users);

	function filterUser() {
		if (usersdata)
			usersfilter = usersdata.filter(
				(us) =>
					us?.displayName?.toLowerCase().includes(search.toLocaleLowerCase()) ||
					us.email.toLowerCase().includes(search.toLocaleLowerCase())
			);
		else usersfilter = [];
	}

	function handleSelectUser(user: any) {
		if (value.length === 0 || !value.some((v) => v.id === user?.id))
			value = [
				...value,
				{
					email: user.email,
					displayName: user?.displayName,
					photoURL: user.photoURL,
					id: user.id,
					...(user?.typeitem ? { typeitem: user.typeitem } : {})
				}
			];
		else value = value.filter((v) => v.id !== user.id);

		if (updatedField) updatedClick(value);
	}

	let valuesdata = $derived(users.filter((us) => value.some((v) => us.uid === v.uid)));
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="w-full">
		<Button
			variant="outline"
			size="icon"
			class="flex w-full justify-start pl-3 text-start {classNameBTN}"
		>
			<div class="flex gap-[1px]">
				{#if !value || value?.length < 1}
					Empty
				{:else}
					{#each valuesdata as val}
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Button variant="ghost" class="rounded-full p-2">
									<Avatar.Root class="h-7 w-7">
										<Avatar.Image src={val.photoURL} alt={val.displayName} />
										<Avatar.Fallback>
											{#if val.displayName}
												{getInitials(val.displayName || val?.name)}
											{:else}
												<CircleHelp />
											{/if}
										</Avatar.Fallback>
									</Avatar.Root>
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content>
								<div class="flex flex-col gap-1 p-2">
									<p>{val.displayName || 'This account'}</p>
									<p>{val.email || 'dont exist '}</p>
									<p>{val.rolews || 'dont exist '}</p>
								</div>
							</Tooltip.Content>
						</Tooltip.Root>
					{/each}
				{/if}
			</div>
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<section class="h-[250px] w-[250px] overflow-y-auto">
				<div
					class="fixed flex w-[250px] items-center gap-2 border-b-[1px] border-b-slate-200 bg-background/95 px-1"
				>
					<Search class="size-4"></Search>

					<input
						oninput={filterUser}
						bind:value={search}
						class="  outline-none"
						placeholder="Search member"
					/>
				</div>
				<Separator class="invisible mt-7"></Separator>

				<Separator class=""></Separator>
				<small class="pt-[45px]">Users</small>
				<div class="flex flex-col items-start">
					{#each usersfilter as user}
						<Button
							variant="ghost"
							size="icon"
							class="w-full px-2 py-1 {valuesdata?.some((vv) => vv?.id === user.id)
								? 'bg-blue-200'
								: ''}"
							onclick={(e) => handleSelectUser(user)}
						>
							<span class="text-start">{user?.email || user?.name}</span>
						</Button>
						<!-- <span class="text-start">{user?.uid || user?.uid}</span> -->
					{/each}
				</div>
			</section>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
