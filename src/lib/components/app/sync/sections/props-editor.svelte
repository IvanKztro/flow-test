<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/';
	import { Label } from '$lib/components/ui/label/';
	import { Textarea } from '$lib/components/ui/textarea/';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { sectionConfigs } from '.';
	import { sectionProps } from './currentSection.svelte';
	import { syncManager } from '../sync-manager.svelte';

	let props = $derived(sectionProps.getSection()?.settings);
	// let entries = $derived(Object.entries(props || {}))
	let sectionId = $derived(sectionProps.getSection()?.id);

	let currentSection = $derived(
		sectionConfigs.find((config) => config.type == sectionProps.getSection()?.type)
	);

	$effect(() => {
		console.log(props);
	});
	function onChange(event: Event) {
		const { name, value } = event.target as HTMLInputElement;
		if (props && sectionId) {
			syncManager.updateSectionSetting(sectionId, name, value);
		}
	}
	function onSelectChange(id: string, value: string) {
		if (sectionId) syncManager.updateSectionSetting(sectionId, id, value);
	}
	function onToggle(id: string, value: boolean | string) {
		if (sectionId && typeof value == 'boolean')
			syncManager.updateSectionSetting(sectionId, id, value);
	}
</script>

<div class="w-full">
	<section class="">
		{#if currentSection}
			<h4 class="mx-3 font-semibold text-slate-500">Edit Props: {currentSection.name}</h4>
			{#each currentSection.settings as setting}
				{@const lblId = `lbl-${setting.id}`}
				<div class="flex w-full max-w-sm flex-col gap-1.5 p-2">
					<Label for={lblId} class="text-xs opacity-80">{setting.label}- {setting.type}</Label>
					{#if setting.type == 'text'}
						<Input
							placeholder={setting.label}
							value={props?.[setting.id]}
							oninput={onChange}
							name={setting.id}
							id={lblId}
						/>
					{:else if setting.type == 'textarea'}
						<Textarea
							placeholder={setting.label}
							value={props?.[setting.id]}
							oninput={onChange}
							name={setting.id}
							id={lblId}
						/>
					{:else if setting.type == 'image'}
						<Input placeholder={setting.label} value={props?.[setting.id]} />
						<img src={props?.[setting.id]} alt="logo" class="size-8 rounded bg-blue-400" />
					{:else if setting.type == 'checkbox'}
						<div class="flex items-center space-x-2">
							<Checkbox
								checked={props?.[setting.id]}
								onCheckedChange={(e) => onToggle(setting.id, e)}
								name={setting.id}
								id={`checkbox-${setting.id}`}
								aria-labelledby="terms-label"
							/>
							<Label
								id={`label-${setting.id}`}
								for={`checkbox-${setting.id}`}
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{setting.label}
							</Label>
						</div>
					{:else if setting.type == 'select'}
						<p>{setting.label}</p>
						{#if setting.options}
							<Select.Root
								type="single"
								name={setting.id}
								onValueChange={(v) => v && onSelectChange(setting.id, v)}
							>
								<Select.Trigger class="w-[180px]">
									{props?.[setting.id]}
								</Select.Trigger>
								<Select.Content>
									<Select.Group>
										<Select.GroupHeading>{setting.label}</Select.GroupHeading>
										{#each setting.options as opt}
											<Select.Item value={opt.value} label={opt.label}>
												{opt.label}
											</Select.Item>
										{/each}
									</Select.Group>
								</Select.Content>
							</Select.Root>
						{:else}
							<p>no options yet</p>
						{/if}
					{:else if setting.type == 'color'}
						<Input type="color" onchange={onChange} name={setting.id} />
					{:else if setting.type == 'range'}
						<input type="range" onchange={onChange} name={setting.id} />
					{:else}
						<p>rich text missing</p>
					{/if}
				</div>
			{/each}
		{/if}
	</section>
</div>
