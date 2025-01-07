<script lang="ts">
	import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import clientLogo1 from '$lib/assets/images/clients/client-1.png';
	import clientLogo2 from '$lib/assets/images/clients/client-2.png';
	import clientLogo4 from '$lib/assets/images/clients/client-4.png';
	import clientLogo5 from '$lib/assets/images/clients/client-5.png';
	import clientLogo6 from '$lib/assets/images/clients/client-6.png';
	import clientLogo7 from '$lib/assets/images/clients/client-7.png';
	import clientLogo8 from '$lib/assets/images/clients/client-8.png';

	const clients = [
		{ logo: clientLogo1 },
		{ logo: clientLogo2 },
		{ logo: clientLogo4 },
		{ logo: clientLogo5 },
		{ logo: clientLogo6 },
		{ logo: clientLogo7 },
		{ logo: clientLogo8 }
	];
</script>

<section>
	<div class="block w-full overflow-hidden px-4 py-24">
		<Splide
			options={{
				rewind: true,
				autoplay: false,
				type: 'loop',
				pagination: false,
				perPage: 6,
				perMove: 1,
				breakpoints: {
					991: { perPage: 5 },
					767: { perPage: 4 },
					575: { perPage: 2 }
				},
				speed: 1200,
				flickMaxPages: 1,
				arrows: false,
				gap: '0px'
			}}
			hasTrack={false}
		>
			<SplideTrack>
				{#each clients as client}
					<SplideSlide>
						<a
							href="/"
							aria-label="client-logo"
							class="group/client flex w-full flex-row overflow-hidden"
						>
							<div
								class="flex w-full translate-x-[-100%] flex-row transition-all duration-[0.8s] ease-in-out group-hover/client:translate-x-0"
							>
								<img src={client.logo} alt="client-logo" width="206px" class="w-full opacity-100" />
								<img src={client.logo} alt="client-logo" width="206px" class="w-full opacity-25" />
							</div>
						</a>
					</SplideSlide>
				{/each}
			</SplideTrack>
		</Splide>
	</div>
</section>

<style>
</style>
