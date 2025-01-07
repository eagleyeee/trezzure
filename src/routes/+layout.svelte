<script lang="ts">
	import '$lib/styles/app.css';

	import tezzureLogo from '$lib/assets/trezzure-logo.png';

	import Header from '$lib/components/header/Header.svelte';
	import SideBar from '$lib/components/header/SideBar.svelte';
	import CartMenu from '$lib/components/header/CartMenu.svelte';
	import SearchForm from '$lib/components/header/SearchForm.svelte';

	import Footer from '$lib/components/footer/Footer.svelte';

	//import { classList } from 'svelte-body';

	let { children } = $props();

	let isOpenSideBar = $state(false);
	let isToggleCartMenu = $state(false);
	let isToggleSearchForm = $state(false);

	const openSideBar = () => {
		isToggleCartMenu = false;
		isToggleSearchForm = false;
		isOpenSideBar = true;
	};

	const closeSideBar = () => {
		isOpenSideBar = false;
	};

	const toggleCartMenu = () => {
		isToggleSearchForm = false;
		isToggleCartMenu = !isToggleCartMenu;
	};

	const toggleSearchForm = () => {
		isToggleCartMenu = false;
		isToggleSearchForm = !isToggleSearchForm;
	};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
	<title>Trezzure - Where Value Meets Elegance</title>
</svelte:head>

<!--<svelte:body use:classList={''} />-->

<Header {tezzureLogo}>
	{#snippet headerButtons()}
		<button onclick={toggleSearchForm} class="size-[18px] sm:size-6" aria-label="search">
			<span class="icon-[hugeicons--search-01] size-[18px] text-primary sm:size-6"></span>
		</button>
		<a href="/login" class="size-[18px] sm:size-6" aria-label="user-account">
			<span class="icon-[hugeicons--user] size-[18px] text-primary sm:size-6"></span>
		</a>
		<button onclick={toggleCartMenu} class="size-[18px] sm:size-6" aria-label="cart-menu">
			<span class="icon-[hugeicons--shopping-bag-02] size-[18px] text-primary sm:size-6"></span>
		</button>
		<button onclick={openSideBar} class="size-[18px] sm:size-6" aria-label="side-bar">
			<span class="icon-[hugeicons--menu-03] size-[18px] text-primary sm:size-6"></span>
		</button>
	{/snippet}
</Header>
{#if isToggleSearchForm}
	<SearchForm />
{:else if isToggleCartMenu}
	<CartMenu />
{:else if isOpenSideBar}
	<SideBar {closeSideBar} />
{/if}

{@render children()}

<Footer />
