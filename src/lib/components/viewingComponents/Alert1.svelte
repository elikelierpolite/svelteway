<svelte:options accessors />

<script>
	import { createEventDispatcher } from 'svelte';
	import { swCode } from '../CodeStore';
	
	$: swc = $swCode
	/**
	 * @type {any}
	 */
	export let swElementDataAttrId;
	export let svg;
	export let title;
	/**
	 * @type {{ width: any; top: any; left: any; }}
	 */

	const dispatchSelect = createEventDispatcher();
</script>

<div
	on:keypress={(e) => e.stopPropagation()}
	on:click={(e) => {
		e.stopPropagation();
		dispatchSelect('selected', { value: true, id: swElementDataAttrId });
	}}
	data-cvelement="${swElementDataAttrId}"
	id={`${swElementDataAttrId}`}
	style={`border: ${swc.selectedElement.id == swElementDataAttrId && '1px solid #FF531A'}`}
	class={`alert alert-info shadow-lg hover:border-[1px] hover:border-[#FF531A]`}
>
	<div>
		{@html svg}
		<span>{title}</span>
	</div>
</div>
