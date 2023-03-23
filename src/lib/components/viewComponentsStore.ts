import { writable } from 'svelte/store';

export const viewComponent = writable({
    viewing: false,
    component: "Alert"
});