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
			class={classes.join(' ')}
		>
			<!-- The button to open modal -->
			<label for="my-modal" class="btn">open modal</label>

			<!-- Put this part before </body> tag -->
			<input type="checkbox" id="my-modal" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box">
					<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
					<p class="py-4">
						You've been selected for a chance to get one year of subscription to use Wikipedia for
						free!
					</p>
					<div class="modal-action">
						<label for="my-modal" class="btn">Yay!</label>
					</div>
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
		style={`border: ${swc.selectedElement.id == swElementDataAttrId && '1px solid #FF531A'}`}
		class={classes.join(' ')}
	>
		<!-- The button to open modal -->
		<label for="my-modal" class="btn">open modal</label>

		<!-- Put this part before </body> tag -->
		<input type="checkbox" id="my-modal" class="modal-toggle" />
		<div class="modal">
			<div class="modal-box">
				<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
				<p class="py-4">
					You've been selected for a chance to get one year of subscription to use Wikipedia for
					free!
				</p>
				<div class="modal-action">
					<label for="my-modal" class="btn">Yay!</label>
				</div>
			</div>
		</div>
	</div>
{/if}
