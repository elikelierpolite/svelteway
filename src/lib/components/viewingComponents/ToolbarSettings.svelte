<script>
	import { swCode } from '../CodeStore';
	import ToolTipModifier from './modifierComponents/ToolTipModifier.svelte';
	import Alert1Modifier from './modifierComponents/Alert1Modifier.svelte';
	import Alert2Modifier from './modifierComponents/Alert2Modifier.svelte';
	import Alert3Modifier from './modifierComponents/Alert3Modifier.svelte';
	$: swCodeH = $swCode;
</script>

<div>
	{#key swCodeH.selectedElement}
		{#if swCodeH.selectedElement.element == 'alert1'}
			<Alert1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'alert2'}
			<Alert2Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'alert3'}
			<Alert3Modifier {swCodeH} />
		{/if}
		{#if swCodeH.selectedElement.element}
			<ToolTipModifier {swCodeH} />
		{/if}
	{/key}
</div>

<style></style>
