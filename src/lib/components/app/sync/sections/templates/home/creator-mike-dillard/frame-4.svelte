<script>
	import { Check } from "svelte-radix";

const items = [
		{
			title: 'FIRST',
			content: 'FIRST thing that shows your expertise by mentioning a past success. Use real numbers to make it more believable.'
		},
        {
			title: 'SECOND',
			content: 'FIRST thing that shows your expertise by mentioning a past success. Use real numbers to make it more believable. '
		},
        {
			title: 'THIRD',
			content: 'FIRST thing that shows your expertise by mentioning a past success. Use real numbers to make it more believable. '
		},
    ]
</script>

<section class="container mx-auto flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
	<div class="flex w-full flex-col items-center py-9 pl-8 sm:flex-row sm:pl-36">
		<div class="grid w-full grid-cols-1 sm:grid-cols-2">
			<div class="w-auto py-4 text-center text-3xl font-extrabold sm:w-x-[624px] sm:pt-20 sm:text-left sm:text-4xl">
				<span class='whitespace-pre-line'>SHOW THEM THAT YOU ARE THE
                     SOLUTIONS TO THEIR PROBLEMS</span>
				<div class="mt-6 mb-8 flex h-auto w-full justify-center sm:justify-start text-base font-normal sm:text-xl">
					<p class='whitespace-pre-line'>
						Build empathy by telling them that you used to be in the same situation but you found your way out and now you can be their guide/mentor to do the same.
					</p>
				</div>
                <div class='max-w-3xl py-4 text-lg font-normal'>
                    <div class="mb-4 rounded-lg">
                      <div class="flex flex-col items-start w-full space-y-8">
                        <div class="flex items-center">
                          <Check size=20 class='mr-2'/>
                          <p class="flex-1">- FIRST thing that shows your expertise by mentioning a past success. Use real numbers to make it more believable.</p>
                        </div>
                        <div class="flex items-center">
                          <Check size=20 class='mr-2'/>
                          <p class="flex-1">- SECOND thing that shows your expertise by mentioning a past success. Use real numbers to make it more believable.</p>
                        </div>
                        <div class="flex items-center">
                          <Check size=20 class='mr-2'/>
                          <p class="flex-1">- THIRD thing that shows your expertise by mentioning a past success. Use real numbers to make it more believable.</p>
                        </div>
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