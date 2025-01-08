<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { TrendingUp } from 'lucide-svelte';
  
    let chartOptions = {};
    let loaded = false;
    let currentSeries = 'thisWeek';
  
    const series = {
      thisWeek: [
        { name: 'New', data: [23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 34000, 78000] },
        { name: 'Overdue', data: [17000, 76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000, 94000, 67000, 66000] }
      ],
      lastWeek: [
        { name: 'New', data: [61000, 58000, 63000, 60000, 66000, 34000, 78000, 23000, 44000, 55000, 57000, 56000] },
        { name: 'Overdue', data: [105000, 91000, 114000, 94000, 67000, 66000, 17000, 76000, 85000, 101000, 98000, 87000] }
      ]
    };
  
    let options = {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: series[currentSeries],
      colors: ['#8b5cf6', '#d1d5db'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '16px',
          borderRadius: 0
        }
      },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 8,
        colors: ['transparent']
      },
      xaxis: {
        categories: [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ],
        labels: {
          style: {
            colors: '#9ca3af',
            fontSize: '13px',
            fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400
          },
          offsetX: -2,
          formatter: (title) => title.slice(0, 3)
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#9ca3af',
            fontSize: '13px',
            fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400
          },
          formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
        }
      },
      tooltip: {
        y: {
          formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
        }
      }
    };
  
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
      chartOptions = { ...options };
    });
  
    function updateSeries(value?: string) {
      currentSeries = value || 'thisWeek';
      chartOptions.series = series[currentSeries];
    }
  </script>
  
  <section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
    <div class='w-full pt-4'>
      <Card.Root class="w-full">
        <Card.Header class="flex justify-between items-center p-5 pb-4 border-b border-stone-200">
          <div class="flex items-center justify-between w-full">
            <h2 class="font-semibold">
              Monthly expenses
            </h2>
            <div class="flex justify-center">
              <Tabs.Root value="thisWeek" onValueChange={updateSeries}>
                <Tabs.List class="flex space-x-2">
                  <Tabs.Trigger value="thisWeek" class="py-2 px-2.5 text-xs rounded-md cursor-pointer">
                    This week
                  </Tabs.Trigger>
                  <Tabs.Trigger value="lastWeek" class="py-2 px-2.5 text-xs rounded-md cursor-pointer">
                    Last week
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
            </div>
          </div>
        </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
          <div class="mb-6 flex flex-wrap justify-between items-center gap-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-2xl font-semibold mt-4">
                35%
              </span>
              <Badge>
                <TrendingUp size={15} class='mr-2'/>25.3%</Badge>
            </div>
            <div class="flex flex-wrap justify-end items-center gap-4">
              <div class="inline-flex items-center">
                <span class="size-2.5 inline-block bg-violet-500 rounded-sm me-2"></span>
                <span class="text-[13px] ">
                  New
                </span>
              </div>
              <div class="inline-flex items-center">
                <span class="size-2.5 inline-block bg-gray-300 rounded-sm me-2"></span>
                <span class="text-[13px] ">
                  Overdue
                </span>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center w-full min-h-[365px] -mx-2">
            {#if loaded}
              <div use:chart={chartOptions} class="w-full h-full"></div>
            {:else}
              <div>Loading chart...</div>
            {/if}
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </section>
  