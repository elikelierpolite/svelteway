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
	export let classes;
	export let helper;
	export let svg1;
	export let svgw1;
	export let svgh1;
	export let svgStroke1;
	export let svg2;
	export let svgw2;
	export let svgh2;
	export let svgStroke2;
	export let svg3;
	export let svgw3;
	export let svgh3;
	export let svgStroke3;
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
			<button class="text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke={`${svgStroke1}`}
					class={`w-${svgw1} h-${svgh1}`}
				>
					{@html svg1}
				</svg>
			</button>
			<button class="text-primary active">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke={`${svgStroke2}`}
					class={`w-${svgw2} h-${svgh2}`}
				>
					{@html svg2}
				</svg>
			</button>
			<button class="text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke={`${svgStroke3}`}
					class={`w-${svgw3} h-${svgh3}`}
				>
					{@html svg3}
				</svg>
			</button>
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
		<button class="text-success">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke={`${svgStroke1}`}
				class={`w-${svgw1} h-${svgh1}`}
			>
				{@html svg1}
			</svg>
		</button>
		<button class="text-success active">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke={`${svgStroke2}`}
				class={`w-${svgw2} h-${svgh2}`}
			>
				{@html svg2}
			</svg>
		</button>
		<button class="text-success">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke={`${svgStroke3}`}
				class={`w-${svgw3} h-${svgh3}`}
			>
				{@html svg3}
			</svg>
		</button>
	</div>
{/if}
