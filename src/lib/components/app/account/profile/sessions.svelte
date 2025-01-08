<script lang="ts">
	import { presenceService } from "svelte-firekit";
</script>

<div class="border-foreground-200 space-y-5 border-t py-6 first:border-t-0 sm:py-8">
	<!-- Grid -->
	<div class="grid gap-y-1.5 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-0">
		<div class="sm:col-span-4 xl:col-span-3 2xl:col-span-3">
			<p class="text-foreground-500 inline-block text-sm sm:mt-2.5">Sessions</p>
		</div>
		<!-- End Col -->

		<div class="flex items-center gap-3 sm:col-span-8 xl:col-span-6 border border-slate-200 rounded-sm border-[1px] overflow-x-scroll px-2 py-4">
			<section class="flex gap-3 ">
				<div class="rounded-lg border border-[2px] border-blue-400 px-3 py-2 w-[250px]">
					<p><span class="font-semibold">Device: </span> {presenceService.currentSession?.deviceId}</p>
					<!-- <p><span class="font-semibold">IP Address: </span> {presenceService.currentSession?.ip}</p> -->
					<!-- <p><span class="font-semibold">Location: </span> {presenceService.currentSession?.location}</p> -->
					<p><span class="font-semibold">Status: </span> {presenceService.currentSession?.status}</p>
				</div>
				{#each presenceService.sessions as session}
					{#if presenceService.currentSession?.uid !== session?.uid}
						<div class="rounded-lg border border-[1px] border-slate-400 px-3 py-2 w-[250px]">
							<p><span class="font-semibold">Device: </span> {session?.deviceId}</p>
							<!-- <p><span class="font-semibold">IP Address: </span> {session?.ip}</p>
							<p><span class="font-semibold">Location: </span> {session?.location}</p> -->
							<p><span class="font-semibold">Status: </span> {session?.status}</p>
						</div>
					{/if}
				{/each}
			</section>
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
