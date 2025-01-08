<!-- DashboardTemplate.svelte -->
<script lang="ts">
    import Menu from 'lucide-svelte/icons/menu';
    import Search from 'lucide-svelte/icons/search';

    import { Button } from '$lib/components/ui/button/index.js';
    import { Input } from '$lib/components/ui/input/index.js';
    import * as Sheet from '$lib/components/ui/sheet/index.js';
    import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
    import { ActivityIcon, ArrowUpRight, CreditCard, Settings, Share2, Star, User } from 'lucide-svelte';
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Switch from '$lib/components/ui/switch/switch.svelte';
    import * as Popover from "$lib/components/ui/popover/index.js";
	import NotificationComponent from './complementos/notification-component.svelte';
    import ShareComponent from './complementos/share-component.svelte';
    import ActivitySheet from './complementos/activity-sheet.svelte';






    const nav = [
		{
			name: 'dashboard',
			href: '#'
		},
		{
			name: 'orders',
			href: '#'
		},
		{
			name: 'services',
			href: '#'
		},
		{
			name: 'customers',
			href: '#'
		},
		{
			name: 'analytics',
			href: '#'
		}
	];

    let activeTab = 'dashboard';
</script>


<div class="flex w-full flex-col">
    <header class="sticky top-0 flex h-16 items-center gap-4 border rounded-md bg-background px-4 md:px-6">

        <Sheet.Root>
            <Sheet.Trigger asChild let:builder>
                <Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
                    <Menu class="h-5 w-5" />
                    <span class="sr-only">Toggle navigation menu</span>
                </Button>
            </Sheet.Trigger>
            <Sheet.Content side="left">
                <nav class="grid gap-6 text-lg font-medium">
					{#each nav as { name, href }}
						<a
							{href}
							class="{activeTab === name
								? 'hover:text-foreground'
								: 'text-muted-foreground hover:text-foreground'} capitalize"
						>
							{name}
						</a>
					{/each}
				</nav>
            </Sheet.Content>
        </Sheet.Root>
        <div class="flex w-full items-center justify-between gap-4 ml-auto md:gap-2 lg:gap-4">
            <div class="inline-flex items-center space-x-0">
                <span class="text-xl font-bold mr-2">Preline</span>
            </div>
            <div class="relative">
                <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search ..." class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
            </div>
            <div>
                <div class="flex items-center gap-4 mt-4 mb-2">
                    <div>
                        <p>Trial ends in 12 days</p>
                      </div> 
                      <Button>
                        Upgrade
                        <ArrowUpRight size={14} class='ml-2'/>
                      </Button>               
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger class="flex items-center gap-2">
                            <Avatar.Root class="size-9">
                                <Avatar.Image src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar"/>
                                <Avatar.Fallback>IM</Avatar.Fallback>
                            </Avatar.Root>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content class="w-56 shadow-lg rounded-md py-1">
                        <DropdownMenu.Label>James Smith</DropdownMenu.Label> 
                            <DropdownMenu.Item>
                              <CreditCard size=15 class="mr-2" />
                              <span>Plan & Billing</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Settings size=15 class="mr-2" />
                                <span>Settings</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <User size=15 class="mr-2" />
                                <span>My Account</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Label>
                                <span>Dark Mode</span>
                                <Switch  class='ml-2'/>
                            </DropdownMenu.Label>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Customization</DropdownMenu.Item>
                            <DropdownMenu.Item>Manage Team</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Sign Out</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
        </div>
    </header>
    <main class="flex flex-1 flex-col mt-2 items-center gap-4 border rounded-md bg-background px-4 md:px-6">
        <div class="w-full max-w-screen-lg rounded-md bg-background p-2 mb-2 mt-2">
            <div class="flex items-center justify-center p-2 md:p-60">
                Content Page
            </div>
        </div>

    </main>
</div>
