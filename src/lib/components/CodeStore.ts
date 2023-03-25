import { writable } from 'svelte/store';

export const swCode = writable({
    source: "<script>\n</script>",
    swediting: false
});

export const swCodeElement = writable({
    id: "",
    file: "",
    swc: []
});