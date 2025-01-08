<script lang="ts">
    import { Monitor, Box, Triangle, Trophy , Users, Building, Package, CreditCard } from "lucide-svelte";
  
    const cards = [
      {
        icon: Monitor,
        title: "Creative minds",
        description: "We choose our teams carefully. Our people are the secret to great work.",
      },
      {
        icon: Box,
        title: "Effortless updates",
        description: "Benefit from automatic updates to all boards any time you need to make a change to your website.",
      },
      {
        icon: Triangle,
        title: "Strong empathy",
        description: "We've user tested our own process by shipping over 1k products for clients.",
      },
      {
        icon: Trophy,
        title: "Conquer the best",
        description: "We stay lean and help your product do one thing well.",
      },
      {
        icon: Users,
        title: "Designing for people",
        description: "We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.",
      },
      {
        icon: Building,
        title: "Simple and affordable",
        description: "From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.",
      },
    ];
  </script>
  
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-4xl mx-auto">
      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
        <div class="space-y-6 lg:space-y-10">
          {#each cards.slice(0, 3) as { icon: Icon, title, description }}
            <!-- Icon Block -->
            <div class="flex">
              <Icon class="flex-shrink-0 mt-2 size-8 text-gray-800" />
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  {title}
                </h3>
                <p class="mt-1 text-gray-600">
                  {description}
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          {/each}
        </div>
        <!-- End Col -->
  
        <div class="space-y-6 lg:space-y-10">
          {#each cards.slice(3) as { icon: Icon, title, description }}
            <!-- Icon Block -->
            <div class="flex">
              <Icon class="flex-shrink-0 mt-2 size-8 text-gray-800" />
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  {title}
                </h3>
                <p class="mt-1 text-gray-600">
                  {description}
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          {/each}
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End Icon Blocks -->
  