import { writable } from 'svelte/store';

export let sideleft = writable<string>('');
export let typerelation = writable<string>('');

export let taskrelationships = writable<any>([]);
export let tasklistdependencies = writable<any>([]);

export let taskcurrentrelationships = writable<any>(null);
export let checklistindexselected = writable<any>(null);

export let opendependencies = writable<boolean>(false);
export let istypingComment = writable<boolean>(false);
export let showReplies = writable<boolean>(false);

export let currentCommentIndex = writable<number>(0);

