<script>
	import ComponentsToSelect from './ComponentsToSelect.svelte';
	import { viewComponent } from './viewComponentsStore';
</script>

<!-- The button to open modal -->
<label for="my-modal-3" class="btn hidden" id="open-component-select" />

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		{#if $viewComponent.viewing}
			<button
				on:click={() => viewComponent.update((v) => ({ ...v, viewing: false }))}
				class="btn btn-sm btn-circle absolute right-2 top-7">✕</button
			>
		{:else}
			<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-7">✕</label>
		{/if}
		<h3 class="text-4xl font-bold mb-10">Components</h3>
		<ComponentsToSelect />
	</div>
</div>
