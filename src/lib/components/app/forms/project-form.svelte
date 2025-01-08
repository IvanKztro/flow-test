<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { projectSchema } from '$lib/schemas/project';
	import { firekitDocMutations, firekitUser } from 'svelte-firekit';
	import { toast } from 'svelte-sonner';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';
	import { Timestamp } from 'firebase/firestore';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label';
	import { CalendarIcon } from 'lucide-svelte';
	import {
		DateFormatter,
		type DateValue,
		fromDate,
		getLocalTimeZone,
		toCalendarDate
	} from '@internationalized/date';
	import { cn, formatDate } from '$lib/utils.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { ProjectStatus, type Project } from '$lib/types/project';
	import {
		MilestoneStatus,
		type ArrayStatus,
		type Milestone,
		type SprintApp
	} from '$lib/types/milestone';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import { goto } from '$app/navigation';


	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let contentRef = $state<HTMLElement | null>(null);

	let { isopenproject = $bindable(false), portfolio } = $props();

	let startDate = $state<DateValue | undefined>();
	let dueDate = $state<DateValue | undefined>();

	const data = defaults(valibot(projectSchema));

	const form = superForm(data, {
		validators: valibot(projectSchema),
		dataType: 'json',
		SPA: true,
		resetForm: false,
		clearOnSubmit: 'errors-and-message',
		async onUpdate({ form }) {
			if (!form.valid) return;
			const { data } = form;
			const pdata: Partial<Project> = {
				...data,
				projectStatus: ProjectStatus.Active,
				portfolioId: portfolio?.id as string,
				createdBy: firekitUser.uid as string,
				createdAt: Timestamp.now(),
				color: '',
				...(startDate ? { startDate: Timestamp.fromDate(startDate?.toDate(getLocalTimeZone())) } : {}),
				...(dueDate
					? {
							dueDate: Timestamp.fromDate(dueDate?.toDate(getLocalTimeZone()))
						}
					: {})
			};
			const response = await firekitDocMutations.add(`projects`, pdata);

			setMilestoneDefault(response.data as Project);
		}
	});

	async function setMilestoneDefault(project: Project) {
		const arraystatus: ArrayStatus[] = [
			{
				position: 1,
				color: '#E2E8F0',
				name: 'TO DO',
				status: 'Active'
			},
			{
				position: 2,
				color: '#60A5FA',
				name: 'IN PROGRESS',
				status: 'InProgress'
			},
			{
				position: 3,
				color: '#4ADE80',
				name: 'COMPLETE',
				status: 'Complete'
			}
		];

		const arraySprints: SprintApp = {
			id: crypto.randomUUID(),
			name: `Sprint 1`,
			position: 1
		};

		const milestonedefault: Partial<Milestone> = {
			id: '',
			projectId: project.id,
			name: 'Milestone',
			createdBy: firekitUser.uid as string,
			created: Timestamp.now(),
			status: MilestoneStatus.Active,
			arrayStatus: arraystatus,
			arraySprints: [arraySprints]
		};
		const response = await firekitDocMutations.add(
			`projects/${project.id}/milestones`,
			milestonedefault
		);

		if (response.success) {
			isopenproject = false;
			toast.success('Project created in successfully');
			goto(`/pf/${workspaceManager.selectedWorkspace?.id}/p/${project.id}/m/${response.id}`);
		} else toast.error('Error to create Project');
	}
	const { form: formData, enhance } = form;
</script>

<div>
	<!-- <pre>{JSON.stringify($formData, null, '  ')}</pre> -->

	<form method="POST" use:enhance class="h-[75dvh] w-full space-y-2 overflow-y-auto px-2">
		<section class="grid grid-cols-3 gap-3">
			<Form.Field {form} name="name" class="col-span-2">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Project Name</Form.Label>
						<Input {...props} bind:value={$formData.name} placeholder="Project Name" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="resources">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Resources</Form.Label>
						<Input {...props} bind:value={$formData.resources} type="number" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</section>

		<Form.Field {form} name="description">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Description</Form.Label>
					<Textarea
						{...props}
						bind:value={$formData.description}
						placeholder="Description to project..."
						class="h-[100px]"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<section class="flex w-auto gap-2 pt-2">
			<div class="col-span-2 flex w-full flex-col gap-1.5">
				<Label for="startDate">Start Date:</Label>
				<Popover.Root>
					<Popover.Trigger
						class={cn(
							buttonVariants({
								variant: 'outline',
								class: ' h-[30px] justify-start text-left font-normal'
							}),
							!startDate && 'text-muted-foreground'
						)}
						onclick={() => {
							if (startDate?.seconds) {
								const date = startDate.toDate(getLocalTimeZone());
								const timeZone = 'America/New_York';
								const zonedDateTime = fromDate(date, timeZone);
								startDate = toCalendarDate(zonedDateTime);
							}
						}}
					>
						<CalendarIcon />
						{startDate ? df.format(startDate.toDate(getLocalTimeZone())) : 'Pick a start date'}
					</Popover.Trigger>
					<Popover.Content bind:ref={contentRef} class="w-auto p-0">
						<Calendar type="single" bind:value={startDate} />
					</Popover.Content>
				</Popover.Root>
			</div>

			<div class="flex w-full flex-col gap-1.5">
				<Label for="startDate">Due Date:</Label>
				<Popover.Root>
					<Popover.Trigger
						class={cn(
							buttonVariants({
								variant: 'outline',
								class: ' h-[30px] justify-start text-left font-normal'
							}),
							!dueDate && 'text-muted-foreground'
						)}
					>
						<CalendarIcon />
						{dueDate ? df.format(dueDate.toDate(getLocalTimeZone())) : 'Pick a due date'}
					</Popover.Trigger>
					<Popover.Content bind:ref={contentRef} class="w-auto p-0">
						<Calendar type="single" bind:value={dueDate} />
					</Popover.Content>
				</Popover.Root>
			</div>
		</section>

		<Form.Field {form} name="objectives">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Objectives</Form.Label>
					<Textarea
						{...props}
						bind:value={$formData.objectives}
						placeholder="Objectives to project..."
						class="h-[100px]"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="requirements">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Requirements</Form.Label>
					<Textarea
						{...props}
						bind:value={$formData.requirements}
						placeholder="Requirements to project..."
						class="h-[100px]"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="scope">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Scope</Form.Label>
					<Textarea
						{...props}
						bind:value={$formData.scope}
						placeholder="Scope to project..."
						class="h-[100px]"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="risks">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Risks</Form.Label>
					<Textarea
						{...props}
						bind:value={$formData.risks}
						placeholder="Risks to project..."
						class="h-[100px]"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="vision">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Vision</Form.Label>
					<Textarea
						{...props}
						bind:value={$formData.vision}
						placeholder="Vision to project..."
						class="h-[100px]"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<div class=" flex items-center justify-end gap-2">
			<Form.Button class="ml-auto block px-5" variant="default">Save</Form.Button>
		</div>
	</form>
</div>
