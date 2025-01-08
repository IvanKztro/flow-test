<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<section
	class="container mx-auto flex flex-col space-y-4 pt-1 sm:flex-row sm:space-x-4 sm:space-y-0"
>
	<div class="flex w-full flex-col items-center py-9 pl-8 sm:flex-row sm:pl-36">
		<div class="grid w-full grid-cols-1 sm:grid-cols-2">
			<div
				class="w-auto py-4 text-center text-3xl font-extrabold sm:pt-28 sm:text-left sm:text-5xl"
			>
				<span>Introduce Yourself and Your Unique Skillset</span>
				<div
					class="mt-9 flex h-auto w-full justify-start text-base font-normal sm:h-32 sm:w-auto sm:text-xl"
				>
					<p>
						Start with your elevator pitch, tell your readers what you have to offer, which problems
						you solve for them, and what makes you stand out while focusing on your client/employer.
					</p>
				</div>
				<div class="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-start">
					<div class="flex w-full justify-center sm:w-auto sm:justify-start">
						<Input placeholder="Type your e-mail" class="h-12 w-full text-xl font-normal sm:w-80" />
					</div>
					<div class="mt-2 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-start">
						<Button class="h-12 w-full text-xl sm:w-36">Submit</Button>
					</div>
				</div>
				<div class="mt-16 flex h-14 w-auto justify-start text-base font-normal sm:w-96 sm:text-lg">
					<p>Add here logos of your biggest clients. Because social proof gives you credibility.</p>
				</div>
				<div
					class="mt-2 flex flex-col items-center space-y-2 text-xl font-medium sm:flex-row sm:space-x-4 sm:space-y-0"
				>
					<div class="flex items-center">
						<Avatar.Root class="h-10 w-10">
							<Avatar.Image src="" alt="@shadcn" />
							<Avatar.Fallback>GF</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">Growfity</span>
					</div>
					<div class="flex items-center">
						<Avatar.Root class="h-10 w-10">
							<Avatar.Image src="" alt="@shadcn" />
							<Avatar.Fallback>TB</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">TECHBOX</span>
					</div>
					<div class="flex items-center">
						<Avatar.Root class="h-10 w-10">
							<Avatar.Image src="" alt="@shadcn" />
							<Avatar.Fallback>FC</Avatar.Fallback>
						</Avatar.Root>
						<span class="ml-2">forecastr</span>
					</div>
				</div>
			</div>

			<div class="flex justify-center py-4 sm:justify-end sm:py-0">
				<svg xmlns="http://www.w3.org/2000/svg" width="480" height="520" viewBox="0 0 140 140">
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
		</div>
	</div>
</section>
