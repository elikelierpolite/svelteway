import { get, writable } from 'svelte/store';
import Alert1 from './viewingComponents/Alert1.svelte';
import Toolbar from './viewingComponents/Toolbar.svelte';
import Alert2 from './viewingComponents/mainComponents/Alert2.svelte';
import Alert3 from './viewingComponents/mainComponents/Alert3.svelte';
import Artboard1 from './viewingComponents/mainComponents/Artboard1.svelte';
import Avatar1 from './viewingComponents/mainComponents/Avatar1.svelte';
import Avatar2 from './viewingComponents/mainComponents/Avatar2.svelte';
import Avatar3 from './viewingComponents/mainComponents/Avatar3.svelte';
import Avatar4 from './viewingComponents/mainComponents/Avatar4.svelte';
import Avatar5 from './viewingComponents/mainComponents/Avatar5.svelte';
import Avatar6 from './viewingComponents/mainComponents/Avatar6.svelte';
import Avatar7 from './viewingComponents/mainComponents/Avatar7.svelte';
import Avatar8 from './viewingComponents/mainComponents/Avatar8.svelte';
import BottomNavigation1 from './viewingComponents/mainComponents/BottomNavigation1.svelte';
import BottomNavigation2 from './viewingComponents/mainComponents/BottomNavigation2.svelte';
import BottomNavigation3 from './viewingComponents/mainComponents/BottomNavigation3.svelte';
import BottomNavigation4 from './viewingComponents/mainComponents/BottomNavigation4.svelte';
import BottomNavigation5 from './viewingComponents/mainComponents/BottomNavigation5.svelte';
import BottomNavigation6 from './viewingComponents/mainComponents/BottomNavigation6.svelte';
import BottomNavigation7 from './viewingComponents/mainComponents/BottomNavigation7.svelte';
import BottomNavigation8 from './viewingComponents/mainComponents/BottomNavigation8.svelte';
import BottomNavigation9 from './viewingComponents/mainComponents/BottomNavigation9.svelte';
import BottomNavigation10 from './viewingComponents/mainComponents/BottomNavigation10.svelte';
import BottomNavigation11 from './viewingComponents/mainComponents/BottomNavigation11.svelte';
import Breadcrumbs1 from './viewingComponents/mainComponents/Breadcrumbs1.svelte';
import Breadcrumbs2 from './viewingComponents/mainComponents/Breadcrumbs2.svelte';
import Breadcrumbs3 from './viewingComponents/mainComponents/Breadcrumbs3.svelte';
import ButtonGroup1 from './viewingComponents/mainComponents/ButtonGroup1.svelte';
import Button1 from './viewingComponents/mainComponents/Button1.svelte';
import Card1 from './viewingComponents/mainComponents/Card1.svelte';
import Carousel1 from './viewingComponents/mainComponents/Carousel1.svelte';

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
		} else if (this.element == 'artboard1') {
			this.mainComponent = new Artboard1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar1') {
			this.mainComponent = new Avatar1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar2') {
			this.mainComponent = new Avatar2({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar3') {
			this.mainComponent = new Avatar3({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar4') {
			this.mainComponent = new Avatar4({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar5') {
			this.mainComponent = new Avatar5({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar6') {
			this.mainComponent = new Avatar6({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar7') {
			this.mainComponent = new Avatar7({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'avatar8') {
			this.mainComponent = new Avatar8({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav1') {
			this.mainComponent = new BottomNavigation1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav2') {
			this.mainComponent = new BottomNavigation2({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav3') {
			this.mainComponent = new BottomNavigation3({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav4') {
			this.mainComponent = new BottomNavigation4({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav5') {
			this.mainComponent = new BottomNavigation5({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav6') {
			this.mainComponent = new BottomNavigation6({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav7') {
			this.mainComponent = new BottomNavigation7({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav8') {
			this.mainComponent = new BottomNavigation8({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav9') {
			this.mainComponent = new BottomNavigation9({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav10') {
			this.mainComponent = new BottomNavigation10({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btmnav11') {
			this.mainComponent = new BottomNavigation11({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'breadcrumbs1') {
			this.mainComponent = new Breadcrumbs1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'breadcrumbs2') {
			this.mainComponent = new Breadcrumbs2({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'breadcrumbs3') {
			this.mainComponent = new Breadcrumbs3({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btngroup1') {
			this.mainComponent = new ButtonGroup1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'btn1') {
			this.mainComponent = new Button1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'card1') {
			this.mainComponent = new Card1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'carousel1') {
			this.mainComponent = new Carousel1({
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
		} else if (this.element == 'artboard1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		${this.mainComponent.content}
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			${this.mainComponent.content}
			</div>`;
		} else if (this.element == 'avatar1') {
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
		} else if (this.element == 'avatar2') {
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
		} else if (this.element == 'avatar3') {
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
		} else if (this.element == 'avatar4') {
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
		} else if (this.element == 'avatar5') {
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
		} else if (this.element == 'avatar6') {
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
		} else if (this.element == 'avatar7') {
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
		} else if (this.element == 'avatar8') {
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
		} else if (this.element == 'btmnav1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav2') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="text-primary">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-primary active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-primary">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="text-primary">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-primary active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-primary">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav3') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="text-secondary">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-secondary active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-secondary">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="text-secondary">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-secondary active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-secondary">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav4') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="text-accent">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-accent active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-accent">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="text-accent">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-accent active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-accent">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav5') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="text-info">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-info active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-info">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="text-info">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-info active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-info">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav6') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="text-success">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-success active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-success">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="text-success">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-success active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-success">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav7') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="text-warning">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-warning active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-warning">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="text-warning">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-warning active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-warning">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav8') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="text-error">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-error active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-error">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="text-error">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="text-error active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button class="text-error">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'btmnav9') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
		${this.mainComponent.label1}
    </button>
    <button class="active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
${this.mainComponent.label2}
    </button>
    <button>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
${this.mainComponent.label3}
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
		${this.mainComponent.label1}
    </button>
    <button class="active">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
${this.mainComponent.label2}
    </button>
    <button>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
${this.mainComponent.label3}
    </button>
			</div>`;
		} else if (this.element == 'btmnav10') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="bg-pink-200 text-pink-600">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
		${this.mainComponent.label1}
    </button>
    <button class="active bg-neutral text-neutral-content">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
${this.mainComponent.label2}
    </button>
    <button class="bg-teal-200 text-teal-600">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
${this.mainComponent.label3}
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="bg-pink-200 text-pink-600">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
		${this.mainComponent.label1}
    </button>
    <button class="active bg-neutral text-neutral-content">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
${this.mainComponent.label2}
    </button>
    <button class="bg-teal-200 text-teal-600">
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
${this.mainComponent.label3}
    </button>
			</div>`;
		} else if (this.element == 'btmnav11') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="active" disabled>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="${this.mainComponent.svgStroke1}"
            class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1}"
        >
		${this.mainComponent.svg1}
        </svg>
    </button>
    <button class="active" disabled>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg2}
</svg>
    </button>
    <button>
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="${this.mainComponent.svgStroke2}"
	class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2}"
>
${this.mainComponent.svg3}
</svg>
    </button>
			</div>`;
		} else if (this.element == 'breadcrumbs1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<ul>
			<li><a>${this.mainComponent.content1}</a></li>
			<li><a>${this.mainComponent.content2}</a></li>
			<li>${this.mainComponent.content3}</li>
		</ul>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<ul>
			<li><a>${this.mainComponent.content1}</a></li>
			<li><a>${this.mainComponent.content2}</a></li>
			<li>${this.mainComponent.content3}</li>
		</ul>
			</div>`;
		} else if (this.element == 'breadcrumbs2') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<ul>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="${this.mainComponent.svgStroke1}"
							class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1} mr-2"
						>
						${this.mainComponent.svg1}</svg
						>
						${this.mainComponent.content1}
					</a>
				</li>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="${this.mainComponent.svgStroke2}"
							class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2} mr-2"
						>
						${this.mainComponent.svg2}</svg
						>
						${this.mainComponent.content2}
				</li>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="${this.mainComponent.svgStroke3}"
							class="w-${this.mainComponent.svgw3} h-${this.mainComponent.svgh3} mr-2"
						>
						${this.mainComponent.svg3}</svg
						>
						${this.mainComponent.content3}
					</a>
				</li>
			</ul>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<ul>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="${this.mainComponent.svgStroke1}"
							class="w-${this.mainComponent.svgw1} h-${this.mainComponent.svgh1} mr-2"
						>
						${this.mainComponent.svg1}</svg
						>
						${this.mainComponent.content1}
					</a>
				</li>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="${this.mainComponent.svgStroke2}"
							class="w-${this.mainComponent.svgw2} h-${this.mainComponent.svgh2} mr-2"
						>
						${this.mainComponent.svg2}</svg
						>
						${this.mainComponent.content2}
				</li>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="${this.mainComponent.svgStroke3}"
							class="w-${this.mainComponent.svgw3} h-${this.mainComponent.svgh3} mr-2"
						>
						${this.mainComponent.svg3}</svg
						>
						${this.mainComponent.content3}
					</a>
				</li>
			</ul>
			</div>`;
		} else if (this.element == 'breadcrumbs3') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<ul>
        <li>${this.mainComponent.content1}</li>
        <li>${this.mainComponent.content2}</li>
        <li>${this.mainComponent.content3}</li>
        <li>${this.mainComponent.content4}</li>
        <li>${this.mainComponent.content5}</li>
    </ul>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<ul>
        <li>${this.mainComponent.content1}</li>
        <li>${this.mainComponent.content2}</li>
        <li>${this.mainComponent.content3}</li>
        <li>${this.mainComponent.content4}</li>
        <li>${this.mainComponent.content5}</li>
    </ul>
			</div>`;
		} else if (this.element == 'btngroup1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<button class="btn btn-active">${this.mainComponent.content1}</button>
		<button class="btn">${this.mainComponent.content2}</button>
		<button class="btn">${this.mainComponent.content3}</button>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<button class="btn btn-active">${this.mainComponent.content1}</button>
		<button class="btn">${this.mainComponent.content2}</button>
		<button class="btn">${this.mainComponent.content3}</button>
			</div>`;
		} else if (this.element == 'btn1') {
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
		} else if (this.element == 'card1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		><div class="card w-96 bg-base-100 shadow-xl">
		<figure><img src="${this.mainComponent.imgSrc}" alt="${this.mainComponent.title}" /></figure>
		<div class="card-body">
			<h2 class="card-title">${this.mainComponent.title}</h2>
			<p>${this.mainComponent.description}</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">${this.mainComponent.cta}</button>
			</div>
		</div>
	</div>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="card w-96 bg-base-100 shadow-xl">
		<figure><img src="${this.mainComponent.imgSrc}" alt="${this.mainComponent.title}" /></figure>
		<div class="card-body">
			<h2 class="card-title">${this.mainComponent.title}</h2>
			<p>${this.mainComponent.description}</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">${this.mainComponent.cta}</button>
			</div>
		</div>
	</div>
			</div>`;
		} else if (this.element == 'carousel1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		><div class="carousel-item">
		<img src="${this.mainComponent.item1ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item2ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item3ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item4ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item5ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item6ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item6ImgSrc}" alt="Burger" />
	</div>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="carousel-item">
		<img src="${this.mainComponent.item1ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item2ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item3ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item4ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item5ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item6ImgSrc}" alt="Burger" />
	</div>
	<div class="carousel-item">
		<img src="${this.mainComponent.item7ImgSrc}" alt="Burger" />
	</div>
			</div>`;
		}
	}
};
