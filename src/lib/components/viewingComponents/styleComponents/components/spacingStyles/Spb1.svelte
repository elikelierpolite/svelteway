<script>//@ts-nocheckborderswCodeH.selectedElement.mc
    import { onMount } from 'svelte';
    import { spaceBetween } from '../../../tailwind-extra'
    
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-20</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-20')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-20'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-24</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-24')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-24'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-24</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-24')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-24'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-28</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-28')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-28'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-28</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-28')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-28'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-32</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-32')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-32'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-32</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-32')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-32'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-36</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-36')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-36'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-36</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-36')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-36'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-40</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-40')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-40'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-40</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-40')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-40'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-44</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-44')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-44'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-44</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-44')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-44'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-48')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-48</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-48')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-48'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-52')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-52</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-52')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-52'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-56')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-56</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-56')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-56'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-60')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-60</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-60')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-60'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-64</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-64')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-64'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-72</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-72')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-72'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-80</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-80')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-80'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-96</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-96')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-96'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-x-px</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-x-px')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-x-px'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-px</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-px')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-px'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div> <div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">space-y-reverse</span>
        <input
            type="checkbox"
            checked={swCodeH?.selectedElement?.mc
                ? swCodeH?.selectedElement?.mc.classes.includes('space-y-reverse')
                    ? true
                    : false
                : false}
            on:change={(e) => {
                if (!e.target.checked) {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: ''
                    });
                } else {
                    swCodeH.selectedElement.setStylesClass({
                        from: spaceBetween,
                        to: 'space-y-reverse'
                    });
                }
            }}
            class="checkbox checkbox-xs checkbox-primary"
        />
    </label>
</div>