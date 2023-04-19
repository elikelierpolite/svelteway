<script>//@ts-nocheck
	import { onMount } from 'svelte';
	let swCode
	let cvElement
	onMount(async () => {
		const { swCode:swCode2, cvElement:cvElement2 } = await import('../CodeStore')
		swCode = swCode2
		cvElement = cvElement2
	})
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('toast1', {
			swElementDataAttrId: sweid,
			classes: ['toast', 'absolute'],
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
			<div class="w-full h-64 relative">
				<div class="toast absolute">
					<div class="alert alert-info">
						<div>
							<span>New message arrived.</span>
						</div>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-top toast-start absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-top toast-center absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-top toast-end absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-start toast-middle absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-center toast-middle absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-end toast-middle absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-start absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-center absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
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
		<div class="w-full h-64 relative">
			<div class="toast toast-end absolute">
				<div class="alert alert-info">
					<div>
						<span>New mail arrived.</span>
					</div>
				</div>
				<div class="alert alert-success">
					<div>
						<span>Message sent successfully.</span>
					</div>
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
