<script>
	import { Circle, Mail, Phone } from 'lucide-svelte';
</script>

<section class="container flex flex-col">
	<div
		class="flex flex-col items-center space-y-4 py-9 pl-0 sm:flex-row sm:space-x-2 sm:space-y-0 sm:pl-36"
	>
		<span class="inline-flex items-center">
			<Circle size="20" class="mr-2" />
			<span class="text-lg sm:text-xl">Availability: January 22, 2022</span>
		</span>
		<span class="inline-flex items-center">
			<Phone size="20" class="ml-2" />
			<span class="ml-2 text-lg sm:text-xl">0987 654 3210</span>
		</span>
		<span class="inline-flex items-center">
			<Mail size="20" class="ml-2" />
			<span class="ml-2 text-lg sm:text-xl">hello@growmodo.com</span>
		</span>
	</div>
</section>
