import { get, writable } from 'svelte/store';
import Alert1 from './viewingComponents/Alert1.svelte';
import Toolbar from './viewingComponents/Toolbar.svelte';

export const swCode = writable({
	cvElements: [],
	selectedElement: {}
});

export const swToolbar = writable({
	id: ''
});

export const cvElement = class cvElement {
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
			this.toolbar = new Toolbar({
				target: document.querySelector('#cvh'),
				props: {
					visible: false,
					sweid: this.id
				}
			});
		}
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
	setProps(props) {
		if (this.element == 'alert1') {
			this.mainComponent.$set({
				svg: props.svg,
				title: props.title,
				svgStroke: props.svgStroke,
				svgh: props.svgh,
				svgw: props.svgw,
				classes: props.classes
			});
		}
	}
	setTransition(transition) {
		if (transition !== 'none') {
			this.mainComponent.$set({ missing: true, swTransition: transition });
			setTimeout(() => {
				this.mainComponent.$set({ missing: false });
			}, 200);
		}
	}
	setClassModifier(cls) {
		if (this.element == 'alert1') {
			const arr = [...this.mc.classes];
			for (let index = 0; index < arr.length; index++) {
				if (arr[index] === cls.from) {
					arr[index] = cls.to;
				}
			}
			this.mainComponent.$set({ classes: arr });
		}
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
		if (this.element == 'alert1') {
			const removeBorderClass = this.mainComponent.classes.filter(cls => cls !== 'hover:border-[1px]')
			const removeBorderColorClass = removeBorderClass.filter(cls => cls !== 'hover:border-[#FF531A]')
			console.log(removeBorderColorClass)
			this.code = `<div
			class="${removeBorderColorClass.join(' ')}"
		>
			<div>
			<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="${this.mainComponent.svgStroke}"
			class="w-${this.mainComponent.vgw} h-${this.mainComponent.svgh}"
		>
				${this.mainComponent.svg}
				</svg>
				<span>${this.mainComponent.title}</span>
			</div>
		</div>`;
		}
	}
};
