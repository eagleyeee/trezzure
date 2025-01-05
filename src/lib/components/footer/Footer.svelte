<script lang="ts">
	const footerMenus = [
		{
			title: 'Company',
			subMenus: [
				{
					name: 'Contact Us',
					url: '/contact'
				},
				{
					name: 'Privacy Policy',
					url: '/privacy-policy'
				},
				{
					name: 'Terms & Conditions',
					url: '/terms-and-conditions'
				}
			]
		},
		{
			title: 'Social Media',
			subMenus: [
				{
					name: 'Instagaram',
					url: 'https://instagram.com'
				},
				{
					name: 'Facebook',
					url: 'https://facebook.com'
				}
			]
		},
		{
			title: 'Profile',
			subMenus: [
				{
					name: 'My Account',
					url: '/account'
				},
				{
					name: 'Sign up',
					url: '/sign-up'
				}
			]
		}
	];
</script>

<footer
	class="relative box-border block w-full border-t border-solid border-[rgba(206,206,206,.2)] bg-white pt-[95px] text-secondary"
>
	<div class="container">
		<div class="footer-flex flex flex-row justify-between gap-[30px] px-4 align-middle">
			{#each footerMenus as menu}
				<div class="inner-flex flex flex-col">
					<h4>{menu.title}</h4>

					<ul class="menu-list">
						{#each menu.subMenus as link}
							<li>
								<a href={link.url} aria-label="footer-menu" class="group/footer">
									<span
										class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
									>
									</span>
									<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
										>{link.name}</span
									>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<div
			class="relative box-border flex justify-between border-t border-solid border-[rgba(206,206,206,.2)] px-4 py-[13px] text-center align-middle"
		>
			<span class="inline-block align-middle text-[12.5px] font-medium text-secondary"
				>&#169; Trezzure 2025</span
			>
			<div class="flex flex-row gap-4 align-middle">
				<span class="inline-block align-middle text-[12.5px] font-medium text-secondary"
					>Follow Us</span
				>
				<div class="footer-social-links flex flex-row justify-center gap-4 py-[2.5px]">
					<a href="https://instagram.com" target="_blank" aria-label="instagram"
						><span class="icon-[hugeicons--instagram]"></span></a
					>
					<a href="https://facebook.com" target="_blank" aria-label="facebook"
						><span class="icon-[hugeicons--facebook-01]"></span></a
					>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-flex > .inner-flex {
		@apply mb-11 pt-4 text-left;
	}

	.footer-flex > .inner-flex > h4 {
		@apply mb-[15px] text-left font-bold tracking-widest text-primary;
	}

	.footer-flex > .inner-flex > ul {
		@apply flex flex-col pt-[6px] text-left;
	}

	.menu-list > li {
		@apply block py-1;
	}

	.menu-list a {
		@apply text-left text-sm text-secondary transition-all duration-[0.3s] ease-in-out hover:text-[#b5b5b5];
	}

	.menu-list a > .arrow {
		@apply icon-[hugeicons--arrow-right-02] -mt-[2px] h-4 w-4 align-middle transition-all duration-[0.25s] ease-in-out;
	}

	.menu-list a > .item-name {
		@apply font-normal transition-all duration-[0.2s] ease-in-out;
	}

	.footer-social-links > a {
		@apply inline-block size-[18px] justify-center;
	}
	.footer-social-links > a > span {
		@apply size-[18px] text-secondary transition-all duration-[0.3s] ease-in-out;
	}
</style>
