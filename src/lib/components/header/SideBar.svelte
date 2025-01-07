<script lang="ts">
	import { fly } from 'svelte/transition';

	interface Props {
		closeSideBar: () => void;
	}

	let { closeSideBar }: Props = $props();
</script>

<section
	transition:fly={{ x: 600, duration: 600 }}
	class="fixed inset-y-0 right-0 z-[1000] h-screen w-screen bg-dark p-[66px_62px] lg:w-[605px]"
>
	<button
		onclick={closeSideBar}
		class="absolute right-[38px] top-[38px] z-[1000] size-6"
		aria-label="close_menu"
	>
		<span class="icon-[hugeicons--multiplication-sign] size-6 text-white"></span>
	</button>
	<div class="relative flex h-full flex-col justify-between">
		<div class="flex flex-col">
			<h6 class="!m-[20px_0] text-center font-bold text-white">Welcome to Trezzure</h6>
			<p class="text-center text-2xl font-light leading-9 text-secondary">
				Where value meets elegance
			</p>
		</div>
		<div class="flex flex-col">
			<h6 class="!m-[20px_0] text-center font-bold text-[#afafaf]">We Are Awesome Folow Us</h6>
			<div class="social-links flex flex-row justify-center gap-5 py-2">
				<a href="https://instagram.com" target="_blank" aria-label="instagram"
					><span class="icon-[hugeicons--instagram]"></span></a
				>
				<a href="https://facebook.com" target="_blank" aria-label="facebook"
					><span class="icon-[hugeicons--facebook-01]"></span></a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.social-links > a {
		@apply inline-block size-6 justify-center;
	}
	.social-links > a > span {
		@apply size-6 text-white transition-all duration-[0.3s] ease-in-out hover:text-secondary;
	}
</style>
