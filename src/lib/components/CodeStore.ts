import { get, writable } from 'svelte/store';
import Alert1 from './viewingComponents/Alert1.svelte';
import Toolbar from './viewingComponents/Toolbar.svelte';
import Alert2 from './viewingComponents/mainComponents/Alert2.svelte';
import Alert3 from './viewingComponents/mainComponents/Alert3.svelte';

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
		const removeBorderClass = this.mainComponent.classes.filter(
			(cls) => cls !== 'hover:border-[1px]' && 'hover:border-[#FF531A]'
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
