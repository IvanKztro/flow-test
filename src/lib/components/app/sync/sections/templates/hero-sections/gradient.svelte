<script>
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { ChevronRight } from "lucide-svelte";
</script>

<section class="container mx-auto flex flex-col items-center space-y-8 py-20">
    <div>
        <Button variant='link'>Preline: A Vision for 2023</Button>
    </div>
    
	<h2 class="max-w-4xl text-center text-4xl md:text-6xl font-bold whitespace-pre-line">
		The Intuitive Web 
        Solutions
	</h2>
	<div class="mt-6 flex h-auto max-w-2xl text-center justify-center sm:justify-center text-base font-normal sm:text-lg whitespace-pre-line">
        <p>
            Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.
        </p>
    </div>
    <div class='felx justify-center space-x-2'>
        <Button  class='w-auto h-10 mt-6'>
            Get started
            <ChevronRight />
        </Button>
        <Button variant='outline'  class='w-auto h-10 mt-6'>
            <svg class="flex-shrink-0 size-4" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z" fill="#0ACF83"></path>
                <path d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z" fill="#A259FF"></path>
                <path d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z" fill="#F24E1E"></path>
                <path d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z" fill="#FF7262"></path>
                <path d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z" fill="#1ABCFE"></path>
              </svg>
            Preline Figma
        </Button>
    </div>
</section>
