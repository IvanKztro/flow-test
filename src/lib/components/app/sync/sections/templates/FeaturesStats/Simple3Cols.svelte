<script lang="ts">
    import * as Card from "$lib/components/ui/card";
  
    const stats = [
      {
        title: "Accuracy rate",
        value: "99.95%",
        description: "in fulfilling orders"
      },
      {
        title: "Startup businesses",
        value: "2,000+",
        description: "partner with Preline"
      },
      {
        title: "Happy customer",
        value: "85%",
        description: "this year alone"
      }
    ];
  </script>
  
  <!-- Features Section -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
      {#each stats as stat}
        <Card.Root>
          <Card.Header>
            <Card.Title>{stat.title}</Card.Title>
          </Card.Header>
          <Card.Content>
            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold">{stat.value}</p>
            <Card.Description>{stat.description}</Card.Description>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features Section -->