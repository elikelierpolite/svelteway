<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { javascript } from '@codemirror/lang-javascript';
	import { html } from '@codemirror/lang-html';
	import { css } from '@codemirror/lang-css';
    import { svelte as svelteLang } from "@replit/codemirror-lang-svelte";
	import { oneDark } from '@codemirror/theme-one-dark';
	import { fade } from 'svelte/transition';
    import { swCode } from './CodeStore';
	import { onMount } from 'svelte';

	let content = $swCode.source
</script>

<div class="grid grid-cols-3 gap-4" in:fade>
	<div class="code-house1">
		<CodeMirror bind:value={content} lang={svelteLang()}  />
	</div>
</div>

<style>
    .code-house1 {
      overflow: auto;
      width: 100vw;
    }
  </style>