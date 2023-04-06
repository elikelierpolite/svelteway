<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Your Email</span>
			</label>
			<label class="input-group">
				<span>Email</span>
				<input type="text" placeholder="info@site.com" class="input input-bordered" />
			</label>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Enter amount</span>
			</label>
			<label class="input-group">
				<input type="text" placeholder="0.01" class="input input-bordered" />
				<span>BTC</span>
			</label>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Enter amount</span>
			</label>
			<label class="input-group">
				<span>Price</span>
				<input type="text" placeholder="10" class="input input-bordered" />
				<span>USD</span>
			</label>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Your Email</span>
			</label>
			<label class="input-group input-group-vertical">
				<span>Email</span>
				<input type="text" placeholder="info@site.com" class="input input-bordered" />
			</label>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col gap-4 items-center">
			<div class="form-control">
				<label class="input-group input-group-lg">
					<span>LG</span>
					<input type="text" placeholder="Type here" class="input input-bordered input-lg" />
				</label>
			</div>
			<div class="form-control">
				<label class="input-group input-group-md">
					<span>MD</span>
					<input type="text" placeholder="Type here" class="input input-bordered input-md" />
				</label>
			</div>
			<div class="form-control">
				<label class="input-group input-group-sm">
					<span>SM</span>
					<input type="text" placeholder="Type here" class="input input-bordered input-sm" />
				</label>
			</div>
			<div class="form-control">
				<label class="input-group input-group-xs">
					<span>XS</span>
					<input type="text" placeholder="Type here" class="input input-bordered input-xs" />
				</label>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control">
			<div class="input-group">
				<input type="text" placeholder="Search…" class="input input-bordered" />
				<button class="btn btn-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control">
			<div class="input-group">
				<select class="select select-bordered">
					<option disabled selected>Pick category</option>
					<option>T-shirts</option>
					<option>Mugs</option>
				</select>
				<button class="btn">Go</button>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
