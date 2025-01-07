<script lang="ts">
	import CoverProducts from '$lib/components/home/CoverProducts.svelte';
	import ClientsCarousel from '$lib/components/home/ClientsCarousel.svelte';
	import FeaturedCarousel from '$lib/components/home/FeaturedCarousel.svelte';
	import TestimonialCarousel from '$lib/components/home/TestimonialCarousel.svelte';
</script>

<div class="container mt-16">
	<!--Cover Products Section-->
	<CoverProducts />

	<!--Welcome Section-->
	<section class="pb-20 pt-14">
		<div class="flex flex-col gap-[14px]">
			<h5 class="text-center font-bold tracking-widest">Welcome to Trezzure</h5>
			<p
				class="block px-[25%] text-center text-xl normal-case leading-8 tracking-normal text-[#929292] sm:text-2xl sm:leading-9 md:text-3xl md:leading-[45px]"
			>
				Marketing is not selling. Marketing is building a brand in the mind of the prospect.
			</p>
		</div>
	</section>

	<!--Featured Product Carousel Section-->
	<FeaturedCarousel />

	<!--Testimonial Carousel Section-->
	<TestimonialCarousel />

	<!--Clients Carousel Section-->
	<ClientsCarousel />
</div>
