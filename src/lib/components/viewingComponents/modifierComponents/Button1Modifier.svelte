<script>
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
<select
		on:change={(e) => {
			if (e.target.value == 'Button Primary') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-primary'
				});
			} else if (e.target.value == 'Button Secondary') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-secondary'
				});
			} else if (e.target.value == 'Button Accent') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-accent'
				});
			} else if (e.target.value == 'Button Info') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-info'
				});
			} else if (e.target.value == 'Button Success') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-success'
				});
			} else if (e.target.value == 'Button Warning') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-warning'
				});
			} else if (e.target.value == 'Button Error') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-error'
				});
			} else if (e.target.value == 'Button Ghost') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-ghost'
				});
			} else if (e.target.value == 'Button Link') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-link'
				});
			} else if (e.target.value == 'Button Outline') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-horizontal'
				});
			} else if (e.target.value == 'Button Active') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-outline'
				});
			} else if (e.target.value == 'Button Disabled') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-disabled'
				});
			} else if (e.target.value == 'Button Glass') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[0],
					to: 'btn-glass'
				});
			}
		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Modifier</option>
		<option>Button Primary</option>
		<option>Button Secondary</option>
		<option>Button Accent</option>
		<option>Button Info</option>
		<option>Button Success</option>
		<option>Button Warning</option>
		<option>Button Error</option>
		<option>Button Ghost</option>
		<option>Button Link</option>
		<option>Button Outline</option>
		<option>Button Active</option>
		<option>Button Disabled</option>
		<option>Button Glass</option>
	</select>
    <div class="form-control mt-2 mb-2">
        <label class="label cursor-pointer">
          <span class="label-text">Loading</span> 
          <input type="checkbox" on:change={(e) => {
            if(e.target.checked){
                swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: 'loading'
				});
            } else {
                swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[1],
					to: ''
				});
            }
            }} checked={false} class="checkbox" />
        </label>
      </div>
    <div class="form-control mt-2 mb-2">
        <label class="label cursor-pointer">
          <span class="label-text">No Animation</span> 
          <input type="checkbox" on:change={(e) => {
            if(e.target.checked){
                swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[2],
					to: 'no-animation'
				});
            } else {
                swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[2],
					to: ''
				});
            }
            }} checked={false} class="checkbox" />
        </label>
      </div>
      <select
		on:change={(e) => {
			
			if (e.target.value == 'Button Lg') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-lg'
				});
			} else if (e.target.value == 'Button Md') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-md'
				});
			} else if (e.target.value == 'Button Sm') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-sm'
				});
			} else if (e.target.value == 'Button Xs') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-xs'
				});
			} else if (e.target.value == 'Button Wide') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-wide'
				});
			} else if (e.target.value == 'Button Block') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-block'
				});
			} else if (e.target.value == 'Button Circle') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-circle'
				});
			} else if (e.target.value == 'Button Square') {
				swCodeH.selectedElement.setClassModifier({
					from: swCodeH.selectedElement.mc.classes[3],
					to: 'btn-square'
				});
			}

		}}
		class="select w-full max-w-xs mt-2 mb-2"
	>
		<option disabled selected>Size</option>
		<option>Button Lg</option>
		<option>Button Md</option>
		<option>Button Sm</option>
		<option>Button Xs</option>
		<option>Button Wide</option>
		<option>Button Block</option>
		<option>Button Circle</option>
		<option>Button Square</option>
	</select>