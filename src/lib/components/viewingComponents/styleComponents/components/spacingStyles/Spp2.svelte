<script>//@ts-nocheckborderswCodeH.selectedElement.mc
    import { onMount } from 'svelte';
    import { padding } from '../../../tailwind-extra'
    
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-3.5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-3.5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pe-3.5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-3.5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-3.5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pt-3.5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-3.5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-3.5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pr-3.5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-3.5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-3.5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pb-3.5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-3.5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-3.5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pl-3.5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'p-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">px-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('px-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'px-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">py-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('py-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'py-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'ps-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pe-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pt-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pr-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pb-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-4</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-4')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pl-4'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'p-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">px-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('px-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'px-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">py-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('py-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'py-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'ps-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pe-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pt-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pr-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pb-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-5</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-5')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pl-5'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'p-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">px-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('px-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'px-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">py-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('py-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'py-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'ps-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pe-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pt-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pr-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pb-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-6</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-6')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pl-6'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-7</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-7')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'p-7'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-7</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-7')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'ps-7'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-7</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-7')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pe-7'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-7</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-7')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pt-7'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-7</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-7')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pr-7'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-7</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-7')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pb-7'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-7</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-7')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: padding,
                        to: 'pl-7'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> 