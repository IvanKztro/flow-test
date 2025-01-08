<script>
	import { Button } from "$lib/components/ui/button";
	import { ChevronRight, Star } from "lucide-svelte";
    import * as Avatar from '$lib/components/ui/avatar';

  
</script>

<section
	class="container mx-auto flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
>	<div class="flex w-full flex-col items-center py-6 pl-8 sm:flex-row sm:pl-24">
		<div class="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-8 md:gap-20 sm:items-center">
			<div class="w-auto py-4 text-center text-6xl font-bold pt-6 sm:pt-8 sm:text-left ">
				<span class='whitespace-pre-line'>Start your journey with Preline</span>
				<div class="mt-6 flex h-auto w-full justify-center sm:justify-start text-base font-normal sm:text-xl">
					<p>
                        Hand-picked professionals and expertly crafted components,
                        designed for any kind of entrepreneur.
					</p>
				</div>
				<div class="mt-6 items-center space-x-1">
					<Button class='w-40 h-10 text-sm font-medium'>
                        Get started
                        <ChevronRight size={20} class='ml-2'/>
                    </Button>
                    <Button variant='outline' class='w-40 h-10 text-sm font-medium'>
                        Contact sales team
                        
                    </Button>
				</div>
                <div class="flex items-center justify-center space-x-8 mt-10">
                    <div class="py-5 flex flex-col items-center">
                      <div class="flex space-x-1">
                        <Star size={15} />
                        <Star size={15} />
                        <Star size={15} />
                        <Star size={15} />
                        <Star size={15} />
                      </div>
                      <p class="mt-2 text-sm">
                        <span class="font-bold">4.6</span> /5 - from 12k reviews
                      </p>

                      <div class="w-auto justify-start mt-4 flex flex-col items-center space-y-2 text-xl font-medium sm:flex-row sm:space-x-4 sm:space-y-0">
						<Avatar.Root class="h-12 w-12">
							<Avatar.Image />
							<Avatar.Fallback>GE</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">Google</span>
					</div>
                    </div>
                  
                    <div class="py-5 flex flex-col items-center">
                      <div class="flex space-x-1">
                        <Star size={15} />
                        <Star size={15} />
                        <Star size={15} />
                        <Star size={15} />
                        <Star size={15} />
                      </div>
                      <p class="mt-2 text-sm">
                        <span class="font-bold">4.8</span> /5 - from 5k reviews
                      </p>
                      <div class="w-auto justify-start mt-4 flex flex-col items-center space-y-2 text-xl font-medium sm:flex-row sm:space-x-4 sm:space-y-0">
						<Avatar.Root class="h-12 w-12">
							<Avatar.Image />
							<Avatar.Fallback>FB</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">Forbes</span>
					</div>
                    </div>
                  </div>
			</div>

			<div class="flex justify-center py-4 sm:justify-end sm:py-0">
				<svg xmlns="http://www.w3.org/2000/svg" width="480" height="520" viewBox="0 0 140 140">
					<path d="M0 0h140v140H0z" fill="#e5e7eb" />
					<path d="M88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z" fill="#e5e7eb" />
					<path d="M89.48 52.32H50.29a4.52 4.52 0 00-4.52 4.52V84a4.53 4.53 0 004.52 4.52h39.19A4.52 4.52 0 0094 84V56.84a4.52 4.52 0 00-4.52-4.52zm-33.16 5.27a5.28 5.28 0 11-5.27 5.28 5.27 5.27 0 015.27-5.28zM88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z" fill="#d1d5db" />
				</svg>
			</div>
		</div>
	</div>
</section>

