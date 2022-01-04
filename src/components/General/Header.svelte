<script>
	export let fullWidth = false;
</script>

<div class="nav-admin {!fullWidth ? 'full-width' : null}">
	<a href="/signin">Sign In / Register</a>
</div>
<nav class="nav {!fullWidth ? 'full-width' : null}">
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
