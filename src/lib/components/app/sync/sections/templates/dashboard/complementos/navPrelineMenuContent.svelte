<script lang="ts">
    import { BookOpen, Blocks, SquareTerminal, CircleHelp, AtSign, Users } from "lucide-svelte";
  </script>
  
  <div class="grid md:grid-cols-2 gap-2 lg:gap-4">
    <div class="flex flex-col">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group p-3 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <BookOpen size={20}  />
        <div class="grow">
          <p class="text-[15px] font-medium w-full">Support Docs</p>
          <p class="mt-1 text-sm w-full">Explore advice and explanations for all of Preline's features.</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group p-3 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <Blocks size={20}  />
        <div class="grow">
          <p class="text-[15px] font-medium w-full">Integrations</p>
          <p class="mt-1 text-sm w-full">Discover the huge range of tools that Preline integrates with.</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group p-3 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <SquareTerminal size={20}  />
        <div class="grow">
          <p class="text-[15px] font-medium w-full">API Reference</p>
          <p class="mt-1 text-sm w-full">Build custom integrations with our first-class API.</p>
        </div>
      </a>
    </div>
    <div class="flex flex-col">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group p-3 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <CircleHelp size={20}  />
        <div class="grow">
          <p class="text-[15px] font-medium w-full">Help Center</p>
          <p class="mt-1 text-sm w-full">Learn how to install, set up, and use Preline.</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group p-3 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <AtSign size={20}  />
        <div class="grow">
          <p class="text-[15px] font-medium w-full">Developer Hub</p>
          <p class="mt-1 text-sm w-full">Learn how to integrate or build on top of Preline.</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group p-3 flex gap-x-3.5 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <Users size={20}  />
        <div class="grow">
          <p class="text-[15px] font-medium w-full">Community Forum</p>
          <p class="mt-1 text-sm w-full">Learn, share, and connect with other Preline users.</p>
        </div>
      </a>
    </div>
  </div>
  