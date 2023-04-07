<script>
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
		if (e.target.value == 'Default Drawer') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: ''
			});
		} else if (e.target.value == 'Drawer Mobile') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'drawer-mobile'
			});
		} else if (e.target.value == 'Drawer End') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'drawer-end'
			});
		}
	}}
	class="select w-full max-w-xs mt-2 mb-2"
>
	<option disabled selected>Modifier</option>
	<option>Default Drawer</option>
	<option>Drawer Mobile</option>
	<option>Drawer End</option>
</select>
