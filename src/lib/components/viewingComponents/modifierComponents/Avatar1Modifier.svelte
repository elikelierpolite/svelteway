<script>
	export let swCodeH;
</script>

<div>
	<select
		on:change={(e) => {
			if (e.target.value == 'Online') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'online'
				});
			} else if (e.target.value == 'Offline') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'offline'
				});
			} else if (e.target.value == 'Default') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: ''
				});
			}
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>Default</option>
		<option>Online</option>
		<option>Offline</option>
	</select>
</div>
