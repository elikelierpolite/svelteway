<script>import { swToolbar } from '../CodeStore';
	import ToolbarSettings from './ToolbarSettings.svelte';
	import ToolbarStyles from './ToolbarStyles.svelte';
</script>

{#if $swToolbar.id == 'toolbar'}
	<ToolbarSettings />
{:else}
	<ToolbarStyles />
{/if}
