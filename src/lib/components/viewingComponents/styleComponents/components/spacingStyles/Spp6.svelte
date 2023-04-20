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
        <span class="label-text">pe-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-56')
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
                        to: 'pe-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-56')
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
                        to: 'pt-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-56')
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
                        to: 'pr-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-56')
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
                        to: 'pb-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-56')
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
                        to: 'pl-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-60')
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
                        to: 'p-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">px-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('px-60')
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
                        to: 'px-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">py-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('py-60')
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
                        to: 'py-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-60')
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
                        to: 'ps-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-60')
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
                        to: 'pe-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-60')
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
                        to: 'pt-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-60')
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
                        to: 'pr-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-60')
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
                        to: 'pb-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-60')
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
                        to: 'pl-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-64')
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
                        to: 'p-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">px-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('px-64')
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
                        to: 'px-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">py-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('py-64')
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
                        to: 'py-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-64')
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
                        to: 'ps-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-64')
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
                        to: 'pe-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-64')
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
                        to: 'pt-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-64')
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
                        to: 'pr-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-64')
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
                        to: 'pb-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-64')
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
                        to: 'pl-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-72')
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
                        to: 'p-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">px-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('px-72')
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
                        to: 'px-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">py-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('py-72')
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
                        to: 'py-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-72')
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
                        to: 'ps-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-72')
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
                        to: 'pe-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-72')
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
                        to: 'pt-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pr-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pr-72')
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
                        to: 'pr-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pb-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pb-72')
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
                        to: 'pb-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pl-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pl-72')
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
                        to: 'pl-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">p-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('p-80')
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
                        to: 'p-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">px-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('px-80')
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
                        to: 'px-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">py-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('py-80')
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
                        to: 'py-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ps-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ps-80')
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
                        to: 'ps-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pe-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pe-80')
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
                        to: 'pe-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">pt-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('pt-80')
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
                        to: 'pt-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> 