<script>
	import '../styles/globals.css';
	import '../styles/app.css';
	import ActionButtons from './ActionButtons.svelte';
	import Canvas from './Canvas.svelte';
	import { swCode } from './CodeStore';
	import toast, { Toaster } from 'svelte-french-toast';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	export let data;
	let swc = [];
	let theme = JSON.parse(data.data.theme)
	function swSave() {
		$swCode.cvElements.forEach((element) => {
			element.swecode()
			swc.push(element.code);
			element.mc.$destroy();
			element.tb.$destroy();
		});
		let bodyFormData = new FormData();
		bodyFormData.append('path', data.data.file);
		bodyFormData.append('swc', swc.join('\n'));
		bodyFormData.append('redirectTo', $page.route.id);
		axios({
			method: 'post',
			url: '/api/svelteway?/save',
			data: bodyFormData,
			headers: { 'Content-Type': 'multipart/form-data' }
		});
		swCode.set({
			cvElements: [],
			selectedElement: {}
		});
		toast.success('Saved!');
	}

	onMount(() => {
		swc.push(data.data.source);
	});
</script>

<Toaster />
<div data-theme={theme} class="h-[100vh] w-[100vw] font-sans">
	<div class="flex h-full w-full">
		<ActionButtons />
		<Canvas on:save={swSave} {data}>
			<slot />
		</Canvas>
	</div>
</div>
