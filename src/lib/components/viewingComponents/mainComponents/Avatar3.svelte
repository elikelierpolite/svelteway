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
		>
			<div class="w-24 rounded-xl">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
			<div class="w-24 rounded-full">
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
		style={`border: ${swc.selectedElement.id == swElementDataAttrId && '1px solid #FF531A'}`}
		class={classes.join('  ')}
	>
		<div class="w-24 rounded-xl">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 rounded-full">
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
	</div>
{/if}
