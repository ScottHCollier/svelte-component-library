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
		<a class="logo" href="/">
			<svg
				version="1.1"
				id="Layer_2_00000064343516668619463950000011249470571447987632_"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 750 852.5"
				style="enable-background:new 0 0 750 852.5;"
				xml:space="preserve"
			>
				<path
					class="st0"
					d="M742.2,262.8v331.6c0,14.2-3.8,27.8-10.6,39.7c-6.9,11.9-16.8,22-29.1,29.1L415.3,829
	c-12.3,7.1-26,10.6-39.7,10.6v-411h0v411c-13.7,0-27.4-3.5-39.7-10.6L48.7,663.2c-12.3-7.1-22.2-17.2-29.1-29.1
	C12.8,622.2,9,608.6,9,594.4V262.8c0-14.2,3.8-27.8,10.6-39.7l0,0c6.9-11.9,16.8-22,29.1-29.1L335.9,28.2
	c12.3-7.1,26-10.6,39.7-10.6c13.7,0,27.4,3.5,39.7,10.6L702.5,194c12.3,7.1,22.2,17.2,29.1,29.1l0,0
	C738.4,234.9,742.2,248.6,742.2,262.8z"
				/>
				<path
					class="st1"
					d="M702.5,194L415.3,28.2c-12.3-7.1-26-10.6-39.7-10.6s-27.4,3.5-39.7,10.6L48.7,194
	c-12.3,7.1-22.2,17.2-29.1,29.1l356,205.5l356-205.5C724.7,211.2,714.8,201.1,702.5,194z"
				/>
				<path
					class="st0"
					d="M731.6,223l-356,205.5v411c13.7,0,27.4-3.5,39.7-10.6l287.2-165.8c12.3-7.1,22.2-17.2,29.1-29.1
	c6.9-11.9,10.6-25.5,10.6-39.7V262.8C742.2,248.6,738.4,234.9,731.6,223z"
				/>
				<path
					class="st2"
					d="M19.6,223C12.8,234.9,9,248.6,9,262.8v331.6c0,14.2,3.8,27.8,10.6,39.7c6.9,11.9,16.8,22,29.1,29.1L335.9,829
	c12.3,7.1,26,10.6,39.7,10.6v-411L19.6,223z"
				/>
				<polygon class="st1" points="-524,309.5 -524,309.5 -524,309.5 " />
			</svg>
		</a>
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
		padding: 0 $full-width-padding;
		color: $primary-text;
		height: 100px;

		&.scrolled {
			box-shadow: 0 3px 3px 0 #00000022;
			transition: box-shadow 300ms linear;
		}

		&.full-width {
			padding: 0 $container-margin-width;
		}

		.left-column,
		.right-column {
			width: 20%;
			display: flex;
			align-items: center;
		}

		.left-column {
			justify-content: flex-start;

			svg {
				width: 30px;
				height: auto;
				margin-right: 10px;

				.st0 {
					fill: #f2f2f2;

					&:hover {
						fill: #da22ff5e;
					}
				}
				.st1 {
					fill: #ffffff;

					&:hover {
						fill: #da22ff5e;
					}
				}
				.st2 {
					fill: #e6e6e6;

					&:hover {
						fill: #da22ff5e;
					}
				}
			}

			.title {
				font-weight: 900;
				font-size: $h3;
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

		.centre-column {
			height: 100%;

			.nav-links {
				@include flex-box;
				height: 100%;

				.nav-link {
					@include flex-box;
					padding: 0 20px;
					text-align: center;
					font-size: $h6;
					height: 100%;
					position: relative;

					&:hover {
						::after {
							content: '';
							position: absolute;
							width: 100%;
							height: 3px;
							bottom: 0;
							left: 0;
							background-color: $accent;
						}
					}
				}
			}
		}
	}
</style>
