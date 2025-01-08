<script>
	import { Check } from 'lucide-svelte';
const items = [
		{
			title: 'Problem 1',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
        {
			title: 'Problem 2',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
        {
			title: 'Problem 3',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
        {
			title: 'Problem 4',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
        {
			title: 'Problem 5',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},

    ]
</script>


<section class="container mx-auto flex flex-col items-center space-y-8 py-16 px-4 sm:px-6 lg:px-8">
	<h2 class="max-w-3xl text-center text-3xl sm:text-4xl font-bold whitespace-pre-line">
	  WRITE A HEADLINE THAT DESCRIBES 
	  YOUR TARGET CUSTOMER'S DESIRES AND 
	  MAKE THEM THINK "YES THAT'S ME!"
	</h2>
	
	<p class="max-w-2xl text-center text-xl sm:text-2xl pt-6 sm:pt-9">
	  Continue with a BUT statement and emphasize the problems that are holding them back the get their.
	</p>
  
	<div class="container max-w-3xl py-4">
	  {#each items as item}
		<div class="mb-4 p-4 rounded-lg">
		  <div class="flex flex-col sm:flex-row items-start sm:items-center w-full">
			<h2 class="text-lg sm:text-xl font-bold flex items-center mr-0 sm:mr-3 mb-2 sm:mb-0">
			  <Check size=20 class='mr-2'/>
			  {item.title}
			</h2>
			<p class="flex-1">- {item.content}</p>
		  </div>
		</div>
	  {/each}
	</div>
  </section>