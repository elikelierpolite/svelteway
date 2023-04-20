<script>
	//@ts-nocheck
	import ToolbarSettings from './ToolbarSettings.svelte';
	import { onMount } from 'svelte';
	import { swToolbar } from '../CodeStore';

	onMount(async () => {
		if ($swToolbar?.id !== 'toolbar') {
			(async () => {
				const ToolbarStyles = await import('./ToolbarStyles.svelte');
				const stylesTarget = document.getElementById('tbs');
				new ToolbarStyles({ target: stylesTarget });
			})();
		}
	});
</script>

<div>
	{#if $swToolbar?.id == 'toolbar'}
		<ToolbarSettings />
	{:else}
		<div id="tbs" />
	{/if}
</div>
