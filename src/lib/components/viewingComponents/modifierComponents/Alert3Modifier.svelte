<script>
	import { svgOutlineList } from '../svg-outline';
	import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
	export let swCodeH;
	let svgPicker = false;
	let useFilteredList = false;
	let svgFilteredList = [];
	let hex = '#181A2A';
</script>

<div class="flex gap-1 justify-center">
	<ColorPicker
		on:input={(e) =>
			swCodeH.selectedElement.mc.$set({
				svgStroke: e.detail.hex
			})}
		label="SVG Color"
		bind:hex
		components={ChromeVariant}
	/>
	<div class="tooltip tooltip-left" data-tip="SVG Color Reset">
		<button
			class="btn btn-square"
			on:click={() => {
				swCodeH.selectedElement.mc.$set({
					svgStroke: 'currentColor'
				});
				hex = '#181A2A';
			}}
		>
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
	</div>
	<div class="tooltip tooltip-left" data-tip="SVG Picker">
		<button
			class="btn btn-square"
			on:click={() => {
				svgPicker = true;
			}}
		>
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
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
		</button>
	</div>
	<div class="tooltip tooltip-left" data-tip="SVG Size">
		<button
			class="btn btn-square"
			on:click={() => {
				swCodeH.selectedElement.mc.$set({
					svgw: swCodeH.selectedElement.mc.svgw - 1,
					svgh: swCodeH.selectedElement.mc.svgh - 1
				});
			}}
		>
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
	</div>
	<div class="tooltip tooltip-left" data-tip="SVG Size">
		<button
			class="btn btn-square"
			on:click={() => {
				swCodeH.selectedElement.mc.$set({
					svgw: (swCodeH.selectedElement.mc.svgw += 1),
					svgh: (swCodeH.selectedElement.mc.svgh += 1)
				});
			}}
		>
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
</div>
{#if svgPicker}
	<input
		type="text"
		placeholder="Search all icons"
		on:change={(e) => {
			if (e.target.value.length > 0) {
				useFilteredList = true;
				svgFilteredList = svgOutlineList.filter((svg) => svg.name.includes(e.target.value));
			} else {
				useFilteredList = false;
			}
		}}
		class="input w-full max-w-xs mt-2 mb-2"
	/>
	<div class="grid grid-cols-2 gap-4">
		{#if useFilteredList}
			{#each svgFilteredList as svgIcon}
				<button
					on:click={() => {
						svgPicker = false;
						swCodeH.selectedElement.mc.$set({
							svg: svgIcon.content
						});
					}}
					class="w-full border-[1px] border-[#E6E6E6] card grid content-center justify-center hover:cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mx-auto w-6 h-6 self-end justify-center"
					>
						{@html svgIcon.content}
					</svg>
					<h1 class="font-semibold self-center">{svgIcon.name}</h1>
				</button>
			{/each}
		{:else}
			{#each svgOutlineList as svgIcon}
				<button
					on:click={() => {
						svgPicker = false;
						swCodeH.selectedElement.mc.$set({
							svg: svgIcon.content
						});
					}}
					class="w-full border-[1px] border-[#E6E6E6] card grid content-center justify-center hover:cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mx-auto w-6 h-6 self-end justify-center"
					>
						{@html svgIcon.content}
					</svg>
					<h1 class="font-semibold self-center">{svgIcon.name}</h1>
				</button>
			{/each}
		{/if}
	</div>
{:else}
	<input
		type="text"
		placeholder="Title"
		value={swCodeH.selectedElement.mc.title}
		on:change={(e) => {
			swCodeH.selectedElement.mc.$set({
				title: e.target.value
			});
		}}
		class="input w-full max-w-xs mt-2"
	/>
	<input
		type="text"
		placeholder="Description"
		value={swCodeH.selectedElement.mc.description}
		on:change={(e) => {
			swCodeH.selectedElement.mc.$set({
				description: e.target.value
			});
		}}
		class="input w-full max-w-xs mt-2"
	/>
	<input
		type="text"
		placeholder="CTA"
		value={swCodeH.selectedElement.mc.cta}
		on:change={(e) => {
			swCodeH.selectedElement.mc.$set({
				cta: e.target.value
			});
		}}
		class="input w-full max-w-xs mt-2"
	/>
	<select
		on:change={(e) => {
			if (e.target.value == 'Default alert') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'alert-default'
				});
			} else if (e.target.value == 'Alert info') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'alert-info'
				});
			} else if (e.target.value == 'Alert success') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'alert-success'
				});
			} else if (e.target.value == 'Alert warning') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'alert-warning'
				});
			} else if (e.target.value == 'Alert error') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'alert-error'
				});
			}
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>Default alert</option>
		<option>Alert info</option>
		<option>Alert success</option>
		<option>Alert warning</option>
		<option>Alert error</option>
	</select>
{/if}
