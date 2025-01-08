<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
//   import { taskValue } from "$lib/stores/subtasks";
  import type { urlDependencies } from "$lib/types/task";
  import { LayoutGrid, List } from "lucide-svelte";
  import TaskUrlDependency from "./task-url-dependency.svelte";

  let {taskValue} = $props()

  
  let islist: boolean = $state(true);
//   let urlslist: urlDependencies[] | [] = $state([]);

  function selectTypeList(value: boolean) {
    islist = value;
  }

 
let urlslist = $derived( taskValue?.urldependencies || []);
  
</script>

<section>
  <div
    class="border-b-slate-slate-400 border-b-[2px] flex justify-between items-center px-3 py-2"
  >
    <h2 class="text-xl">Link</h2>
    <div class="flex gap-1">
      <Button
        variant="outline"
        size="xs"
        class="p-2 {!islist ? 'bg-slate-300' : ''}"
        onclick={() => selectTypeList(false)}
      >
        <LayoutGrid class="size-4"></LayoutGrid>
      </Button>
      <Button
        variant="outline"
        size="xs"
        class="p-2 {islist ? 'bg-slate-300' : ''}"
        onclick={() => selectTypeList(true)}
      >
        <List class="size-4"></List>
      </Button>
    </div>
  </div>
  <div class="flex flex-col gap-1 px-3 justify-center">
    {#each urlslist as item}
      <TaskUrlDependency urldata={item} {islist} {taskValue}></TaskUrlDependency>
    {/each}
  </div>
</section>
