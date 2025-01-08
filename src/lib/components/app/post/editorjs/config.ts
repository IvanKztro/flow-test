import type { API, OutputData } from '@editorjs/editorjs';
import { tools } from './tools';

export async function createEditor(
	saveInterval: number = 1000,
	data: OutputData = { blocks: [] },
	fieldName?: string
): Promise<any> {
	const { default: EditorJS } = await import('@editorjs/editorjs');
	const { default: Undo } = await import('editorjs-undo');
	const editor = new EditorJS({
		/**
		 * Id of Element that should contain Editor instance
		 */
		holder: `editorjs-${fieldName}`,
		autofocus: true,
		placeholder: 'Type / to choose a block or type text',
		tools,
		data: data,
		minHeight: 30,
		onReady: () => {
			new Undo({ editor });
		},
		onChange: debounce(async (api: API, event) => {
			saveDataEditor(api, data);
		}, saveInterval)
	});

	return editor;
}

async function saveDataEditor(api: API, data: any): Promise<void> {
	const datatemp = await api.saver.save();
	data = datatemp;
}

function debounce(
	func: (...args: any[]) => Promise<void>,
	timeout: number
): (...args: any[]) => void {
	let timer: NodeJS.Timeout | null;
	return (...args: any[]) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(null, args);
		}, timeout);
	};
}
