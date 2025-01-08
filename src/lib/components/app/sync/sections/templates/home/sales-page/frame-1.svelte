<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="container mx-auto flex flex-col pt-1 sm:flex-row sm:space-x-4">
	<div class="flex w-full flex-col items-center pt-1 sm:flex-row">
		<div class="grid w-full h-full grid-cols-1 sm:grid-cols-2 mb-20">
			<div class="flex items-center justify-center sm:justify-center sm:py-0">
				<svg xmlns="http://www.w3.org/2000/svg" width="520" height="520" viewBox="0 0 140 140">
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
			</div>

			<div class="w-auto mr-1 whitespace-pre-line py-4 text-center font-extrabold sm:pt-40 sm:text-center text-3xl sm:text-5xl">
				<span class='whitespace-pre-line'>TELL THEM WHAT YOUR 
                    BOOK WILL DO FOR 
                    YOUR READERS</span>
				<p class="mt-8 text-2xl font-semibold">
					You can start with a quick background story and what let you to write this book. in
					addiction you can highlights that your readers can have a shortcut to the same knowledge
				</p>

				<div class="mt-10">
					<Button class="h-auto sm:h-12 w-80">PURCHASE NOW FOR X USD</Button>
				</div>

				<div class="mt-10 text-lg font-semibold">
					<p>50% OFF FOR A LIMITED TIME ONLY</p>
					<p class="mt-3 text-sm font-normal underline">
						*By purchasing, you agree to Terms & Conditions
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
