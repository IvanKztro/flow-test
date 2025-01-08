<script lang='ts'>
  import { onMount } from 'svelte';
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Download } from 'lucide-svelte';
  import CardMenu from './cardMenu.svelte';

  let chartOptions = {};
  let loaded = false;

  const chartData = {
    series: [47, 23, 30],
    labels: ['Tailwind CSS', 'Preline UI', 'Others'],
    colors: ['#4f46e5', '#67e8f9', '#e5e7eb']
  };

  let options = {
    chart: {
      type: 'donut',
      height: 230,
      width: 230,
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '76%'
        }
      }
    },
    series: chartData.series,
    labels: chartData.labels,
    legend: {
      show: false
    },
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const label = w.config.labels[seriesIndex];
        const value = w.config.series[seriesIndex];
        return `<div class="custom-tooltip">${label}: ${value}</div>`;
      }
    },
    colors: chartData.colors,
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
          <Card.Title class='text-2xl'>Market Share</Card.Title>
          <Button variant="outline" class="size-[34px] p-2 ml-auto mr-2">
            <Download />
          </Button>
          <CardMenu />
        </div>            
      </Card.Header>
      <Card.Content class="h-full p-5 pt-0 space-y-4">
        <div class="h-full flex flex-col justify-between items-center space-y-4">
          <div class="flex justify-center items-center w-full h-full">
            {#if loaded}
              <div use:chart={options} class="max-w-full max-h-full"></div>
            {:else}
              <div>Loading chart...</div>
            {/if}
          </div>
          <div class="flex justify-center items-center gap-x-4 mb-6">
            <div class="inline-flex items-center">
              <span class="flex-shrink-0 w-2.5 h-2.5 bg-indigo-600 rounded-sm mr-2.5"></span>
              <span class="text-sm">Tailwind CSS</span>
            </div>
            <div class="inline-flex items-center">
              <span class="flex-shrink-0 w-2.5 h-2.5 bg-cyan-500 rounded-sm mr-2.5"></span>
              <span class="text-sm">Preline UI</span>
            </div>
            <div class="inline-flex items-center">
              <span class="flex-shrink-0 w-2.5 h-2.5 bg-gray-200 rounded-sm mr-2.5"></span>
              <span class="text-sm">Others</span>
            </div>
          </div>
        </div>
      </Card.Content>
      <Card.Footer class="text-center border-t justify-center items-center py-2">
        <Button variant="link" class="text-sm">View Full Reports</Button>
      </Card.Footer>
    </Card.Root>
  </div>
</section>