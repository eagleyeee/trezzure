<script lang="ts">
	const menuLinks = [
		//{ title: '', url: '' }
		{ title: 'Home', url: '/' },
		{ title: 'Shop', url: '/shop' },
		{ title: 'About', url: '/about' },
		{ title: 'Blog', url: '/blog' }
	];
</script>

<nav class="hidden lg:block">
	<ul class="flex flex-row justify-between gap-11 p-5">
		{#each menuLinks as item}
			<li
				class="items-center text-[12.5px] font-bold uppercase leading-6 tracking-widest text-primary transition-all duration-[0.3s] ease-in-out hover:text-secondary"
			>
				<a href={item.url} class="hover:text-secondary">{item.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
</style>
