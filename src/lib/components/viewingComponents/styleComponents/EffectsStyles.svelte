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
<div class="collapse-title text-base font-medium">Effects</div>
<div class="collapse-content">
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Box Shadow</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sm</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sm')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow-sm'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-md</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-md')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow-md'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lg</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lg')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow-lg'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow-xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-2xl</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-2xl')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow-2xl'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-inner</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-inner')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow-inner'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-none</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-none')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadow,
                to: 'shadow-none'
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
        <div class="collapse-title text-base font-medium">Box Shadow Color</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-inherit</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-inherit')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-inherit'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-current</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-current')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-current'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-transparent</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-transparent')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-transparent'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-black</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-black')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-black'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-white</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-white')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-white'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-slate-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-slate-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-slate-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-gray-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-gray-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-gray-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-zinc-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-zinc-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-zinc-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-neutral-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-neutral-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-neutral-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sshadowne-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sshadowne-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sshadowne-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-red-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-red-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-red-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-orange-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-orange-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-orange-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-amber-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-amber-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-amber-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-yellow-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-yellow-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-yellow-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-lime-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-lime-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-lime-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-green-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-green-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-green-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-emerald-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-emerald-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-emerald-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-teal-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-teal-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-teal-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-cyan-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-cyan-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-cyan-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-50	</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-50	')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-50	'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-sky-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-sky-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-sky-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-blue-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-blue-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-blue-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-indigo-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-indigo-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-indigo-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-violet-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-violet-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-violet-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-purple-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-purple-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-purple-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-fuchsia-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-fuchsia-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-fuchsia-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-pink-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-pink-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-pink-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">shadow-rose-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('shadow-rose-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: boxShadowColor,
                to: 'shadow-rose-950'
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
        <div class="collapse-title text-base font-medium">Opacity</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-25</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-25')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-25'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-30</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-30')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-30'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-70</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-70')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-70'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-75</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-75')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-75'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-90</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-90')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-90'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-95</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-95')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-95'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">opacity-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('opacity-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: opacity,
                to: 'opacity-100'
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
        <div class="collapse-title text-base font-medium">Mix Blend Mode</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-normal</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-normal')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-normal'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-multiply</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-multiply')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-multiply'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-screen</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-screen')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-screen'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-overlay</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-overlay')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-overlay'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-darken</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-darken')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-darken'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-lighten</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-lighten')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-lighten'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-color-dodge</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-color-dodge')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-color-dodge'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-color-burn</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-color-burn')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-color-burn'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-hard-light</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-hard-light')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-hard-light'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-soft-light</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-soft-light')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-soft-light'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-difference</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-difference')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-difference'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-exclusion</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-exclusion')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-exclusion'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-hue</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-hue')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-hue'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-saturation</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-saturation')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-saturation'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-color</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-color')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-color'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-luminosity</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-luminosity')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-luminosity'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">mix-blend-plus-lighter</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('mix-blend-plus-lighter')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: mixBlendMode,
                to: 'mix-blend-plus-lighter'
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
        <div class="collapse-title text-base font-medium">Background Blend Mode</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-normal</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-normal')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-normal'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-multiply</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-multiply')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-multiply'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-screen</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-screen')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-screen'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-overlay</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-overlay')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-overlay'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-darken</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-darken')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-darken'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-lighten</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-lighten')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-lighten'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-color-dodge</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-color-dodge')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-color-dodge'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-color-burn</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-color-burn')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-color-burn'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-hard-light</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-hard-light')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-hard-light'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-soft-light</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-soft-light')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-soft-light'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-difference</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-difference')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-difference'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-exclusion</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-exclusion')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-exclusion'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-hue</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-hue')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-hue'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-saturation</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-saturation')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-saturation'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-color</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-color')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-color'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">bg-blend-luminosity</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('bg-blend-luminosity')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: backgroundBlendMode,
                to: 'bg-blend-luminosity'
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