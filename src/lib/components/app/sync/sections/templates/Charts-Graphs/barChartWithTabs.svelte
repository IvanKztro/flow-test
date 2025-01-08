<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Download, Plus } from 'lucide-svelte';
    import CardMenu from '../interactive-data-card/cardMenu.svelte';
    import DateRangePicker from './dateRangePicker.svelte';
    import * as Tabs from "$lib/components/ui/tabs/index.js";
  
    let chartOptions = {};
    let loaded = false;
  
    const chartData = {
      series: [
        { name: 'In-store', data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220, 200, 300] },
        { name: 'Online', data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120, 150] }
      ],
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
  
    let options = {
      chart: {
        type: 'bar',
        height: 250,
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
        width: 10,
        colors: ['transparent']
      },
      xaxis: {
        categories: chartData.categories,
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
          align: 'left',
          minWidth: 0,
          maxWidth: 140,
          style: {
            colors: '#9ca3af',
            fontSize: '13px',
            fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400
          },
          formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
        }
      },
      colors: ['#8b5cf6', '#d4d4d4'],
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
      },
      responsive: [{
        breakpoint: 568,
        options: {
          chart: { height: 300 },
          plotOptions: {
            bar: { columnWidth: '14px' }
          },
          stroke: { width: 10 }
        }
      }]
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
              <div class="flex items-center justify-end space-x-4">
                <Button variant="outline" class="w-auto p-2">
                  <Plus size={15}/> Add Activity
                </Button>
                <CardMenu />
              </div>
            </div>
            <Card.Title class='text-2xl'>Orders</Card.Title>
          </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
          <div class="grid md:grid-cols-8 divide-x divide-stone-200">
            <div class="md:col-span-5 lg:col-span-6">
              <div class="flex justify-center items-center w-full min-h-[265px]">
                {#if loaded}
                  <div use:chart={chartOptions} class="w-full h-full"></div>
                {:else}
                  <div>Loading chart...</div>
                {/if}
              </div>
            </div>
            <div class="md:col-span-3 lg:col-span-2 p-2">
              <Tabs.Root value="orders">
                <Tabs.List class="flex justify-center">
                  <Tabs.Trigger value="orders">Orders</Tabs.Trigger>
                  <Tabs.Trigger value="sales">Sales</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="orders">
                  <div class="py-4">
                    <h4 class="font-semibold text-xl md:text-2xl">125,090</h4>
                    <div class="relative mt-3">
                      <div class="flex w-full h-2 bg-stone-200 rounded-sm overflow-hidden ">
                        <div class="bg-purple-400" style="width: 72%"></div>
                      </div>
                    </div>
                    <p class="mt-4 text-sm">A project-wise breakdown of total orders complemented by detailed insights.</p>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="sales">
                  <div class="py-4">
                    <h4 class="font-semibold text-xl md:text-2xl">$993,758.20</h4>
                    <div class="relative mt-3">
                      <div class="flex w-full h-2 bg-stone-200 rounded-sm overflow-hidden ">
                        <div class="bg-purple-400" style="width: 47%"></div>
                      </div>
                    </div>
                    <p class="mt-4 text-sm">A project-wise breakdown of total sales complemented by detailed insights.</p>
                  </div>
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </section>