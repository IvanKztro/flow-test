<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import {
		Building2,
		MapPin,
		Clock,
		Mail,
		X,
		ChevronRight,
		Play,
		Users,
		Briefcase,
		HelpCircle
	} from 'lucide-svelte';

	// Props for controlling the sheet state
	export let open = false;

	const organizations = [
		{
			name: 'Guideline',
			logo: '/path-to-guideline-logo.png',
			initials: 'GL'
		},
		{
			name: 'Prosperops',
			logo: '/path-to-prosperops-logo.png',
			initials: 'PO'
		},
		{
			name: 'Notion',
			logo: '/path-to-notion-logo.png',
			initials: 'N'
		}
	];

	const connections = [
		{
			name: 'Rachel Doe',
			username: 'rach',
			avatar: '',
			initials: 'RD',
			status: 'connect'
		},
		{
			name: 'Anna Richard',
			username: 'annarich',
			avatar: '/path-to-anna-avatar.jpg',
			initials: 'AR',
			status: 'connect'
		},
		{
			name: 'Bob Dean',
			username: 'bob_data_viewer',
			avatar: '',
			initials: 'BD',
			status: 'unconnect'
		},
		{
			name: 'Alex Gustuf',
			username: 'alex',
			avatar: '/path-to-alex-avatar.jpg',
			initials: 'AG',
			status: 'unconnect'
		},
		{
			name: 'Ella Lauda',
			username: 'ellala',
			avatar: '/path-to-ella-avatar.jpg',
			initials: 'EL',
			status: 'connect'
		},
		{
			name: 'Finch Hoot',
			username: 'fhoot',
			avatar: '',
			initials: 'FH',
			status: 'unconnect'
		}
	];

	const helpTopics = [
		{
			title: ' Mindhyv Course',
			icon: Play,
			color: 'text-blue-600 dark:text-blue-500'
		},
		{
			title: 'Community Group',
			icon: Users,
			color: 'text-purple-600 dark:text-purple-500'
		},
		{
			title: 'Hire a Partner Expert',
			icon: Briefcase,
			color: 'text-cyan-600 dark:text-cyan-500'
		},
		{
			title: 'Help Center',
			icon: HelpCircle,
			color: 'text-indigo-600 dark:text-indigo-500'
		}
	];

	const aboutItems = [
		{ label: 'Organization', icon: Building2 },
		{ label: 'Country', icon: MapPin },
		{ label: 'Time zone', icon: Clock },
		{ label: 'Email', icon: Mail }
	];
</script>

<div class="grid grid-cols-6">
	<div class="col-span-2 border-r pr-4">
		<div class="mt-3 space-y-5 divide-y divide-gray-200 dark:divide-neutral-700 xl:pr-4">
			<!-- About Section -->
			<div class="pt-4">
				<h2 class="text-sm font-semibold text-gray-800 dark:text-neutral-200">About</h2>

				<ul class="mt-3 space-y-2">
					{#each aboutItems as item}
						<li>
							<div
								class="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200"
							>
								<svelte:component
									this={item.icon}
									class="h-4 w-4 text-gray-600 dark:text-neutral-400"
								/>
								{item.label}
							</div>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Organizations Section -->
			<div class="pt-4 first:pt-0">
				<h2 class="text-sm font-semibold text-gray-800 dark:text-neutral-200">Organizations</h2>

				<div class="mt-3 flex flex-wrap gap-2">
					{#each organizations as org}
						<Button
							variant="outline"
							class="flex items-center gap-2 rounded-full px-4 py-2 text-sm"
						>
							<Avatar class="h-5 w-5">
								<AvatarImage src={org.logo} alt={org.name} />
								<AvatarFallback class="text-xs">{org.initials}</AvatarFallback>
							</Avatar>
							{org.name}
						</Button>
					{/each}
				</div>
			</div>

			<!-- Connections Section -->
			<div class="pt-4">
				<h2 class="text-sm font-semibold text-gray-800 dark:text-neutral-200">Connections</h2>

				<ul class="mt-3 space-y-3">
					{#each connections as connection}
						<li class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<Avatar class="h-10 w-10">
									<AvatarImage src={connection.avatar} alt={connection.name} />
									<AvatarFallback>
										{connection.initials}
									</AvatarFallback>
								</Avatar>
								<div>
									<p class="text-sm font-medium text-gray-800 dark:text-neutral-200">
										{connection.name}
									</p>
									<p class="text-sm text-gray-500">
										{connection.username}
									</p>
								</div>
							</div>
							<Button
								variant={connection.status === 'connect' ? 'outline' : 'secondary'}
								class="h-8 text-sm"
							>
								{connection.status === 'connect' ? 'Connect' : 'Unconnect'}
							</Button>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Help Topics Section -->
			<div class="pt-4">
				<h2 class="mb-2 text-sm text-gray-500 dark:text-neutral-500">Explore help topics</h2>

				<ul class="space-y-2">
					{#each helpTopics as topic}
						<Card.Root class="transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700">
							<Card.Content class="p-2.5">
								<a
									href="#"
									class="flex items-center gap-x-3 text-sm font-medium text-gray-800 dark:text-neutral-200"
								>
									<div
										class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800"
									>
										<svelte:component this={topic.icon} class="h-3.5 w-3.5 {topic.color}" />
									</div>
									<span class="grow">{topic.title}</span>
									<ChevronRight class="h-4 w-4" />
								</a>
							</Card.Content>
						</Card.Root>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
