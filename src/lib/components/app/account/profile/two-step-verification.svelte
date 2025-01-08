<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Megaphone, Sparkles } from 'lucide-svelte';
</script>

<div class="border-foreground-200 space-y-5 border-t py-6 first:border-t-0 sm:py-8">
	<!-- Grid -->
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3 2xl:col-span-3">
			<p class="text-foreground-500 inline-block text-sm sm:mt-2.5">Two Step Verification</p>
		</div>
		<!-- End Col -->

		<div class="sm:col-span-8 xl:col-span-6">
			<section  class="bg-blue-100  rounded-lg p-3">
                <div class="flex items-center gap-3">
                    <Megaphone class="size-5 text-blue-600 " />
                    <h4 class="text-blue-600" >Advanced security features are available on Enterprise</h4>

                </div>
                <Button variant="outline" size="icon" class="w-auto px-4 block ml-auto mt-3 flex">
                    <Sparkles class="size-4" />
                    <span class="">Upgrade</span>
                    </Button>
			</section>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
