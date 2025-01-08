<script lang="ts">
    import Check from "lucide-svelte/icons/check";
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
    import { tick } from "svelte";
  
    export let value = "";
    export let types = [
      { value: "revenue", label: "Revenue" },
      { value: "total_sales", label: "Total Sales" },
      { value: "new_sales", label: "New Sales" },
      { value: "refunds", label: "Refunds" },
      { value: "new_subscriptions", label: "New Subscriptions" },
      { value: "trial_conversion_rate", label: "Trial Conversion Rate" },
      { value: "affiliate_revenue", label: "Affiliate Revenue" },
      { value: "affiliate_clicks", label: "Affiliate Clicks" }
    ];
  
    let open = false;
  
    $: selectedValue =
      types.find((t) => t.value === value)?.label ?? "Select option...";
  
    function closeAndFocusTrigger(triggerId: string) {
      open = false;
      tick().then(() => {
        document.getElementById(triggerId)?.focus();
      });
    }
  
    function selectType(currentValue: string) {
      value = currentValue;
      closeAndFocusTrigger('popover-trigger');
    }
  </script>
  
  <Popover.Root bind:open let:ids>
    <Popover.Trigger asChild let:builder>
      <Button
        builders={[builder]}
        variant="outline"
        role="combobox"
        aria-expanded={open}
        class="justify-center w-auto h-8"
      >
        {selectedValue}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </Popover.Trigger>
    <Popover.Content class="p-0 w-48">
      <Command.Root>
        <Command.Group class="h-50 w-auto overflow-y-scroll">
          {#each types as type}
            <Command.Item
              value={type.value}
              onSelect={() => selectType(type.value)}
              class='mr-2'
            >
              {type.label}
              <Check size={12} class={cn(value !== type.value && "text-transparent")} />
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.Root>
    </Popover.Content>
  </Popover.Root>