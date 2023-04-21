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
