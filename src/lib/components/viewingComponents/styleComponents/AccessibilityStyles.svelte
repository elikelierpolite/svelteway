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
			<div class="collapse-title text-base font-medium">Accessibility</div>
			<div class="collapse-content">
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Screen Readers</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">sr-only</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('sr-only')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: screenReaders,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: screenReaders,
												to: 'sr-only'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> 
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">not-sr-only</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('not-sr-only')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: screenReaders,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: screenReaders,
												to: 'not-sr-only'
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