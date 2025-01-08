<script>
  
    let isVisible = true;
  
  </script>
  
  {#if isVisible}
  <!-- Announcement Banner -->
  <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto mt-24">
    <div class="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
      <p class="me-2 inline-block text-white">
        Preline UI Figma is live.
      </p>
      <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none" href="../figma.html">
        Learn more
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </a>
    </div>
  </div>
  <!-- End Announcement Banner -->
  {/if}
  