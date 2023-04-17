<script>
	import ComponentsToSelect from './ComponentsToSelect.svelte';
</script>

<svelte:head>
	<title>Svelteway | Usage</title>
</svelte:head>

<div class="w-full">
	<div class="grid grid-cols-1 justify-between md:grid-cols-4">
		<div class="col-span-3 w-full max-w-full">
			<h1 class="mt-5 text-5xl font-extrabold sm:text-5xl">Usage</h1>
			<h1 class="text-xl sm:text-xl mt-10">
				Once you installed <a href="/docs/installation" class="text-[#FF531A]">svelteway</a>, you
				can:
			</h1>
			<div class="divider" />
			<h1 class="text-lg sm:text-lg mt-2">1.</h1>
			<div class="mockup-code mt-2 bg-[#242424]">
				<pre data-prefix="$"><code><span class="text-[#EAB095]">npm</span> run dev -- --open</code
					></pre>
			</div>
			<h1 class="text-lg sm:text-lg mt-2">
				You can now use the visual editor to add & customise components into your pages.
			</h1>
			<div class="divider" />
			<div class="mt-2">
				<p class="text-lg flex gap-2 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#FF531A"
						class="w-7 h-7 mt-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
						/>
					</svg>
					<span class="mt-2">Only the first component is available to add to the Canvas in most component categories {'(Currently)'}, All Components will be available on the next release. </span>
				</p>
			</div>
			<h1 class="text-lg sm:text-lg mt-2">2.</h1>
			<div class="mt-2">
				<div class="flex gap-2">
					<h1 class="text-lg sm:text-lg">This button</h1>
					<label class="btn btn-circle btn-outline btn-sm" for="selct-component-modal">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M14 3v4a1 1 0 0 0 1 1h4" />
							<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
							<path d="M10 13l-1 2l1 2" />
							<path d="M14 13l1 2l-1 2" />
						</svg>
					</label>
					<h1 class="text-lg sm:text-lg">Opens the component selector</h1>
				</div>
				<ComponentsToSelect />
			</div>
			<div class="divider" />
			<h1 class="text-lg sm:text-lg mt-2">3.</h1>
			<div class="mt-2">
				<div class="flex gap-2">
					<h1 class="text-lg sm:text-lg">This button</h1>
					<label class="btn btn-circle btn-outline btn-sm" for="selct-component-modal">
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
								d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</label>
					<h1 class="text-lg sm:text-lg">
						Opens the component toolbar to customise it's styles, layout and components SVG.
					</h1>
				</div>
			</div>
			<div class="divider" />
			<h1 class="text-lg sm:text-lg mt-2">4.</h1>
			<div class="mt-2">
				<div class="flex gap-2">
					<h1 class="text-lg sm:text-lg">This button</h1>
					<label class="btn btn-circle btn-outline btn-sm" for="selct-component-modal">
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
								d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
							/>
						</svg>
					</label>
					<h1 class="text-lg sm:text-lg">Duplicates the selected component into the canvas.</h1>
				</div>
			</div>
			<div class="divider" />
			<h1 class="text-lg sm:text-lg mt-2">5.</h1>
			<div class="mt-2">
				<div class="flex gap-2">
					<h1 class="text-lg sm:text-lg">This button</h1>
					<label class="btn btn-circle btn-outline btn-sm" for="selct-component-modal">
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
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</label>
					<h1 class="text-lg sm:text-lg">Removes the selected component off the canvas.</h1>
				</div>
			</div>
			<div class="divider" />
			<h1 class="text-lg sm:text-lg mt-2">6. Finally when you're done editing your page's UI</h1>
			<div class="mt-2">
				<kbd class="kbd bg-[#242424]">ctrl</kbd>
				+
				<kbd class="kbd bg-[#242424]">shift</kbd>
				+
				<kbd class="kbd bg-[#242424]">s</kbd>
			</div>
			<h1 class="text-lg sm:text-lg mt-2 mb-5">To save your changes.</h1>
		</div>
		<div class="hidden md:block">
			<ul data-theme="swtheme" class="menu bg-[#1A1A1A] w-56">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li class="bordered"><a>Usage</a></li>
			</ul>
		</div>
	</div>
</div>
