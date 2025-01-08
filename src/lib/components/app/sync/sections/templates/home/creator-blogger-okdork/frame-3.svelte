<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import { ChevronRight } from "lucide-svelte";


</script>

<section class="container mx-auto flex flex-col space-y-4 pt-1 sm:flex-row sm:space-x-4 sm:space-y-0 mt-2">
	<div class="flex w-full flex-col items-center py-14 justify-center pt-32 text-4xl font-bold whitespace-pre-line">
        <span>Add Your Best Testimonial</span> 

        <div class='text-center justify-center text-2xl font-medium mt-7'>
            <p class='whitespace-pre-line italic'> " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. 
                Adipiscing bibendum est ultricies integer." </p>
            
            <p class='mt-7'><strong>Shane Jimenez</strong></p>
            <p class='mt-2 text-lg'>Director of Materials Managments</p>
            <div class='pt-14'>
                <Button variant='link' class='text-lg'>Read the blog 
                    <ChevronRight />
                </Button>
            </div>
            
        </div>
        
        
    </div>
</section>