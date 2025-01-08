<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<section
	class="container mx-auto grid grid-cols-1 flex-col space-y-4 py-4 pt-1 sm:grid-cols-4 sm:flex-row sm:space-x-4 sm:space-y-0"
>
	<div class="col-span-3 flex-row items-center py-9 pl-36">
		<span class="text-sm">ABOUT YOUR WORK</span>
		<h1 class="mb-0 mt-5 h-40 w-11/12 whitespace-pre-line text-4xl font-extrabold">
			Now That You Grabbed Your Reader'S Attention You Need To Interest Them Enough To Keep Reading.
		</h1>
		<p class="mt-1 text-lg">Describe how you got here and why you choose this career path.</p>
		<div class="mt-7 flex flex-row justify-between space-x-4">
			<Card.Root class="w-full max-w-md">
				<Card.Header>
					<Card.Title class="text-xl font-bold">Skillset ONE</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-lg">
						How did you learn this skill, and what have you done so far. For example, what tools
						have you used and what coding languages, strategies, or methodologies have you used.
					</p>
					<div class="mt-7 flex space-x-2">
						{#each Array.from({ length: 3 }) as _}
							<span class="p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									viewBox="0 0 140 140"
								>
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
							</span>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root class="w-full max-w-md">
				<Card.Header>
					<Card.Title class="text-xl font-bold">Skillset TWO</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-lg">
						How did you learn this skill, and what have you done so far. For example, what tools
						have you used and what coding languages, strategies, or methodologies have you used.
					</p>
					<div class="mt-7 flex space-x-2">
						{#each Array.from({ length: 3 }) as _}
							<span class="p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									viewBox="0 0 140 140"
								>
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
							</span>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 140 140">
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
</section>
