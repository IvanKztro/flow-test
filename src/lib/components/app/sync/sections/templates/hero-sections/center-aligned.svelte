<script>
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { ChevronRight } from "lucide-svelte";
</script>

<section class="container mx-auto flex flex-col items-center space-y-8 py-20">
    <div>
        <Badge variant='outline' rounded class='rounded-full'>
                <Button variant='outline' size='sm' class='text-sm'>Preline UI Figma is live
                    <ChevronRight />
                </Button>
        </Badge> 
    </div>
    
	<h2 class="max-w-4xl text-center text-4xl md:text-6xl font-bold">
		Now it's easier than ever to build products
	</h2>
	<div class="mt-6 flex h-auto max-w-4xl text-center justify-center sm:justify-center text-base font-normal sm:text-lg whitespace-pre-line">
        <p>
            Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.
        </p>
    </div>
    <div class='felx justify-center space-x-2'>
        <Button class='w-auto h-10 mt-6'>
            Get started
            <ChevronRight size={18} class='ml-2'/>
        </Button>
    </div>
</section>
