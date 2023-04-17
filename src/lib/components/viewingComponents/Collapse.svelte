<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('collapse1', {
			swElementDataAttrId: sweid,
			classes: ['', 'collapse'],
			title: `Focus me to see content`,
			contentBody: `tabindex="0" attribute is necessary to make the div focusable`,
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
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div tabindex="0" class="collapse">
				<div class="collapse-title text-xl font-medium">Focus me to see content</div>
				<div class="collapse-content">
					<p>tabindex="0" attribute is necessary to make the div focusable</p>
				</div>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="collapse">
			<input type="checkbox" />
			<div class="collapse-title text-xl font-medium">Click me to show/hide content</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box">
			<div class="collapse-title text-xl font-medium">Focus me to see content</div>
			<div class="collapse-content">
				<p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<div class="collapse-title text-xl font-medium">Focus me to see content</div>
			<div class="collapse-content">
				<p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
			<div class="collapse-title text-xl font-medium">Focus me to see content</div>
			<div class="collapse-content">
				<p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
			<div class="collapse-title text-xl font-medium">I have collapse-open class</div>
			<div class="collapse-content">
				<p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="collapse collapse-close border border-base-300 bg-base-100 rounded-box"
		>
			<div class="collapse-title text-xl font-medium">I have collapse-close class</div>
			<div class="collapse-content">
				<p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="0" class="collapse group">
			<div
				class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"
			>
				Focus me to see content
			</div>
			<div
				class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"
			>
				<p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="collapse">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				Click me to show/hide content
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				<p>hello</p>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
