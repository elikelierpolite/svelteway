<script>//@ts-nocheck
	import ComponentsToSelect from './ComponentsToSelect.svelte';
	import { viewComponent } from './viewComponentsStore';
</script>

<!-- The button to open modal -->
<label for="selct-component-modal" class="btn hidden" id="open-component-select" />

<!-- Put this part before </body> tag -->
<input type="checkbox" id="selct-component-modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box w-11/12 max-w-5xl" id='component-content'>
		{#if $viewComponent.viewing}
			<button
				on:click={() => viewComponent.update((v) => ({ ...v, viewing: false }))}
				class="btn btn-sm btn-circle absolute right-2 top-7">✕</button
			>
		{:else}
			<label for="selct-component-modal" class="btn btn-sm btn-circle absolute right-2 top-7">✕</label>
		{/if}
		<h3 class="text-4xl font-bold mb-10">Components</h3>
		<ComponentsToSelect />
	</div>
</div>
