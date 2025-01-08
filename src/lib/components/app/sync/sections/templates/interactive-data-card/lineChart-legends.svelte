<script lang='ts'>
  import { onMount } from 'svelte';
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Download } from 'lucide-svelte';
  import CardMenu from './cardMenu.svelte';

  let chart: any;
  let chartOptions = {};

  const chartData = {
    title: "Age",
    series: [
      {
        name: '18-25',
        data: [0, 27000, 25000, 27000],
        color: '#4f46e5'
      },
      {
        name: '25-40',
        data: [19500, 10000, 19000, 17500],
        color: '#67e8f9'
      },
      {
        name: '40+',
        data: [8000, 2200, 6000, 9000],
        color: '#d1d5db'
      }
    ],
    categories: [
      '12:00 am',
      '6:00 am',
      '12:00 pm',
      '6:00 pm'
    ],
    colors: ['#4f46e5', '#67e8f9', '#d1d5db']
  };

  let options = {
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    series: chartData.series.map(serie => ({
      name: serie.name,
      data: serie.data
    })),
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: [3, 3, 3],
      dashArray: [0, 0, 4]
    },
    grid: {
      strokeDashArray: 0,
      padding: {
        top: -20,
        right: 0
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: chartData.categories,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '16px', // Ajusta el tamaño de los labels del eje X
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        },
        offsetY: 5, // Ajusta la posición vertical de los labels del eje X
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
      min: 0,
      max: 40000,
      tickAmount: 4,
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '16px', // Ajusta el tamaño de los labels del eje Y
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400
        },
        offsetX: -5, // Ajusta la posición horizontal de los labels del eje Y
        formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
      }
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const label = w.config.series[seriesIndex].name;
        const value = series[seriesIndex][dataPointIndex];
        return `<div class="custom-tooltip">${label}: ${value}</div>`;
      }
    },
    colors: chartData.colors
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
          <Card.Title class='text-2xl'>AGE</Card.Title>
          <Button variant="outline" class="size-[34px] p-2 ml-auto mr-2">
        <Download />
      </Button>
      <CardMenu />
        </div>    
      </Card.Header>
      <Card.Content class="h-full p-5 pt-0 space-y-2">
        <div class="h-full flex flex-col justify-between items-center space-y-2">
          <div class="flex justify-center items-center w-full h-full">
            {#if chart}
              <div use:chart={chartOptions} class="w-full h-72"></div>
            {:else}
              <div>Loading chart...</div>
            {/if}
          </div>
          <div class="flex justify-center items-center gap-x-4 mt-2">
            {#each chartData.series as { name, color }}
              <div class="inline-flex items-center">
                <span class="flex-shrink-0 w-2.5 h-2.5 rounded-sm mr-2.5" style="background-color: {color}"></span>
                <span class="text-sm">{name}</span>
              </div>
            {/each}
          </div>
        </div>
      </Card.Content>
      <Card.Footer class="text-center border-t justify-center items-center py-2">
        <Button variant="link" class="text-sm">View Full Reports</Button>
      </Card.Footer>
    </Card.Root>
  </div>
</section>
