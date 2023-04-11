<div class="drawer drawer-mobile bg-[#1A1A1A]">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-[#1A1A1A] flex flex-col w-full m-5 mt-10">
		<slot />
		<div class="btm-nav mt-5 lg:hidden bg-[#1E1E20]">
			<label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden sticky bottom-5 left-2"
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
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</label>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 text-base-content bg-[#1E1E1E]">
			<!-- Sidebar content here -->
			<li><a class="btn-ghost" href="">Introduction</a></li>
			<li><a class="btn-ghost" href="">Installation</a></li>
			<li><a class="btn-ghost" href="">Usage</a></li>
		</ul>
	</div>
</div>
