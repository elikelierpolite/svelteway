<script>//@ts-nocheck
	export let swCodeH;
</script>

<input
	type="text"
	placeholder="Seconds"
	value={swCodeH.selectedElement.mc.seconds}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			seconds: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
