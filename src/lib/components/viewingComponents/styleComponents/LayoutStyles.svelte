<script>//@ts-nocheck
import { onMount } from 'svelte';
import Ls1 from './components/layoutStyles/Ls1.svelte'
import Ls2 from './components/layoutStyles/Ls2.svelte'
import Ls3 from './components/layoutStyles/Ls3.svelte'
import Ls4 from './components/layoutStyles/Ls4.svelte'
import Ls5 from './components/layoutStyles/Ls5.svelte'
import Ls6 from './components/layoutStyles/Ls6.svelte'
import Ls7 from './components/layoutStyles/Ls7.svelte'
import Ls8 from './components/layoutStyles/Ls8.svelte'
import Ls9 from './components/layoutStyles/Ls9.svelte'
import Ls10 from './components/layoutStyles/Ls10.svelte'
import Ls11 from './components/layoutStyles/Ls11.svelte'
import Ls12 from './components/layoutStyles/Ls12.svelte'
import Ls13 from './components/layoutStyles/Ls13.svelte'
import Ls14 from './components/layoutStyles/Ls14.svelte'

	let swCode
	onMount(async () => {
		const { swCode:swCode2 } = await import('../../CodeStore')
		swCode = swCode2
	})

	$: swCodeH = $swCode;
</script>

{#if swCodeH?.selectedElement?.mc}
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
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
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
<Ls10 />
    <Ls11 />
    <Ls12 />
    <Ls13 />
    <Ls14 />
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
    <Ls9 />
    <Ls1 />
    <Ls2 />
    <Ls3 />
    <Ls4 />
    <Ls5 />
    <Ls6 />
    <Ls7 />
    <Ls8 />
    </div>
</div>
{/if}