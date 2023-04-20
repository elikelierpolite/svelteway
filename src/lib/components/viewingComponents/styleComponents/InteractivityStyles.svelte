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
<div class="collapse-title text-base font-medium">Interactivity</div>
<div class="collapse-content">
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Accent Color</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-inherit</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-inherit')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-inherit'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-current</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-current')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-current'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-transparent</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-transparent')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-transparent'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-black</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-black')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-black'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-white</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-white')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-white'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-slate-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-slate-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-slate-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-gray-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-gray-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-gray-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-zinc-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-zinc-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-zinc-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-neutral-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-neutral-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-neutral-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-saccentne-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-saccentne-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-saccentne-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-red-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-red-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-red-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-orange-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-orange-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-orange-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-amber-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-amber-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-amber-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-yellow-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-yellow-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-yellow-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-lime-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-lime-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-lime-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-green-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-green-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-green-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-emerald-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-emerald-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-emerald-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-teal-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-teal-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-teal-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-cyan-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-cyan-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-cyan-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-50	</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-50	')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-50	'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-sky-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-sky-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-sky-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-blue-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-blue-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-blue-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-indigo-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-indigo-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-indigo-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-violet-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-violet-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-violet-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-purple-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-purple-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-purple-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-fuchsia-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-fuchsia-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-fuchsia-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-pink-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-pink-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-pink-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">accent-rose-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('accent-rose-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: accentColor,
                                    to: 'accent-rose-950'
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
        <div class="collapse-title text-base font-medium">Cursor</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-auto</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-auto')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-auto'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-default</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-default')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-default'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-pointer</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-pointer')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-pointer'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-wait</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-wait')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-wait'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-text</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-text')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-text'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-move</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-move')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-move'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-help</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-help')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-help'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-not-allowed</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-not-allowed')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-not-allowed'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-none</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-none')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-none'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-context-menu</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-context-menu')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-context-menu'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-progress</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-progress')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-progress'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-cell</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-cell')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-cell'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-crosshair</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-crosshair')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-crosshair'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-vertical-text</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-vertical-text')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-vertical-text'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-alia</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-alia')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-alia'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-copy</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-copy')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-copy'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-no-drop</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-no-drop')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-no-drop'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-grab</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-grab')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-grab'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-grabbing</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-grabbing')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-grabbing'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-all-scroll</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-all-scroll')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-all-scroll'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-col-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-col-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-col-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-row-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-row-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-row-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-n-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-n-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-n-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-e-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-e-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-e-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-s-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-s-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-s-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-w-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-w-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-w-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-ne-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-ne-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-ne-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-nw-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-nw-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-nw-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-se-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-se-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-se-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-sw-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-sw-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-sw-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-ew-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-ew-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-ew-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-ns-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-ns-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-ns-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-nesw-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-nesw-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-nesw-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-nwse-resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-nwse-resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-nwse-resize'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-zoom-in</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-zoom-in')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-zoom-in'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">cursor-zoom-out</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('cursor-zoom-out')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: cursor,
                to: 'cursor-zoom-out'
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
        <div class="collapse-title text-base font-medium">Caret Color</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-inherit</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-inherit')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-inherit'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-current</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-current')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-current'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-transparent</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-transparent')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-transparent'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-black</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-black')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-black'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-white</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-white')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-white'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-slate-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-slate-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-slate-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-gray-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-gray-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-gray-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-zinc-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-zinc-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-zinc-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-neutral-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-neutral-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-neutral-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-scaretne-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-scaretne-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-scaretne-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-red-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-red-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-red-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-orange-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-orange-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-orange-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-amber-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-amber-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-amber-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-yellow-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-yellow-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-yellow-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-lime-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-lime-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-lime-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-green-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-green-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-green-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-emerald-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-emerald-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-emerald-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-teal-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-teal-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-teal-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-cyan-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-cyan-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-cyan-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-50	</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-50	')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-50	'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-sky-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-sky-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-sky-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-blue-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-blue-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-blue-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-indigo-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-indigo-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-indigo-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-violet-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-violet-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-violet-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-purple-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-purple-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-purple-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-fuchsia-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-fuchsia-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-fuchsia-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-pink-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-pink-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-pink-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">caret-rose-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('caret-rose-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: caretColor,
                to: 'caret-rose-950'
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
        <div class="collapse-title text-base font-medium">Pointer Events</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">pointer-events-none</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('pointer-events-none')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: pointerEvents,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: pointerEvents,
                to: 'pointer-events-none'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">pointer-events-auto</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('pointer-events-auto')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: pointerEvents,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: pointerEvents,
                to: 'pointer-events-auto'
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
        <div class="collapse-title text-base font-medium">Resize</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">resize-none</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('resize-none')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: 'resize-none'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">resize-y</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('resize-y')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: 'resize-y'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">resize-x</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('resize-x')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: 'resize-x'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">resize</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('resize')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: resize,
                to: 'resize'
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
        <div class="collapse-title text-base font-medium">Scroll Behavior</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-auto</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-auto')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollBehavior,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollBehavior,
                to: 'scroll-auto'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-smooth</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-smooth')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollBehavior,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollBehavior,
                to: 'scroll-smooth'
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
        <div class="collapse-title text-base font-medium">Scroll Margin</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-px</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-px')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-px'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-0.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-0.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-0.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-1.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-1.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-1.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-2.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-2.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-2.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-3</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-3')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-3'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-3.5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-3.5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-3.5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-5</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-5')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-5'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-6</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-6')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-6'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-7</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-7')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-7'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-8'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-9</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-9')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-9'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-10</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-10')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-10'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-11</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-11')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-11'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-12</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-12')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-12'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-14</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-14')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-14'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-16</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-16')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-16'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-20</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-20')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-20'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-24</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-24')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-24'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-28</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-28')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-28'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-32</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-32')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-32'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-36</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-36')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-36'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-40</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-40')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-40'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-44</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-44')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-44'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-48</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-48')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-48'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-52</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-52')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-52'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-56</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-56')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-56'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-60</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-60')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-60'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-64</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-64')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-64'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-72</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-72')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-72'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-80</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-80')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-80'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-m-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-m-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-m-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mx-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mx-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mx-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-my-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-my-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-my-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ms-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ms-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ms-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-me-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-me-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-me-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mt-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mt-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mt-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mr-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mr-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mr-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-mb-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-mb-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-mb-96'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">scroll-ml-96</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('scroll-ml-96')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: scrollMargin,
                to: 'scroll-ml-96'
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
        <div class="collapse-title text-base font-medium">Scroll Padding</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-start</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-start')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-start'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-end</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-end')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-end'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-center</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-center')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-center'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-align-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-align-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-align-none'
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
        <div class="collapse-title text-base font-medium">Scroll Snap Align</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-start</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-start')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-start'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-end</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-end')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-end'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-center</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-center')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-center'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-align-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-align-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapAlign,
                                    to: 'snap-align-none'
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
        <div class="collapse-title text-base font-medium">Scroll Snap Stop</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-normal</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-normal')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapStop,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapStop,
                                    to: 'snap-normal'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-always</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-always')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapStop,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapStop,
                                    to: 'snap-always'
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
        <div class="collapse-title text-base font-medium">Scroll Snap Type</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: 'snap-none'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-x</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-x')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: 'snap-x'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-y</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-y')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: 'snap-y'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-both</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-both')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: 'snap-both'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-mandatory</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-mandatory')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: 'snap-mandatory'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">snap-proximity</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('snap-proximity')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: scrollSnapType,
                                    to: 'snap-proximity'
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
        <div class="collapse-title text-base font-medium">Touch Action</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-auto')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-auto'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-none'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-pan-x</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-pan-x')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-pan-x'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-pan-left</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-pan-left')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-pan-left'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-pan-right</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-pan-right')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-pan-right'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-pan-y</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-pan-y')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-pan-y'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-pan-up</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-pan-up')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-pan-up'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-pan-down</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-pan-down')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-pan-down'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-pinch-zoom</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-pinch-zoom')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-pinch-zoom'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">touch-manipulation</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('touch-manipulation')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: touchAction,
                                    to: 'touch-manipulation'
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
        <div class="collapse-title text-base font-medium">User Select</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">select-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('select-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: 'select-none'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">select-text</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('select-text')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: 'select-text'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">select-all</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('select-all')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: 'select-all'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">select-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('select-auto')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: userSelect,
                                    to: 'select-auto'
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
        <div class="collapse-title text-base font-medium">Will Change</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">will-change-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('will-change-auto')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: 'will-change-auto'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">will-change-scroll</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('will-change-scroll')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: 'will-change-scroll'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">will-change-contents</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('will-change-contents')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: 'will-change-contents'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">will-change-transform</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('will-change-transform')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: willChange,
                                    to: 'will-change-transform'
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