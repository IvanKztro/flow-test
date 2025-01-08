<script lang="ts">
  import { BookOpen, Blocks, SquareTerminal, CircleHelp, AtSign, Users } from "lucide-svelte";
</script>

<div class="grid md:grid-cols-2 gap-2 lg:gap-4">
  <div class="flex flex-col">
    <div class="space-y-3">
      <span class="mb-2 ps-3 text-xs font-semibold uppercase ">
        About us
      </span>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <BookOpen size={17} />
        <div class="grow">
          <p class="text-sm ">Support Docs</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <Blocks size={17} />
        <div class="grow">
          <p class="text-sm ">Integrations</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <SquareTerminal size={17} />
        <div class="grow">
          <p class="text-sm ">Guides</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <SquareTerminal size={17} />
        <div class="grow">
          <p class="text-sm ">API Reference</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <SquareTerminal size={17} />
        <div class="grow">
          <p class="text-sm ">API Status</p>
        </div>
      </a>
    </div>
  </div>

  <div class="flex flex-col">
    <div class="space-y-3">
      <span class="mb-2 ps-3 text-xs font-semibold uppercase ">
        Support
      </span>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <CircleHelp size={17} />
        <div class="grow">
          <p class="text-sm ">Help Center</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <AtSign size={17} />
        <div class="grow">
          <p class="text-sm ">Developer Hub</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <Users size={17} />
        <div class="grow">
          <p class="text-sm ">Community Forum</p>
        </div>
      </a>
      <span class="mb-2 ps-3 text-xs font-semibold uppercase ">
        Partners
      </span>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <SquareTerminal size={17} />
        <div class="grow">
          <p class="text-sm ">Become a Partner</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="group py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none w-full">
        <!-- Icon SVG goes here -->
        <SquareTerminal size={17} />
        <div class="grow">
          <p class="text-sm ">Build on Preline</p>
        </div>
      </a>
    </div>
  </div>
</div>
  