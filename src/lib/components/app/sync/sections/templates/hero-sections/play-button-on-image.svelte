<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import { Play } from "lucide-svelte";
</script>

<section class="relative overflow-hidden container mx-auto flex flex-col items-center space-y-8 py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-3xl text-center mx-auto">
		<h2 class="block text-3xl font-bold md:text-5xl whitespace-pre-line">
			Designed for you to get 
            more simple
		</h2>
		<p class="mt-3 text-lg">
			Build your business here. Take it anywhere.
		</p>
	</div>

	<div class="mt-10 relative max-w-5xl mx-auto">
		<div class="w-full h-96 sm:h-[480px] rounded-xl relative">
			<img src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Background Image" class="w-full h-full object-cover rounded-xl">
			<div class="absolute inset-0 flex justify-center items-center">
				<Button  class='w-auto h-10 mt-6'>
	                <Play size={15} class='mr-2'/>
	                Play the overview
	            </Button>
			</div>
		</div>
	</div>
</section>


