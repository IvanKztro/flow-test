<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Copy, Eye, Plus, Settings } from "lucide-svelte";
    import { Label } from "$lib/components/ui/label";
    import * as Avatar from '$lib/components/ui/avatar/';
    import Input from "$lib/components/ui/input/input.svelte";
    import { Checkbox } from "$lib/components/ui/checkbox";
    import TypesCombobox from './combobox-types.svelte'; // Importa el nuevo componente
	import { Button } from "$lib/components/ui/button";
  
    // Definir los contactos
    const contacts = [
      {
        id: 1,
        name: "James Smith",
        username: "Mjohnson",
        imageUrl: "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
        email: "jamesSmith@email.com",
        type: 'admin'
      },
      {
        id: 2,
        name: "Anna Richards",
        username: "Annrchds",
        imageUrl: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
        email: "annarichards@email.com",
        type: 'can edit'
      },
      {
        id: 3,
        name: "Emily Wilson",
        username: "Emwilson",
        imageUrl: "https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
        email: "emilywilson@email.com",
        type: 'can view'
      },
      {
        id: 4,
        name: "David Smith",
        username: "Davidsm",
        imageUrl: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
        email: "davidsmith@email.com",
        type: 'can remove'
      },
      {
        id: 5,
        name: "Sarah Brown",
        username: "Sbrown",
        imageUrl: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
        email: "sarahbrown@email.com",
        type: 'can view'
      },
      {
        id: 6,
        name: "James Davis",
        username: "Jdavis",
        imageUrl: "https://github.com/shadcn.png",
        email: "jamesdavis@email.com",
        type: 'can edit'
      },
    ];
  </script>
    
  <Card.Root class="max-w-md">
    <Card.Header class='justify-start'>
        <Card.Title class='mb-2'>Invite</Card.Title>
        <div class="flex items-center space-x-2 mt-2">
          <Input placeholder="Add name or email" class="w-48 h-8" />
          <TypesCombobox />
          <Button>
            Send
          </Button>
        </div>
        <div class="flex items-center space-x-2 mt-2">
          <Checkbox />
          <p class='text-sm text-gray-400'>Notify recipients via email</p>
        </div>
      </Card.Header>
    <div class="border-t my-2"></div>
    <Card.Content class="space-y-2 max-h-64 overflow-y-auto">
      <ul class="flex flex-col space-y-1">
        {#each contacts as contact}
          <li class="p-3 border-b first:border-t-0">
            <div class="flex gap-x-3 items-center">
              <Avatar.Root>
                <Avatar.Image src={contact.imageUrl} alt={contact.username} />
                {#if contact.name}
                  <Avatar.Fallback>{contact.name.slice(0, 2)}</Avatar.Fallback>
                {/if}
              </Avatar.Root>
              <div class="flex-grow">
                <p class="text-sm">
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <a class="text-decoration-2 hover:underline font-medium focus:outline-none focus:underline">
                    {contact.name}
                  </a>
                </p>
                <p class="text-sm text-gray-500">
                  {contact.email}
                </p>
              </div>
              <div class="ms-auto">
                <TypesCombobox bind:value={contact.type} /> 
              </div>
            </div>
          </li>
        {/each}
      </ul>
      <small class='mt-2'>Share read-only link</small>
      <div class="flex items-center space-x-2 mt-2">
        <Input class="w-full h-8" value="https://www.figma.com/community/file/1179068859697769656" />
        <Button variant='outline' size='icon'>
          <Copy />
        </Button>
      </div>
    </Card.Content>
  </Card.Root>