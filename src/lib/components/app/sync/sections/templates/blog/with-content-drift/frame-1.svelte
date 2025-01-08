<script>
    import * as Menubar from "$lib/components/ui/menubar";
    import Button from "$lib/components/ui/button/button.svelte";
</script>

  
  <nav class="px-4 py-2 mx-auto max-w-6xl shadow-lg flex justify-between items-center">
    <!-- SVG de muestra -->
    <span class="p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18v18H3V3z M9 8l4 4 4-4"/>
        </svg>
    </span>
  

    <Menubar.Root class='bg-transparent'>
      <Menubar.Menu>
        <Menubar.Trigger class='text-xl'>Home</Menubar.Trigger>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class='text-xl'>Features</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Submenu 1</Menubar.Item>
          <Menubar.Item>Submenu 2</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class='text-xl'>Examples</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.Item>Example 1</Menubar.Item>
            <Menubar.Item>Example 2</Menubar.Item>
          </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class='text-xl'>Pricing</Menubar.Trigger>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class='text-xl'>Blog</Menubar.Trigger>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class='text-xl'>Resources</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Submenu 1</Menubar.Item>
          <Menubar.Item>Submenu 2</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>

    <div class="space-x-4">
      <Button variant='default' size='lg' class="font-semibold py-2 px-4 rounded">
        GET A DEMO
      </Button>
      <Button variant='outline' size='lg' class="bg-transparent font-semibold py-2 px-4 rounded">
        Sign In
      </Button>
    </div>
  </nav>
  
  
  