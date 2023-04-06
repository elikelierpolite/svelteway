<div class="alert alert-info shadow-lg mb-2 w-[896px]">
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
			>{`We use a <label tabindex="0"> instead of a <button> because Safari has a bug that prevents the button from being focused.`}</span
		>
	</div>
</div>
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
		<span>{`Using tabindex="0" is required so the dropdown mb-32 can be focused.`}</span>
	</div>
</div>

<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="dropdown mb-32">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="dropdown mb-32 mb-32-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="mb-32 dropdown mb-32-top">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="mb-32 mb-32-top dropdown mb-32-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="mb-32 dropdown mb-32-bottom">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="mb-32 mb-32-bottom dropdown mb-32-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="mb-32 dropdown mb-32-left">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="mb-32 dropdown mb-32-left mb-32-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="dropdown mb-32 mb-32-right">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="dropdown mb-32 mb-32-right mb-32-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="dropdown mb-32 mb-32-hover">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Hover</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="dropdown mb-32 mb-32-open">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Button</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul tabindex="0" class="dropdown mb-32-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 1</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Item 2</a></li>
			</ul>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="dropdown mb-32">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Click</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<div
				tabindex="0"
				class="dropdown mb-32-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
			>
				<div class="card-body">
					<h3 class="card-title">Card title!</h3>
					<p>you can use any element as a dropdown mb-32.</p>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="navbar bg-base-300 rounded-box">
			<div class="flex-1 px-2 lg:flex-none">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="text-lg font-bold">daisyUI</a>
			</div>
			<div class="flex justify-end flex-1 px-2">
				<div class="flex items-stretch">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="btn btn-ghost rounded-btn">Button</a>
					<div class="dropdown mb-32 mb-32-end">
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label tabindex="0" class="btn btn-ghost rounded-btn">dropdown mb-32</label>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<ul
							tabindex="0"
							class="menu dropdown mb-32-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
						>
							<!-- svelte-ignore a11y-missing-attribute -->
							<li><a>Item 1</a></li>
							<!-- svelte-ignore a11y-missing-attribute -->
							<li><a>Item 2</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		A normal text and a helper dropdown mb-32
		<div class="dropdown mb-32-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="w-4 h-4 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<div tabindex="0" class="card compact dropdown mb-32-content shadow bg-base-100 rounded-box w-64">
				<div class="card-body">
					<h2 class="card-title">You needed more info?</h2>
					<p>Here is a description!</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
