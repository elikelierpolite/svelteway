<script>
	//@ts-nocheck
	import ToolbarSettings from './ToolbarSettings.svelte';
	import ToolbarStyles from './ToolbarStyles.svelte';
	import { onMount } from 'svelte';
	import { swToolbar } from '../CodeStore';

</script>

<div>
	{#if $swToolbar?.id == 'toolbar'}
		<ToolbarSettings />
	{:else}
		<ToolbarStyles />
	{/if}
</div>