<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import { ChevronRight } from "lucide-svelte";
  
    const cards = [
      { title: "Management", positions: "4 job positions" },
      { title: "App Development", positions: "26 job positions" },
      { title: "Arts & Entertainment", positions: "9 job positions" },
      { title: "Accounting", positions: "11 job positions" },
      { title: "UI Designer", positions: "37 job positions" },
      { title: "Apps", positions: "2 job positions" },
      { title: "Content Writer", positions: "10 job positions" },
      { title: "Analytics", positions: "14 job positions" },
    ];
  </script>
  
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 sm:gap-6">
      {#each cards as { title, positions }}
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
          href="#"
        >
          <Card.Root>
            <Card.Content class="p-4 md:p-5">
              <div class="flex justify-between items-center">
                <div>
                  <h3
                    class="group-hover:text-blue-600 font-semibold text-gray-800"
                  >
                    {title}
                  </h3>
                  <p class="text-sm text-gray-500">
                    {positions}
                  </p>
                </div>
                <div class="ps-3">
                  <ChevronRight
                    class="flex-shrink-0 size-5 text-gray-800"
                  />
                </div>
              </div>
            </Card.Content>
          </Card.Root>
        </a>
      {/each}
    </div>
  </div>
  