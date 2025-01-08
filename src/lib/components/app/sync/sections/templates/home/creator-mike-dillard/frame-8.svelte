<script>

	import { Button } from "$lib/components/ui/button";
    import * as Avatar from '$lib/components/ui/avatar';

</script>
<section
	class="container mx-auto flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
>
	<div class="flex w-full flex-col items-center py-9 pl-6 sm:flex-row sm:pl-44">
		<div class="grid w-full grid-cols-1 sm:grid-cols-2">
			<div class="w-auto py-4 text-center text-2xl font-extrabold sm:pt-28 sm:text-left sm:text-5xl">
				<span class='whitespace-pre-line'>PROMOTE YOUR PODCAST/
                    YOUTUBE CHANNEL
                    OR BLOG
                </span>
				<div
					class="w-full justify-between mr-4 mt-10 flex flex-col items-center space-y-2 text-xl font-medium sm:flex-row sm:space-x-4 sm:space-y-0"
				>
					<div class="flex items-center">
						<Avatar.Root class="h-12 w-12">
							<Avatar.Image src="" alt="@shadcn" />
							<Avatar.Fallback>GF</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">Growfity</span>
					</div>
					<div class="flex items-center">
						<Avatar.Root class="h-12 w-12">
							<Avatar.Image src="" alt="@shadcn" />
							<Avatar.Fallback>TB</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">TECHBOX</span>
					</div>
					<div class="flex items-center">
						<Avatar.Root class="h-12 w-12">
							<Avatar.Image src="" alt="@shadcn" />
							<Avatar.Fallback>FC</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">forecastr</span>
					</div>
				</div>
		
				
			</div>

			<div class="flex justify-center py-4 sm:justify-end sm:py-0">
				<svg xmlns="http://www.w3.org/2000/svg" width="460" height="520" viewBox="0 0 140 140">
					<path d="M0 0h140v140H0z" fill="#e5e7eb" />
					<path d="M88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z" fill="#e5e7eb" />
					<path d="M89.48 52.32H50.29a4.52 4.52 0 00-4.52 4.52V84a4.53 4.53 0 004.52 4.52h39.19A4.52 4.52 0 0094 84V56.84a4.52 4.52 0 00-4.52-4.52zm-33.16 5.27a5.28 5.28 0 11-5.27 5.28 5.27 5.27 0 015.27-5.28zM88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z" fill="#d1d5db" />
				</svg>
			</div>
		</div>
	</div>
</section>