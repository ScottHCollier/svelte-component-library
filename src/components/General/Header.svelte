<script>
	import { initAuth } from '$lib/firebase';
	import TextSlider from '../Atoms/TextSlider.svelte';
	import { sliderMessages } from '../../constants/messages';
	import Button from '../Atoms/Button.svelte';

	let { user, logout } = initAuth();

	let user_value;

	user.subscribe((value) => {
		user_value = value;
	});

	export let fullWidth = false;
	let scrollTop;
</script>

<svelte:window bind:scrollY={scrollTop} />

<TextSlider interval={6000} {sliderMessages} />

<nav class="nav {!fullWidth ? 'full-width' : null} {scrollTop > 80 ? 'scrolled' : ''}">
	<div class="left-column">
		<img src="/assets/logo.svg" alt="" />
		<a class="title" href="/">tofu tech</a>
	</div>
	<div class="centre-column">
		<ul class="nav-links">
			<li class="nav-link">
				<a href="/services">Services</a>
			</li>
			<li class="nav-link">
				<a href="/shop">Clients</a>
			</li>
			<li class="nav-link">
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</div>
	<div class="right-column">
		<!-- {#if user_value !== null}
			<div class="logout" on:click={logout}>Log out</div>
			<a class="my-account" href="/my-account">My Account</a>
		{:else}
			<a href="/signin">Sign In / Register</a>
		{/if} -->
		<ul class="nav-links">
			<li class="nav-link">
				<Button href="/contact" text="Contact" buttonColour="secondary" />
			</li>
		</ul>
	</div>
</nav>

<style lang="scss">
	.nav {
		background-color: $primary;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0px;
		z-index: 1;
		padding: 5px $full-width-padding;
		color: $primary-text;
		height: 100px;

		&.scrolled {
			box-shadow: 0 3px 3px 0 #00000022;
			transition: box-shadow 300ms linear;
		}

		&.full-width {
			padding: 5px $container-margin-width;
		}

		.left-column,
		.right-column {
			width: 20%;
			display: flex;
			align-items: center;
		}

		.left-column {
			justify-content: flex-start;

			img {
				width: 50px;
				height: auto;
				margin-right: 20px;
			}

			.title {
				font-weight: 900;
				font-size: $h1;
				font-style: italic;
			}
		}

		.right-column {
			@include flex-box;
			justify-content: flex-end;

			.logout {
				&:hover {
					cursor: pointer;
				}
			}

			.my-account {
				margin-left: 20px;
			}
		}

		.nav-links {
			@include flex-box;

			.nav-link {
				padding: 0 20px;
				text-align: center;
				font-size: $h4;
			}
		}
	}
</style>
