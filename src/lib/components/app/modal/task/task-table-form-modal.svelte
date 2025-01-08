<script lang="ts">
	//   import {
	//     taskrelationships,
	//     taskValue,
	//     updateSubTask,
	//   } from "$lib/stores/subtasks";
	import {
		Cable,
		// Calendar,
		CalendarIcon,
		Circle,
		Flag,
		Hourglass,
		Milestone,
		Tag,
		User
	} from 'lucide-svelte';
	//   import TaskDropdownStatusModal from "../../dropdown-task/task-dropdown-status-modal.svelte";
	//   import CalendarButton from "../../calendar-button.svelte";
	import Input from '$lib/components/ui/input/input.svelte';
	//   import TaskDropdownPriority from "../../dropdown-task/task-dropdown-priority.svelte";
	import { get } from 'svelte/store';
	//   import {
	//     SubTaskStatus,
	//     type ActivityTask,
	//   } from "$lib/types/subtask";
	//   import { projectteam, projectValues } from "$lib/stores/project";
	//   import TaskTags from "../../task-tags.svelte";
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { CircleCheckBig, CircleMinus, TriangleAlert } from 'lucide-svelte';
	//   import TaskChronometer from "../../task-chronometer.svelte";
	//   import TaskDropdownType from "../../dropdown-task/task-dropdown-type.svelte";
	//   import { authStore } from "$lib/stores/auth-store";
	import { Timestamp } from 'firebase/firestore';
	import StatusModal from '../../dropdown/tasks/status-modal.svelte';
	import TypeModal from '../../dropdown/tasks/type-modal.svelte';
	import { TaskStatus, type ActivityTask, type Task } from '$lib/types/task';
	import { firekitUser } from 'svelte-firekit';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import TasksTags from '../../tasks/tasks-tags.svelte';
	import { taskManager } from '$lib/components/task-manager.svelte';
	import PriorityModal from '../../dropdown/tasks/priority-modal.svelte';
	import ChronometerModal from '../../dropdown/tasks/chronometer-modal.svelte';
	import Members from '$lib/components/app/workspace/members-select.svelte';
	import { workspaceManager } from '$lib/components/workspace.svelte';
	import { sideleft, taskrelationships } from '$lib/stores/tasks-actions';

	//   import {
	//     checkboxvalue,
	//     openhasrelationship,
	//     sideleft,
	//   } from "$lib/stores/subtask-actions";
	//   import CustomStatePopover from "../../popover/custom-state-popover.svelte";
	//   import { workspacemembers, workspaceselected, workspaceteams } from "$lib/stores/workspace";
	//   import MembersWithRole from "$lib/components/app/members/members-with-role.svelte";

	let { milestone, project, membersByProject, taskValue, pathids, alltasks } = $props();

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
	let allteams: any = [];

	// let substaskform =  $state();
	let iseditname: boolean = $state(false);
	let openestimate: boolean = $state(false);
	let timeestimate = $state();
	let checkboxvalue = $state(false);

	let timeestimatestring = $derived(milestone.currentTask.timeEstimate);

	$effect(() => {
		const groups: any = {};

		if (Array.isArray(taskValue?.relationships)) {
			let tasklist = alltasks;

			const taskMap = new Map(tasklist.map((task) => [task.id, task]));

			taskValue?.relationships?.forEach((relationship) => {
				if (!groups[relationship.type]) {
					groups[relationship.type] = [];
				}

				const task = taskMap.get(relationship.taskuid);
				groups[relationship.type].push({
					...relationship,
					taskDetails: task || {}
				});
			});

			taskrelationships.set(
				Object.entries(groups).map(([type, items]) => ({
					type,
					items
				}))
			);
		} else {
			taskrelationships.set([]);
		}
	});

	//   $: {
	//     if ($workspaceteams && $workspaceteams?.length > 0) {
	//       const projectteamArray = get(workspaceteams);
	//       allteams = [
	//         ...new Map(
	//           [...projectteamArray].map((team) => [team.uid, team])
	//         ).values(),
	//       ];
	//     }
	//   }

	$effect(() => {
		if (milestone.currentTask) {
			checkboxvalue = milestone.currentTask?.status === TaskStatus.Complete ? true : false;
			// timeestimate = milestone.currentTask?.timeEstimate;
			//   setTeam()
		}
	});

	//   function setTeam() {
	//     const indexedUsers = $projectteam.reduce((acc, el) => {
	//       acc[el.uid] = el;
	//       return acc;
	//     }, {});
	//     if (substaskform?.assignees) {
	//       substaskform.assignees = substaskform?.assignees?.map((as, index) => {
	//         const item = $projectteam?.find((itm) => itm.uid === as?.uid);

	//         if (item?.typeitem === "Team") {
	//           let teamtemp = allteams?.find((tt) => tt.uid === as?.uid);

	//           if (!teamtemp)
	//             teamtemp = $projectteam?.find((tt) => tt.uid === as?.uid);
	//           return {
	//             uid: teamtemp?.uid || as?.uid,
	//             typeitem: "Team",
	//             name: teamtemp?.name,
	//             photoURL: teamtemp?.photoURL,
	//             members: teamtemp?.members,
	//             rolews: teamtemp?.role,
	//           };
	//         }
	//         if (
	//           as?.uid == $authStore.user?.uid &&
	//           $workspaceselected.createdBy.email != $authStore.user?.email
	//         )
	//           return {
	//             uid: $authStore.user.uid,
	//             email: $authStore.user.email,
	//             displayName: $authStore.user?.displayName,
	//             typeitem: substaskform?.assignees[index]?.typeitem,
	//             photoURL: $authStore.user?.photoURL,
	//             rolews: substaskform?.assignees[index].rolews,
	//           };
	//         if (indexedUsers[as?.uid]) {
	//           const user = $projectteam?.find((itm) => itm.uid === as?.uid);
	//           return {
	//             uid: substaskform?.assignees[index]?.uid,
	//             email: user.email,
	//             displayName: user.displayName,
	//             typeitem: substaskform?.assignees[index]?.typeitem,
	//             photoURL: user.photoURL,
	//             rolews: substaskform?.assignees[index].rolews,
	//           };
	//         }
	//       });
	//     }
	//   }

	async function updatedName(event: any) {
		taskManager.updateTask({ name: event.target.value }, milestone.currentTask?.id);
		iseditname = false;
		milestone.currentTask.name = event.target.value;

		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Changed task name: ${event.target.value}`
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids);
	}

	async function updateStatusCheck(event: any) {
		taskManager.updateTask(
			{
				status: checkboxvalue ? TaskStatus.Complete : TaskStatus.Active,
				position: checkboxvalue ? 1 : taskValue?.position
			},
			taskValue.id
		);
		const newactivity: ActivityTask = {
			createdBy: firekitUser?.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Changed status from ${
				!checkboxvalue ? TaskStatus.Complete : TaskStatus.Active
			} to  ${checkboxvalue ? TaskStatus.Complete : TaskStatus.Active}`
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids);

		milestone.currentTask.status = checkboxvalue ? TaskStatus.Complete : TaskStatus.Active;
	}

	async function handleInput(event) {
		const value = event.target.value;

		const numericValue = value.replace(/\D/g, '');
		timeestimate = numericValue + 'h';

		taskManager.updateTask(
			{
				timeEstimate: timeestimate as string
			},
			milestone.currentTask?.id
		);
		const newactivity: ActivityTask = {
			createdBy: firekitUser?.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Changed Time Estimate: ${timeestimate}`
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids);
	}

	function handleCheckbox(event: any) {
		const dependecies = milestone.currentTask?.relationships?.find((rs) => rs.type !== 'link');
		if (dependecies && !checkboxvalue) {
			event.preventDefault();
			//   openhasrelationship.set(true);
		}
	}

	async function updatedAssignes(value: any) {
		const assignees =
			value.map((vv) => ({
				uid: vv?.uid || vv.id,
				typeitem: vv?.typeitem,
				rolews: vv?.rolews || ''
			})) || [];

		taskManager.updateTask(
			{
				assignees: assignees
			},
			taskValue.id
		);

		const newactivity: ActivityTask = {
			createdBy: firekitUser.uid as string,
			createdAt: Timestamp.now(),
			typeAct: 'act',
			description: `Added new member`
		};
		taskManager.addNewActivity(newactivity, taskValue, pathids);
	}

	// let users = $derived()
</script>

{#if milestone.currentTask}
	<div class="mb-5 flex">
		<TypeModal taskType={milestone.currentTask?.taskType} hasarrow={true} {milestone}></TypeModal>
	</div>
	{#if iseditname}
		<Input
			onchange={() => updatedName(event)}
			value={milestone.currentTask?.name}
			class="w-[300px] "
			placeholder="Time Estimate"
		/>
	{:else}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<h1 class="text-3xl font-semibold text-primary" onclick={() => (iseditname = true)}>
			{milestone.currentTask?.name}
		</h1>
	{/if}

	<section class="grid grid-cols-1 md:grid-cols-2">
		<table class="">
			<tbody>
				<tr class=" grid grid-cols-3">
					<th
						class="text-md col-span-1 flex w-[200px] items-center gap-2 font-medium text-slate-700"
					>
						<Circle class="h-4 w-4"></Circle>
						<p class="text-start text-xs">Status</p>
					</th>
					<th
						class="text-md col-span-2 flex cursor-pointer items-center gap-2 font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<StatusModal
							typestatus={milestone.currentTask?.status}
							{milestone}
							{taskValue}
							{pathids}
						></StatusModal>
						<input
							type="checkbox"
							class="h-5 w-5"
							bind:checked={checkboxvalue}
							onclick={handleCheckbox}
							onchange={updateStatusCheck}
						/>
						<!-- <CustomStatePopover {milestone} isStatic /> -->
					</th>
				</tr>
				<tr class="grid grid-cols-3">
					<th
						class="text-md col-span-1 flex w-[200px] items-center gap-2 font-medium text-slate-700"
					>
						<CalendarIcon class="h-4 w-4"></CalendarIcon>
						<p class="text-start text-xs">Due Date</p>
					</th>
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<Popover.Root>
							<Popover.Trigger
								class={cn(
									buttonVariants({
										variant: 'outline',
										class: 'w-full text-left font-normal'
									}),
									!milestone.currentTask?.dueDate && 'text-muted-foreground'
								)}
							>
								<CalendarIcon />
								{milestone.currentTask?.dueDate
									? df.format(new Date(milestone.currentTask.dueDate.seconds * 1000))
									: 'Pick a date'}
							</Popover.Trigger>
							<Popover.Content class="w-auto p-0">
								<!-- <Calendar type="single" bind:value={milestone.currentTask.dueDate.seconds} /> -->
							</Popover.Content>
						</Popover.Root>
						<!-- <CalendarButton dueDate={milestone.currentTask?.dueDate} typecalendar="field"
            ></CalendarButton> -->
					</th>
				</tr>
				<tr class="grid grid-cols-3">
					<th
						class="text-md col-span-1 flex w-[200px] items-center gap-2 font-medium text-slate-700"
					>
						<Hourglass class="h-4 w-4"></Hourglass>
						<p class="text-start text-xs">Time Estimate</p>
					</th>
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<div class="flex w-full flex-col gap-1.5">
							<Popover.Root bind:open={openestimate}>
								<Popover.Trigger>
									<Button variant="outline" class="w-full ">
										<span class=" w-full text-start">
											{timeestimatestring ? timeestimatestring : 'Empty'}
										</span>
									</Button>
								</Popover.Trigger>
								<Popover.Content class="w-80">
									<div class="flex flex-col gap-2">
										<Label for="estimate">Time Estimate:</Label>
										<Input
											value={timeestimate}
											class=" w-full"
											placeholder="Empty"
											onchange={() => handleInput(event)}
										/>
									</div>
								</Popover.Content>
							</Popover.Root>
						</div>
					</th>
				</tr>
				<tr class="grid grid-cols-3">
					<th class="text-md col-span-1 flex items-center gap-2 font-medium text-slate-700">
						<Tag class="h-4 w-4"></Tag>
						<p class="text-start text-xs">Tags</p>
					</th>
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<TasksTags
							tags={milestone.currentTask?.tags}
							typefield="input"
							{milestone}
							{taskValue}
							{pathids}
						></TasksTags>
					</th>
				</tr>
			</tbody>
		</table>

		<table class="">
			<tbody>
				<tr class=" grid grid-cols-3">
					<th class="text-md col-span-1 flex items-center gap-2 font-medium text-slate-700">
						<User class="h-4 w-4"></User>
						<p class="text-start text-xs">Assignees</p>
					</th>
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<Members
							bind:value={milestone.currentTask.assignees}
							users={membersByProject}
							typecomp="task"
							updatedField={true}
							updatedClick={updatedAssignes}
						></Members>
					</th>
				</tr>

				<tr class="grid grid-cols-3">
					<th
						class="text-md col-span-1 flex w-[200px] items-center gap-2 font-medium text-slate-700"
					>
						<Flag class="h-4 w-4"></Flag>
						<p class="text-start text-xs">Priority</p>
					</th>
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<PriorityModal
							{milestone}
							priority={milestone.currentTask?.priority}
							typefield="field"
							{taskValue}
							{pathids}
						></PriorityModal>
					</th>
				</tr>
				<tr class="grid grid-cols-3">
					<th
						class="text-md col-span-1 flex w-[200px] items-center gap-2 font-medium text-slate-700"
					>
						<Hourglass class="h-4 w-4"></Hourglass>
						<p class="text-start text-xs">Track Time</p>
					</th>
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<ChronometerModal
							trackTime={milestone.currentTask?.trackTime}
							{milestone}
							{taskValue}
							{pathids}
						></ChronometerModal>
					</th>
				</tr>
				<!-- <tr class="grid grid-cols-3">
					<th
						class="text-md col-span-1 flex w-[200px] items-center gap-2 font-medium text-slate-700"
					>
						<Cable class="h-4 w-4"></Cable>
						<p class="text-start text-xs">Relationships</p>
					</th>
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<Input />
					</th>
				</tr> -->
				<tr class="grid grid-cols-3">
					<th class="text-md col-span-1 flex items-center gap-2 font-medium text-slate-700">
						<Cable class="h-4 w-4"></Cable>
						<p class="text-[clamp(0.5rem, 2vw, 1rem)] break-words text-start text-xs">Relationships</p>
					</th>
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<th
						class="text-md col-span-2 cursor-pointer font-medium hover:rounded-lg hover:bg-slate-200"
					>
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<Button
							variant="outline"
							class="flex h-[35px] w-full items-center justify-start px-1 text-start "
							onclick={() => sideleft.set('relationship')}
						>
							<div class="flex h-full flex-wrap items-center gap-1">
								{#if $taskrelationships && $taskrelationships?.length > 0}
									{#each $taskrelationships as group}
										<Badge variant="outline" class="flex h-[20px] items-center gap-1  ">
											{#if group.type === 'link'}
												<CircleCheckBig class="w-2 "></CircleCheckBig>
											{:else if group.type === 'waiting'}
												<TriangleAlert class="w-2 text-yellow-600"></TriangleAlert>
											{:else if group.type === 'blocking'}
												<CircleMinus class="w-2 text-red-600"></CircleMinus>
											{/if}

											<small class="text-[10px]">{group.type}: {group.items.length} </small>
										</Badge>
									{/each}
								{:else}
									<span class="ml-2">Empty</span>
								{/if}
							</div>
						</Button>
					</th>
				</tr>
			</tbody>
		</table>
	</section>
{/if}

<style>
	th {
		margin: 10px 10px;
	}

	.text-start {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
