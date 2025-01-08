<script>
    import * as Card from '$lib/components/ui/card';
    import Button from '$lib/components/ui/button/button.svelte';

</script>

<div class="flex flex-col items-center justify-center text-center pt-4 mb-8">
    <h2 class="text-4xl mt-0 mb-4">Learn More About [Your Company Name]</h2>
   
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 px-4">
        {#each Array(3) as _, i}
            <Card.Root class="flex flex-col items-center max-w-sm mx-auto shadow-lg">
                <Card.Header>
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img class="rounded-full w-24 h-24  object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wAGelHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Product Image">
                    <Card.Description class="text-sm font-semibold mt-3">
                        What is [Service/Product You Are Selling]?
                    </Card.Description>
                </Card.Header>
                <Card.Content class="w-full p-4">
                    <Button class="w-full font-bold py-2 px-4 rounded">
                        Learn More
                    </Button>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>
</div>
