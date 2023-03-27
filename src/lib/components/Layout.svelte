<script>
	import '../app.css';
	import ActionButtons from './ActionButtons.svelte';
	import Canvas from './Canvas.svelte';
	import { swCode } from './CodeStore';
	import { onMount } from 'svelte';
	// @ts-ignore
	// @ts-ignore
	export let data;
	let undoRedoDispatched = false;
	// useEffect(() => {
	// 	undoRedoDispatched = !undoRedoDispatched
	// },() => [undoRedoDispatched])
	// onMount(() => {
	// 	// @ts-ignore
	// 	swCode.update((v) => ({
	// 		// @ts-ignore
	// 		source: data.data.source,
	// 		swediting: v.swediting
	// 	}));
	// });
</script>

<div data-theme="corporate" class="h-[100vh] w-[100vw]">
	<div class="flex h-full w-full">
		<ActionButtons />
		{#key undoRedoDispatched}
			<Canvas on:undo-redo={(e) => (undoRedoDispatched = e.detail)} {data}>
				<slot />
			</Canvas>
		{/key}
	</div>
</div>
