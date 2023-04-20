<script>//@ts-nocheck
    import { onMount } from 'svelte';
    import { tailwindPositions, flexBasis, flexDirection, flexWrap, rFlex, flexGrow, flexShrink, order, gridTemplateColumns, gridColumnsStartEnd, gridTemplateRows, gridRowStartEnd, gridAutoFlow, gridAutoColumns, gridAutoRows, gap, justifyContent, justifyItems, alignContent, alignItems, alignSelf, placeContent, placeItems, placeSelf, padding, margin, spaceBetween, width, minWidth, maxWidth, height, minHeight, maxHeight, fontFamily, fontSize, fontSmoothing, fontStyle, fontWeight, fontVariantNumeric, letterSpacing, lineClamp, lineHeight, listStyleImage, listStylePosition, listStyleType, textAlign, textColor, textDecoration, textDecorationColor, textDecorationStyle, textDecorationThickness, textUnderlineOffset, textTransform, textOverflow, textIndent, verticalAlign, whiteSpace, wordBreak, hyphens, content, backgroundAttachment, backgroundClip, backgroundColor, backgroundOrigin, backgroundPosition, backgroundRepeat, backgroundSize, backgroundImage, gradientColorStops, borderRadius, borderWidth, borderColor, borderStyle, divideWidth, divideColor, divideStyle, outlineWidth, outlineColor, outlineStyle, outlineOffset, ringWidth, ringColor, ringOffsetWidth, ringOffsetColor, boxShadow, boxShadowColor, opacity, mixBlendMode, backgroundBlendMode, blur, brightness, contrast, dropShadow, grayscale, hueRotate, invert, saturate, sepia, backdropBlur, backdropBrightness, backdropContrast, backdropGrayscale, backdropHueRotate, backdropInvert, backdropOpacity, backdropSaturate, backdropSepia, borderCollapse, borderSpacing, tableLayout, captionSide, transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay, animation, scale, rotate , translate, skew, transformOrigin, accentColor, appearance, cursor, caretColor, pointerEvents, resize, scrollBehavior, scrollMargin, scrollPadding, scrollSnapAlign, scrollSnapStop, scrollSnapType, touchAction, justifySelf, userSelect, willChange, fill, stroke, strokeWidth, screenReaders } from '../tailwind-extra'
    
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
tabindex="0"
class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
>
<input type="checkbox" class="peer" />
<div class="collapse-title text-base font-medium">Sizing</div>
<div class="collapse-content">
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Width</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-4   </span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-4   ')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-4   '
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-auto</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-auto')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-auto'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1/2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1/2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1/2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1/3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1/3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1/3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-2/3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-2/3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-2/3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1/4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1/4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1/4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-2/4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-2/4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-2/4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-3/4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-3/4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-3/4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-2/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-2/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-2/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-3/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-3/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-3/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-4/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-4/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-4/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-2/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-2/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-2/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-3/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-3/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-3/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-4/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-4/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-4/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-5/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-5/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-5/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-1/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-1/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-1/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-2/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-2/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-2/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-3/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-3/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-3/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-4/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-4/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-4/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-5/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-5/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-5/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-6/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-6/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-6/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-7/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-7/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-7/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-8/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-8/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-8/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-9/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-9/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-9/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-10/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-10/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-10/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-11/12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-11/12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-11/12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-full</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-full')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-full'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-screen</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-screen')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-screen'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-min</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-min')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-min'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-max</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-max')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-max'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">w-fit</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('w-fit')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: width,
                to: 'w-fit'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div>
        </div>
    </div>
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Min-Width</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">min-w-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('min-w-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: 'min-w-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">min-w-full</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('min-w-full')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: 'min-w-full'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">min-w-min</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('min-w-min')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: 'min-w-min'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">min-w-max</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('min-w-max')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: 'min-w-max'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">min-w-fit</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('min-w-fit')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: minWidth,
                to: 'min-w-fit'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div>
        </div>
    </div>
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Max-Width</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-none</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-none')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-none'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-xs</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-xs')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-xs'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-sm</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-sm')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-sm'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-md</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-md')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-md'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-lg</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-lg')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-lg'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-2xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-2xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-2xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-3xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-3xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-3xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-4xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-4xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-4xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-5xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-5xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-5xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-6xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-6xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-6xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-7xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-7xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-7xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-full</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-full')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-full'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-min</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-min')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-min'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-max</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-max')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-max'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-fit</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-fit')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-fit'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-prose</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-prose')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-prose'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-screen-sm</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-screen-sm')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-screen-sm'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-screen-md</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-screen-md')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-screen-md'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-screen-lg</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-screen-lg')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-screen-lg'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-screen-xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-screen-xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-screen-xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">max-w-screen-2xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('max-w-screen-2xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: maxWidth,
                to: 'max-w-screen-2xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div>
        </div>
    </div>
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Height</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-auto</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-auto')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-auto'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-1/2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-1/2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-1/2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-1/3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-1/3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-1/3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-2/3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-2/3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-2/3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-1/4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-1/4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-1/4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-2/4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-2/4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-2/4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-3/4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-3/4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-3/4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-1/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-1/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-1/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-2/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-2/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-2/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-3/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-3/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-3/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-4/5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-4/5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-4/5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-1/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-1/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-1/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-2/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-2/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-2/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-3/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-3/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-3/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-4/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-4/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-4/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-5/6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-5/6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-5/6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-full</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-full')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-full'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-screen</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-screen')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-screen'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-min</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-min')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-min'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-max</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-max')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-max'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">h-fit</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('h-fit')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: height,
                to: 'h-fit'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div>
        </div>
    </div>
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Min-Height</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">min-h-0</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('min-h-0')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: 'min-h-0'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">min-h-full</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('min-h-full')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: 'min-h-full'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">min-h-screen</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('min-h-screen')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: 'min-h-screen'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">min-h-min</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('min-h-min')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: 'min-h-min'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">min-h-max</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('min-h-max')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: 'min-h-max'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">min-h-fit</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('min-h-fit')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: minHeight,
                                    to: 'min-h-fit'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div>
        </div>
    </div>
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Max-Height</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-0</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-0')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-0'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-px</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-px')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-px'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-0.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-0.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-0.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-1.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-1.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-1.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-2.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-2.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-2.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-3.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-3.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-3.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-7</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-7')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-7'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-8</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-8')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-8'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-9</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-9')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-9'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-10</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-10')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-10'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-11</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-11')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-11'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-12</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-12')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-12'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-14</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-14')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-14'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-16</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-16')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-16'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-20</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-20')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-20'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-24</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-24')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-24'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-28</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-28')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-28'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-32</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-32')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-32'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-36</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-36')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-36'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-40</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-40')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-40'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-44</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-44')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-44'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-48</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-48')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-48'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-52</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-52')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-52'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-56</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-56')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-56'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-60</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-60')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-60'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-64</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-64')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-64'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-72</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-72')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-72'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-80</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-80')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-80'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-96</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-96')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-96'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-none'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-full</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-full')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-full'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-screen</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-screen')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-screen'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-min</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-min')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-min'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-fit</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-fit')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-fit'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">max-h-max</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('max-h-max')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: maxHeight,
                                    to: 'max-h-max'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div>
        </div>
    </div>
</div>
</div>