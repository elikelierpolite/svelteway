<script>
	//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Toolbar from './Toolbar.svelte';
	import Select1 from './mainComponents/Select1.svelte';

	function addComponent() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Select1({
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
			}
		};
		const sweid = uuidv4();

		let newCvElement = new cvElement('select1', {
			swElementDataAttrId: sweid,
			classes: ['select', 'w-full', 'max-w-xs'],
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
			<select class="select w-full max-w-xs">
				<option disabled selected>Pick your favorite Simpson</option>
				<option>Homer</option>
				<option>Marge</option>
				<option>Bart</option>
				<option>Lisa</option>
				<option>Maggie</option>
			</select>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-bordered w-full max-w-xs">
			<option disabled selected>Who shot first?</option>
			<option>Han Solo</option>
			<option>Greedo</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-ghost w-full max-w-xs">
			<option disabled selected>Pick the best JS framework</option>
			<option>Svelte</option>
			<option>Vue</option>
			<option>React</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control w-full max-w-xs">
			<label class="label">
				<span class="label-text">Pick the best fantasy franchise</span>
				<span class="label-text-alt">Alt label</span>
			</label>
			<select class="select select-bordered">
				<option disabled selected>Pick one</option>
				<option>Star Wars</option>
				<option>Harry Potter</option>
				<option>Lord of the Rings</option>
				<option>Planet of the Apes</option>
				<option>Star Trek</option>
			</select>
			<label class="label">
				<span class="label-text-alt">Alt label</span>
				<span class="label-text-alt">Alt label</span>
			</label>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-primary w-full max-w-xs">
			<option disabled selected>What is the best TV show?</option>
			<option>Game of Thrones</option>
			<option>Lost</option>
			<option>Breaking Bad</option>
			<option>Walking Dead</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-secondary w-full max-w-xs">
			<option disabled selected>Pick your favorite language</option>
			<option>Java</option>
			<option>Go</option>
			<option>C</option>
			<option>C#</option>
			<option>C++</option>
			<option>Rust</option>
			<option>JavaScript</option>
			<option>Python</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-accent w-full max-w-xs">
			<option disabled selected>Dark mode or light mode?</option>
			<option>Auto</option>
			<option>Dark mode</option>
			<option>Light mode</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-info w-full max-w-xs">
			<option disabled selected>Select language</option>
			<option>English</option>
			<option>Japanese</option>
			<option>Italian</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	/>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-success w-full max-w-xs">
			<option disabled selected>Pick your favorite anime</option>
			<option>One Piece</option>
			<option>Naruto</option>
			<option>Death Note</option>
			<option>Attack on Titan</option>
			<option>Bleach</option>
			<option>Fullmetal Alchemist</option>
			<option>Jojo's Bizarre Adventure</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-warning w-full max-w-xs">
			<option disabled selected>Pick a pizza</option>
			<option>Cheese</option>
			<option>Veggie</option>
			<option>Pepperoni</option>
			<option>Margherita</option>
			<option>Hawaiian</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select select-error w-full max-w-xs">
			<option disabled selected>What is the best headless CMS</option>
			<option>Strapi</option>
			<option>Ghost</option>
			<option>Netlify CMS</option>
			<option>Sanity</option>
		</select>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-4 w-full items-center">
			<!-- lg -->
			<select class="select select-bordered select-lg w-full max-w-xs">
				<option disabled selected>Large</option>
				<option>Large Apple</option>
				<option>Large Orange</option>
				<option>Large Tomato</option>
			</select>
			<!-- md -->
			<select class="select select-bordered w-full max-w-xs">
				<option disabled selected>Normal</option>
				<option>Normal Apple</option>
				<option>Normal Orange</option>
				<option>Normal Tomato</option>
			</select>
			<!-- sm -->
			<select class="select select-bordered select-sm w-full max-w-xs">
				<option disabled selected>Small</option>
				<option>Small Apple</option>
				<option>Small Orange</option>
				<option>Small Tomato</option>
			</select>
			<!-- xs -->
			<select class="select select-bordered select-xs w-full max-w-xs">
				<option disabled selected>Tiny</option>
				<option>Tiny Apple</option>
				<option>Tiny Orange</option>
				<option>Tiny Tomato</option>
			</select>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<select class="select w-full max-w-xs" disabled>
			<option>You can't touch this</option>
		</select>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
