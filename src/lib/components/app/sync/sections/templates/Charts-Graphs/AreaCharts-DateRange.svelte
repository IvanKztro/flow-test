<script lang='ts'>
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Download, TrendingDown } from 'lucide-svelte';
    import CardMenu from '../interactive-data-card/CardMenu.svelte';
    import Badge from '$lib/components/ui/badge/badge.svelte';
	import ComboboxSort from './combobox-sort.svelte';
	import DateRangePicker from './dateRangePicker.svelte';
  
    let chartOptions = {};
    let loaded = false;
  
    const chartData = {
      series: [
        { name: 'This month', data: [2700, 3800, 6000, 7700, 4000, 5000, 4900, 2900, 4200, 2700, 4200, 5000, 6200, 5500, 6100, 6500, 7200, 7000, 6700, 6300, 5900, 5600, 5300, 5100, 4800, 4600, 4300, 4100, 3900, 3700] },
        { name: 'Last month', data: [1800, 5100, 6000, 3800, 8800, 5000, 4000, 5200, 8800, 8000, 6000, 7000, 7800, 7500, 7100, 6900, 6700, 6500, 6300, 6100, 5900, 5700, 5500, 5300, 5100, 4900, 4700, 4500, 4300, 4100] }
      ],
      categories: [
        '1 June 2023', '2 June 2023', '3 June 2023', '4 June 2023', '5 June 2023', '6 June 2023', '7 June 2023', 
        '8 June 2023', '9 June 2023', '10 June 2023', '11 June 2023', '12 June 2023', '13 June 2023', '14 June 2023', 
        '15 June 2023', '16 June 2023', '17 June 2023', '18 June 2023', '19 June 2023', '20 June 2023', '21 June 2023', 
        '22 June 2023', '23 June 2023', '24 June 2023', '25 June 2023', '26 June 2023', '27 June 2023', '28 June 2023', 
        '29 June 2023', '30 June 2023'
      ]
    };
  
    let options = {
      chart: {
        height: 400,
        type: 'area',
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: chartData.series,
      dataLabels: {
        enabled: false
      },
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
          },
          formatter: (title) => {
            let t = title;
            if (t) {
              const newT = t.split(' ');
              t = `${newT[0]} ${newT[1].slice(0, 3)}`;
            }
            return t;
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
        x: { format: 'dd MMM yyyy' },
        y: {
          formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
        }
      },
      colors: ['#2563eb', '#9333ea']
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
  
  <section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
    <div class='w-full pt-4'>
      <Card.Root class="w-full">
        <Card.Header class="flex justify-between items-center p-5 pb-4">
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center space-x-4">
                <ComboboxSort />
              </div>
              <div class="flex items-center space-x-4">
                <DateRangePicker />
                <Button variant="outline" class="size-[34px] p-2">
                  <Download />
                </Button>
                <CardMenu />
              </div>
            </div>
            <Card.Title class='text-2xl'>Total Sales</Card.Title>
          </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
            <h3 class="text-2xl font-medium flex items-center">
                $62,820.59
                <TrendingDown size={15} class="text-red-500 ml-2"/>
              </h3>
          <p class="text-sm text-red-500">
            0.2% less than the previous 30 days.
          </p>
          <div class="flex justify-center items-center w-full min-h-[415px]">
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