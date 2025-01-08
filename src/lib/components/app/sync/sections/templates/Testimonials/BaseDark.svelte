<script lang="ts">
	import { Button } from '$lib/components/ui/button';
    import { Play } from 'lucide-svelte';
	// import { Icon } from "$lib/components/ui/icon";

	const testimonial = {
		name: 'Philip',
		title: 'CEO at Day Spa',
		quote:
			"I'm absolutely floored by the level of care and attention to detail the team at Preline have put into this project and for one can guarantee that we will be a return customer."
	};
</script>

<!-- Testimonials -->
<div class="bg-black">
	<div class="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:px-8 lg:py-24">
		<blockquote class="mx-auto max-w-4xl">
			<p class="mb-6 md:text-lg">
				<span class="font-semibold text-lime-400">{testimonial.name},</span>
				<span class="text-neutral-500">{testimonial.title}</span>
			</p>

			<p class="text-xl text-white sm:text-2xl md:text-3xl md:leading-normal">
				{testimonial.quote}
			</p>

			<footer class="mt-6 md:mt-10">
				<div class="border-neutral-700">
					<Button variant="outline">
                        <Play />
                    </Button>
				</div>
			</footer>
		</blockquote>
	</div>
</div>
<!-- End Testimonials -->
