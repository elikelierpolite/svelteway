<script>//@ts-nocheck
	import { onMount } from 'svelte';
	let swCode
	let cvElement
	onMount(async () => {
		const { swCode:swCode2, cvElement:cvElement2 } = await import('../CodeStore')
		swCode = swCode2
		cvElement = cvElement2
	})
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('modal1', {
			swElementDataAttrId: sweid,
			classes: [''],
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
	<button class="w-full grid content-center justify-center" on:click={addComponent}>
		<!-- The button to open modal -->
		<label class="btn">open modal</label>

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
	</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- The button to open modal -->
		<a href="#my-modal-2" class="btn">open modal</a>
		<!-- Put this part before </body> tag -->
		<div class="modal" id="my-modal-2">
			<div class="modal-box">
				<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
				<p class="py-4">
					You've been selected for a chance to get one year of subscription to use Wikipedia for
					free!
				</p>
				<div class="modal-action">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" class="btn">Yay!</a>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- The button to open modal -->
		<label for="my-modal-3" class="btn">open modal</label>

		<!-- Put this part before </body> tag -->
		<input type="checkbox" id="my-modal-3" class="modal-toggle" />
		<div class="modal">
			<div class="modal-box relative">
				<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
				<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
				<p class="py-4">
					You've been selected for a chance to get one year of subscription to use Wikipedia for
					free!
				</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- The button to open modal -->
		<label for="my-modal-4" class="btn">open modal</label>

		<!-- Put this part before </body> tag -->
		<input type="checkbox" id="my-modal-4" class="modal-toggle" />
		<label for="my-modal-4" class="modal cursor-pointer">
			<label class="modal-box relative" for="">
				<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
				<p class="py-4">
					You've been selected for a chance to get one year of subscription to use Wikipedia for
					free!
				</p>
			</label>
		</label>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- The button to open modal -->
		<label for="my-modal-5" class="btn">open modal</label>

		<!-- Put this part before </body> tag -->
		<input type="checkbox" id="my-modal-5" class="modal-toggle" />
		<div class="modal">
			<div class="modal-box w-11/12 max-w-5xl">
				<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
				<p class="py-4">
					You've been selected for a chance to get one year of subscription to use Wikipedia for
					free!
				</p>
				<div class="modal-action">
					<label for="my-modal-5" class="btn">Yay!</label>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- The button to open modal -->
		<label for="my-modal-6" class="btn">open modal</label>

		<!-- Put this part before </body> tag -->
		<input type="checkbox" id="my-modal-6" class="modal-toggle" />
		<div class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
				<p class="py-4">
					You've been selected for a chance to get one year of subscription to use Wikipedia for
					free!
				</p>
				<div class="modal-action">
					<label for="my-modal-6" class="btn">Yay!</label>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
