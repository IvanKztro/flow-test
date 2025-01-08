<script>
const chapters = [
  {
    title: "CHAPTER 1",
    description: "Write a quick summary of this chapter and point out the benefits they get from it. Sell them the chapter instead of just telling them what it’s about."
  },
  {
    title: "CHAPTER 2",
    description: "Write a quick summary of this chapter and point out the benefits they get from it. Sell them the chapter instead of just telling them what it’s about."
  },
  {
    title: "CHAPTER 3",
    description: "Write a quick summary of this chapter and point out the benefits they get from it. Sell them the chapter instead of just telling them what it’s about."
  },
  {
    title: "CHAPTER 4",
    description: "Write a quick summary of this chapter and point out the benefits they get from it. Sell them the chapter instead of just telling them what it’s about."
  },
  {
    title: "CHAPTER 5",
    description: "Write a quick summary of this chapter and point out the benefits they get from it. Sell them the chapter instead of just telling them what it’s about."
  },
  {
    title: "CHAPTER 6",
    description: "Write a quick summary of this chapter and point out the benefits they get from it. Sell them the chapter instead of just telling them what it’s about."
  },
  {
    title: "CHAPTER 7",
    description: "Write a quick summary of this chapter and point out the benefits they get from it. Sell them the chapter instead of just telling them what it’s about."
  }
];
</script>

<section class="container mx-auto flex flex-col space-y-4 pt-1 sm:flex-row sm:space-x-4 sm:space-y-0 mt-2">
	<div class="flex w-full flex-col items-center py-3 sm:flex-row sm:pl-36 sm:pr-24">
		<div class=" grid w-full mt-28 mb-24 grid-cols-1 sm:grid-cols-2">
            <div class="w-auto mr-2 whitespace-pre-line text-center font-extrabold  sm:text-center text-3xl sm:text-4xl">
				<span class=''>SHOW YOUR READERS WHAT 
                    YOUR BOOK IS ALL ABOUT</span>
                    
                <div class='mt-16 mr-3'>
                    {#each chapters.slice(0, 3) as chapter}
                        <div class='mt-4 text-justify'>
                            <h1 class='text-lg font-bold mb-8'>{chapter.title}</h1>
                            <p class='text-lg font-normal mb-10'>{chapter.description}</p>
                        </div>
                    {/each}
                </div>
				
			</div>
            <div class="w-auto mr-2 whitespace-pre-line text-center font-extrabold  sm:text-center text-3xl sm:text-4xl">
                <div class='ml-3'>
                    {#each chapters.slice(3, 7) as chapter}
                        <div class='text-justify'>
                            <h1 class='text-lg font-bold mb-8'>{chapter.title}</h1>
                            <p class='text-lg font-normal mb-10'>{chapter.description}</p>
                        </div>
                    {/each}
                </div>
                
            </div>
        </div>
    </div>
</section>