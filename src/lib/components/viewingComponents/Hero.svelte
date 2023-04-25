<script>
	//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Toolbar from './Toolbar.svelte';
	import Hero1 from './mainComponents/Hero1.svelte';

	function addComponent() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Hero1({
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
			}
		};
		const sweid = uuidv4();

		let newCvElement = new cvElement('hero1', {
			swElementDataAttrId: sweid,
			classes: ['hero', 'min-h-screen', 'bg-base-200'],
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
			<div class="hero min-h-screen bg-base-200">
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
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content flex-col lg:flex-row">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
					class="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 class="text-5xl font-bold">Box Office News!</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
					class="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 class="text-5xl font-bold">Box Office News!</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold">Login now!</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div class="card-body">
						<div class="form-control">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text">Email</span>
							</label>
							<input type="text" placeholder="email" class="input input-bordered" />
						</div>
						<div class="form-control">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text">Password</span>
							</label>
							<input type="text" placeholder="password" class="input input-bordered" />
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<a href="#" class="label-text-alt link link-hover">Forgot password?</a>
							</label>
						</div>
						<div class="form-control mt-6">
							<button class="btn btn-primary">Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div
			class="hero min-h-screen"
			style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
		>
			<div class="hero-overlay bg-opacity-60" />
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
					<p class="mb-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
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
