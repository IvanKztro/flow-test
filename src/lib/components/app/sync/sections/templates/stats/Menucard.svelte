<script lang="ts">
    import { EllipsisVertical, Share2, EyeOff } from "lucide-svelte/icons";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  </script>
  
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button builders={[builder]} variant="secondary" size='icon'><EllipsisVertical /></Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56 shadow-lg rounded-md py-1">
      <DropdownMenu.Item>
        <div class='border-t w-full inline-flex'>
        <Share2 size=15  class="mr-2 mt-3" />
        <span class='mt-3'>Share Stats</span>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <div class='border-t w-full inline-flex'>
        <EyeOff size=15  class="mr-2 mt-3" />
        <span class='mt-3'>Hide Stats</span>
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  