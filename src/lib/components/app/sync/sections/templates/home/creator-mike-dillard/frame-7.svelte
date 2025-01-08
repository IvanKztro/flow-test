<script>
	import Button from "$lib/components/ui/button/button.svelte";


const data = [
    { name: 'David Hernandez', subtitle: 'Startup Founder' },
    { name: 'Maria Garcia', subtitle: 'Web Developer' },
    { name: 'John Doe', subtitle: 'UI/UX Designer' },
    { name: 'Jane Smith', subtitle: 'Product Manager' },
    { name: 'Chris Johnson', subtitle: 'Software Engineer' },
    { name: 'Patricia Brown', subtitle: 'Data Scientist' },
    { name: 'Michael Williams', subtitle: 'CTO' },
    { name: 'Linda Davis', subtitle: 'Marketing Expert' },
    { name: 'James Wilson', subtitle: 'Project Manager' }
  ];
</script>

<section class="container mx-auto flex flex-col items-center space-y-4 pt-12">
    <div class='text-center mt-16 text-xl'>
        <span>Because you want to generate empathy</span>

        <h1 class='text-4xl font-extrabold text-center mt-3 mb-4'>CUSTOMER REVIEWS</h1>
    </div>
	
    <div class="container mx-auto py-4">
        <div class="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
          {#each data as item}
            <div class="flex flex-col items-center py-2 sm:py-2 sm:mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 140 140" class="mb-4">
                <path d="M0 0h140v140H0z" fill="#e5e7eb" />
                <path d="M88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z" fill="#e5e7eb" />
                <path d="M89.48 52.32H50.29a4.52 4.52 0 00-4.52 4.52V84a4.53 4.53 0 004.52 4.52h39.19A4.52 4.52 0 0094 84V56.84a4.52 4.52 0 00-4.52-4.52zm-33.16 5.27a5.28 5.28 0 11-5.27 5.28 5.27 5.27 0 015.27-5.28zM88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z" fill="#d1d5db" />
              </svg>
              <h1 class="text-xl font-bold">{item.name}</h1>
              <p class="text-gray-500">{item.subtitle}</p>
            </div>
          {/each}
        </div>
        <div class='flex w-full mt-12 pb-20 justify-center'>
            <Button class="w-96 h-10 items-center text-sm">READ 1000+ MORE TESTIMONIALS</Button>
        </div>
        
      </div>



    
</section>