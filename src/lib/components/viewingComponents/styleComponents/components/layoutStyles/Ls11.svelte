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
        <div class="collapse-title text-base font-medium">Break After</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">break-after-auto</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-auto')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-avoid')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-all')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-avoid-page')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-page')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-left')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-right')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('break-after-column')
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