<script>
	import toast, { Toaster } from 'svelte-french-toast';
	let usingTypeScript = true;
	function useTypescript() {
		usingTypeScript = true;
	}
	function useJavascript() {
		usingTypeScript = false;
	}

	function copyCode() {
		const codeTs = `import type { LayoutServerLoad } from './$types';
  import { cwd } from 'process';
  import fs from 'node:fs';
  
  export const load = (async ({ route }) => {
    const currentDirectory = cwd()
    const fileToRead = route.id == '/' ? \`\${currentDirectory}/src/routes/+page.svelte\` : \`\${currentDirectory}/src/routes/\${route.id}/+page.svelte\`
    const themeFile = \`\${currentDirectory}/static/theme.txt\`
    const content = await fs.promises.readFile(fileToRead);
    const themeContent = await fs.promises.readFile(themeFile);
    return {
      data: {
        source: content.toString('utf8'),
        file: fileToRead,
        theme: JSON.stringify(themeContent.toString('utf8'))
      }
    };
  }) satisfies LayoutServerLoad;
  `;
		const codeJs = `import { cwd } from 'process';
	import fs from 'node:fs';
	
	export const load = (async ({ route }) => {
	  const currentDirectory = cwd()
	  const fileToRead = route.id == '/' ? \`\${currentDirectory}/src/routes/+page.svelte\` : \`\${currentDirectory}/src/routes/\${route.id}/+page.svelte\`
    const themeFile = \`\${currentDirectory}/static/theme.txt\`
	  const content = await fs.promises.readFile(fileToRead);
    const themeContent = await fs.promises.readFile(themeFile);
		return {
		  data: {
		  source: content.toString('utf8'),
		  file: fileToRead,
      theme: JSON.stringify(themeContent.toString('utf8'))
		}
		};
	})`;
		if (usingTypeScript) {
			navigator.clipboard.writeText(codeTs);
		} else {
			navigator.clipboard.writeText(codeJs);
		}
		toast.success('Copied!');
	}
</script>

<Toaster />
<div class="mt-2">
	<div class="tabs">
		<button on:click={useTypescript} class={`tab tab-bordered ${usingTypeScript && 'tab-active'}`}
			>Typescript</button
		>
		<button on:click={useJavascript} class={`tab tab-bordered ${!usingTypeScript && 'tab-active'}`}
			>Javascript</button
		>
	</div>
	{#if usingTypeScript}
		<span class="badge badge-ghost mt-2">{'src/routes/+layout.server.ts'}</span>
		<div class="mockup-code mt-2 bg-[#242424] relative">
			<button on:click={copyCode} class="absolute top-2 right-2 btn btn-ghost"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
					/>
				</svg>
			</button>
			<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// ...'}</span></code></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">import type</span><span class="text-[#f4cf46]"> {'{'} <span
							class="text-[#ff2f55]">LayoutServerLoad</span
						><span class="text-[#f4cf46]"> {'}'}</span><span class="text-[#cd2ebd]"> from</span
						></span
					><span class="text-[#84ff6e]"> {"'./$types'"}</span></code
				></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">import</span><span class="text-[#f4cf46]"> {'{'} <span
							class="text-[#ff2f55]">cwd</span
						><span class="text-[#f4cf46]"> {'}'}</span><span class="text-[#cd2ebd]"> from</span
						></span
					><span class="text-[#84ff6e]"> {"'process'"}</span></code
				></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">import</span><span class="text-[#ff2f55]"> fs</span><span
						class="text-[#cd2ebd]"> from</span
					><span class="text-[#84ff6e]"> {"'node:fs'"}</span></code
				></pre>
			<pre data-prefix=""><code /></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">export const</span><span class="text-[#ff7b29]"> load</span
					><span class="text-[#35b8ff]"> =</span><span class="text-[#f4cf46]"> {'('}</span><span
						class="text-[#cd2ebd]">{'async ('}</span
					><span class="text-[#4137ff]">{'{'}</span><span class=""> {'route'} </span><span
						class="text-[#4137ff]">{'}'}</span
					><span class="text-[#cd2ebd]">{')'}</span></code
				><span class="text-[#cd2ebd]"> {'=> {'}</span></pre>
			<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// ...'}</span></code></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const</span><span
						class="text-[#ff7b29]"> currentDirectory</span
					><span class="text-[#35b8ff]"> =</span><span class="text-[#35b8ff]"> cwd</span><span
						class="text-[#4137ff]">{'()'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const</span><span
						class="text-[#ff7b29]"> fileToRead</span
					><span class="text-[#35b8ff]"> =</span><span> route.<span class="text-[#ff2f55]">id</span
						><span class="text-[#35b8ff]"> ==</span><span /><span
							class="text-[#84ff6e]"> {"'/'"}</span
						><br /><span>{'       '}</span><span class="text-[#35b8ff]"> {'?'}</span><span
							class="text-[#84ff6e]"> {'`'}</span
						><span class="text-[#ff2f55]">{'${'}</span><span>currentDirectory</span><span
							class="text-[#ff2f55]">{'}'}</span
						><span class="text-[#84ff6e]">{'/src/routes/+page.svelte`'}</span></span
					></code
				></pre>
			<pre data-prefix=""><code
					><span>{' '}</span><span class="text-[#35b8ff]"> {':'}</span><span
						class="text-[#84ff6e]"> {'`'}</span
					><span class="text-[#ff2f55]">{'${'}</span><span>currentDirectory</span><span
						class="text-[#ff2f55]">{'}'}</span
					><span class="text-[#84ff6e]">{'/src/routes/'}</span><span class="text-[#ff2f55]"
						>{'${'}</span
					><span>route.</span><span class="text-[#ff2f55]">id</span><span class="text-[#ff2f55]"
						>{'}'}</span
					><span class="text-[#84ff6e]">{'/+page.svelte`'}</span></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const </span><span class="text-[#ff7b29]"
						>themeFile</span
					><span class="text-[#35b8ff]"> {'='}</span><span class="text-[#84ff6e]"> {'`'}</span><span
						class="text-[#ff2f55]">{'${'}</span
					><span>currentDirectory</span><span class="text-[#ff2f55]">{'}'}</span><span
						class="text-[#84ff6e]">{'/static/theme.txt`'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const </span><span class="text-[#ff7b29]"
						>themeContent</span
					><span class="text-[#35b8ff]"> {'='}</span><span class="text-[#cd2ebd]">{' await'}</span
					><span> {'fs.'}</span><span class="text-[#ff2f55]">{'promises'}</span><span>{'.'}</span
					><span class="text-[#35b8ff]">{'readFile('}</span><span>{'themeFile'}</span><span
						class="text-[#35b8ff]">{')'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const </span><span class="text-[#ff7b29]"
						>content</span
					><span class="text-[#35b8ff]"> {'='}</span><span class="text-[#cd2ebd]">{' await'}</span
					><span> {'fs.'}</span><span class="text-[#ff2f55]">{'promises'}</span><span>{'.'}</span
					><span class="text-[#35b8ff]">{'readFile('}</span><span>{'fileToRead'}</span><span
						class="text-[#35b8ff]">{')'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">return</span><span class="text-[#4137ff]"> {'{'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'    '}<span class="text-[#ff2f55]">data</span><span class="text-[#35b8ff]">{':'}</span
					><span class="text-[#f4cf46]"> {'{'}</span></code
				></pre>
			<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// ...'}</span></code></pre>
			<pre data-prefix=""><code
					>{'      '}<span class="text-[#ff2f55]">source</span><span class="text-[#35b8ff]"
						>{':'}</span
					><span> content.</span><span class="text-[#35b8ff]">{'toString('}</span><span
						class="text-[#84ff6e]">{"'utf8'"}</span
					><span class="text-[#35b8ff]">{')'}</span><span>{','}</span></code
				></pre>
			<pre data-prefix=""><code
					>{'      '}<span class="text-[#ff2f55]">file</span><span class="text-[#35b8ff]"
						>{':'}</span
					><span> fileToRead</span><span>{','}</span></code
				></pre>
			<pre data-prefix=""><code
					>{'      '}<span class="text-[#ff2f55]">theme</span><span class="text-[#35b8ff]"
						>{':'}</span
					><span> <span class="text-[#ff7b29]">JSON</span><span>.</span><span class="text-[#35b8ff]"
							>{'stringify('}</span
						>themeContent.</span
					><span class="text-[#35b8ff]">{'toString('}</span><span class="text-[#84ff6e]"
						>{"'utf8'"}</span
					><span class="text-[#35b8ff]">{')'}</span><span class="text-[#35b8ff]">{')'}</span></code
				></pre>
			<pre data-prefix=""><code>{'   '}<span class="text-[#f4cf46]"> {'}'}</span></code></pre>
			<pre data-prefix=""><code
					>{' '}<span class="text-[#4137ff]"> {'}'}</span><span>{';'}</span></code
				></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">{'}'}</span><span class="text-[#f4cf46]">{')'}</span><span
						class="text-[#cd2ebd]"> satisfies</span
					> <span class="text-[#f4cf46]">{'LayoutServerLoad'}</span><span>{';'}</span></code
				></pre>
		</div>
	{:else}
		<span class="badge badge-ghost mt-2">{'src/routes/+layout.server.js'}</span>
		<div class="mockup-code mt-2 bg-[#242424] relative">
			<button on:click={copyCode} class="absolute top-2 right-2 btn btn-ghost"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
					/>
				</svg>
			</button>
			<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// ...'}</span></code></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">import</span><span class="text-[#f4cf46]"> {'{'} <span
							class="text-[#ff2f55]">cwd</span
						><span class="text-[#f4cf46]"> {'}'}</span><span class="text-[#cd2ebd]"> from</span
						></span
					><span class="text-[#84ff6e]"> {"'process'"}</span></code
				></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">import</span><span class="text-[#ff2f55]"> fs</span><span
						class="text-[#cd2ebd]"> from</span
					><span class="text-[#84ff6e]"> {"'node:fs'"}</span></code
				></pre>
			<pre data-prefix=""><code /></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">export const</span><span class="text-[#ff7b29]"> load</span
					><span class="text-[#35b8ff]"> =</span><span class="text-[#f4cf46]"> {'('}</span><span
						class="text-[#cd2ebd]">{'async ('}</span
					><span class="text-[#4137ff]">{'{'}</span><span class=""> {'route'} </span><span
						class="text-[#4137ff]">{'}'}</span
					><span class="text-[#cd2ebd]">{')'}</span></code
				><span class="text-[#cd2ebd]"> {'=> {'}</span></pre>
			<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// ...'}</span></code></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const</span><span
						class="text-[#ff7b29]"> currentDirectory</span
					><span class="text-[#35b8ff]"> =</span><span class="text-[#35b8ff]"> cwd</span><span
						class="text-[#4137ff]">{'()'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const</span><span
						class="text-[#ff7b29]"> fileToRead</span
					><span class="text-[#35b8ff]"> =</span><span> route.<span class="text-[#ff2f55]">id</span
						><span class="text-[#35b8ff]"> ==</span><span /><span
							class="text-[#84ff6e]"> {"'/'"}</span
						><br /><span>{'       '}</span><span class="text-[#35b8ff]"> {'?'}</span><span
							class="text-[#84ff6e]"> {'`'}</span
						><span class="text-[#ff2f55]">{'${'}</span><span>currentDirectory</span><span
							class="text-[#ff2f55]">{'}'}</span
						><span class="text-[#84ff6e]">{'/src/routes/+page.svelte`'}</span></span
					></code
				></pre>
			<pre data-prefix=""><code
					><span>{' '}</span><span class="text-[#35b8ff]"> {':'}</span><span
						class="text-[#84ff6e]"> {'`'}</span
					><span class="text-[#ff2f55]">{'${'}</span><span>currentDirectory</span><span
						class="text-[#ff2f55]">{'}'}</span
					><span class="text-[#84ff6e]">{'/src/routes/'}</span><span class="text-[#ff2f55]"
						>{'${'}</span
					><span>route.</span><span class="text-[#ff2f55]">id</span><span class="text-[#ff2f55]"
						>{'}'}</span
					><span class="text-[#84ff6e]">{'/+page.svelte`'}</span></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const </span><span class="text-[#ff7b29]"
						>themeFile</span
					><span class="text-[#35b8ff]"> {'='}</span><span class="text-[#84ff6e]"> {'`'}</span><span
						class="text-[#ff2f55]">{'${'}</span
					><span>currentDirectory</span><span class="text-[#ff2f55]">{'}'}</span><span
						class="text-[#84ff6e]">{'/static/theme.txt`'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const </span><span class="text-[#ff7b29]"
						>themeContent</span
					><span class="text-[#35b8ff]"> {'='}</span><span class="text-[#cd2ebd]">{' await'}</span
					><span> {'fs.'}</span><span class="text-[#ff2f55]">{'promises'}</span><span>{'.'}</span
					><span class="text-[#35b8ff]">{'readFile('}</span><span>{'themeFile'}</span><span
						class="text-[#35b8ff]">{')'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">const </span><span class="text-[#ff7b29]"
						>content</span
					><span class="text-[#35b8ff]"> {'='}</span><span class="text-[#cd2ebd]">{' await'}</span
					><span> {'fs.'}</span><span class="text-[#ff2f55]">{'promises'}</span><span>{'.'}</span
					><span class="text-[#35b8ff]">{'readFile('}</span><span>{'fileToRead'}</span><span
						class="text-[#35b8ff]">{')'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'  '}<span class="text-[#cd2ebd]">return</span><span class="text-[#4137ff]"> {'{'}</span
					></code
				></pre>
			<pre data-prefix=""><code
					>{'    '}<span class="text-[#ff2f55]">data</span><span class="text-[#35b8ff]">{':'}</span
					><span class="text-[#f4cf46]"> {'{'}</span></code
				></pre>
			<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// ...'}</span></code></pre>
			<pre data-prefix=""><code
					>{'      '}<span class="text-[#ff2f55]">source</span><span class="text-[#35b8ff]"
						>{':'}</span
					><span> content.</span><span class="text-[#35b8ff]">{'toString('}</span><span
						class="text-[#84ff6e]">{"'utf8'"}</span
					><span class="text-[#35b8ff]">{')'}</span><span>{','}</span></code
				></pre>
			<pre data-prefix=""><code
					>{'      '}<span class="text-[#ff2f55]">file</span><span class="text-[#35b8ff]"
						>{':'}</span
					><span> fileToRead</span><span>{','}</span></code
				></pre>
			<pre data-prefix=""><code
					>{'      '}<span class="text-[#ff2f55]">theme</span><span class="text-[#35b8ff]"
						>{':'}</span
					><span> <span class="text-[#ff7b29]">JSON</span><span>.</span><span class="text-[#35b8ff]"
							>{'stringify('}</span
						>themeContent.</span
					><span class="text-[#35b8ff]">{'toString('}</span><span class="text-[#84ff6e]"
						>{"'utf8'"}</span
					><span class="text-[#35b8ff]">{')'}</span><span class="text-[#35b8ff]">{')'}</span></code
				></pre>
			<pre data-prefix=""><code>{'   '}<span class="text-[#f4cf46]"> {'}'}</span></code></pre>
			<pre data-prefix=""><code
					>{' '}<span class="text-[#4137ff]"> {'}'}</span><span>{';'}</span></code
				></pre>
			<pre data-prefix=""><code
					><span class="text-[#cd2ebd]">{'}'}</span><span class="text-[#f4cf46]">{')'}</span><span
						>{';'}</span
					></code
				></pre>
		</div>
	{/if}
</div>
