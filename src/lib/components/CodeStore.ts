// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
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
import Chat1 from './viewingComponents/mainComponents/Chat1.svelte';
import Checkbox1 from './viewingComponents/mainComponents/Checkbox1.svelte';
import Collapse1 from './viewingComponents/mainComponents/Collapse1.svelte';
import Countdown1 from './viewingComponents/mainComponents/Countdown1.svelte';
import Divider1 from './viewingComponents/mainComponents/Divider1.svelte';
import Drawer1 from './viewingComponents/mainComponents/Drawer1.svelte';
import Dropdown1 from './viewingComponents/mainComponents/Dropdown1.svelte';
import FileInput1 from './viewingComponents/mainComponents/FileInput1.svelte';
import Footer1 from './viewingComponents/mainComponents/Footer1.svelte';
import Hero1 from './viewingComponents/mainComponents/Hero1.svelte';
import InputGroup1 from './viewingComponents/mainComponents/InputGroup1.svelte';
import TextInput1 from './viewingComponents/mainComponents/TextInput1.svelte';
import Kbd1 from './viewingComponents/mainComponents/Kbd1.svelte';
import Link1 from './viewingComponents/mainComponents/Link1.svelte';
import Mask1 from './viewingComponents/mainComponents/Mask1.svelte';
import Menu1 from './viewingComponents/mainComponents/Menu1.svelte';
import CodeM1 from './viewingComponents/mainComponents/CodeM1.svelte';
import PhoneM1 from './viewingComponents/mainComponents/PhoneM1.svelte';
import WindM1 from './viewingComponents/mainComponents/WindM1.svelte';
import Modal1 from './viewingComponents/mainComponents/Modal1.svelte';
import NavBar1 from './viewingComponents/mainComponents/NavBar1.svelte';
import Pagination1 from './viewingComponents/mainComponents/Pagination1.svelte';
import Progress1 from './viewingComponents/mainComponents/Progress1.svelte';
import RadialProgress1 from './viewingComponents/mainComponents/RadialProgress1.svelte';
import Radio1 from './viewingComponents/mainComponents/Radio1.svelte';
import Range1 from './viewingComponents/mainComponents/Range1.svelte';
import Rating1 from './viewingComponents/mainComponents/Rating1.svelte';
import Select1 from './viewingComponents/mainComponents/Select1.svelte';
import Stack1 from './viewingComponents/mainComponents/Stack1.svelte';
import Stat1 from './viewingComponents/mainComponents/Stat1.svelte';
import Steps1 from './viewingComponents/mainComponents/Steps1.svelte';
import Swap1 from './viewingComponents/mainComponents/Swap1.svelte';
import Tab1 from './viewingComponents/mainComponents/Tab1.svelte';
import Table1 from './viewingComponents/mainComponents/Table1.svelte';
import TextArea1 from './viewingComponents/mainComponents/TextArea1.svelte';
import Toast1 from './viewingComponents/mainComponents/Toast1.svelte';
import Toggle1 from './viewingComponents/mainComponents/Toggle1.svelte';
import ToolTip1 from './viewingComponents/mainComponents/ToolTip1.svelte';

export const swCode = writable({
	cvElements: [],
	selectedElement: {}
});

export const swToolbar = writable({
	id: 'toolbar'
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
		} else if (this.element == 'chat1') {
			this.mainComponent = new Chat1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'checkbox1') {
			this.mainComponent = new Checkbox1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'collapse1') {
			this.mainComponent = new Collapse1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'countdown1') {
			this.mainComponent = new Countdown1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'divider1') {
			this.mainComponent = new Divider1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'drawer1') {
			this.mainComponent = new Drawer1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'dropdown1') {
			this.mainComponent = new Dropdown1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'fileinput1') {
			this.mainComponent = new FileInput1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'footer1') {
			this.mainComponent = new Footer1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'hero1') {
			this.mainComponent = new Hero1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'inputgroup1') {
			this.mainComponent = new InputGroup1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'textinput1') {
			this.mainComponent = new TextInput1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'kbd1') {
			this.mainComponent = new Kbd1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'link1') {
			this.mainComponent = new Link1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'mask1') {
			this.mainComponent = new Mask1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'menu1') {
			this.mainComponent = new Menu1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'codem1') {
			this.mainComponent = new CodeM1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'phonem1') {
			this.mainComponent = new PhoneM1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'windm1') {
			this.mainComponent = new WindM1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'modal1') {
			this.mainComponent = new Modal1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'navbar1') {
			this.mainComponent = new NavBar1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'pagination1') {
			this.mainComponent = new Pagination1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'progress1') {
			this.mainComponent = new Progress1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'rprogress1') {
			this.mainComponent = new RadialProgress1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'radio1') {
			this.mainComponent = new Radio1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'range1') {
			this.mainComponent = new Range1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'rating1') {
			this.mainComponent = new Rating1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'select1') {
			this.mainComponent = new Select1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'stack1') {
			this.mainComponent = new Stack1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'stat1') {
			this.mainComponent = new Stat1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'steps1') {
			this.mainComponent = new Steps1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'swap1') {
			this.mainComponent = new Swap1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'tab1') {
			this.mainComponent = new Tab1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'table1') {
			this.mainComponent = new Table1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'textarea1') {
			this.mainComponent = new TextArea1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'toast1') {
			this.mainComponent = new Toast1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'toggle1') {
			this.mainComponent = new Toggle1({
				target: document.querySelector('#cvh'),
				props: this.props
			});
		} else if (this.element == 'tooltip1') {
			this.mainComponent = new ToolTip1({
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
		} else if (this.element == 'chat1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		><div class="w-full">
		<div class="chat chat-start">
			<div class="chat-bubble">${this.mainComponent.chat1}</div>
		</div>
		<div class="chat chat-end">
			<div class="chat-bubble">${this.mainComponent.chat2}</div>
		</div>
	</div>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="w-full">
		<div class="chat chat-start">
			<div class="chat-bubble">${this.mainComponent.chat1}</div>
		</div>
		<div class="chat chat-end">
			<div class="chat-bubble">${this.mainComponent.chat2}</div>
		</div>
	</div>
			</div>`;
		} else if (this.element == 'checkbox1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><input type="checkbox" checked={true}
			class="${removeBorderClass.join(' ')}"
		/></div>`
				: `<input type="checkbox" checked={true}
				class="${removeBorderClass.join(' ')}"
			/>`;
		} else if (this.element == 'collapse1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
			tabindex="0"
		><div class="collapse-title text-xl font-medium">
		${this.mainComponent.title}
	</div>
	<div class="collapse-content">
		<p>${this.mainComponent.contentBody}</p>
	</div>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
				tabindex="0"
			>
			<div class="collapse-title text-xl font-medium">
		${this.mainComponent.title}
	</div>
	<div class="collapse-content">
		<p>${this.mainComponent.contentBody}</p>
	</div>
			</div>`;
		} else if (this.element == 'countdown1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		><span class="cd" style="--value:${this.mainComponent.seconds}" />
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<span class="cd" style="--value:${this.mainComponent.seconds}" />
			</div>`;
		} else if (this.element == 'divider1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>${this.mainComponent.text}
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			${this.mainComponent.text}
			</div>`;
		} else if (this.element == 'drawer1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		><input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="flex flex-col items-center justify-center drawer-content">
			<label for="my-drawer" class="btn btn-primary drawer-button">${this.mainComponent.btnText}</label>
		</div>
		<div class="drawer-side">
			<label for="my-drawer" class="drawer-overlay" />
			<ul class="menu p-4 w-80 bg-base-100 text-base-content">
				<li><a>${this.mainComponent.item1Text}</a></li>
				<li><a>${this.mainComponent.item2Text}</a></li>
			</ul>
		</div>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="flex flex-col items-center justify-center drawer-content">
			<label for="my-drawer" class="btn btn-primary drawer-button">${this.mainComponent.btnText}</label>
		</div>
		<div class="drawer-side">
			<label for="my-drawer" class="drawer-overlay" />
			<ul class="menu p-4 w-80 bg-base-100 text-base-content">
				<li><a>${this.mainComponent.item1Text}</a></li>
				<li><a>${this.mainComponent.item2Text}</a></li>
			</ul>
		</div>
			</div>`;
		} else if (this.element == 'dropdown1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<label tabindex="0" class="m-1 btn">${this.mainComponent.btnText}</label>
		<ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
			<li><a>${this.mainComponent.item1Text}</a></li>
			<li><a>${this.mainComponent.item2Text}</a></li>
		</ul>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<label tabindex="0" class="m-1 btn">${this.mainComponent.btnText}</label>
		<ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
			<li><a>${this.mainComponent.item1Text}</a></li>
			<li><a>${this.mainComponent.item2Text}</a></li>
		</ul>
			</div>`;
		} else if (this.element == 'fileinput1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><input type="file"
			class="${removeBorderClass.join(' ')}"
		/></div>`
				: `<input type="file"
				class="${removeBorderClass.join(' ')}"
			/>`;
		} else if (this.element == 'footer1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><footer
			class="${removeBorderClass.join(' ')}"
		>
		<div>
					<span class="footer-title">Services</span>
					<a class="link link-hover">Branding</a>
					<a class="link link-hover">Design</a>
					<a class="link link-hover">Marketing</a>
					<a class="link link-hover">Advertisement</a>
				</div>
				<div>
					<span class="footer-title">Company</span>
					<a class="link link-hover">About us</a>
					<a class="link link-hover">Contact</a>
					<a class="link link-hover">Jobs</a>
					<a class="link link-hover">Press kit</a>
				</div>
				<div>
					<span class="footer-title">Legal</span>
					<a class="link link-hover">Terms of use</a>
					<a class="link link-hover">Privacy policy</a>
					<a class="link link-hover">Cookie policy</a>
				</div>
		</footer></div>`
				: `<footer
				class="${removeBorderClass.join(' ')}"
			>
			<div>
					<span class="footer-title">Services</span>
					<a class="link link-hover">Branding</a>
					<a class="link link-hover">Design</a>
					<a class="link link-hover">Marketing</a>
					<a class="link link-hover">Advertisement</a>
				</div>
				<div>
					<span class="footer-title">Company</span>
					<a class="link link-hover">About us</a>
					<a class="link link-hover">Contact</a>
					<a class="link link-hover">Jobs</a>
					<a class="link link-hover">Press kit</a>
				</div>
				<div>
					<span class="footer-title">Legal</span>
					<a class="link link-hover">Terms of use</a>
					<a class="link link-hover">Privacy policy</a>
					<a class="link link-hover">Cookie policy</a>
				</div>
			</footer>`;
		} else if (this.element == 'hero1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<div class="hero-content text-center">
				<div class="max-w-md">
					<h1 class="text-5xl font-bold">Hello there</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<div class="hero-content text-center">
				<div class="max-w-md">
					<h1 class="text-5xl font-bold">Hello there</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
			</div>`;
		} else if (this.element == 'inputgroup1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>
		<label class="label">
				<span class="label-text">Your Email</span>
			</label>
			<label class="input-group">
				<span>Email</span>
				<input type="text" placeholder="info@site.com" class="input input-bordered" />
			</label>
		</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>
			<label class="label">
				<span class="label-text">Your Email</span>
			</label>
			<label class="input-group">
				<span>Email</span>
				<input type="text" placeholder="info@site.com" class="input input-bordered" />
			</label>
			</div>`;
		} else if (this.element == 'textinput1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><input type="text"
			class="${removeBorderClass.join(' ')}"
		/></div>`
				: `<input type="text"
				class="${removeBorderClass.join(' ')}"
			/>`;
		} else if (this.element == 'kbd1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>A</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>A</div>`;
		} else if (this.element == 'link1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div
			class="${removeBorderClass.join(' ')}"
		>I'm a simple link</div></div>`
				: `<div
				class="${removeBorderClass.join(' ')}"
			>I'm a simple link</div>`;
		} else if (this.element == 'mask1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><img src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
				  alt=""
				  class="${removeBorderClass.join(' ')}"
			  /></div>`
				: `<img src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
				alt=""
				class="${removeBorderClass.join(' ')}"
			/>`;
		} else if (this.element == 'menu1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><li><a href="#">Item 1</a></li>
			  <li><a href="#">Item 2</a></li>
			  <li><a href="#">Item 3</a></li></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li></div>`;
		} else if (this.element == 'codem1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><pre data-prefix="$"><code>npm i daisyui</code></pre></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><pre data-prefix="$"><code>npm i daisyui</code></pre></div>`;
		} else if (this.element == 'phonem1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><div class="camera" />
			  <div class="display">
				  <div class="artboard artboard-demo phone-1">Hi.</div>
			  </div></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><div class="camera" />
			<div class="display">
				<div class="artboard artboard-demo phone-1">Hi.</div>
			</div></div>`;
		} else if (this.element == 'windm1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div></div>`;
		} else if (this.element == 'modal1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><label for="my-modal" class="btn">open modal</label>
			  <input type="checkbox" id="my-modal" class="modal-toggle" />
			  <div class="modal">
				  <div class="modal-box">
					  <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
					  <p class="py-4">
						  You've been selected for a chance to get one year of subscription to use Wikipedia for
						  free!
					  </p>
					  <div class="modal-action">
						  <label for="my-modal" class="btn">Yay!</label>
					  </div>
				  </div></div></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><label for="my-modal" class="btn">open modal</label>
			<input type="checkbox" id="my-modal" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box">
					<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
					<p class="py-4">
						You've been selected for a chance to get one year of subscription to use Wikipedia for
						free!
					</p>
					<div class="modal-action">
						<label for="my-modal" class="btn">Yay!</label>
					</div>
				</div></div></div>`;
		} else if (this.element == 'navbar1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a></div>`;
		} else if (this.element == 'pagination1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><button class="btn">1</button>
			  <button class="btn btn-active">2</button>
			  <button class="btn">3</button>
			  <button class="btn">4</button></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><button class="btn">1</button>
			<button class="btn btn-active">2</button>
			<button class="btn">3</button>
			<button class="btn">4</button></div>`;
		} else if (this.element == 'progress1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><progress class="progress w-56" value="0" max="100" />
			  <progress class="progress w-56" value="10" max="100" />
			  <progress class="progress w-56" value="40" max="100" />
			  <progress class="progress w-56" value="70" max="100" />
			  <progress class="progress w-56" value="100" max="100" /></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><progress class="progress w-56" value="0" max="100" />
			<progress class="progress w-56" value="10" max="100" />
			<progress class="progress w-56" value="40" max="100" />
			<progress class="progress w-56" value="70" max="100" />
			<progress class="progress w-56" value="100" max="100" /></div>`;
		} else if (this.element == 'rprogress1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
				  style="--value:70;"
			  >70%</div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
				style="--value:70;"
			>70%</div>`;
		} else if (this.element == 'radio1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><input type="radio" name="radio-1" class="radio" checked />
			  <input type="radio" name="radio-1" class="radio" /></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><input type="radio" name="radio-1" class="radio" checked />
			<input type="radio" name="radio-1" class="radio" /></div>`;
		} else if (this.element == 'range1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><input type="range" min="0" max="100" value="40" class="range max-w-xs" /></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><input type="range" min="0" max="100" value="40" class="range max-w-xs" /></div>`;
		} else if (this.element == 'rating1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div 
				  class="${removeBorderClass.join(' ')}"
			  ><input type="radio" name="rating-1" class="mask mask-star" />
			  <input type="radio" name="rating-1" class="mask mask-star" checked />
			  <input type="radio" name="rating-1" class="mask mask-star" />
			  <input type="radio" name="rating-1" class="mask mask-star" />
			  <input type="radio" name="rating-1" class="mask mask-star" /></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><input type="radio" name="rating-1" class="mask mask-star" />
			<input type="radio" name="rating-1" class="mask mask-star" checked />
			<input type="radio" name="rating-1" class="mask mask-star" />
			<input type="radio" name="rating-1" class="mask mask-star" />
			<input type="radio" name="rating-1" class="mask mask-star" /></div>`;
		} else if (this.element == 'select1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><select 
				  class="${removeBorderClass.join(' ')}"
			  ><option disabled selected>Pick your favorite Simpson</option>
			  <option>Homer</option>
			  <option>Marge</option>
			  <option>Bart</option>
			  <option>Lisa</option>
			  <option>Maggie</option></select></div>`
				: `<select 
				class="${removeBorderClass.join(' ')}"
			><option disabled selected>Pick your favorite Simpson</option>
			<option>Homer</option>
			<option>Marge</option>
			<option>Bart</option>
			<option>Lisa</option>
			<option>Maggie</option></select>`;
		} else if (this.element == 'stack1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div>
				  <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
					  1
				  </div>
				  <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
				  <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
					  3
				  </div>
			  </div></div>`
				: `<div>
				<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
					1
				</div>
				<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
				<div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
					3
				</div>
			</div>`;
		} else if (this.element == 'stat1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div class="${removeBorderClass.join(' ')}"><div class="stat">
				  <div class="stat-title">Total Page Views</div>
				  <div class="stat-value">89,400</div>
				  <div class="stat-desc">21% more than last month</div>
			  </div></div></div>`
				: `<div class="${removeBorderClass.join(' ')}">
				<div class="stat">
			<div class="stat-title">Total Page Views</div>
			<div class="stat-value">89,400</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
			</div>`;
		} else if (this.element == 'steps1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><ul class="${removeBorderClass.join(' ')}">
				  <li class="step step-primary">Register</li>
			<li class="step step-primary">Choose plan</li>
			<li class="step">Purchase</li>
			<li class="step">Receive Product</li>
			  </ul></div>`
				: `<ul class="${removeBorderClass.join(' ')}">
				<li class="step step-primary">Register</li>
			<li class="step step-primary">Choose plan</li>
			<li class="step">Purchase</li>
			<li class="step">Receive Product</li>
		</ul>`;
		} else if (this.element == 'swap1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><label class="${removeBorderClass.join(' ')}">
				  <input type="checkbox" />
				<div class="swap-on">ON</div>
				<div class="swap-off">OFF</div>
			  </label></div>`
				: `<label class="${removeBorderClass.join(' ')}">
				<input type="checkbox" />
				<div class="swap-on">ON</div>
				<div class="swap-off">OFF</div>
		</label>`;
		} else if (this.element == 'tab1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div class="${removeBorderClass.join(' ')}">
				  <a class="tab">Tab 1</a>
				  <a class="tab tab-active">Tab 2</a>
				  <a class="tab">Tab 3</a>
			  </div></div>`
				: `<div class="${removeBorderClass.join(' ')}">
				<a class="tab">Tab 1</a>
		<a class="tab tab-active">Tab 2</a>
		<a class="tab">Tab 3</a>
		</div>`;
		} else if (this.element == 'table1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><table class="${removeBorderClass.join(' ')}">
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Hart Hagerty</td>
					<td>Desktop Support Technician</td>
					<td>Purple</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
					<td>Red</td>
				</tr>
			</tbody>
			  </table></div>`
				: `<table class="${removeBorderClass.join(' ')}">
				<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Hart Hagerty</td>
					<td>Desktop Support Technician</td>
					<td>Purple</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
					<td>Red</td>
				</tr>
			</tbody>
		</table>`;
		} else if (this.element == 'textarea1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><textarea placeholder="Bio" class="${removeBorderClass.join(' ')}" /></div>`
				: `<textarea placeholder="Bio" class="${removeBorderClass.join(' ')}" />`;
		} else if (this.element == 'toast1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div class="${removeBorderClass.join(' ')}"><div class="alert alert-info">
				  <div>
					  <span>New message arrived.</span>
				  </div>
			  </div></div></div>`
				: `<div class="${removeBorderClass.join(' ')}"><div class="alert alert-info">
				<div>
					<span>New message arrived.</span>
				</div>
			</div></div>`;
		} else if (this.element == 'toggle1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><input type="checkbox" class="${removeBorderClass.join(' ')}" /></div>`
				: `<input type="checkbox" class="${removeBorderClass.join(' ')}" />`;
		} else if (this.element == 'tooltip1') {
			this.code = this.mainComponent.helper.on
				? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
						this.mainComponent.helper.title
				  }"><div class="${removeBorderClass.join(' ')}" data-tip="hello"><button class="btn">Hover me</button></div></div>`
				: `<div class="${removeBorderClass.join(' ')}" data-tip="hello"><button class="btn">Hover me</button></div>`;
		}
	}
};
