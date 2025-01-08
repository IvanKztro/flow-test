<script lang="ts">
  import { onMount } from 'svelte';
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Download } from 'lucide-svelte';
  import CardMenu from './CardMenu.svelte';

  let chartOptions = {};
  let loaded = false;

  const chartData = {
    series: [
      { name: 'First-time', data: [1800, 5100, 3000, 6800], color: "#4f46e5" },
      { name: 'Returning', data: [2700, 3800, 6000, 4700], color: "#22d3ee" }
    ],
    categories: ['Jan', 'May', 'Sep', 'Dec'],
    legend: [
      { name: "Added to cart", firstTime: "37%", firstTimeChange: "-2%", returning: "12%", returningChange: "+19%" },
      { name: "Reached checkout", firstTime: "489%", firstTimeChange: "+52%", returning: "4%", returningChange: "+0.2%" },
      { name: "Sessions converted", firstTime: "5%", firstTimeChange: "-11%", returning: "34%", returningChange: "-0.1%" }
    ]
  };

  let options = {
    chart: {
      type: 'area',
      height: '230px',
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    series: chartData.series.map(serie => ({
      name: serie.name,
      data: serie.data
    })),
    xaxis: {
      type: 'category',
      tickPlacement: 'on',
      categories: chartData.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        }
      }
    },
    yaxis: {
      labels: {
        align: 'left',
        minWidth: 0,
        maxWidth: 140,
        style: {
          colors: '#9ca3af',
          fontSize: '12px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        },
        formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
      }
    },
    stroke: { curve: 'straight', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.8
      }
    },
    tooltip: {
      x: { format: 'MMMM yyyy' },
      y: {
        formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
      }
    },
    colors: chartData.series.map(serie => serie.color),
    markers: { strokeColors: 'rgb(255, 255, 255)' }
  };

  // @ts-ignore
  let ApexCharts;

  // @ts-ignore
  const chart = (node, options) => {
    if (!loaded) return;

    // @ts-ignore
    let myChart = new ApexCharts(node, options);
    myChart.render();

    return {
      // @ts-ignore
      update(options) {
        myChart.updateOptions(options);
      },
      destroy() {
        myChart.destroy();
      }
    };
  };

  onMount(async () => {
    const module = await import('apexcharts');
    ApexCharts = module.default;
    // @ts-ignore
    window.ApexCharts = ApexCharts;
    loaded = true;
    chartOptions = { ...options };
  });
</script>

<section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
  <div class='w-max-5xl pt-4'>
    <Card.Root class="w-[500px]">
      <Card.Header class="flex justify-between items-center p-5 pb-4">
        <div class="flex items-center justify-between w-full">
          <Card.Title class='text-2xl'>Total Sales</Card.Title>
          <Button variant="outline" class="size-[34px] p-2 ml-auto mr-2">
            <Download />
          </Button>
          <CardMenu />
        </div>
      </Card.Header>
      <Card.Content class="h-full p-5 pt-0 space-y-4">
        <h3 class="text-2xl font-medium">$24,389.55</h3>
        <div class="flex justify-center items-center w-full h-[230px]">
          {#if loaded}
            <div use:chart={chartOptions} class="w-full h-full"></div>
          {:else}
            <div>Loading chart...</div>
          {/if}
        </div>
        <div class="relative after:absolute after:bottom-0 after:inset-x-2.5 after:border-b">
          <Tabs.Root value="first-time">
            <Tabs.List class="grid w-full grid-cols-2">
              <Tabs.Trigger value="first-time">First-time</Tabs.Trigger>
              <Tabs.Trigger value="returning">Returning</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="first-time">
              <ul class="px-2">
                {#each chartData.legend as item}
                  <li class="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0">
                    <div class="flex items-center">
                      <span class="text-sm">{item.name}</span>
                    </div>
                    <div class="flex justify-end items-center gap-x-1.5">
                      <span class="text-sm">{item.firstTime}</span>
                      <span class="text-sm">{item.firstTimeChange}</span>
                    </div>
                  </li>
                {/each}
              </ul>
            </Tabs.Content>
            <Tabs.Content value="returning">
              <ul class="px-2">
                {#each chartData.legend as item}
                  <li class="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0">
                    <div class="flex items-center">
                      <span class="text-sm">{item.name}</span>
                    </div>
                    <div class="flex justify-end items-center gap-x-1.5">
                      <span class="text-sm">{item.returning}</span>
                      <span class="text-sm">{item.returningChange}</span>
                    </div>
                  </li>
                {/each}
              </ul>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </Card.Content>
      <Card.Footer class="text-center border-t justify-center items-center py-2">
        <Button variant="link" class="text-sm">View Full Reports</Button>
      </Card.Footer>
    </Card.Root>
  </div>
</section>