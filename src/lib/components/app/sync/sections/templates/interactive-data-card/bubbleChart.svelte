<script lang='ts'>
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    import { Download } from 'lucide-svelte';
    import CardMenu from './cardMenu.svelte';
  
    let chart: any;
    let chartOptions = {};
  
    const chartData = {
      title: "Devices",
      series: [
        { name: "Desktop", data: [[5, 6, 70]], color: "#4f46e5" },
        { name: "Mobile", data: [[8, 4, 45]], color: "#67e8f9" },
        { name: "Tablets", data: [[10, 9, 90]], color: "#d1d5db" }
      ],
      legend: [
        { name: "Desktop", value: "41,624", change: "+453", color: "bg-indigo-600", changeColor: "text-teal-500" },
        { name: "Mobile", value: "7,390", change: "+2", color: "bg-cyan-500", changeColor: "text-teal-500" },
        { name: "Tablets", value: "3,128", change: "-157", color: "bg-gray-200", changeColor: "text-red-500" }
      ]
    };
  
    let options = {
      chart: {
        height: '100%',
        type: 'bubble',
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: chartData.series.map(serie => ({
        name: serie.name,
        data: serie.data
      })),
      dataLabels: {
        style: {
          fontSize: '25px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: '500',
          colors: ['#1f2937']
        },
        formatter: (value) => value ? `${value}%` : ''
      },
      fill: { opacity: 1 },
      legend: { show: true },
      plotOptions: {
        bubble: {
          zScaling: false,
          minBubbleRadius: 40
        }
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      xaxis: {
        min: 0,
        max: 15,
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        min: 0,
        max: 15,
        labels: { show: false }
      },
      tooltip: { enabled: true },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        }
      },
      colors: chartData.series.map(serie => serie.color),
      markers: {
        strokeColors: 'rgb(255, 255, 255)'
      }
    };
  
    onMount(async () => {
        // eslint-disable-next-line
        // @ts-ignore
      const module = await import('svelte-apexcharts');
      chart = module.chart;
      chartOptions = { ...options }; 
    });
  </script>
  
  <section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
    <div class='w-max-5xl pt-4'>
      <Card.Root class="w-[500px]">
        <Card.Header class="flex justify-between items-center p-5 pb-4">
          <div class="flex items-center justify-between w-full">
            <Card.Title class='text-2xl'>Devices</Card.Title>
            <Button variant="outline" class="size-[34px] p-2 ml-auto mr-2">
              <Download />
            </Button>
            <CardMenu />
          </div>    
        </Card.Header>
        <Card.Content class="h-full p-5 pt-0 space-y-4">
          <div class="h-full flex flex-col justify-between items-center space-y-4">
            <div class="flex justify-center items-center w-full h-[340px] relative z-0">
              {#if chart}
                <div use:chart={chartOptions} class="w-full h-72"></div>
              {:else}
                <div>Loading chart...</div>
              {/if}
            </div>
            <ul class="w-full relative z-10">
              <li class="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0">
                <div>
                  <h4 class="font-medium">Devices</h4>
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
          </div>
        </Card.Content>
        <Card.Footer class="text-center border-t justify-center items-center py-2">
          <Button variant="link" class="text-sm">View Full Reports</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  </section>
  