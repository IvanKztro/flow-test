<script lang="ts">
	import { page } from '$app/stores';
	import { taskManager } from '$lib/components/task-manager.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { CalendarIcon, Plus } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { Timestamp } from 'firebase/firestore';

	let name = $state('');
	let open = $state(false);
	let { status, taskslength, milestoneId, sprintIndex, parentId = null } = $props();
	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let dueDate = $state<DateValue | undefined>();
	let contentRef = $state<HTMLElement | null>(null);
	let startDate = $state<DateValue | undefined>();

	async function handleAdd() {
		try {
			// if (!taskManager.haveIds()) {
			const params = $page.params.path.split('/');
			taskManager.setIds(params[3], params[5]);
			// }

			let task = {
				name,
				// id: string,
				milestoneId,
				status: parentId ? 'Active' : status,
				taskType: 'Task',
				priority: 'Normal',
				position: taskslength + 1 || 0,
				positionsprint: sprintIndex + 1,
				tags: [],
				created: Timestamp.now(),
				dueDate: dueDate?.toDate(getLocalTimeZone()),
				startDate: startDate?.toDate(getLocalTimeZone()),
				...(parentId ? { parentId } : {})
			};
			const res = await taskManager.createTask(task);
			toast.success('Task created successfully');
			name = '';
			dueDate = undefined;
			startDate = undefined;
			open = false;
		} catch (error) {
			console.log(error);
			toast.error('Failed to add task');
		}
	}
</script>

<Popover.Root bind:open>
	<Popover.Trigger class={'mb-2 w-full ' + buttonVariants({ variant: 'outline' })}
		><Plus class="size-3" /></Popover.Trigger
	>
	<Popover.Content class="w-80">
		<div class="grid gap-4">
			<div class="space-y-2">
				<h4 class="font-medium leading-none">Add new task</h4>
			</div>
			<div class="grid gap-2">
				<div class="grid grid-cols-3 items-center gap-4">
					<Label for="width">Name</Label>
					<Input id="width" bind:value={name} class="col-span-2 h-8" />
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<Label for="maxWidth">start date</Label>
					<Popover.Root>
						<Popover.Trigger
							class={cn(
								buttonVariants({
									variant: 'outline',
									class: 'col-span-2 justify-start text-left font-normal'
								}),
								!startDate && 'text-muted-foreground'
							)}
						>
							<CalendarIcon />
							{startDate ? df.format(startDate.toDate(getLocalTimeZone())) : 'Pick a date'}
						</Popover.Trigger>
						<Popover.Content class="w-auto p-0">
							<Calendar type="single" bind:value={startDate} />
						</Popover.Content>
					</Popover.Root>
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<Label for="height">Due date</Label>

					<Popover.Root>
						<Popover.Trigger
							class={cn(
								buttonVariants({
									variant: 'outline',
									class: 'col-span-2 justify-start text-left font-normal'
								}),
								!dueDate && 'text-muted-foreground'
							)}
						>
							<CalendarIcon />
							{dueDate ? df.format(dueDate.toDate(getLocalTimeZone())) : 'Pick a date'}
						</Popover.Trigger>
						<Popover.Content bind:ref={contentRef} class="w-auto p-0">
							<Calendar type="single" bind:value={dueDate} />
						</Popover.Content>
					</Popover.Root>
				</div>
				<Button onclick={handleAdd} disabled={name.trim() == ''}>Add</Button>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
