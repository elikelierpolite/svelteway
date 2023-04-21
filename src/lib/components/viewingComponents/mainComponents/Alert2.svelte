<svelte:options accessors />

<script>//@ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	let swCode
	let cvElement
	onMount(async () => {
		const { swCode:swCode2, cvElement:cvElement2 } = await import('../../CodeStore')
		swCode = swCode2
		cvElement = cvElement2
	})

	$: swc = $swCode;
	/**
	 * @type {any}
	 */
	export let swElementDataAttrId;
	export let title;
	export let cta1;
	export let cta2;
	export let svg;
	export let svgw;
	export let svgh;
	export let svgStroke;
	export let classes;
	export let helper;
	/**
	 * @type {{ width: any; top: any; left: any; }}
	 */

	classes.push('hover:border-[1px]', 'hover:border-[#FF531A]');

	const dispatchSelect = createEventDispatcher();
</script>

{#if helper.on}
	<div class={helper.classes.join(' ')} data-tip={helper.title}>
		<div
			on:keypress={(e) => e.stopPropagation()}
			on:click={(e) => {
				e.stopPropagation();
				dispatchSelect('selected', { value: true, id: swElementDataAttrId });
			}}
			data-cvelement="${swElementDataAttrId}"
			id={`${swElementDataAttrId}`}
			style={`border: ${swc?.selectedElement?.id == swElementDataAttrId && '1px solid #FF531A'}`}
			class={classes.join('  ')}
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
			<div class="flex-none">
				<button class="btn btn-sm btn-ghost">{cta1}</button>
				<button class="btn btn-sm btn-primary">{cta2}</button>
			</div>
		</div>
	</div>
{:else}
	<div
		on:keypress={(e) => e.stopPropagation()}
		on:click={(e) => {
			e.stopPropagation();
			dispatchSelect('selected', { value: true, id: swElementDataAttrId });
		}}
		data-cvelement="${swElementDataAttrId}"
		id={`${swElementDataAttrId}`}
		style={`border: ${swc?.selectedElement?.id == swElementDataAttrId && '1px solid #FF531A'}`}
		class={classes.join('  ')}
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
		<div class="flex-none">
			<button class="btn btn-sm btn-ghost">{cta1}</button>
			<button class="btn btn-sm btn-primary">{cta2}</button>
		</div>
	</div>
{/if}
