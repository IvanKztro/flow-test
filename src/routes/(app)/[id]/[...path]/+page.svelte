<script lang="ts">
	import { page } from '$app/stores';
	import { Plus, Square } from 'lucide-svelte';
	import type { Milestone } from '$lib/types/milestone';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	import { firekitCollection, firekitDoc } from 'svelte-firekit';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	const path = $derived($page.url.pathname);
	const segments = $derived(path.split('/'));
	const workspaceId:string = $derived(segments[1]);
	const portfolioId:string = $derived(segments[3]);
	const projectId:string = $derived(segments[5]);
	const milestoneId:string = $derived(segments[7]);
	const pathids:any = $derived({workspaceId, portfolioId, milestoneId, projectId});
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Tasks from '$lib/components/app/tasks/tasks.svelte';
	import TaskModal from '$lib/components/app/modal/task/task-modal.svelte';
	import { where } from 'firebase/firestore';
	import type { Project } from '$lib/types/project';

	const milestoneDoc = $derived(
		firekitDoc<Milestone>(`projects/${projectId}/milestones/${milestoneId}`)
	);

	const milestone = $derived(milestoneDoc.data);

	const projectDoc = $derived(firekitDoc<Project>(`projects/${projectId}`));

	const project = $derived(projectDoc.data);

	const tabs = [
		{ name: 'Tasks', value: 'tasks', component: Tasks },
		{ name: 'Timeline', value: 'timeline' },
		{ name: 'Files', value: 'files' },
		{ name: 'Overview', value: 'overview' }
	];

	let currentTab = $state('tasks');

	const membersDoc = $derived.by(() => {
		const team = project?.team?.map((t) => t.id);
		return firekitCollection<any>(`users`, where('uid', 'in', team));
	});

	const membersByProject = $derived.by(() => {
		const users = membersDoc.data || [];
		const team = project?.team || [];

		return users.map((user) => {
			const teamMember = team.find((t) => t.id === user.uid);
			return {
				...user,
				...teamMember
			};
		});
	});

	$effect(()=>{
		console.log("membersByProject: ", membersByProject.length)
	})
</script>

{#if milestone}
	<div class="h-full">
		<div class="flex gap-2 p-4 pb-0">
			<Square class="mt-1 size-4 text-primary" />
			<div>
				<h1>{milestone.name}</h1>
				<p class="text-xs text-muted-foreground">{milestone.description}</p>
			</div>
		</div>

		<Tabs.Root bind:value={currentTab}>
			<div class="mb-0 flex items-end justify-between p-4 pb-0">
				<Tabs.List class="text- bg-transparent ">
					{#each tabs as tab}
						<Tabs.Trigger
							value={tab.value}
							class=" {currentTab === tab.value
								? 'rounded-none border-b-2 border-primary bg-transparent  '
								: ''}"
						>
							{tab.name}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
				<div class="mb-2 flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
					<Separator orientation="vertical" class="h-8" />
					<Button size="icon" variant="outline" class="rounded-full text-primary"><Plus /></Button>
				</div>
			</div>

			{#each tabs as tab}
				<Tabs.Content value={tab.value} class=" mt-0 h-full border-t bg-muted p-4">
					{#if tab.component}
						<tab.component {milestone} {milestoneId} />
					{:else}
						{tab.name}
					{/if}
				</Tabs.Content>
			{/each}
		</Tabs.Root>
	</div>
{/if}

<!-- {#if milestone} -->
<TaskModal {milestone} {project} {membersByProject} {pathids}></TaskModal>
<!-- {/if} -->
