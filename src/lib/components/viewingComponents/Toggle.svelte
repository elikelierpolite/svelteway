<script>
	import { onMount } from "svelte";


    onMount(() => {
        let element = document.getElementById('my-toggle')
        if(element){
            // @ts-ignore
            element.indeterminate = true;
        }
    })
</script>
<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<input type="checkbox" class="toggle" checked />
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="form-control w-52">
			<label class="label cursor-pointer">
				<span class="label-text">Remember me</span>
				<input type="checkbox" class="toggle" checked />
			</label>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col">
			<div class="form-control w-52">
				<label class="cursor-pointer label">
					<span class="label-text">Remember me</span>
					<input type="checkbox" class="toggle toggle-primary" checked />
				</label>
			</div>
			<div class="form-control w-52">
				<label class="cursor-pointer label">
					<span class="label-text">Remember me</span>
					<input type="checkbox" class="toggle toggle-secondary" checked />
				</label>
			</div>
			<div class="form-control w-52">
				<label class="cursor-pointer label">
					<span class="label-text">Remember me</span>
					<input type="checkbox" class="toggle toggle-accent" checked />
				</label>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col items-center gap-2">
			<input type="checkbox" class="toggle toggle-success" checked />
			<input type="checkbox" class="toggle toggle-warning" checked />
			<input type="checkbox" class="toggle toggle-info" checked />
			<input type="checkbox" class="toggle toggle-error" checked />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="flex flex-col items-center gap-2">
			<input type="checkbox" class="toggle toggle-xs" checked />
			<input type="checkbox" class="toggle toggle-sm" checked />
			<input type="checkbox" class="toggle toggle-md" checked />
			<input type="checkbox" class="toggle toggle-lg" checked />
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<input type="checkbox" class="toggle" disabled />
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<input type="checkbox" class="toggle" disabled checked />
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<!-- You can make a toggle indeterminate using JS -->
		
		<input type="checkbox" class="toggle" id="my-toggle" />
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
