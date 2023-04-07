<script>
	export let swCodeH;
</script>

<input
	type="text"
	placeholder="Chat 1"
	value={swCodeH.selectedElement.mc.chat1}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			chat1: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Chat 2"
	value={swCodeH.selectedElement.mc.chat2}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			chat2s: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
