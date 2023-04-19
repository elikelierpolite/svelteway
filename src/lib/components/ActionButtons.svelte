<script>//@ts-nocheck
	import { page } from "$app/stores";
	import axios from "axios";
	import toast, { Toaster } from 'svelte-french-toast';
	function saveTheme(theme) {
		let bodyFormData = new FormData();
		bodyFormData.append('theme', theme);
		bodyFormData.append('redirectTo', $page.route.id);
		axios({
			method: 'post',
			url: '/api/svelteway?/theme',
			data: bodyFormData,
			headers: { 'Content-Type': 'multipart/form-data' }
		});
		toast.success('Theme Saved!');
		window.location.reload()
	}
</script>

<Toaster />
<div class="mx-2 flex items-center self-start text-white h-full w-[30px]">
	<div class="flex flex-col gap-1">
		<div class="tooltip tooltip-right" data-tip="Components">
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
		</div>
		<div class="dropdown dropdown-right">
			<div class="tooltip tooltip-right" data-tip="Theme">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-circle btn-outline btn-sm">
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
							d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
						/>
					</svg>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-y-scroll max-h-[50vh]">
					<div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
						<button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="light"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('light')}
							><div
								data-theme="light"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">light</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="dark"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('dark')}
							><div
								data-theme="dark"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">dark</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="cupcake"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('cupcake')}
							><div
								data-theme="cupcake"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">cupcake</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="bumblebee"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('bumblebee')}
							><div
								data-theme="bumblebee"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">bumblebee</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="emerald"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('emerald')}
							><div
								data-theme="emerald"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">emerald</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left [&amp;_svg]:visible"
							data-set-theme="corporate"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('corporate')}
							><div
								data-theme="corporate"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">corporate</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="synthwave"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('synthwave')}
							><div
								data-theme="synthwave"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">synthwave</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="retro"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('retro')}
							><div
								data-theme="retro"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">retro</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="cyberpunk"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('cyberpunk')}
							><div
								data-theme="cyberpunk"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">cyberpunk</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="valentine"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('valentine')}
							><div
								data-theme="valentine"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">valentine</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="halloween"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('halloween')}
							><div
								data-theme="halloween"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">halloween</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="garden"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('garden')}
							><div
								data-theme="garden"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">garden</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="forest"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('forest')}
							><div
								data-theme="forest"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">forest</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="aqua"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('aqua')}
							><div
								data-theme="aqua"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">aqua</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="lofi"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('lofi')}
							><div
								data-theme="lofi"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">lofi</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="pastel"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('pastel')}
							><div
								data-theme="pastel"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">pastel</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="fantasy"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('fantasy')}
							><div
								data-theme="fantasy"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">fantasy</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="wireframe"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('wireframe')}
							><div
								data-theme="wireframe"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">wireframe</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="black"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('black')}
							><div
								data-theme="black"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">black</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="luxury"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('luxury')}
							><div
								data-theme="luxury"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">luxury</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="dracula"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('dracula')}
							><div
								data-theme="dracula"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">dracula</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="cmyk"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('cmyk')}
							><div
								data-theme="cmyk"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">cmyk</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="autumn"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('autumn')}
							><div
								data-theme="autumn"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">autumn</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="business"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('business')}
							><div
								data-theme="business"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">business</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="acid"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('acid')}
							><div
								data-theme="acid"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">acid</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="lemonade"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('lemonade')}
							><div
								data-theme="lemonade"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">lemonade</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="night"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('night')}
							><div
								data-theme="night"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">night</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="coffee"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('coffee')}
							><div
								data-theme="coffee"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">coffee</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						><button
							class="outline-base-content overflow-hidden rounded-lg text-left"
							data-set-theme="winter"
							data-act-class="[&amp;_svg]:visible"
							on:click={() => saveTheme('winter')}
							><div
								data-theme="winter"
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="w-3 h-3 invisible"
											><path
												d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
											/></svg
										>
										<div class="flex-grow text-sm font-bold">winter</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div></button
						>
					</div>
				</ul>
			</div>
		</div>
	</div>
</div>
