<script>
	//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Avatar1 from './mainComponents/Avatar1.svelte';
	import Avatar2 from './mainComponents/Avatar2.svelte';
	import Avatar3 from './mainComponents/Avatar3.svelte';
	import Avatar4 from './mainComponents/Avatar4.svelte';
	import Avatar5 from './mainComponents/Avatar5.svelte';
	import Avatar6 from './mainComponents/Avatar6.svelte';
	import Avatar7 from './mainComponents/Avatar7.svelte';
	import Avatar8 from './mainComponents/Avatar8.svelte';
	import Toolbar from './Toolbar.svelte';

	function addComponent() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar1({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="w-24 rounded">
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-24 rounded">
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
			</div>`;
			}
		};
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
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	// @ts-ignore
	function addComponent2() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar2({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="w-32 rounded">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
			<div class="w-20 rounded">
				<img
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					alt="Tailwind-CSS-Avatar-component"
				/>
			</div>
			<div class="w-16 rounded">
				<img
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					alt="Tailwind-CSS-Avatar-component"
				/>
			</div>
			<div class="w-8 rounded">
				<img
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					alt="Tailwind-CSS-Avatar-component"
				/>
			</div>>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-32 rounded">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
			<div class="w-20 rounded">
				<img
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					alt="Tailwind-CSS-Avatar-component"
				/>
			</div>
			<div class="w-16 rounded">
				<img
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					alt="Tailwind-CSS-Avatar-component"
				/>
			</div>
			<div class="w-8 rounded">
				<img
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					alt="Tailwind-CSS-Avatar-component"
				/>
			</div>
			</div>`;
			}
		};
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
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent3() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar3({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="w-24 rounded-xl">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 rounded-full">
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-24 rounded-xl">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 rounded-full">
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
			</div>`;
			}
		};
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
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent4() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar4({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<<div class="w-24 mask mask-squircle">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="w-24 mask mask-hexagon">
		<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
	</div>
	<div class="w-24 mask mask-triangle">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
	</div>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-24 mask mask-squircle">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="w-24 mask mask-hexagon">
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 mask mask-triangle">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
			</div>`;
			}
		};
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
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent5() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar5({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
			</div>`;
			}
		};
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
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent6() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar6({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12 bg-neutral-focus text-neutral-content">
			<span>+99</span>
		</div>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-12 bg-neutral-focus text-neutral-content">
			<span>+99</span>
		</div>
			</div>`;
			}
		};
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
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent7() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar7({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 rounded-full">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 rounded-full">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 rounded-full">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
		<div class="w-24 rounded-full">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
		</div>
			</div>`;
			}
		};
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
			// @ts-ignore
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}

	function addComponent8() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Avatar8({
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
					  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
			<span class="text-3xl">K</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
			<span class="text-xl">JO</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
			<span>MX</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-8">
			<span class="text-xs">AA</span>
		</div>
		</div></div>`
					: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
			<span class="text-3xl">K</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
			<span class="text-xl">JO</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
			<span>MX</span>
		</div>
		<div class="bg-neutral-focus text-neutral-content rounded-full w-8">
			<span class="text-xs">AA</span>
		</div>
			</div>`;
			}
		};
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
		<button on:click={addComponent2}>
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
		</button>
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
