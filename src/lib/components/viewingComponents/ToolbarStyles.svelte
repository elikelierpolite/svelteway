<script>
	//@ts-nocheck
	import LayoutStyles from './styleComponents/LayoutStyles.svelte';
	import SpacingStyles from './styleComponents/SpacingStyles.svelte';
	import SizingStyles from './styleComponents/SizingStyles.svelte';
	import TypographyStyles from './styleComponents/TypographyStyles.svelte';
	import BackgroundsStyles from './styleComponents/BackgroundsStyles.svelte';
	import BordersStyles from './styleComponents/BordersStyles.svelte';
	import EffectsStyles from './styleComponents/EffectsStyles.svelte';
	import FiltersStyles from './styleComponents/FiltersStyles.svelte';
	import TablesStyles from './styleComponents/TablesStyles.svelte';
	import TransitionsAndAnimationsStyles from './styleComponents/TransitionsAndAnimationsStyles.svelte';
	import InteractivityStyles from './styleComponents/InteractivityStyles.svelte';
	import SvgStyles from './styleComponents/SvgStyles.svelte';
	import AccessibilityStyles from './styleComponents/AccessibilityStyles.svelte';
	import { onMount } from 'svelte';

	let readyStyles = false;
	let swCode;
	let swToolbar;
	onMount(async () => {
		setTimeout(() => {
			readyStyles = true;
		}, 1);
		const { swCode: swCode2, swToolbar: swToolbar2 } = await import('../CodeStore');
		swCode = swCode2;
		swToolbar = swToolbar2;
	});
	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	let nodeRef;
	function handleClickOutside() {
		swToolbar.update(() => ({ id: 'toolbar' }));
		$swCode.selectedElement.toggleToolBar();
		nodeRef.parentNode.removeChild(nodeRef);
	}
</script>

<div bind:this={nodeRef} use:clickOutside on:click_outside={handleClickOutside}>
	{#key readyStyles}
		{#if readyStyles}
			<LayoutStyles />
			<SpacingStyles />
			<SizingStyles />
			<TypographyStyles />
			<BackgroundsStyles />
			<BordersStyles />
			<EffectsStyles />
			<FiltersStyles />
			<TablesStyles />
			<TransitionsAndAnimationsStyles />
			<InteractivityStyles />
			<SvgStyles />
			<AccessibilityStyles />
		{:else}
			<div class="grid content-center justify-center align-middle h-[100vh]">
				<button class="my-auto btn btn-ghost loading self-center">loading</button>
			</div>
		{/if}
	{/key}
</div>
