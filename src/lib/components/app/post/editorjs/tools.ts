// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import ImageTool from '@editorjs/image';
// @ts-ignore
import Delimiter from '@editorjs/delimiter';
// @ts-ignore
import Quote from '@editorjs/quote';
// @ts-ignore
import Table from '@editorjs/table';
// @ts-ignore
import Marker from '@editorjs/marker';
// @ts-ignore
import Embed from '@editorjs/embed';
// @ts-ignore
import Warning from '@editorjs/warning';
// @ts-ignore
// import Tooltip from "editorjs-tooltip";
// @ts-ignore
// import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';

import Underline from '@editorjs/underline';
import { firekitUser, firekitUploadTask } from 'svelte-firekit';

export const tools = {
	header: {
		class: Header,
		inlineToolbar: true,
		config: {
			placeholder: 'Enter a header',
			levels: [1, 2, 3, 4, 5, 6],
			defaultLevel: 2
		},
		// tunes: ['alignment']
	},
	paragraph: {
		class: Paragraph,
		inlineToolbar: true,
		// tunes: ['alignment']
	},
	// alignment: {
	// 	class: AlignmentTuneTool,
	// 	config: {
	// 		default: 'left', // Alineación predeterminada
	// 		blocks: {
	// 			header: 'left',
	// 			paragraph: 'left'
	// 			// list: 'left'
	// 		}
	// 	}
	// },
	warning: Warning,
	delimiter: Delimiter,
	list: {
		class: List,
		inlineToolbar: true
		// tunes: ['alignment']
	},
	quote: {
		class: Quote,
		inlineToolbar: true,
		shortcut: 'CMD+SHIFT+O',
		config: {
			quotePlaceholder: 'Enter a quote',
			captionPlaceholder: "Quote's author"
		}
	},
	embed: {
		class: Embed,
		inlineToolbar: ['link'],
		config: {
			services: {
				youtube: true,
				coub: true,
				facebook: true,
				twitter: true,
				twitch: true,
				miro: true,
				vimeo: true,
				gfycat: true,
				imgur: true,
				vine: true,
				aparat: true,
				codepen: true,
				pinterest: true
			}
		}
	},
	image: {
		class: ImageTool,
		config: {
			uploader: {
				async uploadByFile(file: File) {
					let height, width;

					var _URL = window.URL || window.webkitURL;

					let img = new Image();
					img.onload = function () {
						height = img.height;
						width = img.width;
					};
					img.src = _URL.createObjectURL(file);

					const uploadTask = firekitUploadTask(
						`posts/${firekitUser.uid}/${file.name}`,
						file
					);

					while (!uploadTask.completed) {
						if (uploadTask.error) {
							throw uploadTask.error;
						}
						await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 100ms
						console.log('waiting');
					}

					return {
						success: 1,
						file: {
							url: uploadTask.URLdownload,
							height,
							width
						}
					};
				}
			}
		},
		// tunes: ['alignment']
	},
	table: {
		class: Table
	},
	Marker: {
		class: Marker,
		shortcut: 'CMD+SHIFT+M'
	},
	underline: Underline
};
