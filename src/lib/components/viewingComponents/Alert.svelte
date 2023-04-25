<script>
	//@ts-nocheck
import { get } from 'svelte/store';
import { swCode } from '../CodeStore'
import Toolbar from './Toolbar.svelte';
import Alert1 from './Alert1.svelte';
import Alert2 from './mainComponents/Alert2.svelte';
import Alert3 from './mainComponents/Alert3.svelte';
	import { v4 as uuidv4 } from 'uuid';
	const cvElement = class cvElement {
	constructor(element, props) {
		this.id = props.swElementDataAttrId;
		this.element = element;
		this.props = props;
	}
	create() {
		if (this.element == 'alert1') {
			this.mainComponent = new Alert1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'alert2') {
			this.mainComponent = new Alert2({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'alert3') {
			this.mainComponent = new Alert3({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} 
		this.toolbar = new Toolbar({
			target: document.querySelector('#cvh'),
			props: {
				visible: false,
				sweid: this.id
			}
		});
	}
	showToolBar() {
		const { cvElements } = get(swCode);
		swCode.set({ cvElements, selectedElement: this });
		cvElements.forEach((element) => element.disableToolBar());
		this.toolbar.$set({ visible: true });
	}
	toggleToolBar() {
		const toggleToolbar = document.querySelector('#toggle-toolbar');
		toggleToolbar.click();
	}
	disableToolBar() {
		this.toolbar.$set({ visible: false });
	}
	setClassModifier(cls) {
		const arr = [...this.mc.classes];
		for (let index = 0; index < arr.length; index++) {
			if (arr[index] === cls.from) {
				arr[index] = cls.to;
			}
		}
		this.mainComponent.$set({ classes: arr });
	}
	setHelper(helper) {
		this.mainComponent.$set({ helper: helper });
	}
	setStylesClass(cls) {
		const arr = [...this.mc.classes];
		let far = false;
		cls.from.forEach((clss) => {
			if (arr.includes(clss)) {
				const index = arr.indexOf(clss);
				arr[index] = cls.to;
				far = true;
			}
		});
		if (!far) {
			arr.push(cls.to);
		}
		this.mainComponent.$set({ classes: arr });
	}
	get mc() {
		return this.mainComponent;
	}
	get tb() {
		return this.toolbar;
	}
	get sweid() {
		return this.id;
	}
	get clss() {
		return this.classes.join('  ');
	}
	swecode() {
		const removedBorder = this.mainComponent.classes.filter(
			(cls) => cls !== 'hover:border-[1px]'
		);
		const removeBorderClass = removedBorder.filter(
			(cls) => cls !== 'hover:border-[#FF531A]'
		);
		if (this.element == 'alert1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
			<div>
			<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="${this.mainComponent.svgStroke}"
			class="w-${this.mainComponent.svgw} h-${this.mainComponent.svgh}"
		>
				${this.mainComponent.svg}
				</svg>
				<span>${this.mainComponent.title}</span>
			</div>
		</div></div>`
				: `<div
			class="${removeBorderClass.join(' ')}"
		>
			<div>
			<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="${this.mainComponent.svgStroke}"
			class="w-${this.mainComponent.svgw} h-${this.mainComponent.svgh}"
		>
				${this.mainComponent.svg}
				</svg>
				<span>${this.mainComponent.title}</span>
			</div>
		</div>`;
		} else if (this.element == 'alert2') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="${this.mainComponent.svgStroke}"
			class="w-${this.mainComponent.svgw} h-${this.mainComponent.svgh}"
		>
		${this.mainComponent.svg}
		</svg>
		<span>${this.mainComponent.title}</span>
	</div>
	<div class="flex-none">
		<button class="btn btn-sm btn-ghost">${this.mainComponent.cta1}</button>
		<button class="btn btn-sm btn-primary">${this.mainComponent.cta2}</button>
	</div></div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="${this.mainComponent.svgStroke}"
				class="w-${this.mainComponent.svgw} h-${this.mainComponent.svgh}"
			>
			${this.mainComponent.svg}
			</svg>
			<span>${this.mainComponent.title}</span>
		</div>
		<div class="flex-none">
			<button class="btn btn-sm btn-ghost">${this.mainComponent.cta1}</button>
			<button class="btn btn-sm btn-primary">${this.mainComponent.cta2}</button>
		</div></div>`;
		} else if (this.element == 'alert3') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="${this.mainComponent.svgStroke}"
					class="w-${this.mainComponent.svgw} h-${this.mainComponent.svgh}"
				>
				${this.mainComponent.svg}
				</svg>
				<div>
				<h3 class="font-bold">${this.mainComponent.title}</h3>
				<div class="text-xs">${this.mainComponent.description}</div>
				</div>
			</div>
			<div class="flex-none">
			<button class="btn btn-sm">${this.mainComponent.cta}</button>
			</div></div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="${this.mainComponent.svgStroke}"
					class="w-${this.mainComponent.svgw} h-${this.mainComponent.svgh}"
				>
				${this.mainComponent.svg}
				</svg>
				<div>
					<h3 class="font-bold">${this.mainComponent.title}</h3>
					<div class="text-xs">${this.mainComponent.description}</div>
				</div>
			</div>
			<div class="flex-none">
				<button class="btn btn-sm">${this.mainComponent.cta}</button>
			</div></div>`;
		} 
	}
};

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'alert1',
			{
				swElementDataAttrId: sweid,
				svgw: 6,
				svgh: 6,
				svgStroke: 'currentColor',
				classes: ['', 'alert', 'shadow-lg'],
				svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />`,
				title: '12 unread messages. Tap to see.',
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
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
	function addComponent2() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'alert1',
			{
				swElementDataAttrId: sweid,
				svgw: 6,
				svgh: 6,
				svgStroke: 'currentColor',
				classes: ['alert-info', 'alert', 'shadow-lg'],
				svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />`,
				title: 'New software update available',
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
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
	function addComponent3() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'alert1',
			{
				swElementDataAttrId: sweid,
				svgw: 6,
				svgh: 6,
				svgStroke: 'currentColor',
				classes: ['alert-success', 'alert', 'shadow-lg'],
				svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />`,
				title: 'Your purchase has been confirmed!',
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
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
	function addComponent4() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'alert1',
			{
				swElementDataAttrId: sweid,
				svgw: 6,
				svgh: 6,
				svgStroke: 'currentColor',
				classes: ['alert-warning', 'alert', 'shadow-lg'],
				svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />`,
				title: 'Warning: Invalid email address!',
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
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
	function addComponent5() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'alert1',
			{
				swElementDataAttrId: sweid,
				svgw: 6,
				svgh: 6,
				svgStroke: 'currentColor',
				classes: ['alert-error', 'alert', 'shadow-lg'],
				svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />`,
				title: 'Error! Task failed successfully.',
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
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent6() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'alert2',
			{
				swElementDataAttrId: sweid,
				svgw: 6,
				svgh: 6,
				svgStroke: 'currentColor',
				classes: ['', 'alert', 'shadow-lg'],
				svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
				title: 'we use cookies for no reason.',
				cta1: 'Deny',
				cta2: 'Accept',
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
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent7() {
		const sweid = uuidv4();

		let newCvElement = new cvElement(
			'alert3',
			{
				swElementDataAttrId: sweid,
				svgw: 6,
				svgh: 6,
				svgStroke: 'currentColor',
				classes: ['', 'alert', 'shadow-lg'],
				svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
				title: 'New message!',
				cta: 'see',
				description: 'You have 1 unread message',
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
		<button class="alert shadow-lg" on:click={addComponent}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-info flex-shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>12 unread messages. Tap to see.</span>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="alert alert-info shadow-lg" on:click={addComponent2}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-current flex-shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>New software update available.</span>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="alert alert-success shadow-lg" on:click={addComponent3}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Your purchase has been confirmed!</span>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="alert alert-warning shadow-lg" on:click={addComponent4}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/></svg
				>
				<span>Warning: Invalid email address!</span>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="alert alert-error shadow-lg" on:click={addComponent5}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Error! Task failed successfully.</span>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="alert shadow-lg" on:click={addComponent6}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-info flex-shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>we use cookies for no reason.</span>
			</div>
			<div class="flex-none">
				<button class="btn btn-sm btn-ghost">Deny</button>
				<button class="btn btn-sm btn-primary">Accept</button>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="alert shadow-lg" on:click={addComponent7}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-info flex-shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<div>
					<h3 class="font-bold">New message!</h3>
					<div class="text-xs">You have 1 unread message</div>
				</div>
			</div>
			<div class="flex-none">
				<button class="btn btn-sm">See</button>
			</div>
		</button>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
