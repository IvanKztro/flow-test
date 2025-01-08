<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Download } from 'lucide-svelte';
  
    let chartOptions = {};
    let loaded = false;
  
    const chartData = {
      series: [
        {
          name: 'Referrals',
          data: [200, 20, 140, 50, 380, 300, 400, 450, 450, 700, 670, 670]
        }
      ],
      categories: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'
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
          formatter: (title) => title ? title.slice(0, 3) : title
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
      tooltip: {
        y: {
          formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
        }
      }
    };
  
    // @ts-ignore
    let ApexCharts;
  
    // @ts-ignore
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
        <Card.Header class="flex justify-between items-center p-5 pb-4">
          <Card.Title class='text-2xl'>All time referrals</Card.Title>
          <div class="flex items-center ml-auto space-x-2">
            <Button variant="link" class="text-sm hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500">
              Full reports
            </Button>
            <Button variant="outline" class="size-[34px] p-2">
              <Download />
            </Button>
          </div>
        </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
          <p class="text-2xl font-semibold">$6,136</p>
          <div class="flex justify-center items-center w-full min-h-[215px] md:min-h-[315px] mt-5">
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