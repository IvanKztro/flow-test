<script lang="ts">
    import Check from "lucide-svelte/icons/check";
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import { tick } from "svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
  

    const language =[
        { value: "engish", label: "English", flagCode: "1f1fa-1f1f8" },
        { value: "spanish", label: "Spanish", flagCode: "1f1ea-1f1f8" },
        { value: "deutsch", label: "Deutsch", flagCode: "1f1e9-1f1ea" },
        { value: "dansk", label: "Dansk", flagCode: "1f1e9-1f1f0" },
        { value: "italiano", label: "Italiano", flagCode: "1f1ee-1f1f9" },
        { value: "chinese ", label: "Chinese ", flagCode: "1f1e8-1f1f3" },
    ]






let open = false;
let value = "";

$: selectedlanguage = language.find((c) => c.value === value)?.label ?? "";

function closeAndFocusTrigger(triggerId: string) {
open = false;
tick().then(() => {
document.getElementById(triggerId)?.focus();
});
}
</script>
<Popover.Root bind:open let:ids>
<Popover.Trigger asChild let:builder>
  <Button
    builders={[builder]}
    variant="outline"
    role="combobox"
    aria-expanded={open}
    class="w-32 justify-between rounded-full"
  >
    <img src={`https://twemoji.maxcdn.com/v/latest/svg/${value ? language.find(c => c.value === value)?.flagCode : '1f1fa-1f1f8'}.svg`} class="w-6 h-4 mr-2" alt={selectedlanguage} />
    {selectedlanguage}
    <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
  </Button>
</Popover.Trigger>
<Popover.Content class="w-[130px] p-0">
  <Command.Root>
    <Command.Group>
    <div class="scrollable-list">
      {#each language as language}
        <Command.Item
          value={language.value}
          onSelect={(currentValue) => {
            value = currentValue;
            closeAndFocusTrigger(ids.trigger);
          }}
        >
          <img src={`https://twemoji.maxcdn.com/v/latest/svg/${language.flagCode}.svg`} class="w-6 h-4 mr-2" alt={language.label} />
          <span class="flex items-center">
            {language.label}
            <Check
              class={cn(
                "ml-2 h-3 w-3",
                value !== language.value && "text-transparent"
              )}
            />
          </span>
        </Command.Item>
      {/each}
    </div>
    </Command.Group>
  </Command.Root>
</Popover.Content>
</Popover.Root>


<style>
.scrollable-list {
  max-height: 200px; 
  overflow-y: auto;  
  overflow-x: hidden;
}
</style>