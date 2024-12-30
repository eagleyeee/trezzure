<script lang="ts">
	import bannerImage1 from '$lib/assets/images/banner-img-1.jpg';
	import bannerImage2 from '$lib/assets/images/banner-img-2.jpg';
	import bannerImage3 from '$lib/assets/images/banner-img-3.jpg';
</script>

<div class="container mt-16 pt-20">
	<!--Banner Products Section-->
	<section class="pb-[30px]">
		<div class="banner-product grid grid-cols-3 grid-rows-2 gap-[30px]">
			<a href="/" class="group col-span-2 row-span-2">
				<div class="details">
					<div class="mt-1 flex flex-row gap-1 text-left align-middle">
						<span
							class="translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
						></span>
						<h5 class="translate-x-[-20px] group-hover:translate-x-0">Decorative Baskets</h5>
					</div>
					<p>From $40</p>
				</div>
				<img src={bannerImage1} alt="banner-3" />
			</a>
			<a href="/" class="group col-span-1 row-span-1">
				<div class="details">
					<div class="mt-1 flex flex-row gap-1 text-left align-middle">
						<span
							class="translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
						></span>
						<h5 class="translate-x-[-20px] group-hover:translate-x-0">Antique Vases</h5>
					</div>
					<p>Home Decor</p>
				</div>
				<img src={bannerImage2} alt="banner-3" />
			</a>
			<a href="/" class="group col-span-1 row-span-1">
				<div class="details">
					<div class="mt-1 flex flex-row gap-1 text-left align-middle">
						<span
							class="translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
						></span>
						<h5 class="translate-x-[-20px] group-hover:translate-x-0">Figurines</h5>
					</div>
					<p>New!</p>
				</div>
				<img src={bannerImage3} alt="banner-3" />
			</a>
		</div>
	</section>

	<!--Welcome Section-->
	<section class="pb-20 pt-14">
		<div class="flex flex-col gap-[14px]">
			<h5 class="text-center font-bold tracking-widest">Welcome to Trezzure</h5>
			<p
				class="block px-[25%] text-center text-3xl normal-case leading-[45px] tracking-normal text-[#929292]"
			>
				Marketing is not selling. Marketing is building a brand in the mind of the prospect.
			</p>
		</div>
	</section>

	<!--Featured Product Silder Section-->
	<section class=""></section>
</div>

<style>
	.banner-product > a {
		@apply relative;
	}

	.banner-product > a > img {
		@apply size-full;
	}

	.banner-product > a > .details {
		@apply absolute flex flex-col px-[25px] py-5;
	}

	.banner-product > a > .details > p {
		@apply mt-[6px] text-xs font-bold leading-[1em] tracking-[1.5px] text-secondary;
	}

	.banner-product > a > .details h5 {
		@apply overflow-hidden align-middle font-bold uppercase tracking-widest text-primary transition-all duration-[0.2s] ease-in-out;
	}

	.banner-product > a > .details span {
		@apply icon-[hugeicons--arrow-right-02] h-5 w-4 align-middle transition-all duration-[0.25s] ease-in-out;
	}
</style>
