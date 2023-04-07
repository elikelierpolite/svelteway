<script>
	export let swCodeH;
</script>


<input
	type="text"
	placeholder="Text"
	value={swCodeH.selectedElement.mc.text}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			text: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<select
	on:change={(e) => {
		if (e.target.value == 'Divider Vertical') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'divider-vertical'
			});
		} else if (e.target.value == 'Divider Horizontal') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'divider-horizontal'
			});
		}
	}}
	class="select w-full max-w-xs mt-2 mb-2"
>
	<option disabled selected>Modifier</option>
	<option>Divider Vertical</option>
	<option>Divider Horizontal</option>
</select>
