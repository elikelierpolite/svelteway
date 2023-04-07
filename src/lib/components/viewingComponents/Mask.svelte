<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('mask1', {
			swElementDataAttrId: sweid,
			classes: ['mask', 'mask-squircle'],
			helper: {
				on: false,
				type: 'tooltip',
				classes: ['tooltip'],
				title: 'Hello World!'
			}
		});
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
</script>

<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="w-full grid content-center justify-center" on:click={addComponent}>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				class="mask mask-squircle"
				src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
			/>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-heart"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-hexagon"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-hexagon-2"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-decagon"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-pentagon"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-diamond"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-square"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-circle"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-parallelogram"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-parallelogram-2"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-parallelogram-3"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-parallelogram-4"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-star"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-star-2"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-triangle"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-triangle-2"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-triangle-3"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="mask mask-triangle-4"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
		/>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
