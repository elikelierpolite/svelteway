<script>
	import { onMount } from 'svelte';
	import { useEffect } from '../hooks';

	let seconds = 59;
	useEffect(
		() => {
			if (seconds > 0) {
				setTimeout(() => {
					seconds--;
				}, 1000);
			} else  {
				seconds == 0
			}
		},
		() => [seconds]
	);
</script>

<div class="alert alert-info shadow-lg mb-5 w-[896px]">
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-current flex-shrink-0 w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span
			>{`You need to change to --value CSS variable using JS. Value must be a number between 0 and 99.`}</span
		>
	</div>
</div>
<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<span class="countdown">
			{#key seconds}
				<span class="cd" style={`--value:${seconds}`} />
			{/key}
		</span>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<span class="countdown font-mono text-6xl">
			<span class="cd" style={`--value:${seconds}`} />
		</span>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<span class="countdown font-mono text-2xl">
			<span style="--value:10;" />h
			<span style="--value:24;" />m
			{#key seconds}
				<span class="cd" style={`--value:${seconds}`} />s
			{/key}
		</span>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<span class="countdown font-mono text-2xl">
			<span style="--value:10;" />:
			<span style="--value:24;" />:
			{#key seconds}
				<span class="cd" style={`--value:${seconds}`} />s
			{/key}
		</span>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex gap-5">
			<div>
				<span class="countdown font-mono text-4xl">
					<span style={`--value:155`} />
				</span>
				days
			</div>
			<div>
				<span class="countdown font-mono text-4xl">
					<span style={`--value:24`} />
				</span>
				hours
			</div>
			<div>
				<span class="countdown font-mono text-4xl">
					<span style={`--value:17`} />
				</span>
				min
			</div>
			<div>
				<span class="countdown font-mono text-4xl">
					{#key seconds}
						<span class="cd" style={`--value:${seconds}`} />
					{/key}
				</span>
				sec
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div class="flex flex-col">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:15`} />
				</span>
				days
			</div>
			<div class="flex flex-col">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:24`} />
				</span>
				hours
			</div>
			<div class="flex flex-col">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:17`} />
				</span>
				min
			</div>
			<div class="flex flex-col">
				<span class="countdown font-mono text-5xl">
					{#key seconds}
						<span class="cd" style={`--value:${seconds}`} />
					{/key}
				</span>
				sec
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:15`} />
				</span>
				days
			</div>
			<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:24`} />
				</span>
				hours
			</div>
			<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span class="countdown font-mono text-5xl">
					<span style={`--value:17`} />
				</span>
				min
			</div>
			<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span class="countdown font-mono text-5xl">
					{#key seconds}
						<span style={`--value:${seconds}`} />
					{/key}
				</span>
				sec
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
