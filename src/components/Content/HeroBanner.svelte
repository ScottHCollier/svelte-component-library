<script>
	export let src;
	export let headline;
	export let subtitle;
	export let buttonText;
	export let href;
	export let colour;
	export let reverse = false;
</script>

<div class="hero-banner {colour} {reverse ? 'reverse' : ''}">
	<img {src} alt="person" />
	<div class="hero-banner-text {colour}">
		<h2>{headline}</h2>
		<span>{subtitle}</span>
		<a {href} class="button {colour}">{buttonText}</a>
	</div>
</div>

<style lang="scss">
	.hero-banner {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 70vh;

		&.reverse {
			flex-direction: row-reverse;
		}

		&.primary {
			background-color: $primary-light;
		}

		&.secondary {
			background-color: $secondary-light;
		}

		&.tertiary {
			background-color: $tertiary-light;
		}

		&.fourth {
			background-color: $fourth-light;
		}

		img {
			height: 400px;
		}

		.hero-banner-text {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			&.primary {
				color: $primary-dark;
			}

			&.secondary {
				color: $secondary-dark;
			}

			&.tertiary {
				color: $tertiary-dark;
			}

			&.fourth {
				color: $fourth-dark;
			}

			h2 {
				font-size: $font-headline-large;
				padding: 0 100px;
				font-weight: $font-bold;
			}

			span {
				font-size: $font-headline-medium;
				font-weight: $font-light;
				margin: 10px 0;
			}

			.button {
				background-color: transparent;

				padding: 6px 10px;
				border-radius: 5px;
				font-size: $font-button;
				margin: 20px 0;
				font-weight: $font-medium;
				transition: all 300ms linear;

				&.primary {
					color: $primary-dark;
					border: 2px solid $primary-dark;

					&:hover {
						background-color: $primary-dark;
					}
				}

				&.secondary {
					color: $secondary-dark;
					border: 2px solid $secondary-dark;

					&:hover {
						background-color: $secondary-dark;
					}
				}

				&.tertiary {
					color: $tertiary-dark;
					border: 2px solid $tertiary-dark;

					&:hover {
						background-color: $tertiary-dark;
					}
				}
				&.fourth {
					color: $fourth-dark;
					border: 2px solid $fourth-dark;

					&:hover {
						background-color: $fourth-dark;
					}
				}

				&:hover {
					color: $white;
					cursor: pointer;
				}
			}
		}
	}
</style>
