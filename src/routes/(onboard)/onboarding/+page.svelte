<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { valibot } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { personalInfoSchema } from '$lib/schemas/personal-info.js';
	import { languages } from '$lib/data/languages.js';
	import { countries } from '$lib/data/countries.js';
	import { timezones } from '$lib/data/timezones';
	import * as Select from '$lib/components/ui/select/index.js';
	import { firekitAuth, firekitDoc, firekitDocMutations, firekitUser } from 'svelte-firekit';
	import { goto } from '$app/navigation';
	let userData = $state(firekitDoc(`users/${firekitUser.uid}`));

	const data = defaults(valibot(personalInfoSchema));

	const form = superForm(data, {
		validators: valibot(personalInfoSchema),
		dataType: 'json',
		SPA: true,
		resetForm: false,
		clearOnSubmit: 'errors-and-message',
		async onUpdate({ form }) {
			if (!form.valid) return;
			try {
				const { data } = form;
				await firekitAuth.updateUserProfile({ displayName: data.displayName });
				await firekitDocMutations.update(`users/${userData.data.uid}`, {
					...data,
					onboardingCompleted: true
				});

				toast.success('Onboarding completed in successfully');
                goto("/dashboard")
			} catch (error) {
				if (error instanceof Error) {
					toast.error(error.message);
				} else {
					toast.error('An error occurred');
				}
			}
		}
	});

	const { form: formData, enhance } = form;

	let languageTemp = $derived.by(() => {
		const res = languages.find((lang) => lang.code === $formData.language);
		if (res) {
			return { label: `${res.flag} ${res.name}`, value: res.code };
		}
		return { label: `Select a Language`, value: 'Select a Language' };
	});

	let timezoneTemp = $derived.by(() => {
		const res = timezones.find((tz) => tz.value === $formData.timeZone);
		if (res) {
			return { label: `${res.text}`, value: res.value };
		}
		return { label: `Select a Timezone`, value: 'Select a Timezone' };
	});

	let locationTemp = $derived.by(() => {
		const res = countries.find((locat) => locat.code === $formData.location);
		if (res) {
			return { label: `${res.country}`, value: res.code };
		}
		return { label: `Select a Location`, value: 'Select a Location' };
	});

	$effect(() => {
		if (userData.data) {
			$formData.displayName = userData.data.displayName as string;
			$formData.language = userData.data.language;
			$formData.timeZone = userData.data.timeZone;
			$formData.location = userData.data.location;
		}
	});
</script>

<div class="w-[40dvw] rounded-lg p-8 shadow-lg">
	<h4 class="my-3 text-center text-2xl font-semibold">On Boarding</h4>
	<div class="flex flex-wrap items-center gap-3 sm:gap-5">
		{#if userData.data}
			<form method="POST" use:enhance class="w-full space-y-2" action="?/changePersonalInfo">
				<Form.Field {form} name="displayName">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Full Name</Form.Label>
							<Input {...props} bind:value={$formData.displayName} placeholder="John" />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="language">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Language</Form.Label>
							<Select.Root type="single" name="language" bind:value={$formData.language}>
								<Select.Trigger class="">
									{languageTemp?.label}
								</Select.Trigger>
								<Select.Content class="max-h-[250px] overflow-y-auto">
									<Select.Group>
										<Select.GroupHeading>Language</Select.GroupHeading>
										{#each languages as language}
											<Select.Item value={language.code} label={language.name}>
												{language.flag} {language.name}</Select.Item
											>
										{/each}
									</Select.Group>
								</Select.Content>
							</Select.Root>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="timeZone">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Timezone</Form.Label>
							<Select.Root type="single" name="timeZone" bind:value={$formData.timeZone}>
								<Select.Trigger class=" overflow-x-hidden">
									{timezoneTemp?.label}
								</Select.Trigger>
								<Select.Content class="max-h-[250px] overflow-y-auto ">
									<Select.Group>
										<Select.GroupHeading>Timezone</Select.GroupHeading>
										{#each timezones as timezone}
											<Select.Item value={timezone.value} label={timezone.text}>
												{timezone.text}</Select.Item
											>
										{/each}
									</Select.Group>
								</Select.Content>
							</Select.Root>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="location">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Location</Form.Label>
							<Select.Root type="single" name="location" bind:value={$formData.location}>
								<Select.Trigger class="">
									{locationTemp?.label}
								</Select.Trigger>
								<Select.Content class="max-h-[250px] overflow-y-auto">
									<Select.Group>
										<Select.GroupHeading>Location</Select.GroupHeading>
										{#each countries as location}
											<Select.Item value={location.code} label={location.country}>
												{location.country}</Select.Item
											>
										{/each}
									</Select.Group>
								</Select.Content>
							</Select.Root>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<br />
				<Form.Button class="ml-auto block">Save</Form.Button>
			</form>
		{/if}
	</div>
</div>
