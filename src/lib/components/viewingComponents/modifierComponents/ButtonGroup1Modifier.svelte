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
<select
	on:change={(e) => {
		if (e.target.value == 'btn-group-horizontal') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'btn-group-horizontal'
			});
		} else if (e.target.value == 'btn-group-vertical') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'btn-group-vertical'
			});
		}
	}}
	class="select w-full max-w-xs mt-2 mb-2"
>
	<option disabled selected>Modifier</option>
	<option>btn-group-horizontal</option>
	<option>btn-group-vertical</option>
</select>
