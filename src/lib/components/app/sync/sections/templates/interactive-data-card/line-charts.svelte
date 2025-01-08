<script lang='ts'>
  import { onMount } from 'svelte';
  import * as Card from "$lib/components/ui/card";
  import DatePicker from './datePicker.svelte';

  let chart: any;
  let options = {
    chart: {
      type: 'line',
      height: '200px',
      sparkline: {
        enabled: true
      }
    },
    series: [
      {
        name: 'Store sales',
        data: [0, 27000, 5000, 27000, 40000, 30000, 48000]
      },
      {
        name: 'Online sales',
        data: [19500, 10000, 1000, 17500, 6000, 20500, 24000]
      },
      {
        name: 'Others',
        data: [12500, 7000, 4000, 8000, 10000, 12800, 8500]
      }
    ],
    xaxis: {
      categories: [
        '25 January 2023',
        '1 February 2023',
        '5 February 2023',
        '10 February 2023',
        '15 February 2023',
        '20 February 2023',
        '25 February 2023'
      ],
      labels: {
        show: false
      }
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    colors: ['#2563EB', '#9333ea', '#d1d5db'],
    grid: {
      borderColor: '#e5e7eb'
    }
  };
  let chartOptions = {};

  onMount(async () => {
    // eslint-disable-next-line
    // @ts-ignore
    const module = await import('svelte-apexcharts');
    chart = module.chart;
    chartOptions = { ...options };
  });

  const totalSales = 43350;

  const salesData = [
    {
      label: 'Store sales',
      amount: (totalSales * 0.60).toFixed(2),
      percentage: '60%',
      color: 'bg-blue-600'
    },
    {
      label: 'Online sales',
      amount: (totalSales * 0.30).toFixed(2),
      percentage: '30%',
      color: 'bg-purple-600'
    },
    {
      label: 'Others',
      amount: (totalSales * 0.10).toFixed(2),
      percentage: '10%',
      color: 'bg-gray-300'
    }
  ];
</script>

<section class="container mx-auto flex flex-col items-center justify-start space-y-8 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
  <div class='w-max-5xl pt-4'>

    <Card.Root class="w-[500px]">
      <Card.Header class="flex flex-col items-start">
        <div class="flex items-center justify-between w-full">
          <Card.Title class='text-2xl'>Total sales</Card.Title>
          <DatePicker />
        </div>
        <Card.Description class='text-4xl font-semibold'>${totalSales.toLocaleString()}</Card.Description>
      </Card.Header>
    <Card.Content class="flex flex-col items-center">
      <ul class="space-y-3 w-full">
        {#each salesData as { label, amount, percentage, color }}
          <li class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <div class="w-2.5 h-2.5 {color} rounded-full"></div>
              <span>{label}</span>
            </div>
            <div class="flex items-center space-x-3">
              <span>{amount}</span>
              <span>{percentage}</span>
            </div>
          </li>
        {/each}
      </ul>
      {#if chart}
        <div use:chart={chartOptions} class="w-full"></div>
      {:else}
        <div>Loading chart...</div>
      {/if}
    </Card.Content>
    </Card.Root>
  </div>
</section>
