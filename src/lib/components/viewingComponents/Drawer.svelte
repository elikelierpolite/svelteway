<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="drawer">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100 text-base-content">
					<!-- Sidebar content here -->
					<li><a>Sidebar Item 1</a></li>
					<li><a>Sidebar Item 2</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="drawer drawer-mobile">
			<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col items-center justify-center">
				<!-- Page content here -->
				<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-2" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100 text-base-content">
					<!-- Sidebar content here -->
					<li><a>Sidebar Item 1</a></li>
					<li><a>Sidebar Item 2</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="drawer">
			<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				<!-- Navbar -->
				<div class="w-full navbar bg-base-300">
					<div class="flex-none lg:hidden">
						<label for="my-drawer-3" class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-6 h-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
					<div class="flex-1 px-2 mx-2">Navbar Title</div>
					<div class="flex-none hidden lg:block">
						<ul class="menu menu-horizontal">
							<!-- Navbar menu content here -->
							<li><a>Navbar Item 1</a></li>
							<li><a>Navbar Item 2</a></li>
						</ul>
					</div>
				</div>
				<!-- Page content here -->
				Content
			</div>
			<div class="drawer-side">
				<label for="my-drawer-3" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100">
					<!-- Sidebar content here -->
					<li><a>Sidebar Item 1</a></li>
					<li><a>Sidebar Item 2</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="drawer drawer-end">
			<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-4" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100 text-base-content">
					<!-- Sidebar content here -->
					<li><a>Sidebar Item 1</a></li>
					<li><a>Sidebar Item 2</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
