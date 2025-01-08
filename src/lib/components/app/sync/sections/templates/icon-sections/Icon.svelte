<script lang="ts">
    import { Globe, Briefcase, Home, ArrowRight } from "lucide-svelte";
    import * as Card from "$lib/components/ui/card";
  
    const cards = [
      {
        icon: Globe,
        title: "Build your portfolio",
        description: "The simplest way to keep your portfolio always up-to-date.",
        linkText: "Learn more"
      },
      {
        icon: Briefcase,
        title: "Get freelance work",
        description: "New design projects delivered to your inbox each morning.",
        linkText: "Learn more"
      },
      {
        icon: Home,
        title: "Sell your goods",
        description: "Get your goods in front of millions of potential customers with ease.",
        linkText: "Learn more"
      }
    ];
  </script>
  
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
      {#each cards as { icon: Icon, title, description, linkText }}
        <!-- Card -->
        <a class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all" href="#">
          <Icon />
  
          <div>
            <div>
              <h3 class="block font-bold text-gray-800">{title}</h3>
              <p class="text-gray-600">{description}</p>
            </div>
  
            <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              {linkText}
              <ArrowRight class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" />
            </p>
          </div>
        </a>
        <!-- End Card -->
      {/each}
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Icon Blocks -->