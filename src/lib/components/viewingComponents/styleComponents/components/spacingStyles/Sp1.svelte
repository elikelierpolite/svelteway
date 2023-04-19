<script>//@ts-nocheckborderswCodeH.selectedElement.mc
    import { onMount } from 'svelte';
    import { padding } from '../../../tailwind-extra'
    import Spp1 from './Spp1.svelte'
    import Spp2 from './Spp2.svelte'
    import Spp3 from './Spp3.svelte'
    import Spp4 from './Spp4.svelte'
    import Spp5 from './Spp5.svelte'
    
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Padding</div>
					<div class="collapse-content">
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-0')
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
												to: 'p-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-0')
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
												to: 'px-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-0')
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
												to: 'py-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-0')
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
												to: 'ps-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-0')
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
												to: 'pe-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-0')
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
												to: 'pt-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-0')
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
												to: 'pr-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-0')
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
												to: 'pb-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-0</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-0')
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
												to: 'pl-0'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-px')
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
												to: 'p-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-px')
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
												to: 'px-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-px')
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
												to: 'py-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-px')
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
												to: 'ps-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-px')
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
												to: 'pe-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-px')
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
												to: 'pt-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-px')
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
												to: 'pr-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-px')
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
												to: 'pb-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-px</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-px')
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
												to: 'pl-px'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-0.5')
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
												to: 'p-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-0.5')
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
												to: 'px-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-0.5')
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
												to: 'py-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-0.5')
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
												to: 'ps-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-0.5')
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
												to: 'pe-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-0.5')
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
												to: 'pt-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-0.5')
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
												to: 'pr-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-0.5')
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
												to: 'pb-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-0.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-0.5')
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
												to: 'pl-0.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-1')
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
												to: 'p-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-1')
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
												to: 'px-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-1')
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
												to: 'py-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-1')
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
												to: 'ps-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-1')
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
												to: 'pe-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-1')
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
												to: 'pt-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-1')
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
												to: 'pr-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-1')
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
												to: 'pb-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-1</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-1')
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
												to: 'pl-1'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-1.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-1.5')
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
												to: 'p-1.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-1.5</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-1.5')
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
												to: 'px-1.5'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> 
                        <Spp1 />
                        <Spp2 />
                        <Spp3 />
                        <Spp4 />
                        <Spp5 />
                        <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-56</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-56')
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
												to: 'pe-56'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-56</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-56')
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
												to: 'pt-56'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-56</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-56')
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
												to: 'pr-56'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-56</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-56')
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
												to: 'pb-56'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-56</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-56')
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
												to: 'pl-56'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-60')
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
												to: 'p-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-60')
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
												to: 'px-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-60')
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
												to: 'py-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-60')
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
												to: 'ps-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-60')
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
												to: 'pe-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-60')
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
												to: 'pt-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-60')
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
												to: 'pr-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-60')
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
												to: 'pb-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-60</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-60')
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
												to: 'pl-60'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-64')
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
												to: 'p-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-64')
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
												to: 'px-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-64')
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
												to: 'py-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-64')
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
												to: 'ps-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-64')
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
												to: 'pe-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-64')
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
												to: 'pt-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-64')
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
												to: 'pr-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-64')
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
												to: 'pb-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-64</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-64')
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
												to: 'pl-64'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-72')
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
												to: 'p-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-72')
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
												to: 'px-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-72')
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
												to: 'py-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-72')
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
												to: 'ps-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-72')
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
												to: 'pe-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-72')
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
												to: 'pt-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-72')
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
												to: 'pr-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-72')
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
												to: 'pb-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-72</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-72')
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
												to: 'pl-72'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-80')
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
												to: 'p-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-80')
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
												to: 'px-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-80')
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
												to: 'py-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-80')
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
												to: 'ps-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-80')
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
												to: 'pe-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-80')
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
												to: 'pt-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-80')
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
												to: 'pr-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-80')
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
												to: 'pb-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-80</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-80')
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
												to: 'pl-80'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">p-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('p-96')
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
												to: 'p-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">px-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('px-96')
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
												to: 'px-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">py-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('py-96')
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
												to: 'py-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">ps-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('ps-96')
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
												to: 'ps-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pe-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pe-96')
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
												to: 'pe-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pt-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pt-96')
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
												to: 'pt-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pr-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pr-96')
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
												to: 'pr-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pb-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pb-96')
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
												to: 'pb-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div> <div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">pl-96</span>
								<input
									type="checkbox"
									checked={swCodeH?.selectedElement?.mc
										? swCodeH?.selectedElement?.mc.classes.includes('pl-96')
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
												to: 'pl-96'
											});
										}
									}}
									class="checkbox checkbox-xs checkbox-primary"
								/>
							</label>
						</div>
					</div>
				</div>