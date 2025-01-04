<script lang="ts">
</script>

<footer class="w-full bg-white pt-[95px] text-secondary">
	<div class="container">
		<div class="footer-flex flex flex-row justify-between gap-[30px] align-middle">
			<div class="inner-flex flex flex-col">
				<h4>Company</h4>
				<ul class="menu-list">
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>My Account</span
							>
						</a>
					</li>
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>Checkout</span
							>
						</a>
					</li>
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>Orders</span
							>
						</a>
					</li>
				</ul>
			</div>
			<div class="inner-flex flex flex-col">
				<h4>Social Media</h4>
				<ul class="menu-list">
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>My Account</span
							>
						</a>
					</li>
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>Checkout</span
							>
						</a>
					</li>
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>Orders</span
							>
						</a>
					</li>
				</ul>
			</div>
			<div class="inner-flex flex flex-col">
				<h4>Profile</h4>
				<ul class="menu-list">
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>My Account</span
							>
						</a>
					</li>
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>Checkout</span
							>
						</a>
					</li>
					<li>
						<a href="/" aria-label="footer-menu" class="group/footer">
							<span
								class="arrow translate-x-[-16px] opacity-0 group-hover/footer:translate-x-0 group-hover/footer:opacity-100"
							>
							</span>
							<span class="item-name translate-x-[-16px] group-hover/footer:translate-x-0"
								>Orders</span
							>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-flex > .inner-flex {
		@apply mb-11 px-10 pt-4 text-left;
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
</style>
