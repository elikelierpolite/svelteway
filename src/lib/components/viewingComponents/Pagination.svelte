<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('pagination1', {
			swElementDataAttrId: sweid,
			classes: ['btn-group'],
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
	<button class="w-full" on:click={addComponent}>
		<div class="btn-group">
			<button class="btn">1</button>
			<button class="btn btn-active">2</button>
			<button class="btn">3</button>
			<button class="btn">4</button>
		</div>
	</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<div class="btn-group">
				<button class="btn btn-xs">1</button>
				<button class="btn btn-xs btn-active">2</button>
				<button class="btn btn-xs">3</button>
				<button class="btn btn-xs">4</button>
			</div>
			<div class="btn-group">
				<button class="btn btn-sm">1</button>
				<button class="btn btn-sm btn-active">2</button>
				<button class="btn btn-sm">3</button>
				<button class="btn btn-sm">4</button>
			</div>
			<div class="btn-group">
				<button class="btn btn-md">1</button>
				<button class="btn btn-md btn-active">2</button>
				<button class="btn btn-md">3</button>
				<button class="btn btn-md">4</button>
			</div>
			<div class="btn-group">
				<button class="btn btn-lg">1</button>
				<button class="btn btn-lg btn-active">2</button>
				<button class="btn btn-lg">3</button>
				<button class="btn btn-lg">4</button>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="btn-group">
			<button class="btn">1</button>
			<button class="btn">2</button>
			<button class="btn btn-disabled">...</button>
			<button class="btn">99</button>
			<button class="btn">100</button>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="btn-group">
			<button class="btn">«</button>
			<button class="btn">Page 22</button>
			<button class="btn">»</button>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="btn-group grid grid-cols-2">
			<button class="btn btn-outline">Previous page</button>
			<button class="btn btn-outline">Next</button>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
