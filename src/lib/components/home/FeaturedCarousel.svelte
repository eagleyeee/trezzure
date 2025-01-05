<script lang="ts">
	import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import product1 from '$lib/assets/images/featured-products/product-1.jpg';
	import product2 from '$lib/assets/images/featured-products/product-2.jpg';
	import product3 from '$lib/assets/images/featured-products/product-3.jpg';
	import product4 from '$lib/assets/images/featured-products/product-4.jpg';
	import product5 from '$lib/assets/images/featured-products/product-5.jpg';
	import product6 from '$lib/assets/images/featured-products/product-6.jpg';

	const featuredProducts = [
		{ id: 1, name: 'Deco Chair', price: '240', image: product1, onSale: false, newLaunched: false },
		{
			id: 2,
			name: 'Pottery Vase',
			price: '80',
			image: product2,
			onSale: false,
			newLaunched: false
		},
		{
			id: 3,
			name: 'Holdback Lamp',
			price: '160',
			image: product3,
			onSale: true,
			onSalePrice: '125',
			newLaunched: false
		},
		{
			id: 4,
			name: 'Rose Teapot',
			price: '140',
			image: product4,
			onSale: false,
			newLaunched: false
		},
		{ id: 5, name: 'Wall Clock', price: '120', image: product5, onSale: false, newLaunched: true },
		{
			id: 6,
			name: 'Flower Vase',
			price: '125',
			image: product6,
			onSale: true,
			onSalePrice: '95',
			newLaunched: true
		}
	];
</script>

<!--Featured Product Carousel Section-->
<section>
	<div class="pb-16">
		<Splide
			options={{
				rewind: true,
				autoplay: false,
				type: 'loop',
				pagination: false,
				perPage: 3,
				perMove: 3,
				speed: 1200,
				flickMaxPages: 1,
				arrows: true,
				gap: '30px'
			}}
			hasTrack={false}
		>
			<div class="relative flex flex-row justify-between">
				<h6 class="mt-5 font-bold text-secondary">Featured Items</h6>
				<div class="splide__arrows absolute right-0 mt-[15px] flex h-6 w-12 flex-row">
					<button
						class="splide__arrow splide__arrow--prev arrow-override"
						aria-label="control-left"
					>
						<span class="icon-[hugeicons--arrow-left-01]"></span>
					</button>
					<button
						class="splide__arrow splide__arrow--next arrow-override"
						aria-label="control-right"
					>
						<span class="icon-[hugeicons--arrow-right-01]"></span>
					</button>
				</div>
			</div>
			<div class="mt-[25px] w-full overflow-hidden">
				<div class="block gap-[30px]">
					<!--screenSize < 768 ? 1 : 3,-->
					<SplideTrack>
						{#each featuredProducts as product}
							<SplideSlide>
								<div class="group/featured-carousel flex w-full flex-col">
									<div class="flex w-full">
										<a href="/" class="relative flex size-full overflow-hidden">
											<img src={product.image} alt={product.name} class="w-full" />
											<div class="absolute inset-0 flex size-full flex-col justify-between">
												<div class="flex w-full flex-row justify-between px-5 py-[15px]">
													<span
														class="text-center font-montserrat text-xs uppercase leading-6 tracking-[1px] text-primary"
														>{product.newLaunched === true ? 'New' : ''}</span
													>
													<span
														class="text-center font-montserrat text-xs uppercase leading-6 tracking-[1px] text-primary"
														>{product.onSale === true ? '-19%' : ''}</span
													>
												</div>

												<button
													aria-label="add-to-favourite"
													class="size-8 translate-y-[32px] bg-[#555] py-[6px] opacity-0 transition-all duration-[0.3s] ease-in-out group-hover/featured-carousel:translate-y-0 group-hover/featured-carousel:opacity-100 hover:bg-primary"
												>
													<span class="icon-[hugeicons--favourite] size-5 text-center text-white"
													></span>
												</button>
											</div>
										</a>
									</div>
									<div
										class="relative mb-[38px] mt-[22px] flex w-full flex-col text-center align-middle"
									>
										<h4 class="font font-bold text-primary">{product.name}</h4>
										<div
											class="mt-2 flex h-auto flex-col items-center justify-center gap-0 overflow-hidden text-center align-middle"
										>
											<button
												aria-label="add-to-cart"
												class="relative inline-block h-8 -translate-y-[32px] bg-[#555] px-2 text-center align-middle text-[12.5px] font-semibold uppercase leading-[34px] tracking-widest text-white opacity-0 transition-all duration-[0.3s] ease-in-out group-hover/featured-carousel:translate-y-0 group-hover/featured-carousel:opacity-100 hover:bg-primary"
											>
												<span
													class="icon-[hugeicons--shopping-bag-add] mb-[3px] mr-[6px] size-5 text-center align-middle"
												></span>Add to Cart</button
											>
											<span
												class="relative inline-block -translate-y-8 font-montserrat text-sm text-[#999] transition-all duration-[0.3s] ease-in-out group-hover/featured-carousel:translate-y-8 group-hover/featured-carousel:opacity-0"
												>{#if product.onSale === true}<del class="mr-2">${product.onSalePrice}</del
													>{/if}${product.price}</span
											>
										</div>
									</div>
								</div>
							</SplideSlide>
						{/each}
					</SplideTrack>
				</div>
			</div>
		</Splide>
	</div>
</section>

<style>
	.arrow-override {
		@apply !relative !left-0 !size-6 !rounded-none !bg-transparent !opacity-100;
	}
	/*cursor: pointer; display: flex; height: 2em; justify-content: center; opacity: 0.7; padding: 0; top: 50%; transform: translateY(-50%); width: 2em; z-index: 1;*/

	.arrow-override > span {
		@apply size-6 text-primary hover:text-secondary;
	}
</style>
