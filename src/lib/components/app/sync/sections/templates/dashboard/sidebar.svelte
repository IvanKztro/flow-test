<script>
    import * as Accordion from '$lib/components/ui/accordion';
    import Button from '$lib/components/ui/button/button.svelte';
    import * as Card from '$lib/components/ui/card';

    const nav = [
        {
            name: 'Dashboard',
            href: '#'
        },
        {
            name: 'Orders',
            href: '#'
        },
        {
            name: 'Services',
            href: '#'
        },
        {
            name: 'Customers',
            href: '#'
        },
        {
            name: 'Analytics',
            href: '#'
        }
    ];
</script>

<aside class="fixed inset-y-0 start-0 z-40 hidden w-[260px] -translate-x-full transform border-e border-border/80 bg-background/95 transition-all duration-300 [--auto-close:lg] lg:bottom-0 lg:end-auto lg:block lg:translate-x-0">
    <div class="flex h-full flex-col justify-between p-4 border-e shadow-sm rounded-xl m-2">
        <div class='flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 140 140">
                <path d="M0 0h140v140H0z" fill="#e5e7eb" />
                <path
                    d="M88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z"
                    fill="#e5e7eb"
                />
                <path
                    d="M89.48 52.32H50.29a4.52 4.52 0 00-4.52 4.52V84a4.53 4.53 0 004.52 4.52h39.19A4.52 4.52 0 0094 84V56.84a4.52 4.52 0 00-4.52-4.52zm-33.16 5.27a5.28 5.28 0 11-5.27 5.28 5.27 5.27 0 015.27-5.28zM88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z"
                    fill="#d1d5db"
                />
            </svg>

            <nav class="mt-4 w-full flex flex-col">
                <Accordion.Root>
                    {#each nav as { name, href }}
                        <Accordion.Item value={name} class="mb-1.5 border-none">
                            <Accordion.Trigger class="flex items-center rounded-lg px-3 py-2 text-base font-normal hover:bg-muted hover:no-underline focus:bg-muted/95">
                                <div class="flex items-center gap-x-2">
                                    {name}
                                </div>
                            </Accordion.Trigger>
                            <Accordion.Content>
                                <ul class="hs-accordion-group relative mt-1.5 space-y-1.5 ps-7 before:absolute before:start-[18px] before:top-0 before:h-full before:w-0.5 before:bg-gray-100 dark:before:bg-neutral-700">
                                    <li>
                                        <a href={href} class="text-muted-foreground hover:text-foreground">
                                            {name}
                                        </a>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Item>
                    {/each}
                </Accordion.Root>
            </nav>
        </div>

        <Card.Root class="mt-4">
            <Card.Header class="p-2 pt-0 md:p-4">
                <Card.Title>Upgrade to Pro</Card.Title>
                <Card.Description>
                    Unlock all features and get unlimited access to our support team.
                </Card.Description>
            </Card.Header>
            <Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" class="w-full">Upgrade</Button>
            </Card.Content>
        </Card.Root>
    </div>
</aside>