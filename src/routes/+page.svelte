<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { javascript } from '@codemirror/lang-javascript';
	import { html } from '@codemirror/lang-html';
	import { css } from '@codemirror/lang-css';
	import { oneDark } from '@codemirror/theme-one-dark';

	let contentJs = `function helloSvelteWay(){\n\tconsole.log('Hello World!')\n}`;
	let contentHtml = `<h1>Welcome to SvelteKit on SvelteWay!</h1>`;
	let contentCss = 'h1\t{\n\tfont-size: 32px\n}';
</script>

<div class="grid grid-cols-3 gap-4">
	<div class="code-house1">
		<CodeMirror bind:value={contentJs} lang={javascript()} theme={oneDark} />
	</div>
	<div class="code-house2">
		<CodeMirror bind:value={contentHtml} lang={html()} theme={oneDark} />
	</div>
	<div class="code-house3">
		<CodeMirror bind:value={contentCss} lang={css()} theme={oneDark} />
	</div>
</div>

<style>
  .code-house1 {
    resize: horizontal;
    overflow: auto;
    z-index: 30;
  }
  .code-house2 {
    resize: horizontal;
    overflow: auto;
    z-index: 20;
  }
  .code-house3 {
    resize: horizontal;
    overflow: auto;
    z-index: 15;
  }
</style>
