<script lang="ts">
	import { fade } from 'svelte/transition';

	import cartProduct1 from '$lib/assets/images/cart-product.jpg';
	import cartProduct2 from '$lib/assets/images/cart-product-2.jpg';

	//import LinkButton from '$lib/components/shared/buttons/LinkButton.svelte';

	let cartProductsList = [
		{ id: 1, name: 'Deco Accessory', price: 15, image: cartProduct1 },
		{ id: 2, name: 'Table Lamp', price: 240, image: cartProduct2 }
	];
</script>

<section
	transition:fade={{ duration: 200 }}
	class="fixed top-16 z-[1000] box-border h-fit w-full bg-dark text-left sm:right-16 sm:w-72 2xl:right-[158px]"
>
	<ul class="cart-items relative m-[25px] flex flex-col gap-6 p-0">
		{#each cartProductsList as product}
			<li>
				<img src={product.image} alt="cart-product-img" />
				<div class="flex w-full flex-col justify-between">
					<div class="flex flex-row justify-between">
						<h5 class="text-left font-medium tracking-[0.1em] text-white">{product.name}</h5>
						<button class="size-4" aria-label="remove-products">
							<span class="icon-[hugeicons--multiplication-sign] size-4"></span>
						</button>
					</div>
					<span
						class="text-montserrat inline-block align-middle text-base tracking-wide text-[#a5a5a5]"
						>1 x <span class="text-xs">$</span>{product.price}</span
					>
				</div>
			</li>
		{/each}
		<div class="flex flex-col gap-[10px] p-1">
			<div class="flex flex-row justify-between">
				<h5 class="text-sm font-bold uppercase tracking-[0.1em] text-white">Total:</h5>
				<span class="align-middle font-montserrat text-sm font-normal tracking-wide text-white"
					><span class="text-xs">$</span>255</span
				>
			</div>
			<a
				href="/cart"
				aria-label="cart"
				class="box-border inline-block h-[34px] w-full border border-solid border-[#505050] bg-primary text-center align-middle text-xs font-bold uppercase leading-[34px] tracking-[2px] text-white hover:border-white"
				>View Cart</a
			>
			<a
				href="/checkout"
				aria-label="checkout"
				class="box-border inline-block h-[34px] w-full border border-solid border-[#2e2e2e] bg-[#2e2e2e] text-center align-middle text-xs font-bold uppercase leading-[34px] tracking-[2px] text-white hover:border-[#4b4b4b] hover:bg-[#4b4b4b]"
				>Checkout</a
			>
		</div>
	</ul>
</section>

<style>
	.cart-items > li {
		@apply flex flex-row gap-[10px] text-white;
	}

	.cart-items > li > img {
		@apply h-[52px] w-11;
	}
</style>
