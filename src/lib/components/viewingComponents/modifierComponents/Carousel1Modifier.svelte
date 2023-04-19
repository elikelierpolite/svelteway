<script>//@ts-nocheck
	export let swCodeH;
</script>

<input
	type="text"
	placeholder="Carousel Item 1 Img Src"
	value={swCodeH.selectedElement.mc.item1ImgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item1ImgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Carousel Item 2 Img Src"
	value={swCodeH.selectedElement.mc.item2ImgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item2ImgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Carousel Item 3 Img Src"
	value={swCodeH.selectedElement.mc.item3ImgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item3ImgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Carousel Item 4 Img Src"
	value={swCodeH.selectedElement.mc.item4ImgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item4ImgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Carousel Item 5 Img Src"
	value={swCodeH.selectedElement.mc.item5ImgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item5ImgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Carousel Item 6 Img Src"
	value={swCodeH.selectedElement.mc.item6ImgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item6ImgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<input
	type="text"
	placeholder="Carousel Item 7 Img Src"
	value={swCodeH.selectedElement.mc.item7ImgSrc}
	on:change={(e) => {
		swCodeH.selectedElement.mc.$set({
			item7ImgSrc: e.target.value
		});
	}}
	class="input w-full max-w-xs mt-2"
/>
<select
	on:change={(e) => {
		if (e.target.value == 'Carousel Center') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'carousel-center'
			});
		} else if (e.target.value == 'Carousel End') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'carousel-end'
			});
		} else if (e.target.value == 'Carousel Vertical') {
			swCodeH.selectedElement.setClassModifier({
				from: swCodeH.selectedElement.mc.classes[0],
				to: 'carousel-vertical'
			});
		}
	}}
	class="select w-full max-w-xs mt-2 mb-2"
>
	<option disabled selected>Modifier</option>
	<option>Carousel Center</option>
	<option>Carousel End</option>
	<option>Carousel Vertical</option>
</select>
