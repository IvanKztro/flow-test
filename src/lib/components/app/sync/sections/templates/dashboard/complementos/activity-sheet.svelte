<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
	import { X } from "lucide-svelte";
  
    const activities = [
      {
        id: 1,
        name: "James Collins",
        imageUrl: "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
        action: "Added 2 files to task",
        linkText: "PR-3",
        date: "May 04",
        images: [
          "https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
          "https://images.unsplash.com/photo-1635776063328-153b13e3c245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2532&q=80",
          "https://images.unsplash.com/photo-1635776064096-4e12cce9ead4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2532&q=80"
        ]
      },

    ];
  </script>
  
  <div class="flex justify-between items-center border-b py-3 px-4">
    <h3 class="font-semibold">Activity</h3>
    <Sheet.Close asChild let:builder/>    
  </div>
  <div class="px-5 py-7 h-full overflow-y-auto overflow-hidden">
    {#each activities as activity}
      <div class="relative pb-8 last:pb-0">
        <div class="w-full flex gap-x-5">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img class="flex-shrink-0 h-10 w-10 rounded-full" src={activity.imageUrl} alt="Image Description" />
          <div class="grow">
            <h4 class="text-sm font-semibold">{activity.name}</h4>
            <p class="text-sm ">{activity.action}
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="ms-1">{activity.linkText}</a>
            </p>
            <!-- Media -->
            <div class="mt-2 grid grid-cols-2 gap-x-2">
              {#each activity.images as image}
                <div class="border border-gray-200 rounded-lg p-2">
                  <!-- svelte-ignore a11y-img-redundant-alt -->
                  <img src={image} alt="Activity Image" class="w-full h-12 object-cover rounded-md" />
                </div>
              {/each}
              <div class="border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="text-xs font-medium">+2</a>
              </div>
            </div>
            <p class="mt-2 text-[11px] uppercase">{activity.date}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>