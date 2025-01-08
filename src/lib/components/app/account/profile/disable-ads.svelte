<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { firekitDocMutations, firekitUser } from 'svelte-firekit';
	let checked = $state(false);

	let { disableAds } = $props();

</script>


<div class="border-foreground-200 space-y-5 border-t py-6 first:border-t-0 sm:py-8">
	<!-- Grid -->
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3 2xl:col-span-3">
			<p class="text-foreground-500 inline-block text-sm sm:mt-2.5">Disable Ads</p>
			<Badge class="bg-blue-600">Pro</Badge>
		</div>
		<!-- End Col -->

		<div class="flex items-center gap-2 sm:col-span-8 xl:col-span-6">
			<Checkbox
				id="terms"
				value={disableAds}
				checked={disableAds}
				aria-labelledby="terms-label"
				onCheckedChange={async(v) => {
                    await firekitDocMutations.update(`users/${firekitUser.uid}`, {disableAds: v})
				}}
			/>
			<Label
				id="terms-label"
				for="terms"
				class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				with your Pro aacount, you can disable ads across the site
			</Label>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
