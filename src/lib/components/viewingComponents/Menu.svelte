<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('menu1', {
			swElementDataAttrId: sweid,
			classes: ['menu', 'bg-base-100', 'w-56'],
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

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
	<button class="w-full grid content-center justify-center" on:click={addComponent}>
		<ul class="menu bg-base-100 w-56">
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56">
			<li><a href="#">Item 1</a></li>
			<li><a href="#" class="active">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56 p-2 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56 p-2 rounded-box">
			<li class="menu-title">
				<span>Category</span>
			</li>
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li class="menu-title">
				<span>Category</span>
			</li>
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li class="bordered"><a href="#">I have border</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li class="hover-bordered"><a href="#">Hover me</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56 rounded-box">
			<li class="disabled"><a href="#">Item 1</a></li>
			<li class="disabled"><a href="#">Item 2</a></li>
			<li class="disabled"><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-compact bg-base-100 w-56 p-2 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-horizontal bg-base-100 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
			<li><a href="#">Item 1</a></li>
			<li><a href="#">Item 2</a></li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 w-56 p-2 rounded-box">
			<li>
				<a href="#">
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
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/></svg
					>
					Item 2
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					Item 1
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/></svg
					>
					Item 3
				</a>
			</li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 rounded-box">
			<li>
				<a href="#">
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
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/></svg
					>
				</a>
			</li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-horizontal bg-base-100 rounded-box">
			<li>
				<a href="#">
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
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/></svg
					>
				</a>
			</li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 p-2 rounded-box">
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#">
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
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="#">
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
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/></svg
					>
				</a>
			</li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-horizontal bg-base-100">
			<li><a href="#">Item 1</a></li>
			<!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<li tabindex="0">
				<span>Parent</span>
				<ul class="bg-base-100">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 1</a></li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 2</a></li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 3</a></li>
				</ul>
			</li>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
			<li><a href="#">Item 1</a></li>
			<!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<li tabindex="0">
				<span>Parent</span>
				<ul class="rounded-box bg-base-100 p-2">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 1</a></li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 2</a></li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 3</a></li>
				</ul>
			</li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu bg-base-100 rounded-box p-2">
			<li><a href="#">Item 1</a></li>
			<!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<li tabindex="0">
				<span>Parent</span>
				<ul class="rounded-box p-2 bg-base-100">
					<!-- svelte-ignore a11y-missing-attribute -->
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 1</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 2</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<!-- svelte-ignore a11y-invalid-attribute -->
					<li><a href="#">Submenu 3</a></li>
				</ul>
			</li>
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
			<li><a href="#">Item</a></li>
			<!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<li tabindex="0">
				<span>Level 1</span>
				<ul class="rounded-box bg-base-100 p-2">
					<li>
						<span>Level 2</span>
						<ul>
							<li>
								<span>Level 3</span>
								<ul>
									<li>
										<span>Level 4</span>
										<ul>
											<li>
												<span>Level 5</span>
												<ul>
													<li><a href="#">Level 6</a></li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<ul class="menu w-56 bg-secondary text-secondary-content p-2 rounded-box">
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li><a href="#">Item 1</a></li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li><a href="#">Item 2</a></li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li><a href="#">Item 3</a></li>
		</ul>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
