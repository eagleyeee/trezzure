<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<form
	transition:fade={{ duration: 200 }}
	class="fixed right-[222px] top-16 z-[1000] box-border w-72 bg-dark text-center"
>
	<div class="flex flex-row justify-between py-1.5 pl-2.5 pr-5">
		<input
			type="text"
			name="search"
			placeholder="Search..."
			class="h-11 w-[calc(100%-40px)] rounded-none border-0 bg-dark pl-2.5 pr-2.5 text-sm font-medium leading-[42px] text-[#a1a1a1] outline-0 ring-0 transition-all duration-[0.3s] ease-in-out focus:border-0 focus:outline-0 focus:ring-0"
		/>
		<button type="submit" aria-label="search"
			><span
				class="text- icon-[hugeicons--search-01] size-4 align-middle text-[#a1a1a1] transition-all duration-[0.3s] ease-in-out hover:text-white"
			></span></button
		>
	</div>
</form>
