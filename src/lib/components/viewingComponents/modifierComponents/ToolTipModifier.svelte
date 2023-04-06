<script>
    export let swCodeH
</script>
<div class="form-control mt-2">
    <label class="label cursor-pointer">
        <span class="label-text ml-3 font-semibold">Tooltip</span>
        <input
            type="checkbox"
            checked={swCodeH.selectedElement.mc.helper.on}
            class="checkbox"
            on:change={(e) => {
                swCodeH.selectedElement.setHelper({
                    ...swCodeH.selectedElement.mc.helper,
                    on: e.target.checked
                });
            }}
        />
    </label>
</div>
<input
    type="text"
    placeholder="Tooltip Title"
    value={swCodeH.selectedElement.mc.helper.title}
    on:change={(e) => {
        swCodeH.selectedElement.setHelper({
            ...swCodeH.selectedElement.mc.helper,
            title: e.target.value
        });
    }}
    class="input w-full max-w-xs mt-2"
/>
<select
    on:change={(e) => {
        const arr = [...swCodeH.selectedElement.mc.helper.classes];
        const cls = {
            from: ['tooltip-right', 'tooltip-bottom', 'tooltip-left'],
            to:
                e.target.value == 'Top'
                    ? ''
                    : e.target.value == 'Right'
                    ? 'tooltip-right'
                    : e.target.value == 'Bottom'
                    ? 'tooltip-bottom'
                    : e.target.value == 'Left'
                    ? 'tooltip-left'
                    : ''
        };
        let far = false;
        cls.from.forEach((clss) => {
            if (arr.includes(clss)) {
                const index = arr.indexOf(clss);
                arr[index] = cls.to;
                far = true;
            }
        });
        if (!far) {
            arr.push(cls.to);
        }
        swCodeH.selectedElement.mc.$set({
            helper: { ...swCodeH.selectedElement.mc.helper, classes: arr }
        });
    }}
    class="select w-full max-w-xs mt-2 mb-2"
>
    <option disabled selected>Tooltip Position</option>
    <option>Top</option>
    <option>Right</option>
    <option>Bottom</option>
    <option>Left</option>
</select>
<select
    on:change={(e) => {
        const arr = [...swCodeH.selectedElement.mc.helper.classes];
        const cls = {
            from: ['tooltip-error', 'tooltip-warning', 'tooltip-success', 'tooltip-accent', 'tooltip-secondary', 'tooltip-primary'],
            to:
                e.target.value == 'Default tooltip'
                    ? ''
                    : e.target.value == 'Tooltip primary'
                    ? 'tooltip-primary'
                    : e.target.value == 'Tooltip secondary'
                    ? 'tooltip-secondary'
                    : e.target.value == 'Tooltip accent'
                    ? 'tooltip-accent'
                    : e.target.value == 'Tooltip success'
                    ? 'tooltip-success'
                    : e.target.value == 'Tooltip warning'
                    ? 'tooltip-warning'
                    : e.target.value == 'Tooltip error'
                    ? 'tooltip-error'
                    : ''
        };
        let far = false;
        cls.from.forEach((clss) => {
            if (arr.includes(clss)) {
                const index = arr.indexOf(clss);
                arr[index] = cls.to;
                far = true;
            }
        });
        if (!far) {
            arr.push(cls.to);
        }
        swCodeH.selectedElement.mc.$set({
            helper: { ...swCodeH.selectedElement.mc.helper, classes: arr }
        });
    }}
    class="select w-full max-w-xs mt-2 mb-2"
>
    <option disabled selected>Tooltip Modifier</option>
    <option>Default tooltip</option>
    <option>Tooltip primary</option>
    <option>Tooltip secondary</option>
    <option>Tooltip accent</option>
    <option>Tooltip success</option>
    <option>Tooltip warning</option>
    <option>Tooltip error</option>
</select>
<div class="form-control mt-2">
    <label class="label cursor-pointer">
        <span class="label-text ml-3 font-semibold">Tooltip Closed</span>
        <input
            type="checkbox"
            checked={true}
            class="checkbox"
            on:change={(e) => {
                const arr = [...swCodeH.selectedElement.mc.helper.classes];
                const cls = {
                    from: ['tooltip-open'],
                    to: !e.target.checked ? 'tooltip-open' : ''
                };
                let far = false;
                cls.from.forEach((clss) => {
                    if (arr.includes(clss)) {
                        const index = arr.indexOf(clss);
                        arr[index] = cls.to;
                        far = true;
                    }
                });
                if (!far) {
                    arr.push(cls.to);
                }
                swCodeH.selectedElement.mc.$set({
                    helper: { ...swCodeH.selectedElement.mc.helper, classes: arr }
                });
            }}
        />
    </label>
</div>