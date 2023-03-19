<script>
	import '../app.css';
	import './patch';
	import ActionButtons from './ActionButtons.svelte';
	import StateButtons from './StateButtons.svelte';
	import Canvas from './Canvas.svelte';
	import { swCode } from './CodeStore';
	import { onMount } from 'svelte';
	import approach2 from './State';
	// @ts-ignore
	const store = swCode;
	const undoRedoStore = approach2(store);
	const history = undoRedoStore.history;
	// @ts-ignore
	export let data;
	onMount(() => {
		// @ts-ignore
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
			<Canvas {undoRedoStore} {data}>
				<slot />
			</Canvas>
		<StateButtons {data} {undoRedoStore} />
	</div>
</div>
