<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Switch } from '$lib/components/ui/switch';
	import { Button } from '$lib/components/ui/button';
	import { Activity, MapPin, Mail, X } from 'lucide-svelte';

	let modalVisible = false;
	let accountActivity = true;
	let meetupsNearYou = false;
	let prelineCommunication = false;

	function toggleModal() {
		modalVisible = !modalVisible;
	}
</script>

<div class="text-center mt-12">
	<Button
		aria-haspopup="dialog"
		aria-expanded={modalVisible}
		aria-controls="hs-notifications"
		on:click={toggleModal}
	>
		Open modal
	</Button>
</div>

{#if modalVisible}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
		role="dialog"
		aria-labelledby="hs-notifications-label"
	>
		<div class="relative m-3 w-full max-w-lg rounded-xl bg-white shadow-lg">
			<Card.Root>
				<Card.Header>
					<div class="flex items-center justify-between p-4">
						<Card.Title>Notifications</Card.Title>
						<Button
							aria-label="Close"
							on:click={toggleModal}
						>
							<X />
						</Button>
					</div>
				</Card.Header>
				<Card.Content class="overflow-y-auto p-4 sm:p-10">
					<div class="space-y-4">
						<div class="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm">
							<div class="flex gap-x-5">
								<Activity class="mt-1 shrink-0 text-gray-500" size={24} />
								<span class="grow">
									<span class="block font-medium text-gray-800">Account Activity</span>
									<span class="block text-sm text-gray-500"
										>Get important notifications about you or activity you've missed</span
									>
								</span>
								<Switch bind:checked={accountActivity} />
							</div>
						</div>
						<div class="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm">
							<div class="flex gap-x-5">
								<MapPin class="mt-1 shrink-0 text-gray-500" size={24} />
								<span class="grow">
									<span class="block font-medium text-gray-800">Meetups Near You</span>
									<span class="block text-sm text-gray-500"
										>Get an email when a Preline Meetup is posted close to my location</span
									>
								</span>
								<Switch bind:checked={meetupsNearYou} />
							</div>
						</div>
						<div class="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm">
							<div class="flex gap-x-5">
								<Mail class="mt-1 shrink-0 text-gray-500" size={24} />
								<span class="grow">
									<span class="block font-medium text-gray-800">Preline Communication</span>
									<span class="block text-sm text-gray-500"
										>Get Preline news, announcements, and product updates</span
									>
								</span>
								<Switch bind:checked={prelineCommunication} />
							</div>
						</div>
					</div>
				</Card.Content>
				<Card.Footer class="flex items-center justify-end gap-x-2 px-4 py-3">
					<Button on:click={toggleModal}>
						Cancel
					</Button>
					<Button href="#">
						Update notifications
					</Button>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
{/if}
