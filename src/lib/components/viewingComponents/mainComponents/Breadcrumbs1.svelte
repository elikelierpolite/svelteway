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
	export let content1;
	export let content2;
	export let content3;
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
		<ul>
			<!-- svelte-ignore a11y-missing-attribute -->
			<li><a>{content1}</a></li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<li><a>{content2}</a></li>
			<li>{content3}</li>
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
		style={`border: ${swc.selectedElement.id == swElementDataAttrId && '1px solid #FF531A'}`}
		class={classes.join('  ')}
	>
	<ul>
		<!-- svelte-ignore a11y-missing-attribute -->
		<li><a>{content1}</a></li>
		<!-- svelte-ignore a11y-missing-attribute -->
		<li><a>{content2}</a></li>
		<li>{content3}</li>
	</ul>
	</div>
{/if}
