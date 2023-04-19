<script>//@ts-nocheck
	export let swCodeH;
</script>

<div>
	<input
		type="text"
		placeholder="Content"
		value={swCodeH.selectedElement.mc.content}
		on:change={(e) => {
			swCodeH.selectedElement.mc.$set({
				content: e.target.value
			});
		}}
		class="input w-full max-w-xs mt-2"
	/>
	<select
		on:change={(e) => {
			if (e.target.value == 'Phone 1') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'phone-1'
				});
			} else if (e.target.value == 'Phone 2') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'phone-2'
				});
			} else if (e.target.value == 'Phone 3') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'phone-3'
				});
			} else if (e.target.value == 'Phone 4') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'phone-4'
				});
			} else if (e.target.value == 'Phone 5') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'phone-5'
				});
			} else if (e.target.value == 'Phone 6') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'phone-6'
				});
			}
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>Phone 1</option>
		<option>Phone 2</option>
		<option>Phone 3</option>
		<option>phone 4</option>
		<option>Phone 5</option>
		<option>Phone 6</option>
	</select>

	<select
		on:change={(e) => {
			if (e.target.value == 'Vertical') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: ''
				});
			} else if (e.target.value == 'Horizontal') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'artboard-horizontal'
				});
			}
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Orientation</option>
		<option>Vertical</option>
		<option>Horizontal</option>
	</select>
</div>
