<script>
	import { initAuth } from '$lib/firebase';
	let { user, logout } = initAuth();

	let user_value;

	user.subscribe((value) => {
		user_value = value;
	});

	export let fullWidth = false;
	let scrollTop;
</script>

<svelte:window bind:scrollY={scrollTop} />

<div class="nav-admin {!fullWidth ? 'full-width' : null}">
	{#if user_value !== null}
		<div class="logout" on:click={logout}>Log out</div>
		<a class="my-account" href="/my-account">My Account</a>
	{:else}
		<a href="/signin">Sign In / Register</a>
	{/if}
</div>
<nav class="nav {!fullWidth ? 'full-width' : null} {scrollTop > 80 ? 'scrolled' : ''}">
	<div class="left-column"><a href="/">SC</a></div>
	<div class="centre-column">
		<ul class="nav-links">
			<li class="nav-link">
				<a href="/shop">Shop</a>
			</li>
			<li class="nav-link">
				<a href="/my-story">My Story</a>
			</li>
			<li class="nav-link">
				<a href="/services">Services</a>
			</li>
			<li class="nav-link">
				<a href="/blog">Blog</a>
			</li>
			<li class="nav-link">
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</div>
	<div class="right-column">&nbsp;</div>
</nav>

<style lang="scss">
	.nav-admin {
		height: 30px;
		@include flex-box;
		justify-content: flex-end;
		padding: 0 $header-full-width-padding;
		font-size: $font-copy-small;

		&.full-width {
			padding: 0 $container-margin-width;
		}

		.logout {
			&:hover {
				cursor: pointer;
			}
		}

		.my-account {
			margin-left: 20px;
		}
	}

	.nav {
		background-color: $primary;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0px;
		z-index: 1;
		padding: 5px $header-full-width-padding;
		color: $black;

		&.scrolled {
			box-shadow: 0 3px 3px 0 #00000022;
			transition: box-shadow 300ms linear;
		}

		&.full-width {
			padding: 5px $container-margin-width;
		}

		.left-column,
		.right-column {
			width: 10%;
			display: flex;
			align-items: center;
		}

		.left-column {
			justify-content: flex-start;
			font-size: $font-headline-medium;
			font-weight: $font-bold;
		}

		.right-column {
			display: flex;
			justify-content: flex-end;
		}

		.centre-column {
			.nav-links {
				@include flex-box;

				.nav-link {
					padding: 0 10px;
					text-align: center;
					font-size: $font-copy-medium;
				}
			}
		}
	}
</style>
