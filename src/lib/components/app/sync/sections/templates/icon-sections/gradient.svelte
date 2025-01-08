<script>
    import { BookOpen, Code, Smartphone, MessageSquare } from "lucide-svelte";
  </script>
  
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
          <Smartphone />
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800">Responsive</h3>
          <p class="mt-1 text-gray-600">Responsive, and mobile-first project on the web</p>
        </div>
      </div>
      <!-- End Icon Block -->
  
      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
          <Code />
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800">Customizable</h3>
          <p class="mt-1 text-gray-600">Components are easily customized and extendable</p>
        </div>
      </div>
      <!-- End Icon Block -->
  
      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
          <BookOpen />
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800">Documentation</h3>
          <p class="mt-1 text-gray-600">Every component and plugin is well documented</p>
        </div>
      </div>
      <!-- End Icon Block -->
  
      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
          <MessageSquare />
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800">24/7 Support</h3>
          <p class="mt-1 text-gray-600">Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
      <!-- End Icon Block -->
    </div>
  </div>