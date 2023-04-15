<script>
	import LayoutCodeComponent from './LayoutCodeComponent.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	function copyCode() {
		toast.success('Copied!');
	}
</script>

<svelte:head>
	<title>Svelteway | Installation</title>
</svelte:head>

<Toaster />
<div class="w-full">
	<div class="grid grid-cols-1 justify-between md:grid-cols-4">
		<div class="col-span-3 w-full max-w-full">
			<h1 class="mt-5 text-5xl font-extrabold sm:text-5xl">Installation</h1>
			<h1 class="text-xl sm:text-xl mt-10">
				The easiest way to start building a SvelteWay app is to run npm create:
			</h1>
			<div class="mockup-code mt-2 bg-[#242424]">
				<pre data-prefix="$"><code
						><span class="text-[#EAB095]">npm</span> create svelteway@latest my-app</code
					></pre>
				<pre data-prefix="$"><code><span class="text-[#EAB095]">cd</span> my-app</code></pre>
				<pre data-prefix="$"><code><span class="text-[#EAB095]">npm install</span></code></pre>
				<pre data-prefix="$"><code><span class="text-[#EAB095]">npm</span> run dev</code></pre>
			</div>
			<h1 class="text-2xl sm:text-2xl mt-10">Manual Setup</h1>
			<div class="divider" />
			<div>
				<p class="text-lg">Setup SvelteWay on your existing SvelteKit application.</p>
			</div>
			<div class="mockup-code mt-2 bg-[#242424]">
				<pre data-prefix="$"><code
						><span class="text-[#EAB095]">npm</span> install -D svelteway</code
					></pre>
			</div>
			<div class="mt-2">
				<p class="text-lg flex gap-2 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#FF531A"
						class="w-4 h-4 mt-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
						/>
					</svg>
					Make sure you have configured
					<span class="text-[#FF531A]"
						><a href="https://tailwindcss.com/docs/guides/sveltekit" target="_blank">Tailwind CSS</a
						></span
					>
					and
					<span class="text-[#FF531A]"
						><a href="https://daisyui.com/docs/install/" target="_blank">Daisy UI</a></span
					> on your project.
				</p>
			</div>
			<LayoutCodeComponent />
			<span class="badge badge-ghost mt-2">{'src/routes/+layout.svelte'}</span>
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
				<pre data-prefix=""><code
						><span>{'<'}</span><span class="text-[#cd2ebd]">{'script'}</span><span>{'>'}</span
						></code
					></pre>
				<pre data-prefix=""><code
						><span>{'	'}</span><span class="text-[#6b6b6b]">{'// ...'}</span></code
					></pre>
				<pre data-prefix=""><code
						><span>{'	'}</span><span class="text-[#cd2ebd]">import</span><span
							class="text-[#f4cf46]"> {'{'} <span class="text-[#ff2f55]">Layout</span><span
								class="text-[#f4cf46]"> {'}'}</span
							><span class="text-[#cd2ebd]"> from</span></span
						><span class="text-[#84ff6e]"> {"'svelteway'"}</span></code
					></pre>
				<pre data-prefix=""><code
						><span>{'	'}</span><span class="text-[#cd2ebd]">export let</span><span
							class="text-[#ff7b29]"> data</span
						><span>{';'}</span></code
					></pre>
				<pre data-prefix=""><code
						><span>{'</'}</span><span class="text-[#cd2ebd]">{'script'}</span><span>{'>'}</span
						></code
					></pre>
				<pre data-prefix=""><code><span class="text-[#6b6b6b]">{''}</span></code></pre>
				<pre data-prefix=""><code
						><span>{'<'}</span><span class="text-[#f4cf46]">{'Layout'}</span><span
							class="text-[#f4cf46]"> {'{'}</span
						><span>data</span><span class="text-[#f4cf46]">{'}'}</span><span>{'>'}</span></code
					></pre>
				<pre data-prefix=""><code
						><span>{'	'}</span><span class="text-[#6b6b6b]">{'// ...'}</span></code
					></pre>
				<pre data-prefix=""><code
						><span>{'	'}</span><span>{'<'}</span><span class="text-[#cd2ebd]">{'slot'}</span><span
							>{' />'}</span
						></code
					></pre>
				<pre data-prefix=""><code
						><span>{'</'}</span><span class="text-[#f4cf46]">{'Layout'}</span><span>{'>'}</span
						></code
					></pre>
			</div>
			<span class="badge badge-ghost mt-2">{'package.json'}</span>
			<div class="mockup-code mt-2 bg-[#242424]">
				<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// Update scripts'}</span></code
					></pre>
				<pre data-prefix=""><code
						><span class="text-[#ff2f55]">{'"dev"'}</span><span>{':'}</span><span
							class="text-[#84ff6e]"> {'"svelteway dev && vite dev"'}</span
						><span>{','}</span></code
					></pre>
				<pre data-prefix=""><code
						><span class="text-[#ff2f55]">{'"build"'}</span><span>{':'}</span><span
							class="text-[#84ff6e]"> {'"svelteway build && vite build"'}</span
						></code
					></pre>
				<pre data-prefix=""><code><span class="text-[#6b6b6b]">{'// ...'}</span></code></pre>
			</div>
			<div class="grid content-end justify-end mt-5 mb-10 md:mb-0">
				<a href="/docs/usage" class="btn gap-1">
					<svg
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
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>

					Usage</a
				>
			</div>
		</div>
		<div class="hidden md:block">
			<ul data-theme="swtheme" class="menu bg-[#1A1A1A] w-56">
				<li class="bordered"><a>Create SvelteWay</a></li>
				<li><a>Manual Setup</a></li>
			</ul>
		</div>
	</div>
</div>
