<script>
	//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Toolbar from './Toolbar.svelte';
	import Progress1 from './mainComponents/Progress1.svelte';

	function addComponent() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Progress1({
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
			}
		};
		const sweid = uuidv4();

		let newCvElement = new cvElement('progress1', {
			swElementDataAttrId: sweid,
			classes: ['flex', 'flex-col', 'gap-2', 'items-center'],
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
			<div class="flex flex-col gap-2 items-center">
				<progress class="progress w-56" value="0" max="100" />
				<progress class="progress w-56" value="10" max="100" />
				<progress class="progress w-56" value="40" max="100" />
				<progress class="progress w-56" value="70" max="100" />
				<progress class="progress w-56" value="100" max="100" />
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<progress class="progress progress-primary w-56" value="0" max="100" />
			<progress class="progress progress-primary w-56" value="10" max="100" />
			<progress class="progress progress-primary w-56" value="40" max="100" />
			<progress class="progress progress-primary w-56" value="70" max="100" />
			<progress class="progress progress-primary w-56" value="100" max="100" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<progress class="progress progress-secondary w-56" value="0" max="100" />
			<progress class="progress progress-secondary w-56" value="10" max="100" />
			<progress class="progress progress-secondary w-56" value="40" max="100" />
			<progress class="progress progress-secondary w-56" value="70" max="100" />
			<progress class="progress progress-secondary w-56" value="100" max="100" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<progress class="progress progress-accent w-56" value="0" max="100" />
			<progress class="progress progress-accent w-56" value="10" max="100" />
			<progress class="progress progress-accent w-56" value="40" max="100" />
			<progress class="progress progress-accent w-56" value="70" max="100" />
			<progress class="progress progress-accent w-56" value="100" max="100" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<progress class="progress progress-success w-56" value="0" max="100" />
			<progress class="progress progress-success w-56" value="10" max="100" />
			<progress class="progress progress-success w-56" value="40" max="100" />
			<progress class="progress progress-success w-56" value="70" max="100" />
			<progress class="progress progress-success w-56" value="100" max="100" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<progress class="progress progress-info w-56" value="0" max="100" />
			<progress class="progress progress-info w-56" value="10" max="100" />
			<progress class="progress progress-info w-56" value="40" max="100" />
			<progress class="progress progress-info w-56" value="70" max="100" />
			<progress class="progress progress-info w-56" value="100" max="100" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<progress class="progress progress-warning w-56" value="0" max="100" />
			<progress class="progress progress-warning w-56" value="10" max="100" />
			<progress class="progress progress-warning w-56" value="40" max="100" />
			<progress class="progress progress-warning w-56" value="70" max="100" />
			<progress class="progress progress-warning w-56" value="100" max="100" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-2 items-center">
			<progress class="progress progress-error w-56" value="0" max="100" />
			<progress class="progress progress-error w-56" value="10" max="100" />
			<progress class="progress progress-error w-56" value="40" max="100" />
			<progress class="progress progress-error w-56" value="70" max="100" />
			<progress class="progress progress-error w-56" value="100" max="100" />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<progress class="progress w-56" />
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
