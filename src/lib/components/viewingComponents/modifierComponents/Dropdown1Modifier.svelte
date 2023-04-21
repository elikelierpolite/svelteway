<script>//@ts-nocheck
	export let swCodeH;
</script>

<input
	type="text"
	placeholder="Button Text"
	value={swCodeH.selectedElement.mc.btnText}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			btnText: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Button Text"
	value={swCodeH.selectedElement.mc.item1Text}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item1Text: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Button Text"
	value={swCodeH.selectedElement.mc.item2Text}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item2Text: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<select
	on:change={(e) => {
		if (e.target.value == 'Dropdown End') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'dropdown-end'
			});
		} else if (e.target.value == 'Dropdown Top') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'dropdown-top'
			});
		} else if (e.target.value == 'Dropdown Bottom') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'dropdown-bottom'
			});
		} else if (e.target.value == 'Dropdown Left') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'dropdown-left'
			});
		} else if (e.target.value == 'Dropdown Right') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'dropdown-right'
			});
		} else if (e.target.value == 'Dropdown Hover') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'dropdown-hover'
			});
		} else if (e.target.value == 'Dropdown Open') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'dropdown-open'
			});
		}
	}}
	class="select w-full max-w-xs mt-2 mb-2"
>
	<option disabled selected>Modifier</option>
	<option>Dropdown End</option>
	<option>Dropdown Top</option>
	<option>Dropdown Bottom</option>
	<option>Dropdown Left</option>
	<option>Dropdown Right</option>
	<option>Dropdown Hover</option>
	<option>Dropdown Open</option>
</select>
