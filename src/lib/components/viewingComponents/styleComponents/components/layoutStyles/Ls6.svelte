<script>//@ts-nocheck
    import { onMount } from 'svelte';
    import { justifyContent, justifyItems, justifySelf, alignContent } from '../../../tailwind-extra'
    
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
<div class="collapse-title text-base font-medium">Justify Content</div>
<div class="collapse-content">
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-normal</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-normal')
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
                            to: 'justify-normal'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-start</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-start')
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
                            to: 'justify-start'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-end</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-end')
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
                            to: 'justify-end'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-center</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-center')
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
                            to: 'justify-center'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-between</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-between')
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
                            to: 'justify-between'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-around</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-around')
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
                            to: 'justify-around'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-evenly</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-evenly')
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
                            to: 'justify-evenly'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">justify-stretch</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('justify-stretch')
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
                            to: 'justify-stretch'
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
        <div class="collapse-title text-base font-medium">Justify Items</div>
        <div class="collapse-content">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">justify-items-start</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('justify-items-start')
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
                                    to: 'justify-items-start'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">justify-items-end</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('justify-items-end')
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
                                    to: 'justify-items-end'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">justify-items-center</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('justify-items-center')
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
                                    to: 'justify-items-center'
                                });
                            }
                        }}
                        class="checkbox checkbox-xs checkbox-primary"
                    />
                </label>
            </div> <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">justify-items-stretch</span>
                    <input
                        type="checkbox"
                        checked={swCodeH?.selectedElement?.mc
                            ? swCodeH?.selectedElement?.mc.classes.includes('justify-items-stretch')
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
                                    to: 'justify-items-stretch'
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
    <div class="collapse-title text-base font-medium">Justify Self</div>
    <div class="collapse-content">
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">justify-self-auto</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('justify-self-auto')
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
                                to: 'justify-self-auto'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">justify-self-start</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('justify-self-start')
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
                                to: 'justify-self-start'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">justify-self-end</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('justify-self-end')
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
                                to: 'justify-self-end'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">justify-center</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('justify-center')
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
                                to: 'justify-center'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">justify-self-center</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('justify-self-center')
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
                                to: 'justify-self-center'
                            });
                        }
                    }}
                    class="checkbox checkbox-xs checkbox-primary"
                />
            </label>
        </div> <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">justify-self-stretch</span>
                <input
                    type="checkbox"
                    checked={swCodeH?.selectedElement?.mc
                        ? swCodeH?.selectedElement?.mc.classes.includes('justify-self-stretch')
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
                                to: 'justify-self-stretch'
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
<div class="collapse-title text-base font-medium">Align Content</div>
<div class="collapse-content">
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-normal</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-normal')
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
                            to: 'content-normal'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-center</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-center')
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
                            to: 'content-center'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-start</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-start')
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
                            to: 'content-start'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-end</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-end')
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
                            to: 'content-end'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-between</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-between')
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
                            to: 'content-between'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-around</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-around')
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
                            to: 'content-around'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-evenly</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-evenly')
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
                            to: 'content-evenly'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-baseline</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-baseline')
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
                            to: 'content-baseline'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div> <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text">content-stretch</span>
            <input
                type="checkbox"
                checked={swCodeH?.selectedElement?.mc
                    ? swCodeH?.selectedElement?.mc.classes.includes('content-stretch')
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
                            to: 'content-stretch'
                        });
                    }
                }}
                class="checkbox checkbox-xs checkbox-primary"
            />
        </label>
    </div>
</div>
</div>