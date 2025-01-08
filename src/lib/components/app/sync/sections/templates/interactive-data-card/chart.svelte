<script lang='ts'>
	import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";

    //este chart es el ejemplo basico que me sirvio para crear los demas

    let chartOptions = {};
  

  let options = {
    chart: {
      type: 'area',
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

	// @ts-ignore
	let ApexCharts;
	let loaded = false;

	// @ts-ignore
	const chart = (node, options) => {

		if (!loaded)
			return

		// @ts-ignore
		let myChart = new ApexCharts(node, options)
		myChart.render()

		return {
			// @ts-ignore
			update(options) {
				myChart.updateOptions(options)
			},
			destroy() {
				myChart.destroy()
			}
		}
	}

	onMount(async () => {
		const module = await import('apexcharts');
		ApexCharts = module.default;
		// @ts-ignore
		window.ApexCharts = ApexCharts
		loaded = true
	});

</script> 



{#if loaded}
<div use:chart={options}></div>
{/if}