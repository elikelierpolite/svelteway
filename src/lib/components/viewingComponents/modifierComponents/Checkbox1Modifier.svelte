<script>
	export let swCodeH;
</script>
<select
		on:change={(e) => {
			if (e.target.value == 'Checkbox Primary') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'checkbox-primary'
				});
			} else if (e.target.value == 'Checkbox Secondary') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'checkbox-secondary'
				});
			} else if (e.target.value == 'Checkbox Accent') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'checkbox-accent'
				});
			} else if (e.target.value == 'Checkbox Info') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'checkbox-info'
				});
			} else if (e.target.value == 'Checkbox Success') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'checkbox-success'
				});
			} else if (e.target.value == 'Checkbox Warning') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'checkbox-warning'
				});
			} else if (e.target.value == 'Checkbox Error') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'checkbox-error'
				});
            }
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>Checkbox Primary</option>
		<option>Checkbox Secondary</option>
		<option>Checkbox Accent</option>
		<option>Checkbox Info</option>
		<option>Checkbox Success</option>
		<option>Checkbox Warning</option>
		<option>Checkbox Error</option>
	</select>

    <select
		on:change={(e) => {
			
			if (e.target.value == 'Checkbox Lg') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'checkbox-lg'
				});
			} else if (e.target.value == 'Checkbox Md') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'checkbox-md'
				});
			} else if (e.target.value == 'Checkbox Sm') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'checkbox-sm'
				});
			} else if (e.target.value == 'Checkbox Xs') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'checkbox-xs'
				});
            }

		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Size</option>
		<option>Checkbox Lg</option>
		<option>Checkbox Md</option>
		<option>Checkbox Sm</option>
		<option>Checkbox Xs</option>
	</select>