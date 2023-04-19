<script>//@ts-nocheck
    import { onMount } from 'svelte';
    import { placeSelf } from '../../../tailwind-extra'
    
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<div
tabindex="0"
class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
>
<input type="checkbox" class="peer" />
<div class="collapse-title text-base font-medium">Place Self</div>
<div class="collapse-content">
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">place-self-auto</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('place-self-auto')
                        ? true
                        : false
                    : false}
                on:change={(e) => {
                    if (!e.target.checked) {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: ''
                        });
                    } else {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: 'place-self-auto'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> 
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">place-self-start</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('place-self-start')
                        ? true
                        : false
                    : false}
                on:change={(e) => {
                    if (!e.target.checked) {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: ''
                        });
                    } else {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: 'place-self-start'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> 
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">place-self-end</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('place-self-end')
                        ? true
                        : false
                    : false}
                on:change={(e) => {
                    if (!e.target.checked) {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: ''
                        });
                    } else {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: 'place-self-end'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> 
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">place-self-center</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('place-self-center')
                        ? true
                        : false
                    : false}
                on:change={(e) => {
                    if (!e.target.checked) {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: ''
                        });
                    } else {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: 'place-self-center'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> 
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">place-self-stretch</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('place-self-stretch')
                        ? true
                        : false
                    : false}
                on:change={(e) => {
                    if (!e.target.checked) {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: ''
                        });
                    } else {
                        swCodeH.selectedElement.setStylesClass({
                            from: placeSelf,
                            to: 'place-self-stretch'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div>
</div>
</div>