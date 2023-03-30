<script>
	import { swCode } from '../CodeStore';
	import { tailwindPositions, flexBasis, flexDirection, flexWrap, rFlex, flexGrow, flexShrink, order, gridTemplateColumns, gridColumnsStartEnd, gridTemplateRows, gridRowStartEnd, gridAutoFlow, gridAutoColumns, gridAutoRows, gap, justifyContent, justifyItems, alignContent, alignItems, alignSelf, placeContent, placeItems, placeSelf, padding, margin, spaceBetween, width, minWidth, maxWidth, height, minHeight, maxHeight, fontFamily, fontSize, fontSmoothing, fontStyle, fontWeight, fontVariantNumeric, letterSpacing, lineClamp, lineHeight, listStyleImage, listStylePosition, listStyleType, textAlign, textColor, textDecoration, textDecorationColor, textDecorationStyle, textDecorationThickness, textUnderlineOffset, textTransform, textOverflow, textIndent, verticalAlign, whiteSpace, wordBreak, hyphens, content, backgroundAttchment, backgroundClip, backgroundColor, backgroundOrigin, backgroundPosition, backgroundRepeat, backgroundSize, backgroundImage, gradientColorStops, borderRadius, borderWidth, borderColor, borderStyle, divideWidth, divideColor, divideStyle, outlineWidth, outlineColor, outlineStyle, outlineOffset, ringWidth, ringColor, ringOffsetWidth, ringOffsetColor, boxShadow, boxShadowColor, opacity, mixBlendMode, backgroundBlendMode, blur, brightness, contrast, dropShadow, grayscale, hueRotate, invert, saturate, sepia, backdropBlur, backdropBrightness, backdropContrast, backdropGrayscale, backdropHueRotate, backdropInvert, backdropOpacity, backdropSaturate, backdropSepia, borderCollapse, borderSpacing, tableLayout, captionSide, transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay, animation, scale, rotate , translate, skew, transformOrigin, accentColor, appearance, cursor, caretColor, pointerEvents, resize, scrollBehavior, scrollMargin, scrollPadding, scrollSnapAlign, scrollSnapStop, scrollSnapType, touchAction, justifySelf, userSelect, willChange, fill, stroke, strokeWidth, screenReaders } from './tailwind-extra'

	$: swCodeH = $swCode;
</script>

{#key swCodeH.selectedElement}
	{#if swCodeH.selectedElement}
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">Layout</div>
			<div class="collapse-content">
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Aspect Ratio</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">aspect-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('aspect-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['aspect-auto', 'aspect-square', 'aspect-video'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['aspect-auto', 'aspect-square', 'aspect-video'],
												to: 'aspect-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">aspect-square</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('aspect-square')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['aspect-auto', 'aspect-square', 'aspect-video'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['aspect-auto', 'aspect-square', 'aspect-video'],
												to: 'aspect-square'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">aspect-video</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('aspect-video')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['aspect-auto', 'aspect-square', 'aspect-video'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['aspect-auto', 'aspect-square', 'aspect-video'],
												to: 'aspect-video'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Container</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">container</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('container')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['container'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['container'],
												to: 'container'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Columns</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-1</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-1')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
												'columns-1',
												'columns-2',
												'columns-3',
												'columns-4',
												'columns-5',
												'columns-6',
												'columns-7',
												'columns-8',
												'columns-9',
												'columns-10',
												'columns-11',
												'columns-12',
												'columns-auto',
												'columns-3xs',
												'columns-2xs',
												'columns-xs',
												'columns-sm',
												'columns-md',
												'columns-lg',
												'columns-xl',
												'columns-2xl',
												'columns-3xl',
												'columns-4xl',
												'columns-5xl',
												'columns-6xl',
												'columns-7xl'
											],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
												'columns-1',
												'columns-2',
												'columns-3',
												'columns-4',
												'columns-5',
												'columns-6',
												'columns-7',
												'columns-8',
												'columns-9',
												'columns-10',
												'columns-11',
												'columns-12',
												'columns-auto',
												'columns-3xs',
												'columns-2xs',
												'columns-xs',
												'columns-sm',
												'columns-md',
												'columns-lg',
												'columns-xl',
												'columns-2xl',
												'columns-3xl',
												'columns-4xl',
												'columns-5xl',
												'columns-6xl',
												'columns-7xl'
											],
												to: 'columns-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-2</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-2')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
												'columns-1',
												'columns-2',
												'columns-3',
												'columns-4',
												'columns-5',
												'columns-6',
												'columns-7',
												'columns-8',
												'columns-9',
												'columns-10',
												'columns-11',
												'columns-12',
												'columns-auto',
												'columns-3xs',
												'columns-2xs',
												'columns-xs',
												'columns-sm',
												'columns-md',
												'columns-lg',
												'columns-xl',
												'columns-2xl',
												'columns-3xl',
												'columns-4xl',
												'columns-5xl',
												'columns-6xl',
												'columns-7xl'
											],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
												'columns-1',
												'columns-2',
												'columns-3',
												'columns-4',
												'columns-5',
												'columns-6',
												'columns-7',
												'columns-8',
												'columns-9',
												'columns-10',
												'columns-11',
												'columns-12',
												'columns-auto',
												'columns-3xs',
												'columns-2xs',
												'columns-xs',
												'columns-sm',
												'columns-md',
												'columns-lg',
												'columns-xl',
												'columns-2xl',
												'columns-3xl',
												'columns-4xl',
												'columns-5xl',
												'columns-6xl',
												'columns-7xl'
											],
												to: 'columns-2'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-3</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-3')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
												'columns-1',
												'columns-2',
												'columns-3',
												'columns-4',
												'columns-5',
												'columns-6',
												'columns-7',
												'columns-8',
												'columns-9',
												'columns-10',
												'columns-11',
												'columns-12',
												'columns-auto',
												'columns-3xs',
												'columns-2xs',
												'columns-xs',
												'columns-sm',
												'columns-md',
												'columns-lg',
												'columns-xl',
												'columns-2xl',
												'columns-3xl',
												'columns-4xl',
												'columns-5xl',
												'columns-6xl',
												'columns-7xl'
											],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
												'columns-1',
												'columns-2',
												'columns-3',
												'columns-4',
												'columns-5',
												'columns-6',
												'columns-7',
												'columns-8',
												'columns-9',
												'columns-10',
												'columns-11',
												'columns-12',
												'columns-auto',
												'columns-3xs',
												'columns-2xs',
												'columns-xs',
												'columns-sm',
												'columns-md',
												'columns-lg',
												'columns-xl',
												'columns-2xl',
												'columns-3xl',
												'columns-4xl',
												'columns-5xl',
												'columns-6xl',
												'columns-7xl'
											],
												to: 'columns-3'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-4</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-4')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-4'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-5</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-5')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-6</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-6')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-6'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-7</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-7')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-7'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-8</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-8')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-8'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-9</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-9')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-9'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-10</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-10')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-10'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-11</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-11')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-11'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-12</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-12')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-12'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-3xs</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-3xs')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-3xs'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-2xs</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-2xs')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-2xs'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-xs</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-xs')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-xs'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-sm</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-sm')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-sm'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-md</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-md')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-md'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-lg</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-lg')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-lg'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-xl</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-xl')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-xl'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-2xl</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-2xl')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-2xl'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-3xl</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-3xl')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-3xl'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-4xl</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-4xl')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-4xl'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-5xl</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-5xl')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-5xl'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-6xl</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-6xl')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-6xl'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">columns-7xl</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('columns-7xl')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: [
													'columns-1',
													'columns-2',
													'columns-3',
													'columns-4',
													'columns-5',
													'columns-6',
													'columns-7',
													'columns-8',
													'columns-9',
													'columns-10',
													'columns-11',
													'columns-12',
													'columns-auto',
													'columns-3xs',
													'columns-2xs',
													'columns-xs',
													'columns-sm',
													'columns-md',
													'columns-lg',
													'columns-xl',
													'columns-2xl',
													'columns-3xl',
													'columns-4xl',
													'columns-5xl',
													'columns-6xl',
													'columns-7xl'
												],
												to: 'columns-7xl'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Break After</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-avoid</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-avoid')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-avoid'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-all</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-all')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-all'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-avoid-page</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-avoid-page')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-avoid-page'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-page</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-page')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-page'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-left</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-left')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-left'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-right</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-right')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-right'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-after-column</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-after-column')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-after-auto', 'break-after-avoid', 'break-after-all', 'break-after-avoid-page', 'break-after-page', 'break-after-left', 'break-after-right', 'break-after-column'],
												to: 'break-after-column'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Break Before</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-avoid</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-avoid')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-avoid'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-all</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-all')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-all', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-all'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-avoid-page</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-avoid-page')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-all', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-avoid-page'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-page</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-page')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-all', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-page'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-left</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-left')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-all', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-left'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-right</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-right')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-all', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-right'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-before-column</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-before-column')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-all', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-before-auto', 'break-before-avoid', 'break-before-all', 'break-before-avoid-page', 'break-before-page', 'break-before-left', 'break-before-right', 'break-before-column'],
												to: 'break-before-column'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Break Inside</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-inside-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-inside-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: 'break-inside-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-inside-avoid</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-inside-avoid')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: 'break-inside-avoid'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-inside-avoid-page</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-inside-avoid-page')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: 'break-inside-avoid-page'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">break-inside-avoid-column</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('break-inside-avoid-column')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['break-inside-auto', 'break-inside-avoid', 'break-inside-avoid-page', 'break-inside-avoid-column'],
												to: 'break-inside-avoid-column'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Box Decoration Break</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">box-decoration-clone</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('box-decoration-clone')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-decoration-clone', 'box-decoration-slice'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-decoration-clone', 'box-decoration-slice'],
												to: 'box-decoration-clone'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">box-decoration-slice</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('box-decoration-slice')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-decoration-clone', 'box-decoration-slice'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-decoration-clone', 'box-decoration-slice'],
												to: 'box-decoration-slice'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Box Sizing</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">box-border</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('box-border')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-border', 'box-content'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-decoration-clone', 'box-content'],
												to: 'box-border'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">box-content</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('box-content')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-content', 'box-content'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['box-decoration-clone', 'box-content'],
												to: 'box-border'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Display</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">block</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('block')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'block'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">inline-block</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('inline-block')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'inline-block'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">inline</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('inline')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'inline'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">flex</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('flex')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'flex'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">inline-flex</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('inline-flex')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'inline-flex'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">inline-table</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('inline-table')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'inline-table'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-caption</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-caption')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-caption'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-cell</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-cell')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-cell'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-column</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-column')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-column'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-column-group</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-column-group')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-column-group'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-footer-group</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-footer-group')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-footer-group'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-header-group</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-header-group')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-header-group'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-row-group</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-row-group')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-row-group'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">table-row</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('table-row')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'table-row'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">flow-root</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('flow-root')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'flow-root'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">grid</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('grid')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'grid'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">inline-grid</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('inline-grid')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'inline-grid'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">contents</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('contents')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'contents'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">list-item</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('list-item')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'list-item'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">hidden</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('hidden')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
												to: 'hidden'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Floats</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">float-right</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('float-right')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['float-right', 'float-left', 'float-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['float-right', 'float-left', 'float-none'],
												to: 'float-right'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">float-left</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('float-left')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['float-right', 'float-left', 'float-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['float-right', 'float-left', 'float-none'],
												to: 'float-left'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">float-none</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('float-none')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['float-right', 'float-left', 'float-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['float-right', 'float-left', 'float-none'],
												to: 'float-none'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Clear</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">clear-left</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('clear-right')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: 'clear-left'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">clear-left</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('clear-right')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: 'clear-right'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">clear-both</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('clear-both')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: 'clear-both'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">clear-none</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('clear-none')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['clear-left', 'clear-right', 'clear-both', 'clear-none'],
												to: 'clear-none'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Isolation</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">isolate</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('isolate')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['isolate', 'isolate-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['isolate', 'isolate-auto'],
												to: 'isolate'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">isolate-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('isolate-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['isolate', 'isolate-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['isolate', 'isolate-auto'],
												to: 'isolate-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Object Fit</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-contain</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-contain')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: 'object-contain'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-cover</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-cover')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: 'object-cover'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-fill</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-fill')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: 'object-fill'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-none</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-none')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: 'object-none'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-scale-down</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-scale-down')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
												to: 'object-scale-down'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Object Position</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-bottom</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-bottom')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-bottom'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-center</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-center')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-center'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-left</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-left')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-left'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-left-bottom</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-left-bottom')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-left-bottom'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-left-top</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-left-top')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-left-top'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-right</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-right')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-right'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-right-bottom</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-right-bottom')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-right-bottom'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-right-top</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-right-top')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-right-top'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">object-top</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('object-top')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-bottom', 'object-right-top', 'object-top'],
												to: 'object-top'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Overflow</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-hidden</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-hidden')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-hidden'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-clip</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-clip')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-clip'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-visible</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-visible')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-visible'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-scroll</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-scroll')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-scroll'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-x-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-x-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-x-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-y-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-y-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-y-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-x-hidden</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-x-hidden')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-x-hidden'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-y-hidden</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-y-hidden')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-y-hidden'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-x-clip</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-x-clip')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-x-clip'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-y-clip</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-y-clip')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-y-clip'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-x-visible</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-x-visible')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-x-visible'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-y-visible</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-y-visible')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-y-visible'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-x-scroll</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-x-scroll')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-x-scroll'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overflow-y-scroll</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overflow-y-scroll')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-x-auto', 'overflow-y-auto', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-x-clip', 'overflow-y-clip', 'overflow-x-visible', 'overflow-y-visible', 'overflow-x-scroll', 'overflow-y-scroll'],
												to: 'overflow-y-scroll'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Overscroll Behavior</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-contain</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-contain'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-none</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-none')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-none'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-y-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-y-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-y-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-y-contain</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-y-contain')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-y-contain'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-y-none</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-y-none')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-y-none'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-x-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-x-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-x-auto'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-x-contain</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-x-contain')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-x-contain'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">overscroll-x-none</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('overscroll-x-none')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none'],
												to: 'overscroll-x-none'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Position</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">static</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('static')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: 'static'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">fixed</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('fixed')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: 'fixed'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">absolute</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('absolute')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: 'absolute'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">relative</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('relative')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: 'relative'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">sticky</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('sticky')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
												to: 'sticky'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Top / Right / Bottom / Left</div>
					<div class="collapse-content">
						{#each tailwindPositions as position}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{position}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(position)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: tailwindPositions,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: tailwindPositions,
												to: position
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
					</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Visibility</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">visible</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('visible')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['visible', 'invisible', 'collapse'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['visible', 'invisible', 'collapse'],
												to: 'visible'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">invisible</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('invisible')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['visible', 'invisible', 'collapse'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['visible', 'invisible', 'collapse'],
												to: 'invisible'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">collapse</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('collapse')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['visible', 'invisible', 'collapse'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['visible', 'invisible', 'collapse'],
												to: 'collapse'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Z-Index</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">z-0</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('z-0')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: 'z-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">z-10</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('z-10')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: 'z-10'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">z-20</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('z-20')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: 'z-20'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">z-30</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('z-30')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: 'z-30'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">z-40</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('z-40')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: 'z-40'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">z-50</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('z-50')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: 'z-50'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">z-auto</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes('z-auto')
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
												to: 'z-auto'
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
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">Flexbox & Grid</div>
			<div class="collapse-content">
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Flex Basis</div>
					<div class="collapse-content">
						{#each flexBasis as flexBacc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{flexBacc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(flexBacc)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: flexBasis,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: flexBasis,
												to: flexBacc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Flex Direction</div>
					<div class="collapse-content">
						{#each flexDirection as flexDir}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{flexDir}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(flexDir)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: flexDirection,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: flexDirection,
												to: flexDir
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Flex Wrap</div>
					<div class="collapse-content">
						{#each flexWrap as flexWrp}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{flexWrp}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(flexWrp)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: flexWrap,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: flexWrap,
												to: flexWrp
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Flex</div>
					<div class="collapse-content">
						{#each rFlex as flex}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{flex}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(flex)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: rFlex,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: rFlex,
												to: flex
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Flex Grow</div>
					<div class="collapse-content">
						{#each flexGrow as flxGrow}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{flxGrow}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(flxGrow)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: flexGrow,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: flexGrow,
												to: flxGrow
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Flex Shrink</div>
					<div class="collapse-content">
						{#each flexShrink as flxShrink}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{flxShrink}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(flxShrink)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: flexShrink,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: flexShrink,
												to: flxShrink
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Order</div>
					<div class="collapse-content">
						{#each order as ordr}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{ordr}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(ordr)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: order,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: order,
												to: ordr
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Grid Template Columns</div>
					<div class="collapse-content">
						{#each gridTemplateColumns as gridTmplCols}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{gridTmplCols}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(gridTmplCols)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: gridTemplateColumns,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: gridTemplateColumns,
												to: gridTmplCols
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Grid Columns Start / End</div>
					<div class="collapse-content">
						{#each gridColumnsStartEnd as gridColsStartEnd}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{gridColsStartEnd}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(gridColsStartEnd)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: gridColumnsStartEnd,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: gridColumnsStartEnd,
												to: gridColsStartEnd
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Grid Auto Flow</div>
					<div class="collapse-content">
						{#each gridAutoFlow as gridAf}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{gridAf}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(gridAf)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: gridColumnsStartEnd,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: gridColumnsStartEnd,
												to: gridAf
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Grid Auto Columns</div>
					<div class="collapse-content">
						{#each gridAutoColumns as gridAc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{gridAc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(gridAc)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: gridAutoColumns,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: gridAutoColumns,
												to: gridAc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Grid Auto Rows</div>
					<div class="collapse-content">
						{#each gridAutoRows as gridAr}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{gridAr}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(gridAr)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: gridAutoRows,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: gridAutoRows,
												to: gridAr
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Gap</div>
					<div class="collapse-content">
						{#each gap as gp}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{gp}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(gp)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: gap,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: gap,
												to: gp
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Justify Content</div>
					<div class="collapse-content">
						{#each justifyContent as justifyC}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{justifyC}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(justifyC)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: justifyContent,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: justifyContent,
												to: justifyC
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Justify Items</div>
					<div class="collapse-content">
						{#each justifyItems as justifyI}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{justifyI}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(justifyI)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: justifyItems,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: justifyItems,
												to: justifyI
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Justify Self</div>
					<div class="collapse-content">
						{#each justifySelf as justifyS}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{justifyS}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(justifyS)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: justifySelf,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: justifySelf,
												to: justifyS
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Align Content</div>
					<div class="collapse-content">
						{#each alignContent as alignC}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{alignC}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(alignC)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: alignContent,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: alignContent,
												to: alignC
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Align Items</div>
					<div class="collapse-content">
						{#each alignItems as alignI}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{alignI}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(alignI)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: alignItems,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: alignItems,
												to: alignI
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Align Self</div>
					<div class="collapse-content">
						{#each alignSelf as alignS}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{alignS}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(alignS)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: alignSelf,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: alignSelf,
												to: alignS
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Place Content</div>
					<div class="collapse-content">
						{#each placeContent as placeC}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{placeC}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(placeC)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: placeContent,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: placeContent,
												to: placeC
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Place Items</div>
					<div class="collapse-content">
						{#each placeItems as placeI}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{placeI}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(placeI)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: placeItems,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: placeItems,
												to: placeI
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Place Self</div>
					<div class="collapse-content">
						{#each placeSelf as placeS}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{placeS}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(placeS)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: placeSelf,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: placeSelf,
												to: placeS
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">Spacing</div>
			<div class="collapse-content">
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Padding</div>
					<div class="collapse-content">
						{#each padding as pding}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{pding}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(pding)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: padding,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: padding,
												to: pding
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Margin</div>
					<div class="collapse-content">
						{#each margin as mrgin}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{mrgin}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(mrgin)
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
												to: mrgin
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Space Between</div>
					<div class="collapse-content">
						{#each spaceBetween as spaceB}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{spaceB}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(spaceB)
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
												to: spaceB
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
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
						{#each width as wdth}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{wdth}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(wdth)
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
												to: wdth
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Min-Width</div>
					<div class="collapse-content">
						{#each minWidth as minWdth}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{minWdth}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(minWdth)
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
												to: minWdth
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Max-Width</div>
					<div class="collapse-content">
						{#each maxWidth as maxWdth}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{maxWdth}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(maxWdth)
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
												to: maxWdth
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Height</div>
					<div class="collapse-content">
						{#each height as hight}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{hight}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(hight)
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
												to: hight
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Min-Height</div>
					<div class="collapse-content">
						{#each minHeight as minHight}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{minHight}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(minHight)
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
												from: height,
												to: minHeight
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Max-Height</div>
					<div class="collapse-content">
						{#each maxHeight as maxHight}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{maxHight}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(maxHight)
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
												from: height,
												to: maxHight
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
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
						{#each fontFamily as fFamily}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{fFamily}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(fFamily)
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
												to: fFamily
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Font Size</div>
					<div class="collapse-content">
						{#each fontSize as fSize}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{fSize}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(fSize)
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
												to: fSize
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Font Smoothing</div>
					<div class="collapse-content">
						{#each fontSmoothing as fSmoothing}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{fSmoothing}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(fSmoothing)
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
												to: fSmoothing
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Font Style</div>
					<div class="collapse-content">
						{#each fontStyle as fStyle}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{fStyle}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(fStyle)
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
												to: fStyle
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Font Weight</div>
					<div class="collapse-content">
						{#each fontWeight as fWeight}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{fWeight}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(fWeight)
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
												to: fWeight
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Font Variant Numeric</div>
					<div class="collapse-content">
						{#each fontVariantNumeric as fVn}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{fVn}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(fVn)
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
												to: fVn
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Letter Spacing</div>
					<div class="collapse-content">
						{#each letterSpacing as ls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{ls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(ls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: letterSpacing,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: letterSpacing,
												to: ls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Line Clamp</div>
					<div class="collapse-content">
						{#each lineClamp as lc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{lc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(lc)
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
												to: lc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Line Height</div>
					<div class="collapse-content">
						{#each lineHeight as lh}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{lh}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(lh)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: lineHeight,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: lineHeight,
												to: lh
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">List Style Image</div>
					<div class="collapse-content">
						{#each listStyleImage as lsi}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{lsi}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(lsi)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: listStyleImage,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: listStyleImage,
												to: lsi
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">List Style Position</div>
					<div class="collapse-content">
						{#each listStylePosition as lsp}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{lsp}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(lsp)
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
												to: lsp
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">List Style Type</div>
					<div class="collapse-content">
						{#each listStyleType as lst}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{lst}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(lst)
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
												to: lst
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Align</div>
					<div class="collapse-content">
						{#each textAlign as ta}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{ta}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(ta)
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
												to: ta
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Color</div>
					<div class="collapse-content">
						{#each textColor as tc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{tc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(tc)
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
												to: tc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Decoration</div>
					<div class="collapse-content">
						{#each textDecoration as td}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{td}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(td)
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
												to: td
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Decoration Color</div>
					<div class="collapse-content">
						{#each textDecorationColor as tdc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{tdc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(tdc)
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
												to: tdc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Decoration Style</div>
					<div class="collapse-content">
						{#each textDecorationStyle as tds}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{tds}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(tds)
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
												to: tds
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Decoration Thickness</div>
					<div class="collapse-content">
						{#each textDecorationThickness as tdt}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{tdt}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(tdt)
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
												to: tdt
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Underline Offset</div>
					<div class="collapse-content">
						{#each textUnderlineOffset as tuo}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{tuo}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(tuo)
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
												to: tuo
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Transform</div>
					<div class="collapse-content">
						{#each textTransform as tt}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{tt}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(tt)
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
												to: tt
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Overflow</div>
					<div class="collapse-content">
						{#each textOverflow as to}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{to}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(to)
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
												to: to
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Text Indent</div>
					<div class="collapse-content">
						{#each textIndent as ti}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{ti}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(ti)
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
												to: ti
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Vertical Align</div>
					<div class="collapse-content">
						{#each verticalAlign as va}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{va}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(va)
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
												to: va
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Whitespace</div>
					<div class="collapse-content">
						{#each whiteSpace as ws}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{ws}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(ws)
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
												to: ws
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Word Break</div>
					<div class="collapse-content">
						{#each wordBreak as wb}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{wb}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(wb)
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
												to: wb
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Hyphens</div>
					<div class="collapse-content">
						{#each hyphens as hypns}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{hypns}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(hypns)
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
												to: hypns
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Content</div>
					<div class="collapse-content">
						{#each content as cntnt}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cntnt}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cntnt)
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
												to: cntnt
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">Borders</div>
			<div class="collapse-content">
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Border Radius</div>
					<div class="collapse-content">
						{#each borderRadius as br}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{br}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(br)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: borderRadius,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: borderRadius,
												to: br
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Border Width</div>
					<div class="collapse-content">
						{#each borderWidth as bw}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{bw}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(bw)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: borderWidth,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: borderWidth,
												to: bw
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Border Color</div>
					<div class="collapse-content">
						{#each borderColor as bc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{bc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(bc)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: borderColor,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: borderColor,
												to: bc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Border Style</div>
					<div class="collapse-content">
						{#each borderStyle as bs}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{bs}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(bs)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: borderStyle,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: borderStyle,
												to: bs
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Divide Color</div>
					<div class="collapse-content">
						{#each divideColor as dc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{dc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(dc)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: divideColor,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: divideColor,
												to: dc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Divide Style</div>
					<div class="collapse-content">
						{#each divideStyle as ds}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{ds}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(ds)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: divideStyle,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: divideStyle,
												to: ds
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Outline Width</div>
					<div class="collapse-content">
						{#each outlineWidth as ow}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{ow}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(ow)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: outlineWidth,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: outlineWidth,
												to: ow
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Outline Color</div>
					<div class="collapse-content">
						{#each outlineColor as oc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{oc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(oc)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: outlineColor,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: outlineColor,
												to: oc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Outline Style</div>
					<div class="collapse-content">
						{#each outlineStyle as os}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{os}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(os)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: outlineStyle,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: outlineStyle,
												to: os
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Outline Offset</div>
					<div class="collapse-content">
						{#each outlineOffset as oo}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{oo}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(oo)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: outlineOffset,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: outlineOffset,
												to: oo
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Ring Width</div>
					<div class="collapse-content">
						{#each ringWidth as rw}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{rw}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(rw)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ringWidth,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ringWidth,
												to: rw
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Ring Color</div>
					<div class="collapse-content">
						{#each ringColor as rc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{rc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(rc)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ringColor,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ringColor,
												to: rc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Ring Offset Width</div>
					<div class="collapse-content">
						{#each ringOffsetWidth as row}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{row}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(row)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ringOffsetWidth,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ringOffsetWidth,
												to: row
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Ring Offset Color</div>
					<div class="collapse-content">
						{#each ringOffsetColor as roc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{roc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(roc)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: ringOffsetColor,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: ringOffsetColor,
												to: roc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
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
						{#each boxShadow as bs}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{bs}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(bs)
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
												to: bs
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Box Shadow Color</div>
					<div class="collapse-content">
						{#each boxShadowColor as bsc}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{bsc}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(bsc)
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
												to: bsc
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Opacity</div>
					<div class="collapse-content">
						{#each opacity as o}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{o}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(o)
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
												to: o
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Mix Blend Mode</div>
					<div class="collapse-content">
						{#each mixBlendMode as mbm}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{mbm}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(mbm)
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
												to: mbm
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Background Blend Mode</div>
					<div class="collapse-content">
						{#each backgroundBlendMode as bbm}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{bbm}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(bbm)
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
												to: bbm
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">Filters</div>
			<div class="collapse-content">
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Blur</div>
					<div class="collapse-content">
						{#each blur as b}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{b}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(b)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: blur,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: blur,
												to: b
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Brightness</div>
					<div class="collapse-content">
						{#each brightness as b}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{b}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(b)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: brightness,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: brightness,
												to: b
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Contrast</div>
					<div class="collapse-content">
						{#each contrast as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: contrast,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: contrast,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Drop Shadow</div>
					<div class="collapse-content">
						{#each dropShadow as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: dropShadow,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: dropShadow,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Grayscale</div>
					<div class="collapse-content">
						{#each grayscale as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: grayscale,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: grayscale,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Hue Rotate</div>
					<div class="collapse-content">
						{#each hueRotate as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: hueRotate,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: hueRotate,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Invert</div>
					<div class="collapse-content">
						{#each invert as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: invert,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: invert,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Saturate</div>
					<div class="collapse-content">
						{#each saturate as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: saturate,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: saturate,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Sepia</div>
					<div class="collapse-content">
						{#each sepia as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: sepia,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: sepia,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Blur</div>
					<div class="collapse-content">
						{#each backdropBlur as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropBlur,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropBlur,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Brightnesss</div>
					<div class="collapse-content">
						{#each backdropBrightness as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropBrightness,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropBrightness,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Contrast</div>
					<div class="collapse-content">
						{#each backdropContrast as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropContrast,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropContrast,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Grayscale</div>
					<div class="collapse-content">
						{#each backdropGrayscale as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropGrayscale,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropGrayscale,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Hue Rotate</div>
					<div class="collapse-content">
						{#each backdropHueRotate as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropHueRotate,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropHueRotate,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Invert</div>
					<div class="collapse-content">
						{#each backdropInvert as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropInvert,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropInvert,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Opacity</div>
					<div class="collapse-content">
						{#each backdropOpacity as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropOpacity,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropOpacity,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Saturate</div>
					<div class="collapse-content">
						{#each backdropSaturate as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropSaturate,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropSaturate,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Backdrop Sepia</div>
					<div class="collapse-content">
						{#each backdropSepia as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: backdropSepia,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: backdropSepia,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
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
						{#each borderCollapse as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Border Spacing</div>
					<div class="collapse-content">
						{#each borderSpacing as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Table Layout</div>
					<div class="collapse-content">
						{#each tableLayout as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Caption Side</div>
					<div class="collapse-content">
						{#each captionSide as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">Transitions & Animation</div>
			<div class="collapse-content">
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Transition Property</div>
					<div class="collapse-content">
						{#each transitionProperty as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: transitionProperty,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: transitionProperty,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Transition Duration</div>
					<div class="collapse-content">
						{#each transitionDuration as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: transitionDuration,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: transitionDuration,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Transition Timing Function</div>
					<div class="collapse-content">
						{#each transitionTimingFunction as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: transitionTimingFunction,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: transitionTimingFunction,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Transition Delay</div>
					<div class="collapse-content">
						{#each transitionDelay as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: transitionDelay,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: transitionDelay,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Animation</div>
					<div class="collapse-content">
						{#each animation as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: animation,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: animation,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
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
						{#each accentColor as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Appearance</div>
					<div class="collapse-content">
						{#each appearance as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: appearance,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: appearance,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Cursor</div>
					<div class="collapse-content">
						{#each cursor as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Caret Color</div>
					<div class="collapse-content">
						{#each caretColor as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Pointer Events</div>
					<div class="collapse-content">
						{#each pointerEvents as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Resize</div>
					<div class="collapse-content">
						{#each resize as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Scroll Behavior</div>
					<div class="collapse-content">
						{#each scrollBehavior as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Scroll Margin</div>
					<div class="collapse-content">
						{#each scrollMargin as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: scrollMargin,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: scrollMargin,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Scroll Padding</div>
					<div class="collapse-content">
						{#each scrollPadding as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: scrollPadding,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: scrollPadding,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Scroll Snap Align</div>
					<div class="collapse-content">
						{#each scrollSnapAlign as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Scroll Snap Stop</div>
					<div class="collapse-content">
						{#each scrollSnapStop as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Scroll Snap Type</div>
					<div class="collapse-content">
						{#each scrollSnapType as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Touch Action</div>
					<div class="collapse-content">
						{#each touchAction as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">User Select</div>
					<div class="collapse-content">
						{#each userSelect as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Will Change</div>
					<div class="collapse-content">
						{#each willChange as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			tabindex="0"
			class="w-full mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
		>
			<input type="checkbox" class="peer" />
			<div class="collapse-title text-base font-medium">SVG</div>
			<div class="collapse-content">
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Fill</div>
					<div class="collapse-content">
						{#each fill as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: fill,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: fill,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Stroke</div>
					<div class="collapse-content">
						{#each stroke as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: stroke,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: stroke,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
				<div tabindex="0" class="w-full collapse collapse-arrow bg-base-100 rounded-box">
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Stroke Width</div>
					<div class="collapse-content">
						{#each strokeWidth as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
											? true
											: false
										: false}
									on:change={(e) => {
										if (!e.target.checked) {
											swCodeH.selectedElement.setStylesClass({
												from: strokeWidth,
												to: ''
											});
										} else {
											swCodeH.selectedElement.setStylesClass({
												from: strokeWidth,
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
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
						{#each screenReaders as cls}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">{cls}</span>
								<input
									type="checkbox"
									checked={swCodeH.selectedElement.mc
										? swCodeH.selectedElement.mc.classes.includes(cls)
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
												to: cls
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div />
	{/if}
{/key}
