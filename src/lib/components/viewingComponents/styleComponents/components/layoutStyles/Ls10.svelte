<script>//@ts-nocheck
    import { onMount } from 'svelte';
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
        <div class="collapse-title text-base font-medium">Columns</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">columns-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-1')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-2')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-3')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-4')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-5')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-6')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-7')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-8')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-9')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-10')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-11')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-12')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-auto')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-3xs')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-2xs')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-xs')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-sm')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-md')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-lg')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-xl')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-2xl')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-3xl')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-4xl')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-5xl')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-6xl')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('columns-7xl')
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