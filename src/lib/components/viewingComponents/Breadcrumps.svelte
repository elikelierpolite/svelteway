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

		let newCvElement = new cvElement('breadcrumbs1', {
			swElementDataAttrId: sweid,
			classes: ['text-sm', 'breadcrumbs'],
			content1: 'Home',
			content2: 'Documents',
			content3: 'Add Document',
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
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent2() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('breadcrumbs2', {
			swElementDataAttrId: sweid,
			classes: ['text-sm', 'breadcrumbs'],
			content1: 'Home',
			content2: 'Documents',
			content3: 'Add Document',
			svgw1: 4,
			svgh1: 4,
			svgStroke1: 'currentColor',
			svg1: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>`,
			svgh2: 4,
			svgw2: 4,
			svgStroke2: 'currentColor',
			svg2: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>`,
			svgh3: 4,
			svgw3: 4,
			svgStroke3: 'currentColor',
			svg3: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>`,
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
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent3() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('breadcrumbs3', {
			swElementDataAttrId: sweid,
			classes: ['max-w-xs', 'text-sm', 'breadcrumbs'],
			content1: 'Long text 1',
			content2: 'Long text 2',
			content3: 'Long text 3',
			content4: 'Long text 4',
			content5: 'Long text 5',
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
			<div class="text-sm breadcrumbs">
				<ul>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Home</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Documents</a></li>
					<li>Add Document</li>
				</ul>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="w-full grid content-center justify-center" on:click={addComponent2}>
			<div class="text-sm breadcrumbs">
				<ul>
					<li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="w-4 h-4 mr-2 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
								/></svg
							>
							Home
						</a>
					</li>
					<li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="w-4 h-4 mr-2 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
								/></svg
							>
							Documents
						</a>
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-4 h-4 mr-2 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/></svg
						>
						Add Document
					</li>
				</ul>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="w-full grid content-center justify-center" on:click={addComponent3}>
			<div class="max-w-xs text-sm breadcrumbs">
				<ul>
					<li>Long text 1</li>
					<li>Long text 2</li>
					<li>Long text 3</li>
					<li>Long text 4</li>
					<li>Long text 5</li>
				</ul>
			</div>
		</button>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
