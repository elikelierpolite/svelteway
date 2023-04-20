<script>//@ts-nocheckborderswCodeH.selectedElement.mc
    import { onMount } from 'svelte';
    import { margin } from '../../../tailwind-extra'
    
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'm-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mx-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'my-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ms-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'me-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mt-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mr-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mb-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ml-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'm-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mx-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'my-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ms-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'me-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mt-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mr-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mb-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ml-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'm-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mx-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'my-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ms-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'me-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mt-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mr-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mb-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ml-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'm-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mx-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'my-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ms-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'me-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mt-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mr-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mb-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ml-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-auto</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-auto')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'm-auto'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-auto</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-auto')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mx-auto'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-auto</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-auto')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'my-auto'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-auto</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-auto')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'ms-auto'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-auto</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-auto')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'me-auto'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-auto</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-auto')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mt-auto'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-auto</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-auto')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: margin,
                        to: 'mr-auto'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> 
