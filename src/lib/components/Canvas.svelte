<script>
	import { swCode, swCodeElement } from './CodeStore';
	import Code from './Code.svelte';
	import SelectComponent from './SelectComponent.svelte';
	import { produce } from 'immer';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { v4 as uuidv4 } from 'uuid';
	import { createStack } from 'svelte-undo';
	export let data;
	$: initClientX = 0;
	$: initClientY = 0;
	$: elWidth = 0;
	$: elHeight = 0;
	$: elTop = '';
	$: elLeft = '';
	$: disableEvents = false;

	const stack = createStack(data.data.source);

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key.toLowerCase() === 'z' && e.ctrlKey) {
				stack.undo();
			}
			if (e.key.toLowerCase() === 'z' && e.ctrlKey && e.shiftKey) {
				stack.redo();
			}
		});
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
					let csc = document.getElementById('open-component-select');
					swCodeElement.update(() => ({
						id: element.getAttribute('data-cvelement'),
						file: data.data.file
					}));
					csc.click();
				});
			});
		}
	});
</script>

<SelectComponent />
<div class="h-full w-[100vw]">
	{#if $swCode.swediting}
		<Code />
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="h-full w-[100%] overflow-y-auto border-x-[1px] border-[#E6E6E6]"
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
					element.style.border = `1px solid hsl(15, 100%, 55%)`;
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
			on:mouseup={async (e) => {
				if (!disableEvents) {
					const element = document.getElementById('nce');
					const dataCvElement = uuidv4();
					element.setAttribute('id', 'rce');
					element.style.backgroundColor = `#E6E6E6`;
					element.classList.add('flex');
					element.classList.add('justify-center');
					element.classList.add('content-center');
					const elementChild = document.createElement('div');
					elementChild.setAttribute('id', 'frcec');
					element.setAttribute('data-cvelement', dataCvElement);
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
						let csc = document.getElementById('open-component-select');
						swCodeElement.update((v) => ({
							id: dataCvElement,
							file: data.data.file,
							swc: [
								...v.swc,
								{
									swcb: [
										dataCvElement,
										`<div data-cvelement='${dataCvElement}' class='rce absolute left-[${elLeft}] top-[${elTop}] hover:cursor-pointer w-[${elWidth}px] h-[${elHeight}px] flex justify-center content-center bg-[#E6E6E6]' style="border: 1px solid hsl(15, 100%, 55%)"><div class='w-10 h-10 self-center bg-[url("/svelte-logo.svg")] bg-no-repeat bg-auto'></div></div>`
									]
								}
							]
						}));
						csc.click();
					});
					element.appendChild(elementChild);
					swCode.update((v) => ({
						swediting: false,
						source: `<div data-cvelement='${dataCvElement}' class='rce absolute left-[${elLeft}] top-[${elTop}] hover:cursor-pointer w-[${elWidth}px] h-[${elHeight}px] flex justify-center content-center bg-[#E6E6E6]' style="border: 1px solid hsl(15, 100%, 55%)"><div class='w-10 h-10 self-center bg-[url("/svelte-logo.svg")] bg-no-repeat bg-auto'></div></div>`
					}));
					const res = await axios
						.get('/api/svelteway', { params: { path: data.data.file } })
						.then((r) => {
							const postData = [`${r.data}`, `${$swCode.source}`];
							axios
								.post(
									`/api/svelteway`,
									{
										path: data.data.file,
										swc: postData.join('')
									},
									{
										params: {
											path: data.data.file,
											swc: postData.join('')
										}
									}
								)
								.then(() => {
									stack.push($swCode);
									return;
								});
						});
				}
			}}
		>
			<slot />
		</div>
	{/if}
</div>

<style>
</style>
