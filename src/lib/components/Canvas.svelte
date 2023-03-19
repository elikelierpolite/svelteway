<script>
	import { swCode } from './CodeStore';
	import Code from './Code.svelte';
	import swCodeState from './State';
	import axios from 'axios';
	import { assets, base } from '$app/paths';
	import approach2 from './State';
	import { produce } from 'immer';
	export let data;
	$: initClientX = 0;
	$: initClientY = 0;
	$: elWidth = 0;
	$: elHeight = 0;
	$: elTop = '';
	$: elLeft = '';
	$: disableEvents = false;

	export let undoRedoStore;
</script>

<div class="h-full w-[100vw]">
	{#if $swCode.swediting}
		<Code />
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="h-full hover:cursor-crosshair w-[100%]"
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
					const element = document.getElementById('nce');
					element.setAttribute('id', 'rce');
					element.style.backgroundColor = `#E6E6E6`;
					element.classList.add('flex');
					element.classList.add('justify-center');
					element.classList.add('content-center');
					const elementChild = document.createElement('img');
					elementChild.setAttribute('src', '/svelte-logo.svg');
					elementChild.classList.add('w-10');
					elementChild.classList.add('h-10');
					elementChild.classList.add('self-center');
					element.classList.add('hover:cursor-pointer');
                    element.addEventListener('mouseenter', function(){
                        disableEvents = true
                    })
                    element.addEventListener('mouseleave', function(){
                        disableEvents = false
                    })
                    element.addEventListener('click', function(){
                        alert("Hello World")
                    })
					element.appendChild(elementChild);
					swCode.update((v) => {
						const newSwCode = [
							`${v.source}`,
							`<div class='absolute left-[${elLeft}] top-[${elTop}] hover:cursor-pointer w-[${elWidth}px] h-[${elHeight}px] flex justify-center content-center bg-[#E6E6E6]'><img class='w-10 h-10 self-center' src="/svelte-logo.svg" /></div>`
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
						.then(function (response) {
							console.log(response);
						})
						.catch(function (error) {
							console.log(error);
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
