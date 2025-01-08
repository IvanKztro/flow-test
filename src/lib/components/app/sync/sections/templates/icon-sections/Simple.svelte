<script lang="ts">
    import { Tablet, Sliders, BookOpen, MessageSquare } from "lucide-svelte";
    import * as Card from "$lib/components/ui/card";
  
    const cards = [
      {
        icon: Tablet,
        title: "Responsive",
        description: "Responsive, and mobile-first project on the web",
      },
      {
        icon: Sliders,
        title: "Customizable",
        description: "Components are easily customized and extendable",
      },
      {
        icon: BookOpen,
        title: "Documentation",
        description: "Every component and plugin is well documented",
      },
      {
        icon: MessageSquare,
        title: "24/7 Support",
        description: "Contact us 24 hours a day, 7 days a week",
      }
    ];
  </script>
  
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
      {#each cards as { icon: Icon, title, description }}
        <!-- Icon Block -->
        <div>
          <Icon />
          <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
            <div class="bg-gray-400 w-9 h-0.5"></div>
          </div>
          <div class="mt-5">
            <Card.Title class="text-lg font-semibold text-gray-800">{title}</Card.Title>
            <p class="mt-1 text-gray-600">{description}</p>
          </div>
        </div>
        <!-- End Icon Block -->
      {/each}
    </div>
  </div>
  <!-- End Icon Blocks -->