<script>
	export let swCodeH;
</script>
<select
		on:change={(e) => {
			if (e.target.value == 'File Input Primary') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-primary'
				});
			} else if (e.target.value == 'File Input Secondary') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-secondary'
				});
			} else if (e.target.value == 'File Input Accent') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-accent'
				});
			} else if (e.target.value == 'File Input Info') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-info'
				});
			} else if (e.target.value == 'File Input Success') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-success'
				});
			} else if (e.target.value == 'File Input Warning') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-warning'
				});
			} else if (e.target.value == 'File Input Error') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-error'
				});
			} else if (e.target.value == 'File Input Bordered') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-bordered'
				});
            } else if (e.target.value == 'File Input Ghost') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'file-input-ghost'
				});
            }
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>File Input Bordered</option>
		<option>File Input Ghost</option>
		<option>File Input Primary</option>
		<option>File Input Secondary</option>
		<option>File Input Accent</option>
		<option>File Input Info</option>
		<option>File Input Success</option>
		<option>File Input Warning</option>
		<option>File Input Error</option>
	</select>

    <select
		on:change={(e) => {
			
			if (e.target.value == 'File Input Lg') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'file-input-lg'
				});
			} else if (e.target.value == 'File Input Md') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'file-input-md'
				});
			} else if (e.target.value == 'File Input Sm') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'file-input-sm'
				});
			} else if (e.target.value == 'File Input Xs') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'file-input-xs'
				});
            }

		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Size</option>
		<option>File Input Lg</option>
		<option>File Input Md</option>
		<option>File Input Sm</option>
		<option>File Input Xs</option>
	</select>