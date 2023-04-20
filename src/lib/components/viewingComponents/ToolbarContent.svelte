<script>//@ts-nocheck
	import ToolbarSettings from './ToolbarSettings.svelte';
	import ToolbarStyles from './ToolbarStyles.svelte';
	import { onMount } from 'svelte'
	import { swToolbar } from '../CodeStore'

	onMount(async () => {
		if($swToolbar?.id !== 'toolbar'){
			const stylesTarget = document.getElementById("tbs")
			new ToolbarStyles({ target: stylesTarget })
		}
	})
</script>

<div>
		{#if $swToolbar?.id == 'toolbar'}
			<ToolbarSettings />
				{:else}
					{#if ToolbarStyles}
						<div id="tbs" />
					{:else}
						<h1>Loading...</h1>
					{/if}
		{/if}
</div>
