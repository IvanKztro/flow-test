<script>
    import * as Card from '$lib/components/ui/card';
    import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="flex flex-col items-center justify-center text-center pt-4 mb-8">
    <h1 class="text-8xl font-bold mt-0">404</h1>
    <p class="text-6xl mt-2">Thank God We Found You</p>
    <p class="mt-1 text-3xl leading-relaxed max-w-xl mx-auto">
        Use the 404 page as an opportunity to send your lost website visitors to the right content and build trust into your brand.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-4">
        {#each Array(3) as _, i}
            <Card.Root class="flex flex-col items-center max-w-sm mx-auto">
                <Card.Header class="w-full">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wAGelHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Product Image">
                    <Card.Title class="text-lg font-semibold mt-2">What is [Service/Product You Are Selling]?</Card.Title>
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




  