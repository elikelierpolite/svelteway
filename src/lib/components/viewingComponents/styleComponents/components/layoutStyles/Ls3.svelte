<script>//@ts-nocheck
    import { onMount } from 'svelte';
    import { gridTemplateColumns, gridColumnsStartEnd } from '../../../tailwind-extra'
    
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
        <div class="collapse-title text-base font-medium">Grid Template Columns</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-1</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-1')
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
                                    to: 'grid-cols-1'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-2</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-2')
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
                                    to: 'grid-cols-2'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-3</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-3')
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
                                    to: 'grid-cols-3'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-4</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-4')
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
                                    to: 'grid-cols-4'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-5</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-5')
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
                                    to: 'grid-cols-5'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-6</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-6')
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
                                    to: 'grid-cols-6'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-7</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-7')
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
                                    to: 'grid-cols-7'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-8</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-8')
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
                                    to: 'grid-cols-8'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-9</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-9')
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
                                    to: 'grid-cols-9'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-10</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-10')
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
                                    to: 'grid-cols-10'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-11</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-11')
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
                                    to: 'grid-cols-11'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-12</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-12')
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
                                    to: 'grid-cols-12'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">grid-cols-none</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('grid-cols-none')
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
                                    to: 'grid-cols-none'
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
    <div class="collapse-title text-base font-medium">Grid Columns Start / End</div>
    <div class="collapse-content">
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-auto</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-auto')
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
                                to: 'col-auto'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-1</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-1')
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
                                to: 'col-span-1'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-2</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-2')
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
                                to: 'col-span-2'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-3</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-3')
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
                                to: 'col-span-3'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-4</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-4')
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
                                to: 'col-span-4'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-5</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-5')
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
                                to: 'col-span-5'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-6</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-6')
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
                                to: 'col-span-6'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-7</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-7')
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
                                to: 'col-span-7'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-8</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-8')
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
                                to: 'col-span-8'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-9</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-9')
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
                                to: 'col-span-9'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-10</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-10')
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
                                to: 'col-span-10'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-11</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-11')
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
                                to: 'col-span-11'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-12</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-12')
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
                                to: 'col-span-12'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-span-fullcol-start-1</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-span-fullcol-start-1')
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
                                to: 'col-span-fullcol-start-1'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-2</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-2')
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
                                to: 'col-start-2'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-3</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-3')
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
                                to: 'col-start-3'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-4</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-4')
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
                                to: 'col-start-4'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-5</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-5')
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
                                to: 'col-start-5'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-6</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-6')
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
                                to: 'col-start-6'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-7</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-7')
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
                                to: 'col-start-7'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-8</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-8')
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
                                to: 'col-start-8'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-9</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-9')
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
                                to: 'col-start-9'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-10</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-10')
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
                                to: 'col-start-10'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-11</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-11')
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
                                to: 'col-start-11'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-12</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-12')
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
                                to: 'col-start-12'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-13</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-13')
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
                                to: 'col-start-13'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-start-auto</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-start-auto')
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
                                to: 'col-start-auto'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-1</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-1')
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
                                to: 'col-end-1'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-2</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-2')
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
                                to: 'col-end-2'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-3</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-3')
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
                                to: 'col-end-3'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-4</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-4')
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
                                to: 'col-end-4'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-5</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-5')
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
                                to: 'col-end-5'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-6</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-6')
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
                                to: 'col-end-6'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-7</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-7')
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
                                to: 'col-end-7'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-8</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-8')
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
                                to: 'col-end-8'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-9</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-9')
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
                                to: 'col-end-9'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-10</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-10')
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
                                to: 'col-end-10'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-11</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-11')
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
                                to: 'col-end-11'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-12</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-12')
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
                                to: 'col-end-12'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-13</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-13')
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
                                to: 'col-end-13'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">col-end-auto</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('col-end-auto')
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
                                to: 'col-end-auto'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div>
    </div>
</div>