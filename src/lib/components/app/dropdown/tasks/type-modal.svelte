<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
//   import { taskValue, updateSubTask } from "$lib/stores/subtasks";
  import { TaskType, type ActivityTask } from "$lib/types/task";
  import { Box, ChevronDown, Circle, Square } from "lucide-svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
//   import { projectValues } from "$lib/stores/project";
  import { Timestamp } from "firebase/firestore";
	import { firekitUser } from "svelte-firekit";
//   import { authStore } from "$lib/stores/auth-store";
//   import { addNewActivity } from "$lib/utils";

//   export let taskType: string = "";
//   export let hasarrow: boolean = false;

  let {taskType, hasarrow, milestone} = $props()
  let wascopyID: boolean = $state(false);

  async function setStatusType(status: TaskType) {
    if (hasarrow) {
    //   await updateSubTask(
    //     $taskValue?.id as string,
    //     $projectValues?.id as string,
    //     $taskValue?.milestoneId as string,
    //     {
    //       taskType: status,
    //     }
    //   );
      const newactivity: ActivityTask = {
        createdBy: firekitUser?.uid as string,
        createdAt: Timestamp.now(),
        typeAct: "act",
        description: `Updated Task Type: ${status}`,
      };
    //   await addNewActivity(newactivity);
    }
    // taskType = status;
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(milestone.currentTask?.id);
      wascopyID = true;
      setTimeout(() => {
        wascopyID = false;
      }, 3000);
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
    }
  }


</script>

<DropdownMenu.Root>
  <section class="flex">
    <div
      class="flex items-center gap-1 {hasarrow
        ? 'border-[2px] border-slate-300 rounded-l-md p-1 hover:bg-slate-200'
        : ''}"
    >
      <DropdownMenu.Trigger
        class="flex items-center gap-2   {taskType !== '' && !hasarrow
          ? 'hover:bg-slate-200'
          : ''} rounded-md px-1 text-xs font-medium"
      >
        {#if taskType === TaskType.Task}
          <Circle class="w-4"></Circle>
          Task
        {:else if taskType === TaskType.Milestone}
          <Square class="w-4"></Square>
          Milestone
        {:else}
          <Button variant="outline" size="xs" class="w-6 h-6">
            <Box class="w-3.5 h-4"></Box>
          </Button>
        {/if}
        {#if hasarrow}
          <ChevronDown class="size-4"></ChevronDown>
        {/if}
      </DropdownMenu.Trigger>
    </div>
    {#if hasarrow}
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Button
            variant="ghost"
            onclick={copyToClipboard}
            class="flex items-center gap-1 {hasarrow
              ? 'border-[2px] border-slate-300 rounded-r-md p-1 rounded-l-none border-l-[0px] hover:bg-slate-200'
              : ''}"
          >
            <small>{wascopyID ? "Copied!" : milestone.currentTask?.id}</small></Button
          >
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>Copy ID</p>
        </Tooltip.Content>
      </Tooltip.Root>
    {/if}
  </section>

  <DropdownMenu.Content class="w-56 z-[70]">
    <DropdownMenu.Label class="text-xs text-slate-400"
      >Create</DropdownMenu.Label
    >
    <DropdownMenu.Item
      onclick={() => setStatusType(TaskType.Task)}
      class={TaskType.Task === taskType ? "bg-blue-200" : ""}
    >
      <div class="flex justify-start items-center px-3 py-1 rounded-md gap-2">
        <Circle class="w-3 h-3"></Circle>
        <h1 class="text-xs font-medium text-slate-500">Task</h1>
      </div>
    </DropdownMenu.Item>
    <DropdownMenu.Item
      onclick={() => setStatusType(TaskType.Milestone)}
      class={TaskType.Milestone === taskType ? "bg-blue-200" : ""}
    >
      <div class="flex justify-start items-center px-3 py-1 rounded-md gap-2">
        <Square class="w-3 h-3"></Square>
        <h1 class="text-xs font-medium text-slate-500">Milestone</h1>
      </div>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
