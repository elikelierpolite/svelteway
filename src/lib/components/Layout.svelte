<script>
	import '../app.css';
	import './patch';
	import ActionButtons from './ActionButtons.svelte';
	import StateButtons from './StateButtons.svelte';
	import Canvas from './Canvas.svelte';
	import { swCode } from './CodeStore';
	import { onMount } from 'svelte';
	import approach2 from './State';
	import { produce } from 'immer';
	import { undoRedoDispatched } from './UndoRedo';
	// @ts-ignore
	let store = swCode;
	let undoRedoStore = approach2(store);
	let history = undoRedoStore.history;
	$: undoRedoRan = $undoRedoDispatched;
	// @ts-ignore
	export let data;
	onMount(() => {
		// @ts-ignore
		const localHistory = JSON.parse(window.localStorage.getItem(`history-${data.data.file}`));
		if (localHistory && localHistory.length > 0) {
			$undoRedoStore = produce($undoRedoStore, (draft) => {
				draft.history = localHistory;
			});
		} else return;
		swCode.update((v) => ({
			// @ts-ignore
			source: data.data.source,
			swediting: v.swediting
		}));
	});
</script>

<div data-theme="corporate" class="h-[100vh] w-[100vw]">
	<div class="flex h-full w-full">
		<ActionButtons />
		{#key undoRedoRan}
			<Canvas {undoRedoStore} {data}>
				<slot />
			</Canvas>
		{/key}
		<StateButtons {data} {undoRedoStore} />
	</div>
</div>
