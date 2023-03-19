<script>
	import { swCode } from './CodeStore';
	import Code from './Code.svelte';
	import { produce } from 'immer';
	import { onMount } from 'svelte';
	import axios from 'axios';
	export let data;
	$: initClientX = 0;
	$: initClientY = 0;
	$: elWidth = 0;
	$: elHeight = 0;
	$: elTop = '';
	$: elLeft = '';
	$: disableEvents = false;

	export let undoRedoStore;
	let history = undoRedoStore.history;

	onMount(() => {
		const rawElements = document.getElementsByClassName('rce');
		const elements = [...rawElements];
		if (elements.length > 0) {
			elements.forEach((element) => {
				element.addEventListener('mouseenter', function () {
					disableEvents = true;
				});
				element.addEventListener('mouseleave', function () {
					disableEvents = false;
				});
				element.addEventListener('click', function () {
					alert('Hello World');
				});
			});
		}
	});
</script>

<div class="h-full w-[100vw]">
	{#if $swCode.swediting}
		<Code />
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="h-full w-[100%] overflow-y-auto"
			id="cv"
			on:mousedown={(e) => {
				if (!disableEvents) {
					const pEm = document.getElementById('cv');
					initClientX = e.clientX;
					initClientY = e.clientY;
					console.log('initClientX', initClientX);
					console.log('initClientY', initClientY);
					const element = document.createElement('div');
					element.id = 'nce';
					element.style.position = 'absolute';
					element.style.top = `${e.clientY}px`;
					elTop = `${e.clientY}px`;
					element.style.left = `${e.clientX}px`;
					elLeft = `${e.clientX}px`;
					element.style.backgroundColor = `#E6E6E6`;

					element.style.overflow = 'auto';
					element.style.maxWidth = '100%';
					pEm?.appendChild(element);
				}
			}}
			on:mousemove={(event) => {
				if (!disableEvents) {
					if (document.getElementById('nce')) {
						const element = document.getElementById('nce');
						const width = event.clientX - initClientX;
						const height = event.clientY - initClientY;
						elWidth = width;
						elHeight = height;
						element.style.width = `${width}px`;
						element.style.height = `${height}px`;
					} else {
						return;
					}
				}
			}}
			on:mouseup={(e) => {
				if (!disableEvents) {
					window.localStorage.setItem(`history-${data.data.file}`, JSON.stringify($history));
					const element = document.getElementById('nce');
					element.setAttribute('id', 'rce');
					element.style.backgroundColor = `#E6E6E6`;
					element.classList.add('flex');
					element.classList.add('justify-center');
					element.classList.add('content-center');
					const elementChild = document.createElement('div');
					elementChild.setAttribute('id', 'frcec');
					elementChild.style.backgroundImage = `url("/svelte-logo.svg")`;
					elementChild.style.backgroundRepeat = `no-repeat`;
					elementChild.classList.add('w-10');
					elementChild.classList.add('h-10');
					elementChild.classList.add('self-center');
					element.classList.add('hover:cursor-pointer');
					element.classList.add('rce');
					element.addEventListener('mouseenter', function () {
						disableEvents = true;
					});
					element.addEventListener('mouseleave', function () {
						disableEvents = false;
					});
					element.addEventListener('click', function () {
						alert('Hello World');
					});
					element.appendChild(elementChild);
					swCode.update((v) => {
						const newSwCode = [
							`${v.source}`,
							`<div class='rce absolute left-[${elLeft}] top-[${elTop}] hover:cursor-pointer w-[${elWidth}px] h-[${elHeight}px] flex justify-center content-center bg-[#E6E6E6]'><div class='w-10 h-10 self-center bg-[url("/svelte-logo.svg")] bg-no-repeat bg-auto' /></div>`
						];
						$undoRedoStore =
							(produce($undoRedoStore, (draft) => {
								draft.source = newSwCode.join('\n');
							}),
							data.data.file);
						return {
							swediting: false,
							source: newSwCode.join('\n'),
							ssource: v.ssource
						};
					});
					axios
						.post(
							`/api/svelteway`,
							{
								path: data.data.file,
								swc: $swCode.source
							},
							{
								params: {
									path: data.data.file,
									swc: $swCode.source
								}
							}
						)
				}
			}}
		>
				<slot />
		</div>
	{/if}
</div>

<style>
</style>
