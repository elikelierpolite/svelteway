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
<div class="collapse-title text-base font-medium">Tables</div>
<div class="collapse-content">
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Border Collapse</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-collapse</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-collapse')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderCollapse,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderCollapse,
                                    to: 'border-collapse'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-separate</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-separate')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderCollapse,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderCollapse,
                                    to: 'border-separate'
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
        <div class="collapse-title text-base font-medium">Border Spacing</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-0</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-0')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-0'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-0</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-0')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-0'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-0</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-0')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-0'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-px</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-px')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-px'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-px</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-px')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-px'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-px</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-px')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-px'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-0.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-0.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-0.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-0.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-0.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-0.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-0.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-0.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-0.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-1.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-1.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-1.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-1.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-1.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-1.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-1.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-1.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-1.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-2.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-2.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-2.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-2.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-2.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-2.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-2.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-2.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-2.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-3.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-3.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-3.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-3.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-3.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-3.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-3.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-3.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-3.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-7</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-7')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-7'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-7</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-7')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-7'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-7</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-7')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-7'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-8</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-8')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-8'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-8</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-8')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-8'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-8</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-8')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-8'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-9</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-9')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-9'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-9</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-9')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-9'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-9</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-9')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-9'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-10</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-10')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-10'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-10</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-10')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-10'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-10</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-10')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-10'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-11</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-11')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-11'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-11</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-11')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-11'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-11</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-11')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-11'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-12</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-12')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-12'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-12</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-12')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-12'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-12</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-12')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-12'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-14</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-14')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-14'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-14</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-14')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-14'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-14</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-14')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-14'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-16</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-16')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-16'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-16</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-16')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-16'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-16</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-16')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-16'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-20</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-20')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-20'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-20</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-20')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-20'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-20</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-20')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-20'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-24</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-24')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-24'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-24</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-24')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-24'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-24</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-24')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-24'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-28</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-28')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-28'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-28</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-28')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-28'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-28</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-28')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-28'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-32</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-32')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-32'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-32</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-32')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-32'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-32</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-32')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-32'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-36</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-36')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-36'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-36</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-36')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-36'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-36</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-36')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-36'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-40</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-40')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-40'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-40</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-40')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-40'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-40</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-40')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-40'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-44</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-44')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-44'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-44</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-44')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-44'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-44</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-44')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-44'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-48</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-48')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-48'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-48</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-48')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-48'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-48</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-48')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-48'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-52</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-52')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-52'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-52</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-52')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-52'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-52</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-52')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-52'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-56</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-56')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-56'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-56</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-56')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-56'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-56</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-56')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-56'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-60</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-60')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-60'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-60</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-60')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-60'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-60</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-60')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-60'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-64</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-64')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-64'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-64</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-64')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-64'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-64</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-64')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-64'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-72</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-72')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-72'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-72</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-72')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-72'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-72</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-72')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-72'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-80</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-80')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-80'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-80</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-80')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-80'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-80</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-80')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-80'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-96</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-96')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-96'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-x-96</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-x-96')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-x-96'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">border-spacing-y-96</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('border-spacing-y-96')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: borderSpacing,
                                    to: 'border-spacing-y-96'
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
        <div class="collapse-title text-base font-medium">Table Layout</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">table-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('table-auto')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: tableLayout,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: tableLayout,
                                    to: 'table-auto'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">table-fixed</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('table-fixed')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: tableLayout,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: tableLayout,
                                    to: 'table-fixed'
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
        <div class="collapse-title text-base font-medium">Caption Side</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">caption-top</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('caption-top')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: captionSide,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: captionSide,
                                    to: 'caption-top'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">caption-bottom</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('caption-bottom')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: captionSide,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: captionSide,
                                    to: 'caption-bottom'
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