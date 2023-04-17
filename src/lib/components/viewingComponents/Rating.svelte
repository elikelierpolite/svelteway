<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('rating1', {
			swElementDataAttrId: sweid,
			classes: ['rating'],
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
			// @ts-ignore
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
	<button class="w-full" on:click={addComponent}>
		<div class="rating">
			<input type="radio" name="rating-1" class="mask mask-star" />
			<input type="radio" name="rating-1" class="mask mask-star" checked />
			<input type="radio" name="rating-1" class="mask mask-star" />
			<input type="radio" name="rating-1" class="mask mask-star" />
			<input type="radio" name="rating-1" class="mask mask-star" />
		</div>
	</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="rating">
			<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
			<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
			<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
			<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
			<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="rating gap-1">
			<input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
			<input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="rating">
			<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
			<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
			<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
			<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
			<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<!-- xs -->
			<div class="rating rating-xs">
				<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
				<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
			</div>
			<!-- sm -->
			<div class="rating rating-sm">
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
			</div>
			<!-- md -->
			<div class="rating rating-md">
				<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked />
				<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
			</div>
			<!-- lg -->
			<div class="rating rating-lg">
				<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" checked />
				<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="rating rating-lg">
			<input type="radio" name="rating-9" class="rating-hidden" />
			<input type="radio" name="rating-9" class="mask mask-star-2" />
			<input type="radio" name="rating-9" class="mask mask-star-2" checked />
			<input type="radio" name="rating-9" class="mask mask-star-2" />
			<input type="radio" name="rating-9" class="mask mask-star-2" />
			<input type="radio" name="rating-9" class="mask mask-star-2" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="rating rating-lg rating-half">
			<input type="radio" name="rating-10" class="rating-hidden" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
			<input
				type="radio"
				name="rating-10"
				class="bg-green-500 mask mask-star-2 mask-half-1"
				checked
			/>
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
			<input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
