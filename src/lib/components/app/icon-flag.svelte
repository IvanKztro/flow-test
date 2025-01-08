<script lang="ts">
	import { Flag } from 'lucide-svelte';
	//   export let flagtype:string;
	//   export let hastext:boolean = false;
	//   export let className:string="w-4 h-4";

	let { flagtype, hastext, className = 'w-4 h-4' } = $props();

	const typeFlag: any = {
		Urgent: 'text-red-700',
		High: 'text-yellow-700',
		Normal: 'text-blue-700',
		Low: 'text-slate-700'
	};
</script>

<div class="{typeFlag[flagtype]} flex items-center gap-1">
	<Flag class=" {className} "></Flag>
	{#if hastext}
		<small>{flagtype}</small>
	{/if}
</div>
