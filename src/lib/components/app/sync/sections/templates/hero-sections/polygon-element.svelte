<script>
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { ChevronRight } from "lucide-svelte";
    import { Clipboard } from 'lucide-svelte';
</script>

<section class="container mx-auto flex flex-col items-center space-y-8 py-16">
    <div>
        <Badge variant='outline' rounded class='rounded-full'>
                <Button variant='outline' size='sm' class='text-sm'>Pro release - join to waitlist
                    <ChevronRight />
                </Button>
        </Badge> 
    </div>
    
	<h2 class="max-w-5xl text-center text-4xl md:text-6xl font-bold">
		Let's Build Together
	</h2>
	<div class="mt-6 flex h-auto max-w-4xl text-center justify-center sm:justify-center text-base font-normal sm:text-lg whitespace-pre-line">
        <p>
            Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and 
            Figma design system based on the utility-first Tailwind CSS framework.
        </p>
    </div>
    <div class='felx justify-center space-x-2'>
        <Button class='w-auto h-10 mt-6'>
            Get started
            <ChevronRight size={18} class='ml-2'/>

        </Button>
        <Button variant='outline' class='w-auto-10 h-10 font-light'>
            $ npm i preline 
            <Clipboard size={18} class='ml-2'/>

        </Button>
    </div>
    <div class='max-w-5xl felx justify-center space-x-2'>
        <span>Package Manager: <strong>npm</strong> / <Button variant='link'>Instalation Guide <ChevronRight size={18} class='ml-2'/></Button>  </span>
    </div>
</section>
