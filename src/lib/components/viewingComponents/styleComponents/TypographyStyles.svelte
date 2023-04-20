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
<div class="collapse-title text-base font-medium">Typography</div>
<div class="collapse-content">
    <div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-base font-medium">Font Family</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-sans</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-sans')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontFamily,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontFamily,
                                    to: 'font-sans'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-serif</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-serif')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontFamily,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontFamily,
                                    to: 'font-serif'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-mono</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-mono')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontFamily,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontFamily,
                                    to: 'font-mono'
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
        <div class="collapse-title text-base font-medium">Font Size</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-xs</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-xs')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-xs'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sm</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sm')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-sm'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-base</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-base')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-base'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lg</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lg')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-lg'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-2xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-2xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-2xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-3xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-3xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-3xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-4xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-4xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-4xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-5xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-5xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-5xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-6xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-6xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-6xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-7xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-7xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-7xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-8xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-8xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-8xl'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-9xl</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-9xl')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSize,
                                    to: 'text-9xl'
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
        <div class="collapse-title text-base font-medium">Font Smoothing</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">antialiased</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('antialiased')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSmoothing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSmoothing,
                                    to: 'antialiased'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">subpixel-antialiased</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('subpixel-antialiased')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSmoothing,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontSmoothing,
                                    to: 'subpixel-antialiased'
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
        <div class="collapse-title text-base font-medium">Font Style</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">italic</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('italic')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontStyle,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontStyle,
                                    to: 'italic'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">not-italic</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('not-italic')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontStyle,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontStyle,
                                    to: 'not-italic'
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
        <div class="collapse-title text-base font-medium">Font Weight</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-thin</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-thin')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-thin'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-extralight</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-extralight')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-extralight'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-light</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-light')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-light'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-normal</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-normal')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-normal'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-medium</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-medium')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-medium'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-semibold</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-semibold')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-semibold'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-bold</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-bold')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-bold'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-extrabold</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-extrabold')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-extrabold'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">font-black</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('font-black')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontWeight,
                                    to: 'font-black'
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
        <div class="collapse-title text-base font-medium">Font Variant Numeric</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">normal-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('normal-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'normal-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">ordinal</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('ordinal')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'ordinal'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">slashed-zero</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('slashed-zero')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'slashed-zero'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">lining-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('lining-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'lining-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">oldstyle-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('oldstyle-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'oldstyle-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">proportional-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('proportional-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'proportional-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">tabular-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('tabular-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'tabular-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">diagonal-fractions</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('diagonal-fractions')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'diagonal-fractions'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">stacked-fractions</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('stacked-fractions')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'stacked-fractions'
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
        <div class="collapse-title text-base font-medium">Letter Spacing</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">normal-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('normal-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'normal-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">ordinal</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('ordinal')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'ordinal'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">slashed-zero</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('slashed-zero')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'slashed-zero'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">lining-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('lining-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'lining-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">oldstyle-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('oldstyle-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'oldstyle-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">proportional-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('proportional-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'proportional-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">tabular-nums</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('tabular-nums')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'tabular-nums'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">diagonal-fractions</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('diagonal-fractions')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'diagonal-fractions'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">stacked-fractions</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('stacked-fractions')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: fontVariantNumeric,
                                    to: 'stacked-fractions'
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
        <div class="collapse-title text-base font-medium">Line Clamp</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-none'
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
        <div class="collapse-title text-base font-medium">Line Height</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-none'
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
        <div class="collapse-title text-base font-medium">List Style Image</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">line-clamp-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('line-clamp-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: lineClamp,
                                    to: 'line-clamp-none'
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
        <div class="collapse-title text-base font-medium">List Style Position</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">list-inside</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('list-inside')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStylePosition,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStylePosition,
                                    to: 'list-inside'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">list-outside</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('list-outside')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStylePosition,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStylePosition,
                                    to: 'list-outside'
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
        <div class="collapse-title text-base font-medium">List Style Type</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">list-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('list-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStyleType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStyleType,
                                    to: 'list-none'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">list-disc</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('list-disc')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStyleType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStyleType,
                                    to: 'list-disc'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">list-decimal</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('list-decimal')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStyleType,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: listStyleType,
                                    to: 'list-decimal'
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
        <div class="collapse-title text-base font-medium">Text Align</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-left</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-left')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: 'text-left'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-center</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-center')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: 'text-center'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-right</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-right')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: 'text-right'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-justify</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-justify')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: 'text-justify'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-start</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-start')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: 'text-start'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-end</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-end')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textAlign,
                                    to: 'text-end'
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
        <div class="collapse-title text-base font-medium">Text Color</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-inherit</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-inherit')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-inherit'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-current</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-current')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-current'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-transparent</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-transparent')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-transparent'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-black</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-black')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-black'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-white</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-white')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-white'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-slate-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-slate-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-slate-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-gray-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-gray-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-gray-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-zinc-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-zinc-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-zinc-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-neutral-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-neutral-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-neutral-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-stone-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-stone-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-stone-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-red-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-red-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-red-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-orange-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-orange-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-orange-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-amber-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-amber-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-amber-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-yellow-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-yellow-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-yellow-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-lime-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-lime-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-lime-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-green-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-green-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-green-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-emerald-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-emerald-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-emerald-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-teal-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-teal-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-teal-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-cyan-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-cyan-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-cyan-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-50	</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-50	')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-50	'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-sky-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-sky-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-sky-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-blue-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-blue-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-blue-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-indigo-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-indigo-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-indigo-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-violet-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-violet-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-violet-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-purple-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-purple-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-purple-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-fuchsia-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-fuchsia-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-fuchsia-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-pink-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-pink-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-pink-950'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-50</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-50')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-50'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-100</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-100')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-100'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-200</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-200')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-200'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-300</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-300')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-300'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-400</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-400')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-400'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-500</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-500')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-500'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-600</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-600')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-600'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-700</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-700')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-700'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-800</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-800')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-800'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-900</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-900')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-900'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-rose-950</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-rose-950')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textColor,
                                    to: 'text-rose-950'
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
        <div class="collapse-title text-base font-medium">Text Decoration</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">underline</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('underline')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: 'underline'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">overline</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('overline')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: 'overline'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">line-through</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('line-through')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: 'line-through'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">no-underline</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('no-underline')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecoration,
                to: 'no-underline'
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
        <div class="collapse-title text-base font-medium">Text Decoration Color</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-inherit</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-inherit')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-inherit'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-current</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-current')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-current'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-transparent</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-transparent')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-transparent'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-black</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-black')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-black'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-white</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-white')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-white'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-slate-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-slate-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-slate-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-gray-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-gray-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-gray-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-zinc-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-zinc-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-zinc-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-neutral-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-neutral-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-neutral-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-stone-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-stone-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-stone-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-red-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-red-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-red-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-orange-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-orange-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-orange-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-amber-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-amber-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-amber-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-yellow-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-yellow-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-yellow-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-lime-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-lime-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-lime-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-green-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-green-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-green-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-emerald-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-emerald-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-emerald-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-teal-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-teal-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-teal-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-cyan-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-cyan-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-cyan-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-50	</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-50	')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-50	'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-sky-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-sky-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-sky-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-blue-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-blue-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-blue-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-indigo-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-indigo-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-indigo-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-violet-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-violet-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-violet-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-purple-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-purple-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-purple-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-fuchsia-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-fuchsia-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-fuchsia-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-pink-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-pink-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-pink-950'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-50</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-50')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-50'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-100</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-100')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-100'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-200</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-200')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-200'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-300</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-300')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-300'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-400</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-400')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-400'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-500</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-500')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-500'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-600</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-600')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-600'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-700</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-700')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-700'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-800</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-800')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-800'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-900</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-900')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-900'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-rose-950</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-rose-950')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationColor,
                to: 'decoration-rose-950'
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
        <div class="collapse-title text-base font-medium">Text Decoration Style</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-solid</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-solid')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: 'decoration-solid'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-double</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-double')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: 'decoration-double'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-dotted</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-dotted')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: 'decoration-dotted'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-dashed</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-dashed')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: 'decoration-dashed'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-wavy</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-wavy')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationStyle,
                to: 'decoration-wavy'
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
        <div class="collapse-title text-base font-medium">Text Decoration Thickness</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-auto</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-auto')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: 'decoration-auto'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-from-font</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-from-font')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: 'decoration-from-font'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: 'decoration-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: 'decoration-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: 'decoration-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: 'decoration-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">decoration-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('decoration-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textDecorationThickness,
                to: 'decoration-8'
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
        <div class="collapse-title text-base font-medium">Text Underline Offset</div>
        <div class="collapse-content">
            <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">underline-offset-auto</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('underline-offset-auto')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: 'underline-offset-auto'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">underline-offset-0</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('underline-offset-0')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: 'underline-offset-0'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">underline-offset-1</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('underline-offset-1')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: 'underline-offset-1'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">underline-offset-2</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('underline-offset-2')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: 'underline-offset-2'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">underline-offset-4</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('underline-offset-4')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: 'underline-offset-4'
            });
        }
    }}
    class="checkbox checkbox-xs checkbox-primary"
/>
</label>
</div> <div class="form-control">
<label class="label cursor-pointer">
<span class="label-text">underline-offset-8</span>
<input
    type="checkbox"
    checked={swCodeH?.selectedElement?.mc
        ? swCodeH?.selectedElement?.mc.classes.includes('underline-offset-8')
            ? true
            : false
        : false}
    on:change={(e) => {
        if (!e.target.checked) {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: ''
            });
        } else {
            swCodeH.selectedElement.setStylesClass({
                from: textUnderlineOffset,
                to: 'underline-offset-8'
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
        <div class="collapse-title text-base font-medium">Text Transform</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">uppercase</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('uppercase')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: 'uppercase'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">lowercase</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('lowercase')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: 'lowercase'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">capitalize</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('capitalize')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: 'capitalize'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">normal-case</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('normal-case')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textTransform,
                                    to: 'normal-case'
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
        <div class="collapse-title text-base font-medium">Text Overflow</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">truncate</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('truncate')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textOverflow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textOverflow,
                                    to: 'truncate'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-ellipsis</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-ellipsis')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textOverflow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textOverflow,
                                    to: 'text-ellipsis'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">text-clip</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('text-clip')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textOverflow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textOverflow,
                                    to: 'text-clip'
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
        <div class="collapse-title text-base font-medium">Text Indent</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-0</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-0')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-0'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-px</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-px')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-px'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-0.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-0.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-0.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-1')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-1.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-1.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-1.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-2')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-2.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-2.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-2.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-3')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-3.5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-3.5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-3.5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-4')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-5')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-6')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-7</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-7')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-7'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-8</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-8')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-8'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-9</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-9')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-9'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-10</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-10')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-10'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-11</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-11')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-11'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-12</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-12')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-12'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-14</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-14')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-14'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-16</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-16')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-16'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-20</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-20')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-20'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-24</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-24')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-24'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-28</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-28')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-28'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-32</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-32')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-32'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-36</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-36')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-36'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-40</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-40')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-40'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-44</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-44')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-44'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-48</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-48')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-48'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-52</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-52')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-52'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-56</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-56')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-56'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-60</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-60')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-60'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-64</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-64')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-64'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-72</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-72')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-72'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-80</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-80')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-80'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">indent-96</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('indent-96')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: textIndent,
                                    to: 'indent-96'
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
        <div class="collapse-title text-base font-medium">Vertical Align</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-baseline</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-baseline')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-baseline'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-top</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-top')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-top'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-middle</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-middle')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-middle'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-bottom</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-bottom')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-bottom'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-text-top</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-text-top')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-text-top'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-text-bottom</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-text-bottom')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-text-bottom'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-sub</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-sub')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-sub'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">align-super</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('align-super')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: verticalAlign,
                                    to: 'align-super'
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
        <div class="collapse-title text-base font-medium">Whitespace</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">whitespace-normal</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('whitespace-normal')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: 'whitespace-normal'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">whitespace-nowrap</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('whitespace-nowrap')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: 'whitespace-nowrap'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">whitespace-pre</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('whitespace-pre')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: 'whitespace-pre'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">whitespace-pre-line</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('whitespace-pre-line')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: 'whitespace-pre-line'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">whitespace-pre-wrap</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('whitespace-pre-wrap')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: 'whitespace-pre-wrap'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">whitespace-break-spaces</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('whitespace-break-spaces')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: whiteSpace,
                                    to: 'whitespace-break-spaces'
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
        <div class="collapse-title text-base font-medium">Word Break</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">break-normal</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-normal')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: 'break-normal'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">break-words</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-words')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: 'break-words'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">break-all</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-all')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: 'break-all'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">break-keep</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-keep')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: wordBreak,
                                    to: 'break-keep'
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
        <div class="collapse-title text-base font-medium">Hyphens</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">hyphens-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('hyphens-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: hyphens,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: hyphens,
                                    to: 'hyphens-none'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">hyphens-manual</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('hyphens-manual')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: hyphens,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: hyphens,
                                    to: 'hyphens-manual'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">hyphens-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('hyphens-auto')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: hyphens,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: hyphens,
                                    to: 'hyphens-auto'
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
        <div class="collapse-title text-base font-medium">Content</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">content-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('content-none')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: content,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: content,
                                    to: 'content-none'
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