<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('stack1', {
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
		<div>
			<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
				1
			</div>
			<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
			<div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
				3
			</div>
		</div>
	</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="stack">
			<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
				1
			</div>
			<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
			<div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
				3
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="stack mb-4">
			<img
				src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
				alt="Image 1"
				class="rounded w-28"
			/>
			<img
				src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
				alt="Image 2"
				class="rounded w-28"
			/>
			<img
				src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
				alt="Image 3"
				class="rounded w-28"
			/>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="stack">
			<div class="text-center border border-base-content card w-36 bg-base-100">
				<div class="card-body">A</div>
			</div>
			<div class="text-center border border-base-content card w-36 bg-base-100">
				<div class="card-body">B</div>
			</div>
			<div class="text-center border border-base-content card w-36 bg-base-100">
				<div class="card-body">C</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="stack">
			<div class="text-center shadow-md w-36 card bg-base-200">
				<div class="card-body">A</div>
			</div>
			<div class="text-center shadow w-36 card bg-base-200">
				<div class="card-body">B</div>
			</div>
			<div class="text-center shadow-sm w-36 card bg-base-200">
				<div class="card-body">C</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="stack">
			<div class="card shadow-md bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title">Notification 1</h2>
					<p>You have 3 unread messages. Tap here to see.</p>
				</div>
			</div>
			<div class="card shadow bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title">Notification 2</h2>
					<p>You have 3 unread messages. Tap here to see.</p>
				</div>
			</div>
			<div class="card shadow-sm bg-primary text-primary-content">
				<div class="card-body">
					<h2 class="card-title">Notification 3</h2>
					<p>You have 3 unread messages. Tap here to see.</p>
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
