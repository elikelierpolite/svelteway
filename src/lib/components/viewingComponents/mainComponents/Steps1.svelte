<svelte:options accessors />

<script>
	import { createEventDispatcher } from 'svelte';
	import { swCode } from '../../CodeStore';

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
		<ul
			on:keypress={(e) => e.stopPropagation()}
			on:click={(e) => {
				e.stopPropagation();
				dispatchSelect('selected', { value: true, id: swElementDataAttrId });
			}}
			data-cvelement="${swElementDataAttrId}"
			id={`${swElementDataAttrId}`}
			style={`border: ${swc.selectedElement.id == swElementDataAttrId && '1px solid #FF531A'}`}
			class={classes.join(' ')}
		>
			<li class="step step-primary">Register</li>
			<li class="step step-primary">Choose plan</li>
			<li class="step">Purchase</li>
			<li class="step">Receive Product</li>
		</ul>
	</div>
{:else}
	<ul
		on:keypress={(e) => e.stopPropagation()}
		on:click={(e) => {
			e.stopPropagation();
			dispatchSelect('selected', { value: true, id: swElementDataAttrId });
		}}
		data-cvelement="${swElementDataAttrId}"
		id={`${swElementDataAttrId}`}
		style={`border: ${swc.selectedElement.id == swElementDataAttrId && '1px solid #FF531A'}`}
		class={classes.join(' ')}
	>
		<li class="step step-primary">Register</li>
		<li class="step step-primary">Choose plan</li>
		<li class="step">Purchase</li>
		<li class="step">Receive Product</li>
	</ul>
{/if}