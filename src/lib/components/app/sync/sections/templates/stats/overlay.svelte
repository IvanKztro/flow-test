<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Users, CheckCircle, Repeat, Shield } from 'lucide-svelte';
    import Menucard from "./Menucard.svelte";
    
    const stats = [
      {
        title: 'Total Users',
        value: 320,
        icon: Users,
        iconColor: 'text-purple-500',
        badge: 'Active users',
        members: [
          {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 1'
          },
          {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 2'
          },
          {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 3'
          }
        ]
      },
      {
        title: 'Active Users',
        value: 239,
        icon: CheckCircle,
        iconColor: 'text-teal-500',
        members: [
          {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 1'
          },
          {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 2'
          },
          {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 3'
          }
        ]
      },
      {
        title: 'Return User Rate',
        value: 79,
        icon: Repeat,
        iconColor: 'text-blue-500',
        members: [
          {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 1'
          },
          {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 2'
          },
          {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 3'
          }
        ]
      },
      {
        title: 'Fake Accounts',
        value: 2,
        icon: Shield,
        iconColor: 'text-red-500',
        members: [
          {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 1'
          },
          {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
            username: 'Member 2'
          },
        ]
      }
    ];
  </script>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
    {#each stats as stat}
      <Card.Root class="relative rounded-xl shadow-sm h-42 w-80">
        <Card.Header class="flex flex-col mb-1">
          <div class="mb-2 flex justify-between items-center">
            <span class="inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow">
              <svelte:component this={stat.icon} class={`flex-shrink-0 size-4 md:size-5 ${stat.iconColor}`} />
            </span>
            <div>
              <Menucard />
            </div>
          </div>
          <h2 class="text-sm text-gray-800">{stat.title}</h2>
        </Card.Header>
        <Card.Content>
          <div class="grid sm:flex sm:justify-between sm:items-center gap-1 sm:gap-3">
            <h3 class="text-lg md:text-2xl font-semibold text-gray-800">{stat.value}</h3>
            <div class="flex items-center -space-x-2">
              {#each stat.members as member}
                <Avatar.Root class='w-10 h-10'>
                  <Avatar.Image src={member.imageUrl} alt={member.username} />
                  <Avatar.Fallback>{member.username.slice(0, 2)}</Avatar.Fallback>
                </Avatar.Root>
              {/each}
            </div>
          </div>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
  