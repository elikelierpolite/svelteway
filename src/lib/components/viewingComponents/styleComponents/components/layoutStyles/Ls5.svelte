<script>//@ts-nocheck
    import { onMount } from 'svelte';
    import { gap } from '../../../tailwind-extra'
    
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
  <div class="collapse-title text-base font-medium">Gap</div>
  <div class="collapse-content">
      <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-0</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-0')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-0'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-0</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-0')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-0'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-0</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-0')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-0'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-px</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-px')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-px'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-px</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-px')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-px'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-px</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-px')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-px'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-0.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-0.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-0.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-0.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-0.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-0.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-0.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-0.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-0.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-1</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-1')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-1'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-1</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-1')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-1'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-1</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-1')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-1'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-1.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-1.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-1.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-1.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-1.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-1.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-1.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-1.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-1.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-2</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-2')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-2'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-2</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-2')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-2'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-2</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-2')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-2'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-2.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-2.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-2.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-2.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-2.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-2.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-2.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-2.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-2.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-3</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-3')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-3'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-3</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-3')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-3'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-3</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-3')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-3'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-3.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-3.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-3.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-3.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-3.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-3.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-3.5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-3.5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-3.5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-4</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-4')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-4'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-4</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-4')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-4'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-4</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-4')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-4'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-5</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-5')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-5'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-6</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-6')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-6'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-6</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-6')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-6'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-6</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-6')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-6'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-7</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-7')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-7'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-7</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-7')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-7'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-7</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-7')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-7'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-8</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-8')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-8'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-8</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-8')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-8'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-8</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-8')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-8'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-9</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-9')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-9'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-9</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-9')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-9'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-9</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-9')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-9'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-10</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-10')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-10'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-10</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-10')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-10'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-10</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-10')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-10'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-11</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-11')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-11'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-11</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-11')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-11'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-11</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-11')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-11'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-12</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-12')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-12'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-12</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-12')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-12'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-12</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-12')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-12'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-14</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-14')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-14'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-14</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-14')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-14'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-14</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-14')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-14'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-16</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-16')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-16'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-16</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-16')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-16'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-16</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-16')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-16'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-20</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-20')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-20'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-20</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-20')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-20'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-20</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-20')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-20'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-24</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-24')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-24'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-24</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-24')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-24'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-24</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-24')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-24'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-28</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-28')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-28'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-28</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-28')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-28'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-28</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-28')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-28'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-32</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-32')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-32'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-32</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-32')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-32'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-32</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-32')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-32'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-36</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-36')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-36'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-36</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-36')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-36'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-36</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-36')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-36'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-40</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-40')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-40'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-40</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-40')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-40'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-40</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-40')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-40'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-44</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-44')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-44'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-44</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-44')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-44'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-44</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-44')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-44'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-48</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-48')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-48'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-48</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-48')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-48'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-48</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-48')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-48'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-52</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-52')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-52'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-52</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-52')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-52'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-52</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-52')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-52'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-56</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-56')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-56'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-56</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-56')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-56'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-56</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-56')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-56'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-60</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-60')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-60'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-60</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-60')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-60'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-60</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-60')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-60'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-64</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-64')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-64'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-64</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-64')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-64'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-64</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-64')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-64'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-72</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-72')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-72'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-72</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-72')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-72'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-72</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-72')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-72'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-80</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-80')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-80'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-80</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-80')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-80'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-80</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-80')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-80'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-96</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-96')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-96'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-x-96</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-x-96')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-x-96'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div> <div class="form-control">
          <label class="label cursor-pointer">
              <span class="label-text">gap-y-96</span>
              <input
                  type="checkbox"
                  checked={swCodeH?.selectedElement?.mc
                      ? swCodeH?.selectedElement?.mc.classes.includes('gap-y-96')
                          ? true
                          : false
                      : false}
                  on:change={(e) => {
                      if (!e.target.checked) {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: ''
                          });
                      } else {
                          swCodeH.selectedElement.setStylesClass({
                              from: gap,
                              to: 'gap-y-96'
                          });
                      }
                  }}
                  class="checkbox checkbox-xs checkbox-primary"
              />
          </label>
      </div>
  </div>
</div>