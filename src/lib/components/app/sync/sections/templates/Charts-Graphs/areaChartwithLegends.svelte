<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Download, Calendar } from 'lucide-svelte';
    import DateRangePicker from './dateRangePicker.svelte';
    
    let chartOptions = {};
    let loaded = false;
    
    const chartData = {
      series: [
        { name: 'Chosen period', data: [180, 510, 600, 380, 880, 500, 400, 520, 880, 800, 600, 700] },
        { name: 'Last period', data: [270, 380, 600, 770, 400, 500, 490, 290, 420, 270, 420, 500] }
      ],
      categories: [
        '25 July', '28 July', '31 July', '1 August', '3 August', '6 August', '9 August', 
        '12 August', '15 August', '18 August', '21 August', '25 August'
      ]
    };
    
    let options = {
      chart: {
        height: 300,
        type: 'area',
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: chartData.series,
      dataLabels: { enabled: false },
      xaxis: {
        type: 'category',
        tickPlacement: 'on',
        categories: chartData.categories,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: '#a8a29e',
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
            colors: '#a8a29e',
            fontSize: '12px',
            fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400
          },
          formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
        }
      },
      stroke: { curve: 'smooth', width: 2 },
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
        y: {
          formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
        }
      },
      colors: ['#16a34a', '#f59e0b']
    };
    
    // @ts-ignore
    let ApexCharts;
    
    const chart = (node, options) => {
      if (!loaded) return;
    // @ts-ignore
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
            <DateRangePicker />
            <div class="flex items-center space-x-4">
              <Button variant="outline" class="size-[34px] p-2">
                <Download />
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
          <div class="flex justify-center items-center w-full min-h-[315px]">
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