<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';
	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-1', '', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '320×568',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent2() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-2', '', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '375×667',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent3() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-3', '', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '414×736',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent4() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-4', '', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '375×812',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent5() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-5', '', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '414×896',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent6() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-6', '', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '320×1024',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent7() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-1', 'artboard-horizontal', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '568×320',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent8() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-2', 'artboard-horizontal', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '667×375',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent9() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-3', 'artboard-horizontal', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '736×414',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent10() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-5', 'artboard-horizontal', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '896×414',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent11() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'artboard1',
			{
				swElementDataAttrId: sweid,
				classes: ['phone-6', 'artboard-horizontal', 'artboard', 'bg-white', 'grid', 'justify-center', 'content-center'],
				content: '1024×320',
				helper: {
					on: false,
					type: 'tooltip',
					classes: ['tooltip'],
					title: 'Hello World!'
				}
			},
		);
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
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
		<button class="artboard phone-1 bg-white grid justify-center content-center" on:click={addComponent}>320×568</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard phone-2 bg-white grid justify-center content-center" on:click={addComponent2}>375×667</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard phone-3 bg-white grid justify-center content-center" on:click={addComponent3}>414×736</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard phone-4 bg-white grid justify-center content-center" on:click={addComponent4}>375×812</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard phone-5 bg-white grid justify-center content-center" on:click={addComponent5}>414×896</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard phone-6 bg-white grid justify-center content-center" on:click={addComponent6}>320×1024</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard artboard-horizontal phone-1 bg-white grid justify-center content-center" on:click={addComponent7}>568×320</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard artboard-horizontal phone-2 bg-white grid justify-center content-center" on:click={addComponent8}>667×375</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard artboard-horizontal phone-3 bg-white grid justify-center content-center" on:click={addComponent9}>736×414</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard artboard-horizontal phone-5 bg-white grid justify-center content-center" on:click={addComponent10}>896×414</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="artboard artboard-horizontal phone-6 bg-white grid justify-center content-center" on:click={addComponent11}>1024×320</button>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
