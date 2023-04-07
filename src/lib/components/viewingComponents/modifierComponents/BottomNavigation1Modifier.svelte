<script>
	import { svgOutlineList } from '../svg-outline';
	import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
	export let swCodeH;
	let svgPicker = { status: false, index: 1 };
	let useFilteredList = false;
	let svgFilteredList = [];
	let hex = '#181A2A';
	let hex2 = '#181A2A';
	let hex3 = '#181A2A';
</script>

<div class="flex gap-1 justify-center">
	<ColorPicker
		on:input={(e) =>
			swCodeH.selectedElement.mc.$set({
				svgStroke1: e.detail.hex
			})}
		label="SVG Color"
		bind:hex
		components={ChromeVariant}
	/>
	<div class="tooltip tooltip-left" data-tip="SVG Color Reset">
		<button
			class="btn btn-square"
			on:click={() => {
				console.log(swCodeH.selectedElement.props);
				swCodeH.selectedElement.mc.$set({
					svgStroke1: 'currentColor'
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
				svgPicker = { status: true, index: 1 };
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
					svgw1: swCodeH.selectedElement.mc.svgw1 - 1,
					svgh1: swCodeH.selectedElement.mc.svgh1 - 1
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
					svgw1: (swCodeH.selectedElement.mc.svgw1 += 1),
					svgh1: (swCodeH.selectedElement.mc.svgh1 += 1)
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
<div class="flex gap-1 justify-center">
	<ColorPicker
		on:input={(e) =>
			swCodeH.selectedElement.mc.$set({
				svgStroke2: e.detail.hex
			})}
		label="SVG Color"
		bind:hex2
		components={ChromeVariant}
	/>
	<div class="tooltip tooltip-left" data-tip="SVG Color Reset">
		<button
			class="btn btn-square"
			on:click={() => {
				console.log(swCodeH.selectedElement.props);
				swCodeH.selectedElement.mc.$set({
					svgStroke2: 'currentColor'
				});
				hex2 = '#181A2A';
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
				svgPicker = { status: true, index: 2 };
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
					svgw2: swCodeH.selectedElement.mc.svgw2 - 1,
					svgh2: swCodeH.selectedElement.mc.svgh2 - 1
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
					svgw2: (swCodeH.selectedElement.mc.svgw2 += 1),
					svgh2: (swCodeH.selectedElement.mc.svgh2 += 1)
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
<div class="flex gap-1 justify-center">
	<ColorPicker
		on:input={(e) =>
			swCodeH.selectedElement.mc.$set({
				svgStroke3: e.detail.hex
			})}
		label="SVG Color"
		bind:hex3
		components={ChromeVariant}
	/>
	<div class="tooltip tooltip-left" data-tip="SVG Color Reset">
		<button
			class="btn btn-square"
			on:click={() => {
				console.log(swCodeH.selectedElement.props);
				swCodeH.selectedElement.mc.$set({
					svgStroke3: 'currentColor'
				});
				hex3 = '#181A2A';
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
				svgPicker = { status: true, index: 3 };
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
					svgw3: swCodeH.selectedElement.mc.svgw3 - 1,
					svgh3: swCodeH.selectedElement.mc.svgh3 - 1
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
					svgw3: (swCodeH.selectedElement.mc.svgw3 += 1),
					svgh3: (swCodeH.selectedElement.mc.svgh3 += 1)
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
{#if svgPicker.status}
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
						svgPicker = { ...svgPicker, status: false };
						if (svgPicker.index == 3) {
							swCodeH.selectedElement.mc.$set({
								svg3: svgIcon.content
							});
						} else if (svgPicker.index == 2) {
							swCodeH.selectedElement.mc.$set({
								svg2: svgIcon.content
							});
						} else if (svgPicker.index == 1) {
							swCodeH.selectedElement.mc.$set({
								svg1: svgIcon.content
							});
						}
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
						svgPicker = { ...svgPicker, status: false };
						if (svgPicker.index == 3) {
							swCodeH.selectedElement.mc.$set({
								svg3: svgIcon.content
							});
						} else if (svgPicker.index == 2) {
							swCodeH.selectedElement.mc.$set({
								svg2: svgIcon.content
							});
						} else if (svgPicker.index == 1) {
							swCodeH.selectedElement.mc.$set({
								svg1: svgIcon.content
							});
						}
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
	<select
		on:change={(e) => {
			if (e.target.value == 'Default Size') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btm-nav-md'
				});
			} else if (e.target.value == 'btm-nav-xs') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btm-nav-xs'
				});
			} else if (e.target.value == 'btm-nav-sm') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btm-nav-sm'
				});
			} else if (e.target.value == 'btm-nav-md') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btm-nav-md'
				});
			} else if (e.target.value == 'btm-nav-lg') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btm-nav-lg'
				});
			}
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>Default Size</option>
		<option>btm-nav-xs</option>
		<option>btm-nav-sm</option>
		<option>btm-nav-md</option>
		<option>btm-nav-lg</option>
	</select>
{/if}
