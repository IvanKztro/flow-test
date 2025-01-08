<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Download, Plus, TrendingUp } from 'lucide-svelte';
    import CardMenu from '../interactive-data-card/CardMenu.svelte';
    import DateRangePicker from './dateRangePicker.svelte';
  
    let chartOptions = {};
    let loaded = false;
  
    const chartData = {
      series: [
        { name: 'This month', data: [310, 420, 360, 420, 390, 460, 380] },
        { name: 'Last month', data: [210, 330, 280, 340, 310, 380, 310] }
      ],
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };
  
    let options = {
      chart: {
        type: 'line',
        height: 400,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: chartData.series,
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 2 },
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
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#9ca3af',
            fontSize: '12px',
            fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400
          },
          formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
        }
      },
      colors: ['#4ade80', '#9ca3af'],
      tooltip: {
        x: { format: 'dd MMM yyyy' },
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
  </script>
  
  <section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
    <div class='w-full pt-4'>
      <Card.Root class="w-full">
        <Card.Header class="flex justify-between items-center p-5 pb-4 border-b border-stone-200">
          <div class="flex items-center justify-between w-full">
            
            <DateRangePicker />
            <Card.Title class='text-2xl'>Total Sales</Card.Title>
            <div class="flex items-center justify-end space-x-4">
              <Button variant="outline" class="w-auto p-2">
                <Plus size={15}/> Add Activity
              </Button>
              
              <CardMenu />
            </div>
          </div>
          
        </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
          <div class="grid md:grid-cols-2 items-center gap-y-1 md:gap-y-0 md:gap-x-4">
            <div>
              <h4 class="text-lg">
                $1,597,820.75
                <span class="inline-flex items-center gap-x-1 text-sm">
                  <TrendingUp size={15}/>
                  35.8%
                </span>
              </h4>
            </div>
            <div class="md:text-end">
              <p class="text-sm">
                1,347,935 orders
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center w-full min-h-[265px]">
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