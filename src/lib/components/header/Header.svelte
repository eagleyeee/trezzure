<script lang="ts">
	import Nav from '$lib/components/header/Nav.svelte';

	import type { Snippet } from 'svelte';

	interface Props {
		tezzureLogo: string;
		headerButtons: Snippet;
	}

	let { tezzureLogo, headerButtons }: Props = $props();
</script>

<header class="fixed inset-x-0 top-0 z-[999] h-16 w-full bg-white">
	<div class="container">
		<div class="flex flex-row items-center justify-between align-middle">
			<a href="/" aria-label="trezzure-logo">
				<img src={tezzureLogo} class="h-12" alt="trezzure-logo" />
			</a>
			<Nav />
			<div class="flex flex-row gap-4">
				{@render headerButtons()}
			</div>
		</div>
	</div>
</header>
