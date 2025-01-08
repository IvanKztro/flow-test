<script lang="ts">
  import { onMount } from 'svelte';
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Download } from 'lucide-svelte';
  import CardMenu from './CardMenu.svelte';

  let chartOptions = {};
  let loaded = false;

  const chartData = {
    series: [70, 18, 12],
    labels: ['Direct', 'Organic search', 'Referral'],
    legend: [
      { name: "Direct", value: "11,932", change: "-417%", color: "bg-indigo-600", changeColor: "text-red-500" },
      { name: "Organic search", value: "8,740", change: "-4.1%", color: "bg-cyan-500", changeColor: "text-red-500" },
      { name: "Referral", value: "5,128", change: "+243%", color: "bg-gray-200", changeColor: "text-teal-500" }
    ]
  };

  let options = {
    chart: {
      height: '100%',
      type: 'pie',
      zoom: { enabled: false }
    },
    series: chartData.series,
    labels: chartData.labels,
    stroke: { width: 3 },
    dataLabels: {
      style: {
        fontSize: '20px',
        fontFamily: 'Inter, ui-sans-serif',
        fontWeight: '400',
        colors: ['#fff', '#fff', '#1f2937']
      },
      dropShadow: { enabled: false },
      formatter: (value) => `${value.toFixed(1)} %`
    },
    plotOptions: {
      pie: {
        dataLabels: { offset: -15 }
      }
    },
    legend: { show: false },
    grid: {
      padding: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    tooltip: { enabled: false },
    states: {
      hover: { filter: { type: 'none' } }
    },
    colors: ['#4f46e5', '#67e8f9', '#e5e7eb'],
    stroke: {
      colors: ['rgb(255, 255, 255)']
    }
  };

  // @ts-ignore
  let ApexCharts;

  const chart = (node, options) => {
    if (!loaded) return;
    let myChart = new ApexCharts(node, options);
    myChart.render();

    return {
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
    window.ApexCharts = ApexCharts;
    loaded = true;
  });
</script>

<section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
  <div class='w-max-5xl pt-4'>
    <Card.Root class="w-[500px]">
      <Card.Header class="flex justify-between items-center p-5 pb-4">
        <div class="flex items-center justify-between w-full">
          <Card.Title class='text-2xl'>Acquisition</Card.Title>
          <Button variant="outline" class="size-[34px] p-2 ml-auto mr-2">
            <Download />
          </Button>
          <CardMenu />
        </div>
      </Card.Header>
      <Card.Content class="h-full p-5 pt-0 space-y-4">
        <div class="h-[297px] flex justify-center w-full">
          {#if loaded}
            <div use:chart={options} class="w-full h-full"></div>
          {:else}
            <div>Loading chart...</div>
          {/if}
        </div>
        <ul>
          <li class="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0">
            <div>
              <h4 class="font-medium">Channels</h4>
            </div>
            <div class="text-end">
              <h4 class="font-medium">Users</h4>
            </div>
          </li>
          {#each chartData.legend as item}
            <li class="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0">
              <div class="flex items-center">
                <span class={`flex-shrink-0 size-2.5 inline-block ${item.color} rounded-sm me-2.5`}></span>
                <span class="text-sm">{item.name}</span>
              </div>
              <div class="flex justify-end items-center gap-x-1.5">
                <span class="text-sm">{item.value}</span>
                <span class={`text-sm ${item.changeColor}`}>{item.change}</span>
              </div>
            </li>
          {/each}
        </ul>
      </Card.Content>
      <Card.Footer class="text-center border-t justify-center items-center py-2">
        <Button variant="link" class="text-sm">View Full Reports</Button>
      </Card.Footer>
    </Card.Root>
  </div>
</section>