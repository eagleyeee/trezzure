<script lang="ts">
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
	<div class="flex flex-row justify-between overflow-x-scroll px-4 py-24">
		{#each clients as client}
			<a
				href="/"
				aria-label="client-logo"
				class="group/client flex w-[206px] flex-row overflow-hidden"
			>
				<div
					class="flex w-[206px] translate-x-[-206px] flex-row transition-all duration-[0.8s] ease-in-out group-hover/client:translate-x-0"
				>
					<img src={client.logo} alt="client-logo" width="206px" class="w-[206px] opacity-100" />
					<img src={client.logo} alt="client-logo" width="206px" class="w-[206px] opacity-25" />
				</div>
			</a>
		{/each}
	</div>
</section>

<!--
<a
				href="/"
				aria-label="client-logo"
				class="group/client flex w-[206px] translate-x-[-206px] flex-row hover:translate-x-0"
			>
				<div class="flex flex-row overflow-hidden">
					<img
						src={client.logo}
						alt="client-logo"
						class="w-[206px] translate-x-[-206px] opacity-0 group-hover/client:translate-x-0 group-hover/client:opacity-100"
					/>
					<img
						src={client.logo}
						alt="client-logo"
						class="w-[206px] translate-x-[-206px] opacity-25 group-hover/client:translate-x-0"
					/>
				</div>
			</a>
-->
