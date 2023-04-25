<script>//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Button1 from './mainComponents/Button1.svelte';
	import Toolbar from './Toolbar.svelte';

	function addComponent() {
		const cvElement = class cvElement {
		constructor(element, props) {
			this.id = props.swElementDataAttrId;
			this.element = element;
			this.props = props;
		}
		create() {
			this.mainComponent = new Button1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
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
			const removeBorderClass = removedBorder.filter((cls) => cls !== 'hover:border-[#FF531A]');
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><button
			class="${removeBorderClass.join(' ')}"
		>${this.mainComponent.content1}
		</button></div>`
				: `<button
				class="${removeBorderClass.join(' ')}"
			>
			${this.mainComponent.content1}
			</button>`;
		}
	};
		const sweid = uuidv4();

		let newCvElement = new cvElement('btn1', {
			swElementDataAttrId: sweid,
			classes: ['', '', '', '', 'btn'],
			content1: 'Button',
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
			<button class="btn">Button</button>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn">Button</button>
		<button class="btn btn-primary">Button</button>
		<button class="btn btn-secondary">Button</button>
		<button class="btn btn-accent">Button</button>
		<button class="btn btn-ghost">Button</button>
		<button class="btn btn-link">Button</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-active">Button</button>
		<button class="btn btn-active btn-primary">Button</button>
		<button class="btn btn-active btn-secondary">Button</button>
		<button class="btn btn-active btn-accent">Button</button>
		<button class="btn btn-active btn-ghost">Button</button>
		<button class="btn btn-active btn-link">Button</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-info">Info</button>
		<button class="btn btn-success">Success</button>
		<button class="btn btn-warning">Warning</button>
		<button class="btn btn-error">Error</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-outline">Button</button>
		<button class="btn btn-outline btn-primary">Button</button>
		<button class="btn btn-outline btn-secondary">Button</button>
		<button class="btn btn-outline btn-accent">Button</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-outline btn-info">Info</button>
		<button class="btn btn-outline btn-success">Success</button>
		<button class="btn btn-outline btn-warning">Warning</button>
		<button class="btn btn-outline btn-error">Error</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-lg">Large</button>
		<button class="btn">Normal</button>
		<button class="btn btn-sm">Small</button>
		<button class="btn btn-xs">Tiny</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-wide">Wide</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: cover; background-image: url('https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg')"
	>
		<button class="btn glass">Glass button</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a role="button" class="btn" href="#">Link</a>
		<button type="submit" class="btn">Button</button>
		<input type="button" value="Input" class="btn" />
		<input type="submit" value="Submit" class="btn" />
		<input type="reset" value="Reset" class="btn" />
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn" disabled={true}>Disabled using attribute</button>
		<button class="btn btn-disabled" tabindex="-1" aria-disabled="true"
			>Disabled using class name</button
		>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-square">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
		<button class="btn btn-square btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
		<button class="btn btn-circle btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn gap-2">
			Button
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/></svg
			>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-block">block</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn btn-square loading" />
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn loading">loading</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="btn no-animation">I don't have click animation</button>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
