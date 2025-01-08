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

    const {section} = $props()
    const getIconPosition = () => section.settings.iconPosition == 'top'? 'flex': 'grid'
    const getIconDescAligmnet = () => section.settings.itemDesc == 'center'? 'text-center'
    : section.settings.itemDesc == 'left'
    ? 'text-start'
    :'text-end'
  
  </script>
  
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
      {#each cards as { icon: Icon, title, description }}
        <!-- Icon Block -->
        <div class="text-center {getIconPosition()}">
          <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
            <Icon class="flex-shrink-0 size-5 text-gray-600" />
          </div>
          <div class="mt-3">
            <Card.Title class="text-lg font-semibold text-gray-800">{title}</Card.Title>
            <p class="mt-1 text-gray-600 {getIconDescAligmnet()} ">{description}</p>
          </div>
        </div>
        <!-- End Icon Block -->
      {/each}
    </div>
  </div>
  <!-- End Icon Blocks -->
  
