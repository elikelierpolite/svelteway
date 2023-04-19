<script>//@ts-nocheck
	import { onMount } from 'svelte';
	let swCode
	let cvElement
	onMount(async () => {
		const { swCode:swCode2, cvElement:cvElement2 } = await import('../CodeStore')
		swCode = swCode2
		cvElement = cvElement2
	})
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('carousel1', {
			swElementDataAttrId: sweid,
			classes: ['', 'carousel', 'rounded-box'],
			item1ImgSrc: 'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
			item2ImgSrc: 'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
			item3ImgSrc: 'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
			item4ImgSrc: 'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
			item5ImgSrc: 'https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
			item6ImgSrc: 'https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
			item7ImgSrc: 'https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
			helper: {
				on: false,
				type: 'tooltip',
				classes: ['tooltip'],
				title: 'Hello World!'
			}
		});
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
</script>

<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="w-full grid content-center justify-center" on:click={addComponent}>
			<div class="carousel rounded-box">
				<div class="carousel-item">
					<img
						src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
						alt="Burger"
					/>
				</div>
				<div class="carousel-item">
					<img
						src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
						alt="Burger"
					/>
				</div>
				<div class="carousel-item">
					<img
						src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
						alt="Burger"
					/>
				</div>
				<div class="carousel-item">
					<img
						src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
						alt="Burger"
					/>
				</div>
				<div class="carousel-item">
					<img
						src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
						alt="Burger"
					/>
				</div>
				<div class="carousel-item">
					<img
						src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
						alt="Burger"
					/>
				</div>
				<div class="carousel-item">
					<img
						src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
						alt="Burger"
					/>
				</div>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="carousel carousel-center rounded-box">
			<div class="carousel-item">
				<img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
					alt="Pizza"
				/>
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
					alt="Pizza"
				/>
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
					alt="Pizza"
				/>
			</div>
			<div class="carousel-item">
				<img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
			</div>
			<div class="carousel-item">
				<img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
					alt="Pizza"
				/>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="carousel carousel-end rounded-box">
			<div class="carousel-item">
				<img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
					alt="Drink"
				/>
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
					alt="Drink"
				/>
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
					alt="Drink"
				/>
			</div>
			<div class="carousel-item">
				<img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
			</div>
			<div class="carousel-item">
				<img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
			</div>
			<div class="carousel-item">
				<img
					src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
					alt="Drink"
				/>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="w-64 carousel rounded-box">
			<div class="carousel-item w-full">
				<img
					src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
					class="w-full"
					alt="Tailwind CSS Carousel component"
				/>
			</div>
			<div class="carousel-item w-full">
				<img
					src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
					class="w-full"
					alt="Tailwind CSS Carousel component"
				/>
			</div>
			<div class="carousel-item w-full">
				<img
					src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
					class="w-full"
					alt="Tailwind CSS Carousel component"
				/>
			</div>
			<div class="carousel-item w-full">
				<img
					src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
					class="w-full"
					alt="Tailwind CSS Carousel component"
				/>
			</div>
			<div class="carousel-item w-full">
				<img
					src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
					class="w-full"
					alt="Tailwind CSS Carousel component"
				/>
			</div>
			<div class="carousel-item w-full">
				<img
					src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
					class="w-full"
					alt="Tailwind CSS Carousel component"
				/>
			</div>
			<div class="carousel-item w-full">
				<img
					src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
					class="w-full"
					alt="Tailwind CSS Carousel component"
				/>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="h-96 carousel carousel-vertical rounded-box">
			<div class="carousel-item h-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
			</div>
			<div class="carousel-item h-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
			</div>
			<div class="carousel-item h-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
			</div>
			<div class="carousel-item h-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
			</div>
			<div class="carousel-item h-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
			</div>
			<div class="carousel-item h-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
			</div>
			<div class="carousel-item h-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="carousel rounded-box w-96">
			<div class="carousel-item w-1/2">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
					class="w-full"
				/>
			</div>
			<div class="carousel-item w-1/2">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
					class="w-full"
				/>
			</div>
			<div class="carousel-item w-1/2">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
					class="w-full"
				/>
			</div>
			<div class="carousel-item w-1/2">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
					class="w-full"
				/>
			</div>
			<div class="carousel-item w-1/2">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
					class="w-full"
				/>
			</div>
			<div class="carousel-item w-1/2">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
					class="w-full"
				/>
			</div>
			<div class="carousel-item w-1/2">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
					class="w-full"
				/>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
			<div class="carousel-item">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
					class="rounded-box"
				/>
			</div>
			<div class="carousel-item">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
					class="rounded-box"
				/>
			</div>
			<div class="carousel-item">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
					class="rounded-box"
				/>
			</div>
			<div class="carousel-item">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
					class="rounded-box"
				/>
			</div>
			<div class="carousel-item">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
					class="rounded-box"
				/>
			</div>
			<div class="carousel-item">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
					class="rounded-box"
				/>
			</div>
			<div class="carousel-item">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
					class="rounded-box"
				/>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="carousel w-full">
			<div id="item1" class="carousel-item w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
					class="w-full"
				/>
			</div>
			<div id="item2" class="carousel-item w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
					class="w-full"
				/>
			</div>
			<div id="item3" class="carousel-item w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
					class="w-full"
				/>
			</div>
			<div id="item4" class="carousel-item w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
					class="w-full"
				/>
			</div>
		</div>
		<div class="flex justify-center w-full py-2 gap-2">
			<a href="#item1" class="btn btn-xs">1</a>
			<a href="#item2" class="btn btn-xs">2</a>
			<a href="#item3" class="btn btn-xs">3</a>
			<a href="#item4" class="btn btn-xs">4</a>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="carousel w-full">
			<div id="slide1" class="carousel-item relative w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
					class="w-full"
				/>
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide4" class="btn btn-circle">❮</a>
					<a href="#slide2" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide2" class="carousel-item relative w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
					class="w-full"
				/>
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide1" class="btn btn-circle">❮</a>
					<a href="#slide3" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide3" class="carousel-item relative w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
					class="w-full"
				/>
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide2" class="btn btn-circle">❮</a>
					<a href="#slide4" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide4" class="carousel-item relative w-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
					class="w-full"
				/>
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide3" class="btn btn-circle">❮</a>
					<a href="#slide1" class="btn btn-circle">❯</a>
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
