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
			class={classes.join(' ')}
		>
			<div>
				<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
					1
				</div>
				<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
					2
				</div>
				<div
					class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
				>
					3
				</div>
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
		class={classes.join(' ')}
	>
		<div>
			<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
				1
			</div>
			<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
			<div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
				3
			</div>
		</div>
	</div>
{/if}
