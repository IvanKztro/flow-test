<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
import { Database, Users, BookOpen } from "lucide-svelte";
</script>

<div class="grid md:grid-cols-1 gap-2 lg:gap-4">

  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="group p-2 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
    <!-- SVG Icon for Data -->
    <Database size={20} />
    <div class="grow">
      <p class="text-[15px] font-medium  ">
        Data
      </p>
      <p class="text-sm text-gray-500 ">
        How you get the most accurate and up-to-date data
      </p>
    </div>
  </a>



  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="group p-2 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
    <Users size={20} />
    <div class="grow">
      <p class="text-[15px] font-medium  ">
        Team <Badge class='rounded-xl'>We're hiring</Badge>
      </p>
      <p class=" text-sm text-gray-500 ">
        Meet the people building products to help your business grow
      </p>
    </div>
  </a>
  

  
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="group p-2 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
    
    <BookOpen size={20} />
    <div class="grow">
      <p class="text-[15px] font-medium  ">
        Blog
      </p>
      <p class="text-sm text-gray-500 ">
        The latest news, feature releases, and how to grow with data
      </p>
    </div>
  </a>
  
</div>
