<script>
	import SelectComponent from './SelectComponent.svelte';
	import ToolbarContent from './viewingComponents/ToolbarContent.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher()
</script>

<svelte:window
	on:keydown={async (e) => {
		if (e.key.toLowerCase() === 's' && e.shiftKey && e.ctrlKey) {
			dispatch("save")
		}
	}}
/>
<SelectComponent />
<div class="h-full w-[100vw]">
	<div class="pl-2 h-full w-[100%] border-x-[1px] border-[#E6E6E6]" id="cv">
	<div class="drawer drawer-end">
		<input id="toolbar-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<div class="h-full w-[100%] overflow-y-auto" id="cvh">
				<slot />
				<label for="toolbar-drawer" class="btn btn-primary drawer-button hidden" id="toggle-toolbar">Open ToolBar</label>
			</div>
			</div> 
			<div class="drawer-side">
				<label for="toolbar-drawer" class="drawer-overlay"></label>
				<ul class="p-4 w-80 bg-base-100 text-base-content">
					<ToolbarContent />
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	#cvh {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		width: 100%;
		height: 100%;
		position: relative;
		user-select: none; /* Standard syntax */
		overflow-y: scroll;
	}
	#cv::-webkit-scrollbar {
		width: 0px;
	}
	#cvh::-webkit-scrollbar {
		width: 5px;
	}

	#cvh::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	#cvh::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		outline: 1px solid slategrey;
	}
</style>
