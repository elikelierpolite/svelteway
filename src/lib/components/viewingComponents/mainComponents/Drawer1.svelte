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
	export let btnText;
	export let item1Text;
	export let item2Text;
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
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div class="flex flex-col items-center justify-center drawer-content">
				<label for="my-drawer" class="btn btn-primary drawer-button">{btnText}</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100 text-base-content">
					<!-- Sidebar content here -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>{item1Text}</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>{item2Text}</a></li>
				</ul>
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
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col items-center justify-center drawer-content">
        <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
    </div>
    <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay" />
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Sidebar Item 1</a></li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Sidebar Item 2</a></li>
        </ul>
    </div>
	</div>
{/if}
