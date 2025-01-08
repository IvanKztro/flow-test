<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import { Users, CheckCircle, Repeat, Shield, Globe, Link, Warehouse, BadgePercent, TrendingUp, TrendingDown } from 'lucide-svelte';
    import Badge from "$lib/components/ui/badge/badge.svelte";
  


    const stats = [
      {
        title: 'In-store sales',
        value: '$7,820.75',
        icon: 'building',
        orders: '5k orders',
        badgeValue: '4.3%',
        badgeColor: 'text-green-500',
        badgeIcon: 'trending-up'
      },
      {
        title: 'Website sales',
        value: '$985,937.45',
        icon: 'globe',
        orders: '21k orders',
        badgeValue: '12.5%',
        badgeColor: 'text-green-500',
        badgeIcon: 'trending-up'
      },
      {
        title: 'Discount',
        value: '$15,503.00',
        icon: 'discount',
        orders: '6k orders',
      },
      {
        title: 'Affiliate',
        value: '$3,982.53',
        icon: 'link',
        orders: '2.4 orders',
        badgeValue: '4.4%',
        badgeColor: 'text-red-500',
        badgeIcon: 'trending-down'
      }
    ];
  </script>


      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {#each stats as stat}
            <Card.Root class="relative rounded-xl shadow-sm h-44 w-80">
                <Card.Header class="flex flex-col mb-1">
                    <div class="mb-2 flex justify-between items-center">
                            {stat.title}
                            
                      <div>
                        {#if stat.icon === 'building'}
                        <Warehouse />
                        {:else if stat.icon === 'globe'}
                        <Globe />
                        {:else if stat.icon === 'discount'}
                        <BadgePercent />
                        {:else if stat.icon === 'link'}
                        <Link />
                        {/if}
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Description class="text-lg md:text-3xl font-semibold flex justify-center mb-4 ">
                    {stat.value}
                    </Card.Description>
                <Card.Content class="mt-1 flex items-center gap-x-2">
                <span class="text-sm leading-5">
                    {stat.orders}
                </span>
                {#if stat.badgeValue}
                    <Badge class={`inline-flex items-center gap-x-1 text-xs font-medium rounded-full`}>
                    {#if stat.badgeIcon === 'trending-up'}
                    <TrendingUp size={15} />
                    {:else if stat.badgeIcon === 'trending-down'}
                    <TrendingDown  size={15}/>
                    {/if}
                    {stat.badgeValue}
                    </Badge>
                {/if}
                </Card.Content>
            </Card.Root>
            {/each}
        </div>
