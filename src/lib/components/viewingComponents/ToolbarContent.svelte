<script>//@ts-nocheck
	import ToolbarSettings from './ToolbarSettings.svelte';
	import { onMount } from 'svelte'
	import { swToolbar } from '../CodeStore'

	let ToolbarStyles
	onMount(async () => {
		ToolbarStyles = ($swToolbar?.id !== 'toolbar' && await import('./ToolbarStyles.svelte')).default;
	})
</script>

<div>
		{#if $swToolbar?.id == 'toolbar'}
			<ToolbarSettings />
				{:else}
					{#if ToolbarStyles}
						<svelte:component this={ToolbarStyles} />
					{:else}
						<h1>Loading...</h1>
					{/if}
		{/if}
</div>
