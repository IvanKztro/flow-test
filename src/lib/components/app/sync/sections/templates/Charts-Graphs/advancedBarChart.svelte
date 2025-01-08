<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Plus, TrendingUp } from 'lucide-svelte';
    import DateRangePicker from './dateRangePicker.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
  
    let chartOptions = {};
    let loaded = false;
  
    const chartData = {
      series: [
        { name: 'Income', data: [17000, 76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000, 94000, 67000, 66000] },
        { name: 'Expenses', data: [23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 34000, 78000] }
      ],
      categories: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ]
    };
  
    let options = {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: chartData.series,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20px',
          borderRadius: 0,
        }
      },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 8,
        colors: ['transparent']
      },
      xaxis: {
        categories: chartData.categories,
        axisBorder: { show: false },
        axisTicks: { show: false },
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
      colors: ['#4f46e5', '#c7d2fe'],
      tooltip: {
        custom: function (props) {
          const { categories } = props.ctx.opts.xaxis;
          const { dataPointIndex } = props;
          return `
            <div class="p-2">
              <span>${categories[dataPointIndex]}</span>
              <div>
                <span>${props.series[0][dataPointIndex]}</span>
                <span>${props.series[1][dataPointIndex]}</span>
              </div>
            </div>`;
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
  </script>
  
  <section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
    <div class='w-full pt-4'>
      <Card.Root class="w-full">
        <Card.Header class="flex justify-between items-center p-5 pb-4 border-b border-stone-200">
          <div class="flex items-center justify-between w-full">
            <DateRangePicker />
            <Card.Title class='text-2xl'>Preline</Card.Title>
            <div class="flex items-center justify-end space-x-4">
              <Button variant="outline" class="w-auto p-2">
                <Plus size={15}/> Add Activity
              </Button>
            </div>
          </div>
          
        </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
          <div class="grid sm:flex sm:justify-between sm:items-center gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-2xl font-semibold mt-4">
                $75,431.14 USD
              </span>
              <span class="inline-flex items-center gap-x-1  rounded-full">
                <Badge>
                  <TrendingUp size={15} class='mr-2'/>25.3%</Badge>
              </span>
            </div>
            <div class="flex sm:justify-end items-center gap-x-4">
              <div class="inline-flex items-center">
                <span class="size-2.5 inline-block bg-indigo-500 rounded-sm me-2"></span>
                <span class="text-[13px]">
                  Income
                </span>
              </div>
              <div class="inline-flex items-center">
                <span class="size-2.5 inline-block bg-indigo-200 rounded-sm me-2 dark:bg-indigo-300"></span>
                <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                  Expenses
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
  