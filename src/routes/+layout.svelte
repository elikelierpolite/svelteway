<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte';
	import Layout from '$lib/components/Layout.svelte'

	$: isHomePage = false;
	afterUpdate(() => {
		if ($page.route.id == '/') {
			isHomePage = true;
		} else {
			isHomePage = false;
		}
	});
export let data 
const theme = JSON.parse(data.data.theme)
</script>
<Layout {data}>
<div data-theme={theme}>
	<header aria-label="Site Header" class="bg-[#1E1E20] shadow-lg">
		<div class="mx-auto flex h-16 max-w-screen-xl items-center gap-2 px-2">
			<a class="block text-teal-600" href="/">
				<span class="sr-only">Home</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 358.464 235.952"
					class="h-16 w-16"
				>
					<defs>
						<style>
							.a {
								fill: #ff3e00;
							}
							.b {
								fill: #fff;
							}
							.c {
								fill: #1273ff;
							}
							.d {
								fill: #ffd815;
							}
						</style>
						<symbol id="a" viewBox="0 0 93.224 112">
							<path
								class="a"
								d="M87.269,14.819C76.869-.066,56.328-4.478,41.477,4.984L15.4,21.608A29.921,29.921,0,0,0,1.876,41.651,31.514,31.514,0,0,0,4.984,61.882,30.006,30.006,0,0,0,.507,73.065,31.892,31.892,0,0,0,5.955,97.181c10.4,14.887,30.942,19.3,45.791,9.835L77.829,90.392A29.915,29.915,0,0,0,91.347,70.349a31.522,31.522,0,0,0-3.1-20.232,30.019,30.019,0,0,0,4.474-11.182,31.878,31.878,0,0,0-5.447-24.116"
							/>
							<path
								class="b"
								d="M38.929,98.582a20.72,20.72,0,0,1-22.237-8.243,19.176,19.176,0,0,1-3.276-14.5,18.143,18.143,0,0,1,.623-2.435l.491-1.5,1.337.981a33.633,33.633,0,0,0,10.2,5.1l.969.294-.089.968A5.844,5.844,0,0,0,28,83.122a6.24,6.24,0,0,0,6.7,2.485,5.748,5.748,0,0,0,1.6-.7L62.382,68.281a5.43,5.43,0,0,0,2.451-3.631,5.794,5.794,0,0,0-.988-4.371,6.244,6.244,0,0,0-6.7-2.487,5.755,5.755,0,0,0-1.6.7l-9.953,6.345a19.06,19.06,0,0,1-5.3,2.326,20.719,20.719,0,0,1-22.237-8.243,19.171,19.171,0,0,1-3.277-14.5A17.992,17.992,0,0,1,22.915,32.37L49,15.747a19.03,19.03,0,0,1,5.3-2.329,20.72,20.72,0,0,1,22.237,8.243,19.176,19.176,0,0,1,3.277,14.5,18.453,18.453,0,0,1-.624,2.435l-.491,1.5-1.336-.979a33.616,33.616,0,0,0-10.2-5.1l-.97-.294.09-.968a5.859,5.859,0,0,0-1.052-3.878,6.241,6.241,0,0,0-6.7-2.485,5.748,5.748,0,0,0-1.6.7L30.842,43.719a5.421,5.421,0,0,0-2.449,3.63,5.79,5.79,0,0,0,.986,4.372,6.245,6.245,0,0,0,6.7,2.487,5.773,5.773,0,0,0,1.6-.7l9.952-6.342a18.978,18.978,0,0,1,5.3-2.328,20.718,20.718,0,0,1,22.236,8.243,19.171,19.171,0,0,1,3.277,14.5,18,18,0,0,1-8.13,12.054L44.229,96.253a19.017,19.017,0,0,1-5.3,2.329"
							/>
						</symbol>
					</defs>
					<use
						width="93.224"
						height="112"
						transform="translate(34.228 29.267) scale(1.584)"
						xlink:href="#a"
					/>
				</svg>
			</a>

			<div class="flex flex-1 items-center justify-end">
				<nav aria-label="Site Nav" class="block">
					<ul class="flex items-center text-md gap-4">
						<li>
							<a
								class={`${
									isHomePage ? 'text-[#CCCCCC]' : 'text-[#FF531A]'
								} transition hover:underline hover:decoration-blue-500 hover:text-blue-500`}
								href="/docs"
							>
								Docs
							</a>
						</li>
						<li>
							<a
								class="text-[#CCCCCC] transition hover:underline hover:decoration-blue-500 hover:text-blue-500"
								href="https://www.npmjs.com/package/svelteway"
								target="_blank"
							>
								SvelteWay
							</a>
						</li>
						<li>
							<a
								class="text-[#CCCCCC] transition hover:underline hover:decoration-blue-500 hover:text-blue-500"
								href="https://github.com/elikelierpolite/svelteway"
								target="_blank"
							>
								<span class="flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-brand-github w-5 h-5"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#CCCCCC"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path
											d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
										/>
									</svg>
									GitHub
								</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<slot />
</div>

<footer
	class={`${
		!isHomePage && 'mb-16'
	} md:mb-0 footer footer-center p-4 bg-[#1E1E20] text-base-content border-y-2 border-black`}
>
	<div>
		<p>
			Released under the MIT License. Copyright © 2023 Eliekelier Polite & Svelteway Contributors
		</p>
	</div>
</footer>
</Layout>
