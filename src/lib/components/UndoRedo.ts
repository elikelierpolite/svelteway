import { writable } from 'svelte/store';

export const undoRedoDispatched = writable({
    value: false
});