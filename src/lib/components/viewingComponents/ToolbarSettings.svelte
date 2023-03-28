<script>
	import { swCode } from '../CodeStore';
	import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
	const { selectedElement } = $swCode;
	let hex = '#181A2A';
</script>

<div>
	{#if selectedElement.element == 'alert1'}
		<div class="flex gap-1 justify-center">
			<ColorPicker label="SVG Color" bind:hex components={ChromeVariant} />
			<button class="btn btn-square">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
			<button class="btn btn-square">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					{@html selectedElement.mc.svg}
				</svg>
			</button>
			<button class="btn btn-square">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
				</svg>
			</button>
			<button class="btn btn-square">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
			</button>
		</div>
		<select
			on:change={(e) => {
				if (e.target.value == 'Default alert') {
					selectedElement.setClassModifier({ from: selectedElement.mc.classes[0], to: 'alert-default' });
				} else if (e.target.value == 'Alert info') {
					selectedElement.setClassModifier({ from: selectedElement.mc.classes[0], to: 'alert-info' });
				} else if (e.target.value == 'Alert success') {
					selectedElement.setClassModifier({
						from: selectedElement.mc.classes[0],
						to: 'alert-success'
					});
				} else if (e.target.value == 'Alert warning') {
					selectedElement.setClassModifier({
						from: selectedElement.mc.classes[0],
						to: 'alert-warning'
					});
				} else if (e.target.value == 'Alert error') {
					selectedElement.setClassModifier({ from: selectedElement.mc.classes[0], to: 'alert-error' });
				}
			}}
			class="select w-full max-w-xs mt-2"
		>
			<option disabled selected>Modifier</option>
			<option>Default alert</option>
			<option>Alert info</option>
			<option>Alert success</option>
			<option>Alert warning</option>
			<option>Alert error</option>
		</select>
	{/if}
</div>

<style></style>
