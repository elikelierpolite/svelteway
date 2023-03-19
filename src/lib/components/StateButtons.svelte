<script>
	import { undoRedoDispatched } from './UndoRedo';
	import { fade } from 'svelte/transition'
	export let undoRedoStore 
	export let data 
</script>

<div class="m-2 flex justify-end self-start text-white h-full w-[80px]" transition:fade>
	<div class="flex gap-1">
		<button
			class="btn btn-circle btn-outline btn-sm"
			on:click={() => {
				undoRedoStore.undo(data.data.file);
				undoRedoDispatched.update((v) => ({value: !v.value}))
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
				/>
			</svg>
		</button>
		<button
			class="btn btn-circle btn-outline btn-sm"
			on:click={() => {
				undoRedoStore.redo(data.data.file);
				undoRedoDispatched.update((v) => ({value: !v.value}))
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
				/>
			</svg>
		</button>
	</div>
</div>
