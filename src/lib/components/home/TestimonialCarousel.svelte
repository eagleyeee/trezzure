<script lang="ts">
	import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	const clientReviews = [
		{
			name: 'Kelly Preston',
			position: 'Developer',
			summary:
				'Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus. Lorem ipsum dolor sit amet, consectetur elit. In ut ullamcorper leo, eget euismod orci. Cum sociis pena tibus et magnis dis parturient montes, nascetur ipsum dolor sit amet.'
		},
		{
			name: 'Christine Parker',
			position: 'Analyst',
			summary:
				'Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus magnis dis parturienmontes, nasceturridiculus musestibulum ultricies aliquam convallis nibhelit penatibus magnis dis parturie eget.'
		},
		{
			name: 'Mason Robinson',
			position: 'Doctor',
			summary:
				'Sociis natoque penatibus magnis dis parturienmontes, nasceturridiculus musestibulum ultricies aliquam convallis. Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci aliquenenan penatibus dis parturienmontes ultricies.'
		}
	];
</script>

<section>
	<div
		class="group/client-carousel relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#f3f3f3] px-1 py-24"
	>
		<h3 class="px-6 text-center font-semibold tracking-wider text-primary">What They're Saying</h3>
		<Splide
			options={{
				rewind: true,
				autoplay: false,
				type: 'loop',
				pagination: false,
				perPage: 1,
				perMove: 1,
				speed: 1200,
				flickMaxPages: 1,
				arrows: true,
				gap: '26px'
			}}
			hasTrack={false}
		>
			<SplideTrack>
				{#each clientReviews as client}
					<SplideSlide
						><!--w-full items-center justify-center p-12 text-center align-middle-->
						<div
							class="relative flex w-full flex-col items-center justify-center overflow-hidden px-14"
						>
							<!--block w-[70%] text-center -->
							<div class="mx-auto mb-[10px] mt-[30px] w-[12%] sm:w-[24%] md:w-[36%] lg:w-[50%]">
								<p class="text-center leading-[30px] text-secondary">
									{client.summary}
								</p>
							</div>

							<div class="mt-[10px] flex w-full flex-col items-center justify-center">
								<h5 class="mt-5 font-bold uppercase text-primary">{client.name}</h5>
								<h6 class="my-2 font-normal normal-case">{client.position}</h6>
							</div>
						</div>
					</SplideSlide>
				{/each}
			</SplideTrack>
			<div class="splide__arrows">
				<button
					class="splide__arrow splide__arrow--prev custom-arrow group-hover/client-carousel:opacity-100"
					aria-label="control-left"
				>
					<span
						class="icon-[hugeicons--arrow-left-01] group-hover/client-carousel:opacity-100 hover:-translate-x-2"
					></span>
				</button>
				<button class="splide__arrow splide__arrow--next custom-arrow" aria-label="control-right">
					<span
						class="icon-[hugeicons--arrow-right-01] group-hover/client-carousel:opacity-100 hover:translate-x-2"
					></span>
				</button>
			</div>
		</Splide>
	</div>
</section>

<style>
	.splide__slide {
		@apply !w-[1200px];
	}

	.custom-arrow {
		@apply !size-8 !rounded-none !bg-transparent;
	}

	.custom-arrow > span {
		@apply size-8 text-secondary opacity-0 transition-all duration-[0.5s] ease-in-out;
	}
</style>
