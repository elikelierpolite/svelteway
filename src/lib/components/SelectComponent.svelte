<script>
	import ComponentsToSelect from "./ComponentsToSelect.svelte";

</script>
<!-- The button to open modal -->
<label for="my-modal-4" class="btn hidden" id="open-component-select">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
  <label class="modal-box relative w-11/12 max-w-5xl" for="">
    <h3 class="font-bold text-4xl">All daisyUI components</h3>
    <ComponentsToSelect />
  </label>
</label>