<script lang="ts">
	import bannerImage1 from '$lib/assets/images/banner-img-1.jpg';
	import bannerImage2 from '$lib/assets/images/banner-img-2.jpg';
	import bannerImage3 from '$lib/assets/images/banner-img-3.jpg';
</script>

<section>
	<div
		class="banner-product grid grid-cols-1 grid-rows-3 gap-7 pb-[30px] md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
	>
		<a href="/" class="group col-span-1 row-span-1 md:col-span-2 md:row-span-2">
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

<style>
	.banner-product > a {
		@apply relative;
	}

	.banner-product > a > img {
		@apply size-full;
	}

	.banner-product > a > .details {
		@apply absolute flex flex-col px-[15px] py-[10px] sm:px-[21px] sm:py-4 xl:px-[25px] xl:py-5;
	}

	.banner-product > a > .details > p {
		@apply mt-1 text-xs font-bold leading-[1em] tracking-[1.5px] text-secondary sm:mt-[6px];
	}

	.banner-product > a > .details h5 {
		@apply overflow-hidden align-middle text-[13px] font-bold uppercase leading-[18px] tracking-[0.075em] text-primary transition-all duration-[0.2s] ease-in-out sm:text-[14.5px] sm:leading-[22px] sm:tracking-widest;
	}

	.banner-product > a > .details span {
		@apply icon-[hugeicons--arrow-right-02] h-5 w-4 align-middle transition-all duration-[0.25s] ease-in-out;
	}
</style>
