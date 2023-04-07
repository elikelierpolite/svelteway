<script>
	export let swCodeH;
</script>


<input
	type="text"
	placeholder="Title"
	value={swCodeH.selectedElement.mc.title}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			title: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Chat 2"
	value={swCodeH.selectedElement.mc.contentBody}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			contentBody: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>

<select
	on:change={(e) => {
		if (e.target.value == 'Collapse Arrow') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'collapse-arrow'
			});
		} else if (e.target.value == 'Collapse Plus') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'collapse-plus'
			});
		} else if (e.target.value == 'Collapse Open') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'collapse-open'
			});
		} else if (e.target.value == 'Collapse Close') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'collapse-close'
			});
		}
	}}
	class="select w-full max-w-xs mt-2 mb-2"
>
	<option disabled selected>Modifier</option>
	<option>Collapse Arrow</option>
	<option>Collapse Plus</option>
	<option>Collapse Open</option>
	<option>Collapse Close</option>
</select>
