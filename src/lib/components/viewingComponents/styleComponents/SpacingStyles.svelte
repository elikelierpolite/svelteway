<script>//@ts-nocheck
    import { onMount } from 'svelte';
    import { tailwindPositions, flexBasis, flexDirection, flexWrap, rFlex, flexGrow, flexShrink, order, gridTemplateColumns, gridColumnsStartEnd, gridTemplateRows, gridRowStartEnd, gridAutoFlow, gridAutoColumns, gridAutoRows, gap, justifyContent, justifyItems, alignContent, alignItems, alignSelf, placeContent, placeItems, placeSelf, padding, margin, spaceBetween, width, minWidth, maxWidth, height, minHeight, maxHeight, fontFamily, fontSize, fontSmoothing, fontStyle, fontWeight, fontVariantNumeric, letterSpacing, lineClamp, lineHeight, listStyleImage, listStylePosition, listStyleType, textAlign, textColor, textDecoration, textDecorationColor, textDecorationStyle, textDecorationThickness, textUnderlineOffset, textTransform, textOverflow, textIndent, verticalAlign, whiteSpace, wordBreak, hyphens, content, backgroundAttachment, backgroundClip, backgroundColor, backgroundOrigin, backgroundPosition, backgroundRepeat, backgroundSize, backgroundImage, gradientColorStops, borderRadius, borderWidth, borderColor, borderStyle, divideWidth, divideColor, divideStyle, outlineWidth, outlineColor, outlineStyle, outlineOffset, ringWidth, ringColor, ringOffsetWidth, ringOffsetColor, boxShadow, boxShadowColor, opacity, mixBlendMode, backgroundBlendMode, blur, brightness, contrast, dropShadow, grayscale, hueRotate, invert, saturate, sepia, backdropBlur, backdropBrightness, backdropContrast, backdropGrayscale, backdropHueRotate, backdropInvert, backdropOpacity, backdropSaturate, backdropSepia, borderCollapse, borderSpacing, tableLayout, captionSide, transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay, animation, scale, rotate , translate, skew, transformOrigin, accentColor, appearance, cursor, caretColor, pointerEvents, resize, scrollBehavior, scrollMargin, scrollPadding, scrollSnapAlign, scrollSnapStop, scrollSnapType, touchAction, justifySelf, userSelect, willChange, fill, stroke, strokeWidth, screenReaders } from '../tailwind-extra'
    import Sp1 from './components/spacingStyles/Sp1.svelte'
    import Spm1 from './components/spacingStyles/Spm1.svelte'
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<div
			tabindex="0"
			class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
		
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">Spacing</div>
			<div class="collapse-content">
				<Sp1 />
				<Spm1 />
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Space Between</div>
					<div class="collapse-content">
						<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-0')
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
							to: 'space-x-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-0')
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
							to: 'space-y-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-0.5')
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
							to: 'space-x-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-0.5')
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
							to: 'space-y-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-1')
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
							to: 'space-x-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-1')
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
							to: 'space-y-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-1.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-1.5')
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
							to: 'space-x-1.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-1.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-1.5')
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
							to: 'space-y-1.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-2</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-2')
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
							to: 'space-x-2'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-2</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-2')
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
							to: 'space-y-2'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-2.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-2.5')
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
							to: 'space-x-2.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-2.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-2.5')
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
							to: 'space-y-2.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-')
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
							to: 'space-x-'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-3</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-3')
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
							to: 'space-y-3'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-3.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-3.5')
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
							to: 'space-x-3.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-3.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-3.5')
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
							to: 'space-y-3.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-4</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-4')
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
							to: 'space-x-4'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-4</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-4')
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
							to: 'space-y-4'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-5')
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
							to: 'space-x-5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-5')
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
							to: 'space-y-5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-6</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-6')
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
							to: 'space-x-6'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-6</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-6')
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
							to: 'space-y-6'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-7</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-7')
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
							to: 'space-x-7'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-7</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-7')
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
							to: 'space-y-7'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-8</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-8')
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
							to: 'space-x-8'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-8</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-8')
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
							to: 'space-y-8'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-9</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-9')
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
							to: 'space-x-9'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-9</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-9')
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
							to: 'space-y-9'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-10</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-10')
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
							to: 'space-x-10'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-10</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-10')
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
							to: 'space-y-10'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-11</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-11')
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
							to: 'space-x-11'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-11</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-11')
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
							to: 'space-y-11'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-12</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-12')
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
							to: 'space-x-12'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-12</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-12')
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
							to: 'space-y-12'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-14</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-14')
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
							to: 'space-x-14'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-14</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-14')
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
							to: 'space-y-14'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-16</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-16')
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
							to: 'space-x-16'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-y-16</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-y-16')
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
							to: 'space-y-16'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">space-x-20</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('space-x-20')
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
							to: 'space-x-20'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
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
					</div>
				</div>
			</div>
		</div>