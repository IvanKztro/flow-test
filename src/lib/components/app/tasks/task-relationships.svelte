<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import {
    CircleCheckBig,
    CircleMinus,
    TriangleAlert,
  } from "lucide-svelte";
  import {
    taskcurrentrelationships,
    opendependencies, typerelation
  } from "$lib/stores/tasks-actions";
	import TaskRelationshipsLink from "./task-relationships-link.svelte";

  let {taskValue, pathids} = $props()

  let url: string = $state("");

  function handleOpenMore(typer: string) {
    typerelation.set(typer);
    taskcurrentrelationships.set({
      type: typer,
      items:[]
    })
    opendependencies.set(true);
  }

</script>

<div class="container mx-auto h-auto overflow-y-auto">
  <h3 class="text-lg font-semibold text-black mt-5 dark:text-white">Add to this Task</h3>

  <div class="mt-8">
     <TaskRelationshipsLink {taskValue} {pathids}></TaskRelationshipsLink>
  </div>

  <div class="mt-8">
    <Label for="urlrelationship" class="my-5">Add Relationship</Label>

    <div class="grid grid-cols-2 gap-3 mt-5">
      <Button
        variant="outline"
        class="py-10 flex justify-center items-center rounded-xl"
        onclick={() => handleOpenMore("link")}
      >
        <div class="flex flex-col items-center justify-center">
          <CircleCheckBig class="w-7 h-7"></CircleCheckBig>
          <small>Link Task</small>
        </div>
      </Button>
      <Button
        variant="outline"
        class="py-10 flex justify-center items-center rounded-xl"
        onclick={() => handleOpenMore("waiting")}
      >
        <div class="flex flex-col items-center justify-center">
          <TriangleAlert class="w-7 h-7"></TriangleAlert>
          <small>Waiting on</small>
        </div>
      </Button>
      <Button
        variant="outline"
        class="py-10 flex justify-center items-center rounded-xl"
        onclick={() => handleOpenMore("blocking")}
      >
        <div class="flex flex-col items-center justify-center">
          <CircleMinus class="w-7 h-7"></CircleMinus>
          <small>Blocking</small>
        </div>
      </Button>
    </div>
   
  </div>
</div>
