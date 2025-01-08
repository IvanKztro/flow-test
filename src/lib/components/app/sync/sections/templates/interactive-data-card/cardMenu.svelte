<script lang="ts">
    import { EllipsisVertical, Workflow, Maximize, Share2, MessageSquareDiff } from "lucide-svelte/icons";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  </script>
  
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button builders={[builder]} variant="secondary" size='icon'><EllipsisVertical /></Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56 shadow-lg rounded-md py-1">
      <DropdownMenu.Item>
        <Share2 size=15 class="mr-2" />
        <span>Share Reports</span>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Maximize size=15 class="mr-2" />
        <span>View in Fullscreen</span>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Workflow size=15 class="mr-2" />
        <span>Connect other apps</span>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <div class='border-t w-full inline-flex'>
        <MessageSquareDiff size=15  class="mr-2 mt-3" />
        <span class='mt-3'>Submit FeedBack</span>
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  