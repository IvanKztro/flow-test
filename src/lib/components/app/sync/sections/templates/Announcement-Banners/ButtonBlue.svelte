<script>
  
    let isVisible = true;
  
    function handleClose() {
      isVisible = false;
    }
  </script>
  
  {#if isVisible}
  <!-- Announcement Banner -->
  <div id="ab-full-width-with-dismiss-button-on-blue-bg" class="hs-removing:-translate-y-full bg-blue-600 mt-24">
    <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
      <div class="flex">
        <p class="text-white">
          Preline UI Figma is live. <a class="decoration-2 underline font-medium hover:text-white/80" href="../figma.html">Learn more</a>
        </p>
  
        <div class="ps-3 ms-auto">
          <button 
            type="button" 
            class="inline-flex rounded-lg p-1.5 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            on:click={handleClose}
          >
            <span class="sr-only">Dismiss</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Announcement Banner -->
  {/if}
  