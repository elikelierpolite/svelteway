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
	export let content1;
	export let content2;
	export let content3;
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
			<ul>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke={`${svgStroke1}`}
							class={`w-${svgw1} h-${svgh1} mr-2`}
						>
							{@html svg1}</svg
						>
						{content1}
					</a>
				</li>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke={`${svgStroke2}`}
						class={`w-${svgw2} h-${svgh2} mr-2`}
					>
						{@html svg2}</svg
					>
					{content2}
				</li>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke={`${svgStroke3}`}
							class={`w-${svgw3} h-${svgh3} mr-2`}
						>
							{@html svg3}</svg
						>
						{content3}
					</a>
				</li>
			</ul>
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
		<ul>
			<li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke={`${svgStroke1}`}
						class={`w-${svgw1} h-${svgh1} mr-2`}
					>
						{@html svg1}</svg
					>
					{content1}
				</a>
			</li>
			<li>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke={`${svgStroke2}`}
					class={`w-${svgw2} h-${svgh2} mr-2`}
				>
					{@html svg2}</svg
				>
				{content2}
			</li>
			<li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke={`${svgStroke3}`}
						class={`w-${svgw3} h-${svgh3} mr-2`}
					>
						{@html svg3}</svg
					>
					{content3}
				</a>
			</li>
		</ul>
	</div>
{/if}
