<script>
	import '../app.css';
    import ActionButtons from './ActionButtons.svelte';
    import StateButtons from './StateButtons.svelte';
    import Canvas from './Canvas.svelte';
	import { onMount } from "svelte";

    export let data
</script>

<div data-theme="corporate" class="h-[100vh] w-[100vw]">
	<div class="flex h-full w-full">
        <ActionButtons />
		<Canvas>
			<slot />
		</Canvas>
        <StateButtons />
	</div>
</div>
