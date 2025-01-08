<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import SectionTab from "./section-tab.svelte";
</script>

<div>
    <DropdownMenu.Label class=" font-normal">
        <Input placeholder="Type to search section..." />
    </DropdownMenu.Label>
    <DropdownMenu.Separator />
    <Tabs.Root value="section">
        <Tabs.List class="grid w-full grid-cols-2">
            <Tabs.Trigger value="section">Sections</Tabs.Trigger>
            <Tabs.Trigger value="apps">Apps</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="section">
            <SectionTab />
        </Tabs.Content>
        <Tabs.Content value="Apps"></Tabs.Content>
    </Tabs.Root>
</div>
