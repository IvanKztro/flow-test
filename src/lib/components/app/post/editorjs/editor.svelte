<script lang="ts">
	import { SveltyEditor } from 'svelty-editor';
	import type { OutputData } from '@editorjs/editorjs';
	import { tools } from './tools';

	let editor: any;
	let data: OutputData = { blocks: [] };

	const editorConfig = {
		autofocus: true,
		placeholder: 'Start writing...',
		tools,
		data: data,
		// onChange: (api: any, event: any) => {
		// 	console.log('Content changed:', event);
		// },
		// onReady: () => {
		// 	console.log('Editor is ready!');
		// }
	};
</script>

<!-- <SveltyEditor bind:this={editor} {...editorConfig}  /> -->
<!-- onChange={handleChange} -->
<SveltyEditor {...editorConfig} />
