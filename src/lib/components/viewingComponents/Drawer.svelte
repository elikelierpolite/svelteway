<script>
	//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Toolbar from './Toolbar.svelte';
	import Drawer1 from './mainComponents/Drawer1.svelte';

	function addComponent() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Drawer1({
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
			}
		};
		const sweid = uuidv4();

		let newCvElement = new cvElement('drawer1', {
			swElementDataAttrId: sweid,
			classes: ['', 'drawer', 'h-56', 'rounded'],
			btnText: `Open drawer`,
			item1Text: 'Sidebar Item 1',
			item2Text: 'Sidebar Item 2',
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
		<button class="w-full" on:click={addComponent}>
			<div class="drawer h-56 rounded">
				<input id="my-drawer" type="checkbox" class="drawer-toggle" />
				<div class="flex flex-col items-center justify-center drawer-content">
					<label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
				</div>
				<div class="drawer-side">
					<label for="my-drawer" class="drawer-overlay" />
					<ul class="menu p-4 w-80 bg-base-100 text-base-content">
						<!-- Sidebar content here -->
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>Sidebar Item 1</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>Sidebar Item 2</a></li>
					</ul>
				</div>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="drawer h-56 rounded drawer-mobile">
			<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col items-center justify-center">
				<!-- Page content here -->
				<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-2" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100 text-base-content">
					<!-- Sidebar content here -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Sidebar Item 1</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Sidebar Item 2</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="drawer h-56 rounded">
			<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				<!-- Navbar -->
				<div class="w-full navbar bg-base-300">
					<div class="flex-none lg:hidden">
						<label for="my-drawer-3" class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-6 h-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
					<div class="flex-1 px-2 mx-2">Navbar Title</div>
					<div class="flex-none hidden lg:block">
						<ul class="menu menu-horizontal">
							<!-- Navbar menu content here -->
							<!-- svelte-ignore a11y-missing-attribute -->
							<li><a>Navbar Item 1</a></li>
							<!-- svelte-ignore a11y-missing-attribute -->
							<li><a>Navbar Item 2</a></li>
						</ul>
					</div>
				</div>
				<div class="flex justify-center items-center flex-grow">
					<!-- Page content here -->
					Content
				</div>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-3" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100">
					<!-- Sidebar content here -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Sidebar Item 1</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Sidebar Item 2</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="drawer h-56 rounded drawer-end">
			<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
			<div class="flex flex-col items-center justify-center drawer-content">
				<label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-4" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100 text-base-content">
					<!-- Sidebar content here -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Sidebar Item 1</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Sidebar Item 2</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
