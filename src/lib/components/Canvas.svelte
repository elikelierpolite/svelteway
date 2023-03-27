<script>
	import SelectComponent from './SelectComponent.svelte';
	export let data;
</script>

<svelte:window
	on:keydown={async (e) => {
		if (e.key.toLowerCase() === 'z' && e.ctrlKey) {
		}
		if (e.key.toLowerCase() === 'z' && e.shiftKey && e.ctrlKey) {
		}
		if (e.key.toLowerCase() === 's' && e.ctrlKey) {
		}
	}}
/>
<SelectComponent />
<div class="h-full w-[100vw]">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="px-2 h-full w-[100%] overflow-y-auto border-x-[1px] border-[#E6E6E6]" id="cv">
		<slot />
	</div>
</div>

<style>
	#cv {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		width: 100%;
		height: 100%;
		position: relative;
		user-select: none; /* Standard syntax */
		overflow-y: scroll;
	}
	#cv::-webkit-scrollbar {
		width: 5px;
	}

	#cv::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	#cv::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		outline: 1px solid slategrey;
	}
</style>
