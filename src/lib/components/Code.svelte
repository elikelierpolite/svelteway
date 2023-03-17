<script lang="ts">
	import './app.css';
	import type monaco from 'monaco-editor';
	import { onMount } from 'svelte';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
	import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
	import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

	let divEl: HTMLDivElement = null;
	let divEl2: HTMLDivElement = null;
	let divEl3: HTMLDivElement = null;
	let editor: monaco.editor.IStandaloneCodeEditor;
	let Monaco;

	onMount(async () => {
		// @ts-ignore
		self.MonacoEnvironment = {
			getWorker: function (_moduleId: any, label: string) {
				if (label === 'json') {
					return new jsonWorker();
				}
				if (label === 'css' || label === 'scss' || label === 'less') {
					return new cssWorker();
				}
				if (label === 'html' || label === 'handlebars' || label === 'razor') {
					return new htmlWorker();
				}
				if (label === 'typescript' || label === 'javascript') {
					return new tsWorker();
				}
				return new editorWorker();
			}
		};

		Monaco = await import('monaco-editor');
		editor = Monaco.editor.create(divEl, {
			value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
			language: 'javascript',
			automaticLayout: true,
			theme: 'vs-dark' // this, this line here! (other default options are: 'vs' and 'hc-black')
		});
		editor = Monaco.editor.create(divEl2, {
			value: ['<h1>Hello SvelteWay!</h1>'].join('\n'),
			language: 'html',
			automaticLayout: true,
			theme: 'vs-dark' // this, this line here! (other default options are: 'vs' and 'hc-black')
		});
		editor = Monaco.editor.create(divEl3, {
			value: [
				`h1 {\n\tfont-weight: bold;\n\tfont-size: 48px;\n\tfont-family: sans-serif;\n}`
			].join('\n'),
			language: 'css',
			automaticLayout: true,
			theme: 'vs-dark' // this, this line here! (other default options are: 'vs' and 'hc-black')
		});

		return () => {
			editor.dispose();
		};
	});
</script>

<div>
	<div class="code-container">
		<div bind:this={divEl} class="h-screen" />
		<div bind:this={divEl2} class="h-screen2" />
		<div bind:this={divEl3} class="h-screen3" />
	</div>
	<button class="btn btn-secondary">SAVE</button>
</div>

<style>
	.code-container {
		display: flex;
		min-width: 100vw !important;
	}
	.h-screen {
		height: 90vh;
		width: 33vw;
	}
	.h-screen2 {
		height: 90vh;
		width: 33vw;
	}
	.h-screen3 {
		height: 90vh;
		width: 33vw;
	}
</style>
