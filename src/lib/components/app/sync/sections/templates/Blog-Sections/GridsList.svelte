<script>
    const cards = [
      {
        title: 'Studio by Preline',
        description: "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
        imgSrc: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        link: '#'
      },
      {
        title: 'Onsite',
        description: 'Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval',
        imgSrc: 'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
        link: '#'
      },
      {
        title: 'The complete guide to OKRs',
        description: 'How to make objectives and key results work for your company',
        imgSrc: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        link: '#'
      },
      {
        title: 'People program models',
        description: 'Six approaches to bringing your People strategy to life',
        imgSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        link: '#'
      }
    ];
  </script>
  
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
      {#each cards as card}
        <a class="group rounded-xl overflow-hidden" href="{card.link}">
          <div class="sm:flex">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="{card.imgSrc}" alt="Image Description">
            </div>
  
            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">{card.title}</h3>
              <p class="mt-3 text-gray-600">{card.description}</p>
              <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </p>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
  