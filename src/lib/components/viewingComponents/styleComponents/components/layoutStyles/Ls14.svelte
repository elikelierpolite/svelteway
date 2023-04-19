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
<div class="collapse-title text-base font-medium">Clear</div>
<div class="collapse-content">
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">clear-left</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('clear-right')
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
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('clear-right')
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
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('clear-both')
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
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('clear-none')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('isolate')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('isolate-auto')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('object-contain')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('object-cover')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('object-fill')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('object-none')
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
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('object-scale-down')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-bottom')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-center')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-left')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-left-bottom')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-left-top')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-right')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-right-bottom')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-right-top')
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
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('object-top')
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