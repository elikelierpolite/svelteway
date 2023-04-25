// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { writable } from 'svelte/store';

export const swCode = writable({
	cvElements: [],
	selectedElement: {}
});

export const swToolbar = writable({
	id: 'toolbar'
});
