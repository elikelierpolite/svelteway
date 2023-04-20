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
        <span class="label-text">mt-44</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-44')
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
                        to: 'mt-44'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-44</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-44')
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
                        to: 'mr-44'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-44</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-44')
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
                        to: 'mb-44'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-44</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-44')
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
                        to: 'ml-44'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-48')
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
                        to: 'm-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-48')
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
                        to: 'mx-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-48')
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
                        to: 'my-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-48')
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
                        to: 'ms-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-48')
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
                        to: 'me-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-48')
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
                        to: 'mt-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-48')
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
                        to: 'mr-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-48')
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
                        to: 'mb-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-48')
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
                        to: 'ml-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-52')
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
                        to: 'm-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-52')
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
                        to: 'mx-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-52')
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
                        to: 'my-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-52')
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
                        to: 'ms-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-52')
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
                        to: 'me-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-52')
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
                        to: 'mt-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-52')
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
                        to: 'mr-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-52')
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
                        to: 'mb-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-52')
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
                        to: 'ml-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-56')
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
                        to: 'm-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-56')
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
                        to: 'mx-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-56')
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
                        to: 'my-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-56')
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
                        to: 'ms-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-56')
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
                        to: 'me-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-56')
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
                        to: 'mt-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-56')
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
                        to: 'mr-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-56')
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
                        to: 'mb-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-56')
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
                        to: 'ml-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">m-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('m-60')
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
                        to: 'm-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mx-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mx-60')
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
                        to: 'mx-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">my-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('my-60')
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
                        to: 'my-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ms-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ms-60')
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
                        to: 'ms-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">me-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('me-60')
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
                        to: 'me-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mt-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mt-60')
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
                        to: 'mt-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mr-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mr-60')
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
                        to: 'mr-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">mb-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('mb-60')
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
                        to: 'mb-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">ml-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('ml-60')
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
                        to: 'ml-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> 