<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
	import { Check, Eye, Plus, Settings } from "lucide-svelte";
	import { Label } from "$lib/components/ui/label";
	import { Button } from "$lib/components/ui/button";
    import * as Avatar from '$lib/components/ui/avatar/';

    const notifications = [
  {
    id: 1,
    name: "Anna Richards",
    username: "Annrchds",
    imageUrl: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
    notification: "You have a new message from Anna.",
    date: "2023-06-25 14:32"
  },
  {
    id: 2,
    name: "Michael Johnson",
    username: "Mjohnson",
    imageUrl: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
    notification: "Michael commented on your post.",
    date: "2023-06-24 09:21"
  },
  {
    id: 3,
    name: "Emily Wilson",
    username: "Emwilson",
    imageUrl: "https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
    notification: "Emily liked your photo.",
    date: "2023-06-23 17:45"
  },
  {
    id: 4,
    name: "David Smith",
    username: "Davidsm",
    imageUrl: "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    notification: "David started following you.",
    date: "2023-06-22 12:10"
  },
  {
    id: 5,
    name: "Sarah Brown",
    username: "Sbrown",
    imageUrl: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
    notification: "Sarah shared your post.",
    date: "2023-06-21 08:15"
  },
  {
    id: 6,
    name: "James Davis",
    username: "Jdavis",
    imageUrl: "https://github.com/shadcn.png",
    notification: "James mentioned you in a comment.",
    date: "2023-06-20 19:30"
  },
  
];
  </script>
  
  <Tabs.Root value="all" class="w-full">
    <Tabs.List class="grid w-full grid-cols-2">
      <Tabs.Trigger value="all">All</Tabs.Trigger>
      <Tabs.Trigger value="archive">Archived</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="all">
      <Card.Root>
        <Card.Header class='items-center'>
          <Card.Title>All Notifications</Card.Title>
        </Card.Header>
        <Card.Content class="space-y-2 max-h-64 overflow-y-auto">
          <ul class="flex flex-col space-y-1">
            {#each notifications as notification}
              <li class="p-3 border-b first:border-t-0">
                <div class="flex gap-x-3 items-center">
                  <Avatar.Root>
                    <Avatar.Image src={notification.imageUrl} alt={notification.username} />
                    {#if notification.name}
                      <Avatar.Fallback>{notification.name.slice(0, 2)}</Avatar.Fallback>
                    {/if}
                  </Avatar.Root>
                  <div class="flex-grow">
                    <p class="text-sm">
                      <!-- svelte-ignore a11y-invalid-attribute -->
                      <a class="text-decoration-2 hover:underline font-medium focus:outline-none focus:underline" href="#">
                        {notification.name}
                      </a>
                    </p>
                    <p class="text-sm text-gray-500">
                      {notification.notification}
                    </p>
                    <p class="text-xs text-gray-400">
                      {notification.date}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <Button variant="outline" size='icon' class="py-1.5 px-1.5 inline-flex items-center gap-x-2 text-xs font-medium">
                      <Eye class="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
          <Button variant='link' class="flex items-center justify-center">
            <Check size=15 class='mr-2' />
            Mark as Read
            </Button>
        </Card.Content>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="archive">
      <Card.Root>
        <Card.Header class='items-center'>
          <Card.Title>Archived Notifications</Card.Title>
        </Card.Header>
        <Card.Content class="py-1">
            <div class="sm:col-span-8 xl:col-span-6 2xl:col-span-4">
              <svg class="w-48 mx-auto mb-4" width="178" height="90" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="27" y="50.5" width="124" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                  <rect x="27" y="50.5" width="124" height="39" rx="7.5" stroke="currentColor" class="stroke-gray-50 dark:stroke-neutral-700/10" />
                  <rect x="34.5" y="58" width="24" height="24" rx="4" fill="currentColor" class="fill-gray-50 dark:fill-neutral-700/30" />
                  <rect x="66.5" y="61" width="60" height="6" rx="3" fill="currentColor" class="fill-gray-50 dark:fill-neutral-700/30" />
                  <rect x="66.5" y="73" width="77" height="6" rx="3" fill="currentColor" class="fill-gray-50 dark:fill-neutral-700/30" />
                  <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                  <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" stroke="currentColor" class="stroke-gray-100 dark:stroke-neutral-700/30" />
                  <rect x="27" y="36" width="24" height="24" rx="4" fill="currentColor" class="fill-gray-100 dark:fill-neutral-700/70" />
                  <rect x="59" y="39" width="60" height="6" rx="3" fill="currentColor" class="fill-gray-100 dark:fill-neutral-700/70" />
                  <rect x="59" y="51" width="92" height="6" rx="3" fill="currentColor" class="fill-gray-100 dark:fill-neutral-700/70" />
                  <g filter="url(#filter13)">
                    <rect x="12" y="6" width="154" height="40" rx="8" fill="currentColor" class="fill-white dark:fill-neutral-800" shape-rendering="crispEdges" />
                    <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" stroke="currentColor" class="stroke-gray-100 dark:stroke-neutral-700/60" shape-rendering="crispEdges" />
                    <rect x="20" y="14" width="24" height="24" rx="4" fill="currentColor" class="fill-gray-200 dark:fill-neutral-700 " />
                    <rect x="52" y="17" width="60" height="6" rx="3" fill="currentColor" class="fill-gray-200 dark:fill-neutral-700" />
                    <rect x="52" y="29" width="106" height="6" rx="3" fill="currentColor" class="fill-gray-200 dark:fill-neutral-700" />
                  </g>
                  <defs>
                    <filter id="filter13" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="6" />
                      <feGaussianBlur stdDeviation="6" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <div class="flex flex-col items-center mt-4">
                  <Label class='text-center mb-4'>No Archived Notifications</Label>
                  <p class='py-2'>We'll notify you about important updates and any time you're mentioned on Preline.</p>
                  <Button class="flex items-center justify-center mb-3 mt-3">
                      <Settings size=15 class='mr-2' />
                      Notification Settings
                  </Button>
              </div>
          </div>
          </Card.Content>
      </Card.Root>
    </Tabs.Content>
  </Tabs.Root>