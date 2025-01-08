<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from "$lib/components/ui/card/index.js";
    import Badge from '$lib/components/ui/badge/badge.svelte';
    import { TrendingDown, TrendingUp } from 'lucide-svelte';

    let loaded = false;

    const stats = [
        {
            title: 'Users',
            value: '17,482',
            chartId: 'users-line-chart',
            data: [21, 20, 24, 20, 18, 17, 11, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90, 90, 85, 70, 75, 70, 30, 30, 30, 50, 72],
            badge: '37.3%',
            badgeDescription: 'from 12,142',
            badgeIconUp: true
        },
        {
            title: 'Avg. click rate',
            value: '52,639',
            chartId: 'avg-click-rate-line-chart',
            data: [21, 20, 24, 20, 18, 27, 25, 27, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90, 90, 90, 85, 100, 120, 120, 120, 100, 90, 75, 75, 75, 90],
            badge: '14.5%',
            badgeDescription: 'from 48,503',
            badgeIconUp: true
        },
        {
            title: 'Sessions',
            value: '21,336',
            chartId: 'sessions-line-chart',
            data: [25, 48, 10, 11, 11, 15, 60, 60, 60, 75, 21, 20, 24, 20, 38, 37, 35, 37, 30, 120, 120, 120, 100, 90, 75, 90, 90, 90, 75, 70, 60],
            badge: '4.1%',
            badgeDescription: 'from 20,229',
            badgeIconUp: false
        },
        {
            title: 'Session duration',
            value: '5m 10s',
            chartId: 'session-duration-line-chart',
            data: [21, 20, 24, 45, 47, 30, 30, 35, 35, 35, 40, 60, 42, 90, 90, 85, 70, 75, 43, 75, 90, 22, 120, 120, 90, 85, 100, 92, 92, 92, 92],
            badge: '0.0%',
            badgeDescription: 'from 5m 10s',
            badgeIconUp: false
        }
    ];

    async function buildChart(id, data) {
        const options = {
            series: [{
                name: '',
                data: data
            }],
            chart: {
                height: 30,
                type: 'line',
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'straight',
                width: 2
            },
            xaxis: {
                type: 'category',
                categories: Array(data.length).fill(''),
                crosshairs: {
                    show: false
                }
            },
            markers: {
                hover: {
                    size: 0
                }
            },
            tooltip: {
                marker: {
                    show: true,
                },
                fixed: {
                    enabled: true,
                    position: 'bottomLeft',
                    offsetX: 10,
                    offsetY: -15,
                }
            },
        };

        if (typeof window !== 'undefined') {
            const ApexCharts = await import('apexcharts');
            const container = document.querySelector(id);
            if (container) {
                try {
                    const chart = new ApexCharts.default(container, options);
                    await chart.render();
                } catch (error) {
                    console.error(`Error rendering chart ${id}:`, error);
                }
            } else {
                console.error(`Container for ${id} not found`);
            }
        }
    }

    onMount(async () => {
        for (const { chartId, data } of stats) {
            await buildChart(`#${chartId}`, data);
        }
        loaded = true;
    });
</script>

<section class="container mx-auto flex flex-col items-center justify-start pt-4 pb-4 px-4 sm:px-6 lg:px-8">
    <div class="w-full flex flex-col items-center">
        <div class="mb-2 xl:mb-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-5">
            {#each stats as stat}
                <Card.Root class="flex flex-col p-5 border border-gray-200 shadow-md rounded-xl">
                    <div class="space-y-4">
                        <h2 class="text-xs uppercase">
                            {stat.title}
                        </h2>
                        <div class="grid grid-cols-2 gap-x-2">
                            <div class="text-2xl font-semibold">
                                {stat.value}
                            </div>
                            <!-- Apex Line Chart -->
                            <div id={stat.chartId}></div>
                        </div>
                        <div class="flex items-center gap-x-2">
                            <Badge class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs">
                                {#if stat.badgeIconUp}
                                <TrendingUp size={15} class='mr-2'/>
                                {:else}
                                <TrendingDown size={15} class='mr-2'/>  
                                {/if}
                                {stat.badge}
                            </Badge>
                            <p class="text-xs">
                                {stat.badgeDescription}
                            </p>
                        </div>
                    </div>
                </Card.Root>
            {/each}
        </div>
    </div>
</section>
