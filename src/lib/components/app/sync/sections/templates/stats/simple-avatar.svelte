<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Info } from 'lucide-svelte';

  let memberGroups = [
    {
      title: "Admin",
      count: 1,
      avatars: ["https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"],
      description: "Admin"
    },
    {
      title: "Members",
      count: 5,
      avatars: ["https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80", "https://github.com/brian.png", "https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80", "https://github.com/dhobbs.png"],
      description: "Members"
    },
    {
      title: "Limited access members",
      count: 2,
      avatars: ["https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80","https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"],
      description: "Limited access"
    },
    {
      title: "Pending invites",
      count: 0,
      avatars: [],
      description: "Pending invites"
    }
  ];
</script>


  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
      {#each memberGroups as group}
      <Card.Root class="relative rounded-xl shadow-sm h-32 w-80">
          <Card.Header class="flex flex-col">
            <div class="flex justify-between items-center text-5xl">
              {group.count}
              <div class="flex items-center -space-x-2 mr-4">
                {#each group.avatars as avatar, i}
                  <Avatar.Root class="w-10 h-10 rounded-full shadow-md">
                    <Avatar.Image src={avatar} alt={`Avatar ${i + 1}`} />
                    <Avatar.Fallback>NN</Avatar.Fallback>
                  </Avatar.Root>
                {/each}
              </div>
            </div>
          </Card.Header>
          <div class='flex justify-between items-center'>
            <div class="flex items-center ml-4">
              <Card.Title >
                {group.title}
              </Card.Title>
          
              {#if group.title === 'Members' || group.title === 'Limited access members'}
                <Tooltip.Root>
                  <Tooltip.Trigger >
                    <span class="ml-1 flex justify-center items-center cursor-pointer">
                      <Info class="w-4 h-4" />
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Content class="z-20 max-w-48 text-center py-1.5 px-2.5 rounded-lg">
                    <p>Limited Access Member can only access the projects, tasks and messages explicitly shared with them</p>
                  </Tooltip.Content>
                </Tooltip.Root>
              {/if}
            </div>
          </div>
              
        </Card.Root>
      {/each}
    </div>
