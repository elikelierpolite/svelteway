<script>
	//@ts-nocheck
	import ToolbarSettings from './ToolbarSettings.svelte';
	import { onMount } from 'svelte';
	import { swToolbar } from '../CodeStore';

	onMount(async () => {
		if ($swToolbar?.id == 'styles') {
			(async () => {
				const ToolbarStyles = (await import('./ToolbarStyles.svelte')).default;
				const stylesTarget = document.getElementById('tbs');
				new ToolbarStyles({ target: stylesTarget });
			})();
		}
	});
</script>

<div>
	{#key $swToolbar?.id}
	{#if $swToolbar?.id == 'toolbar'}
		<ToolbarSettings />
	{:else}
		<div id="tbs" />
	{/if}
	{/key}
</div>
