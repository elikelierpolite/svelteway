<script>
	import { swCode } from '../CodeStore';
	import { svgOutlineList } from './svg-outline';
	import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
	$: swCodeH = $swCode;
	let svgPicker = false;
	let hex = '#181A2A';
</script>

<div>
	{#key swCodeH.selectedElement}
		{#if swCodeH.selectedElement.element == 'alert1'}
			<div class="flex gap-1 justify-center">
				<ColorPicker
					on:input={(e) =>
						swCodeH.selectedElement.setProps({
							title: swCodeH.selectedElement.mc.title,
							svg: swCodeH.selectedElement.mc.svg,
							svgStroke: e.detail.hex,
							svgw: swCodeH.selectedElement.mc.svgw,
							svgh: swCodeH.selectedElement.mc.svgh
						})}
					label="SVG Color"
					bind:hex
					components={ChromeVariant}
				/>
				<button
					class="btn btn-square"
					on:click={() => {
						swCodeH.selectedElement.setProps({
							title: swCodeH.selectedElement.mc.title,
							svg: swCodeH.selectedElement.mc.svg,
							svgStroke: 'currentColor',
							svgw: swCodeH.selectedElement.mc.svgw,
							svgh: swCodeH.selectedElement.mc.svgh
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
						{@html swCodeH.selectedElement.mc.svg}
					</svg>
				</button>
				<button
					class="btn btn-square"
					on:click={() => {
						swCodeH.selectedElement.setProps({
							title: swCodeH.selectedElement.mc.title,
							svg: swCodeH.selectedElement.mc.svg,
							svgStroke: swCodeH.selectedElement.mc.svgStroke,
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
				<button
					class="btn btn-square"
					on:click={() => {
						swCodeH.selectedElement.setProps({
							title: swCodeH.selectedElement.mc.title,
							svg: swCodeH.selectedElement.mc.svg,
							svgStroke: swCodeH.selectedElement.mc.svgStroke,
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
			{#if svgPicker}
				<div class="grid grid-cols-2 gap-4">
					{#each svgOutlineList as svgIcon}
						<button
							on:click={() => {
								svgPicker = false;
								swCodeH.selectedElement.setProps({
									title: swCodeH.selectedElement.mc.title,
									svg: svgIcon.content,
									svgStroke: swCodeH.selectedElement.mc.svgStroke,
									svgw: swCodeH.selectedElement.mc.svgw,
									svgh: swCodeH.selectedElement.mc.svgh
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
				</div>
			{:else}
				<input
					type="text"
					placeholder="Title"
					value={swCodeH.selectedElement.mc.title}
					on:change={(e) => {
						swCodeH.selectedElement.setProps({
							title: e.target.value,
							svg: swCodeH.selectedElement.mc.svg,
							svgStroke: swCodeH.selectedElement.mc.svgStroke,
							svgw: swCodeH.selectedElement.mc.svgw,
							svgh: swCodeH.selectedElement.mc.svgh
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
					class="select w-full max-w-xs mt-2"
					mb-2
				>
					<option disabled selected>Modifier</option>
					<option>Default alert</option>
					<option>Alert info</option>
					<option>Alert success</option>
					<option>Alert warning</option>
					<option>Alert error</option>
				</select>
				<select
					on:change={(e) => {
						if (e.target.value == 'Fade') {
							swCodeH.selectedElement.setTransition('fade');
						} else if (e.target.value == 'Blur') {
							swCodeH.selectedElement.setTransition('blur');
						} else if (e.target.value == 'Fly') {
							swCodeH.selectedElement.setTransition('fly');
						} else if (e.target.value == 'Slide') {
							swCodeH.selectedElement.setTransition('slide');
						} else if (e.target.value == 'Scale') {
							swCodeH.selectedElement.setTransition('scale');
						} else if (e.target.value == 'None') {
							swCodeH.selectedElement.setTransition('none');
						}
					}}
					class="select w-full max-w-xs mt-2"
				>
					<option disabled selected>Transition</option>
					<option>Fade</option>
					<option>Blur</option>
					<option>Fly</option>
					<option>Slide</option>
					<option>Scale</option>
					<option>None</option>
				</select>
			{/if}
		{/if}
	{/key}
</div>

<style></style>
