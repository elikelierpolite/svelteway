<script>
	import { swCode } from '../CodeStore';
	import ToolTipModifier from './modifierComponents/ToolTipModifier.svelte';
	import Alert1Modifier from './modifierComponents/Alert1Modifier.svelte';
	import Alert2Modifier from './modifierComponents/Alert2Modifier.svelte';
	import Alert3Modifier from './modifierComponents/Alert3Modifier.svelte';
	import Artboard1Modifier from './modifierComponents/Artboard1Modifier.svelte';
	import Avatar1Modifier from './modifierComponents/Avatar1Modifier.svelte';
	import BottomNavigation1Modifier from './modifierComponents/BottomNavigation1Modifier.svelte';
	import BottomNavigation9Modifier from './modifierComponents/BottomNavigation9Modifier.svelte';
	import Breadcrumbs1Modifier from './modifierComponents/Breadcrumbs1Modifier.svelte';
	import Breadcrumbs2Modifier from './modifierComponents/Breadcrumbs2Modifier.svelte';
	import Breadcrumbs3Modifier from './modifierComponents/Breadcrumbs3Modifier.svelte';
	import ButtonGroup1Modifier from './modifierComponents/ButtonGroup1Modifier.svelte';
	import Button1Modifier from './modifierComponents/Button1Modifier.svelte';
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
			{:else if swCodeH.selectedElement.element == 'artboard1'}
			<Artboard1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar1'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar2'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar3'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar4'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar5'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar6'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar7'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'avatar8'}
			<Avatar1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav1'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav2'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav3'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav4'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav5'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav6'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav7'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav8'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav9'}
			<BottomNavigation9Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav10'}
			<BottomNavigation9Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btmnav11'}
			<BottomNavigation1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'breadcrumbs1'}
			<Breadcrumbs1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'breadcrumbs2'}
			<Breadcrumbs2Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'breadcrumbs3'}
			<Breadcrumbs3Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btngroup1'}
			<ButtonGroup1Modifier {swCodeH} />
			{:else if swCodeH.selectedElement.element == 'btn1'}
			<Button1Modifier {swCodeH} />
		{/if}
		{#if swCodeH.selectedElement.element}
			<ToolTipModifier {swCodeH} />
		{/if}
	{/key}
</div>

<style></style>
