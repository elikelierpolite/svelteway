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
		<footer
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
        <div>
            <span class="footer-title">Services</span>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Branding</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Design</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Marketing</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Advertisement</a>
        </div>
        <div>
            <span class="footer-title">Company</span>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">About us</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Contact</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Jobs</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Press kit</a>
        </div>
        <div>
            <span class="footer-title">Legal</span>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Terms of use</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Privacy policy</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link link-hover">Cookie policy</a>
        </div>
		</footer>
	</div>
{:else}
	<footer
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
    <div>
        <span class="footer-title">Services</span>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Branding</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Design</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Marketing</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Advertisement</a>
    </div>
    <div>
        <span class="footer-title">Company</span>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">About us</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Contact</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Jobs</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Press kit</a>
    </div>
    <div>
        <span class="footer-title">Legal</span>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Terms of use</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Privacy policy</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link link-hover">Cookie policy</a>
    </div>
	</footer>
{/if}
