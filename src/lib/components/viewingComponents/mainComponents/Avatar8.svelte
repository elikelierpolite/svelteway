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
			<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
				<span class="text-3xl">K</span>
			</div>
			<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
				<span class="text-xl">JO</span>
			</div>
			<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
				<span>MX</span>
			</div>
			<div class="bg-neutral-focus text-neutral-content rounded-full w-8">
				<span class="text-xs">AA</span>
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
		<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
			<span class="text-3xl">K</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
			<span class="text-xl">JO</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
			<span>MX</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-8">
			<span class="text-xs">AA</span>
		</div>
	</div>
{/if}
