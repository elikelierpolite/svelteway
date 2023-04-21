<script>//@ts-nocheck
	export let swCodeH;
</script>

<input
	type="text"
	placeholder="Content 1"
	value={swCodeH.selectedElement.mc.content1}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			content1: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Content 2"
	value={swCodeH.selectedElement.mc.content2}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			content2: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Content 3"
	value={swCodeH.selectedElement.mc.content3}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			content3: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Content 4"
	value={swCodeH.selectedElement.mc.content4}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			content4: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Content 5"
	value={swCodeH.selectedElement.mc.content5}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			content5: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
