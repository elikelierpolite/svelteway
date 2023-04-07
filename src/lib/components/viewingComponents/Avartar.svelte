<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar1', {
			swElementDataAttrId: sweid,
			classes: ['', 'avatar'],
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

	function addComponent2() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar2', {
			swElementDataAttrId: sweid,
			classes: ['', 'avatar'],
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

	function addComponent3() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar3', {
			swElementDataAttrId: sweid,
			classes: ['', 'avatar'],
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

	function addComponent4() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar4', {
			swElementDataAttrId: sweid,
			classes: ['', 'avatar'],
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

	function addComponent5() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar5', {
			swElementDataAttrId: sweid,
			classes: ['', , 'avatar', 'avatar-group', '-space-x-6'],
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

	function addComponent6() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar6', {
			swElementDataAttrId: sweid,
			classes: ['', 'avatar', 'avatar-group', '-space-x-6'],
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

	function addComponent7() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar7', {
			swElementDataAttrId: sweid,
			classes: ['', 'avatar'],
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

	function addComponent8() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('avatar8', {
			swElementDataAttrId: sweid,
			classes: ['', 'avatar', 'placeholder'],
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
		<button class="avatar" on:click={addComponent}>
			<div class="w-24 rounded">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- <button on:click={addComponent2}> -->
			<div class="avatar">
				<div class="w-32 rounded">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<div class="avatar">
				<div class="w-20 rounded">
					<img
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						alt="Tailwind-CSS-Avatar-component"
					/>
				</div>
			</div>
			<div class="avatar">
				<div class="w-16 rounded">
					<img
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						alt="Tailwind-CSS-Avatar-component"
					/>
				</div>
			</div>
			<div class="avatar">
				<div class="w-8 rounded">
					<img
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						alt="Tailwind-CSS-Avatar-component"
					/>
				</div>
			</div>
		<!-- </button> -->
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button on:click={addComponent3}>
			<div class="avatar">
				<div class="w-24 rounded-xl">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<div class="avatar">
				<div class="w-24 rounded-full">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button on:click={addComponent4}>
			<div class="avatar">
				<div class="w-24 mask mask-squircle">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<div class="avatar">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="w-24 mask mask-hexagon">
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<div class="avatar">
				<div class="w-24 mask mask-triangle">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button on:click={addComponent5}>
			<div class="avatar-group -space-x-6">
				<div class="avatar">
					<div class="w-12">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="avatar">
					<div class="w-12">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="avatar">
					<div class="w-12">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="avatar">
					<div class="w-12">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
		<button on:click={addComponent6}>
			<div class="avatar-group -space-x-6">
				<div class="avatar">
					<div class="w-12">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="avatar">
					<div class="w-12">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="avatar">
					<div class="w-12">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="avatar placeholder">
					<div class="w-12 bg-neutral-focus text-neutral-content">
						<span>+99</span>
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
		<button on:click={addComponent7}>
			<div class="avatar">
				<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<div class="avatar online">
				<div class="w-24 rounded-full">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<div class="avatar offline">
				<div class="w-24 rounded-full">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button on:click={addComponent8}>
			<div class="avatar placeholder">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
					<span class="text-3xl">K</span>
				</div>
			</div>
			<div class="avatar online placeholder">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
					<span class="text-xl">JO</span>
				</div>
			</div>
			<div class="avatar placeholder">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
					<span>MX</span>
				</div>
			</div>
			<div class="avatar placeholder">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-8">
					<span class="text-xs">AA</span>
				</div>
			</div>
		</button>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
