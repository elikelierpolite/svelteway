<script>//@ts-nocheck
import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Toolbar from './Toolbar.svelte';
	import NavBar1 from './mainComponents/NavBar1.svelte';

	function addComponent() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new NavBar1({
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
			  ><a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a></div></div>`
				: `<div 
				class="${removeBorderClass.join(' ')}"
			><a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a></div>`;
			}
		};
		const sweid = uuidv4();

		let newCvElement = new cvElement('navbar1', {
			swElementDataAttrId: sweid,
			classes: ['navbar', 'bg-base-100'],
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
			<div class="navbar bg-base-100">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-100">
			<div class="flex-1">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="flex-none">
				<button class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-100">
			<div class="flex-none">
				<button class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</button>
			</div>
			<div class="flex-1">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="flex-none">
				<button class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-100 mb-32">
			<div class="flex-1">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal px-1">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Item 1</a></li>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<li tabindex="0">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">
							Parent
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
							>
						</a>
						<ul class="p-2 bg-base-100">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<li><a href="#">Submenu 1</a></li>
							<!-- svelte-ignore a11y-invalid-attribute -->
							<li><a href="#">Submenu 2</a></li>
						</ul>
					</li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Item 3</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-100 mb-32">
			<div class="flex-1">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="flex-none gap-2">
				<div class="form-control">
					<input type="text" placeholder="Search" class="input input-bordered" />
				</div>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<!-- svelte-ignore a11y-missing-attribute -->
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#" class="justify-between">
								Profile
								<span class="badge">New</span>
							</a>
						</li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Settings</a></li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-100 mb-32">
			<div class="flex-1">
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="flex-none">
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<div class="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/></svg
							>
							<span class="badge badge-sm indicator-item">8</span>
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
						<div class="card-body">
							<span class="font-bold text-lg">8 Items</span>
							<span class="text-info">Subtotal: $999</span>
							<div class="card-actions">
								<button class="btn btn-primary btn-block">View cart</button>
							</div>
						</div>
					</div>
				</div>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<!-- svelte-ignore a11y-missing-attribute -->
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#" class="justify-between">
								Profile
								<span class="badge">New</span>
							</a>
						</li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Settings</a></li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-100 mb-32">
			<div class="navbar-start">
				<div class="dropdown">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/></svg
						>
					</label>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Homepage</a></li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Portfolio</a></li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">About</a></li>
					</ul>
				</div>
			</div>
			<div class="navbar-center">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
				<button class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/></svg
						>
						<span class="badge badge-xs badge-primary indicator-item" />
					</div>
				</button>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-100 mb-32">
			<div class="navbar-start">
				<div class="dropdown">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label tabindex="0" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</label>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="#">Item 1</a></li>
						<li tabindex="0">
							<a href="#" class="justify-between">
								Parent
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
								>
							</a>
							<ul class="p-2">
								<li><a href="#">Submenu 1</a></li>
								<li><a href="#">Submenu 2</a></li>
							</ul>
						</li>
						<li><a href="#">Item 3</a></li>
					</ul>
				</div>
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="#">Item 1</a></li>
					<li tabindex="0">
						<a href="#">
							Parent
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
							>
						</a>
						<ul class="p-2">
							<li><a href="#">Submenu 1</a></li>
							<li><a href="#">Submenu 2</a></li>
						</ul>
					</li>
					<li><a href="#">Item 3</a></li>
				</ul>
			</div>
			<div class="navbar-end">
				<a href="#" class="btn">Get started</a>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-neutral text-neutral-content">
			<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="navbar bg-base-300">
			<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="navbar bg-primary text-primary-content">
			<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
