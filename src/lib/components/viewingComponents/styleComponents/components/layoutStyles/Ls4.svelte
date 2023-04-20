<script>//@ts-nocheck
    import { onMount } from 'svelte';
    import { gridAutoFlow, gridAutoColumns, gridAutoRows } from '../../../tailwind-extra'
    
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
        <div class="collapse-title text-base font-medium">Grid Auto Flow</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-flow-row</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-flow-row')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: 'grid-flow-row'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-flow-col</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-flow-col')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: 'grid-flow-col'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-flow-dense</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-flow-dense')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: 'grid-flow-dense'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-flow-row-dense</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-flow-row-dense')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: 'grid-flow-row-dense'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-flow-col-dense</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-flow-col-dense')
                                ? true
                                : false
                            : false}
                        on:change={(e) => {
                            if (!e.target.checked) {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: ''
                                });
                            } else {
                                swCodeH.selectedElement.setStylesClass({
                                    from: gridAutoFlow,
                                    to: 'grid-flow-col-dense'
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
        <div class="collapse-title text-base font-medium">Grid Auto Columns</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-cols-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-cols-auto')
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
                                    to: 'auto-cols-auto'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-cols-min</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-cols-min')
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
                                    to: 'auto-cols-min'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-cols-max</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-cols-max')
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
                                    to: 'auto-cols-max'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-cols-fr</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-cols-fr')
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
                                    to: 'auto-cols-fr'
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
        <div class="collapse-title text-base font-medium">Grid Auto Rows</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-rows-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-rows-auto')
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
                                    to: 'auto-rows-auto'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-rows-min</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-rows-min')
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
                                    to: 'auto-rows-min'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-rows-max</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-rows-max')
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
                                    to: 'auto-rows-max'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">auto-rows-fr</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('auto-rows-fr')
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
                                    to: 'auto-rows-fr'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div>
        </div>
    </div>
    