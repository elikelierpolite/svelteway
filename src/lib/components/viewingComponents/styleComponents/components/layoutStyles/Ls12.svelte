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
        <div class="collapse-title text-base font-medium">Break Before</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">break-before-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-auto')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-avoid')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-all')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-avoid-page')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-page')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-left')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-right')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-before-column')
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