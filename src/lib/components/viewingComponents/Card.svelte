<script>//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Card1 from './mainComponents/Card1.svelte';
	import Toolbar from './Toolbar.svelte';

	function addComponent() {
		const cvElement = class cvElement {
		constructor(element, props) {
			this.id = props.swElementDataAttrId;
			this.element = element;
			this.props = props;
		}
		create() {
			this.mainComponent = new Card1({
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
		}
	};
		const sweid = uuidv4();

		let newCvElement = new cvElement('card1', {
			swElementDataAttrId: sweid,
			classes: ['', '', 'card', 'w-96', 'bg-base-100', 'shadow-xl'],
			imgSrc: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      cta: 'Buy Now',
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
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Buy Now</button>
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
		<div class="card card-compact w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					Shoes!
					<div class="badge badge-secondary">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">Fashion</div>
					<div class="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
			</div>
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure class="px-10 pt-10">
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
					class="rounded-xl"
				/>
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-base-100 shadow-xl image-full">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Card title!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">Card title!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn">Buy Now</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-neutral text-neutral-content">
			<div class="card-body items-center text-center">
				<h2 class="card-title">Cookies!</h2>
				<p>We are using cookies for no reason.</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Accept</button>
					<button class="btn btn-ghost">Deny</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="card-actions justify-end">
					<button class="btn btn-square btn-sm">
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
				<p>We are using cookies for no reason.</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: cover; background-image: url('https://daisyui.com/images/stock/photo-1481026469463-66327c86e544.jpg')"
	>
		<div class="card w-96 glass">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="car!"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Life hack</h2>
				<p>How to park your car at your garage?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Learn now!</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card card-side bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
					alt="Movie"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">New movie is released!</h2>
				<p>Click the button to watch on Jetflix app.</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Watch</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="card lg:card-side bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
					alt="Album"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">New album is released!</h2>
				<p>Click the button to listen on Spotiwhy app.</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Listen</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
