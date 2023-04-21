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
	export let item1ImgSrc;
	export let item2ImgSrc;
	export let item3ImgSrc;
	export let item4ImgSrc;
	export let item5ImgSrc;
	export let item6ImgSrc;
	export let item7ImgSrc;
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
			<div class="carousel-item">
				<img src={item1ImgSrc} alt="Burger" />
			</div>
			<div class="carousel-item">
				<img src={item2ImgSrc} alt="Burger" />
			</div>
			<div class="carousel-item">
				<img src={item3ImgSrc} alt="Burger" />
			</div>
			<div class="carousel-item">
				<img src={item4ImgSrc} alt="Burger" />
			</div>
			<div class="carousel-item">
				<img src={item5ImgSrc} alt="Burger" />
			</div>
			<div class="carousel-item">
				<img src={item6ImgSrc} alt="Burger" />
			</div>
			<div class="carousel-item">
				<img src={item7ImgSrc} alt="Burger" />
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
		<div class="carousel-item">
			<img src={item1ImgSrc} alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src={item2ImgSrc} alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src={item3ImgSrc} alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src={item4ImgSrc} alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src={item5ImgSrc} alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src={item6ImgSrc} alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src={item7ImgSrc} alt="Burger" />
		</div>
	</div>
{/if}
