<script>
	export let swCodeH;
</script>

<input
	type="text"
	placeholder="Image SRC"
	value={swCodeH.selectedElement.mc.imgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			imgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
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
	placeholder="Body"
	value={swCodeH.selectedElement.mc.description}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			description: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="CTA"
	value={swCodeH.selectedElement.mc.cta}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			cta: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<select
		on:change={(e) => {
			if (e.target.value == 'Default Card') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: ''
				});
			} else if (e.target.value == 'Card Bordered') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'card-bordered'
				});
			} else if (e.target.value == 'Image Full') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'image-full'
				});
			}
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>Default Card</option>
		<option>Card Bordered</option>
		<option>Image Full</option>
	</select>
      <select
		on:change={(e) => {
			
			if (e.target.value == 'Card Normal') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'card-normal'
				});
			} else if (e.target.value == 'Card Compact') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'card-compact'
				});
			} else if (e.target.value == 'Card Side') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'card-side'
				});
			} 

		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Size</option>
		<option>Card Normal</option>
		<option>Card Compact</option>
		<option>Card Side</option>
	</select>