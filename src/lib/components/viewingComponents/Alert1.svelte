<svelte:options accessors />

<script>
	import { createEventDispatcher } from 'svelte';
	import { swCode } from '../CodeStore';
	import * as swTransitions from 'svelte/transition';

	$: swc = $swCode;
	/**
	 * @type {any}
	 */
	export let swElementDataAttrId;
	export let svg;
	export let title;
	export let svgw;
	export let svgh;
	export let svgStroke;
	export let classes;
	export let swTransition;
	export let missing;
	/**
	 * @type {{ width: any; top: any; left: any; }}
	 */

	const dispatchSelect = createEventDispatcher();
	const animate = (node, args) => {
		console.log(swTransition)
		console.log(node)
		console.log(args)
		swTransition == 'fade'
			? swTransitions.fade(node, args)
			: swTransition == 'blur'
			? swTransitions.blur(node, args)
			: swTransition == 'fly'
			? swTransitions.fly(node, args)
			: swTransition == 'slide'
			? swTransitions.slide(node, args)
			: swTransition == 'scale'
			? swTransitions.scale(node, args)
			: swTransition == 'none'
			? 'none'
			: 'none';
	}
</script>

{#if !missing}
<div
on:keypress={(e) => e.stopPropagation()}
on:click={(e) => {
	e.stopPropagation();
	dispatchSelect('selected', { value: true, id: swElementDataAttrId });
	}}
	data-cvelement="${swElementDataAttrId}"
	id={`${swElementDataAttrId}`}
	style={`border: ${swc.selectedElement.id == swElementDataAttrId && '1px solid #FF531A'}`}
	class={classes.join('  ')}
	transition:animate
>
<div>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke={`${svgStroke}`}
	class={`w-${svgw} h-${svgh}`}
	>
	{@html svg}
</svg>
		<span>{title}</span>
	</div>
</div>
{/if}
