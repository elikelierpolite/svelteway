<script>
	//@ts-nocheck
	import ToolbarSettings from './ToolbarSettings.svelte';
	import ToolbarStyles from './ToolbarStyles.svelte';
	import { swToolbar } from '../CodeStore';

</script>

<div>
	{#key $swToolbar?.id}
	{#if $swToolbar?.id == 'toolbar'}
		<ToolbarSettings />
	{:else}
		<ToolbarStyles />
	{/if}
	{/key}
</div>
