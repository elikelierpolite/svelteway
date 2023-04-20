<script>//@ts-nocheckborderswCodeH.selectedElement.mc
    import { onMount } from 'svelte';
    import { padding } from '../../../tailwind-extra'
    import Spp1 from './Spp1.svelte'
    import Spp2 from './Spp2.svelte'
    import Spp3 from './Spp3.svelte'
    import Spp4 from './Spp4.svelte'
    import Spp5 from './Spp5.svelte'
    import Spp6 from './Spp6.svelte'
    import Spp7 from './Spp7.svelte'
    
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
						<Spp7 />
						 <div class="form-control">
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
                        <Spp6 />
                        <div class="form-control">
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