<script>
	import { swToolbar } from '../CodeStore';
	import ToolbarSettings from './ToolbarSettings.svelte';
	import ToolbarStyles from './ToolbarStyles.svelte';
</script>

<div>
	{#key $swToolbar.id}
		{#if $swToolbar.id == 'toolbar'}
			<ToolbarSettings />
		{:else}
			<ToolbarStyles />
		{/if}
	{/key}
</div>
