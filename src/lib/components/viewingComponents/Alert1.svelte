<svelte:options accessors />

<script>
	import { createEventDispatcher } from 'svelte';
	import { swCode } from '../CodeStore';
	
	$: swc = $swCode
	/**
	 * @type {any}
	 */
	export let swElementDataAttrId;
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
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-current flex-shrink-0 w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>New software update available.</span>
	</div>
</div>
