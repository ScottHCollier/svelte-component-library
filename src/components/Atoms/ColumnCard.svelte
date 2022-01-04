<script>
	export let src;
	export let alt;
	export let headline;
	export let subtitle;
	export let buttonText;
	export let href;
	export let colour;
	export let first = false;
	export let reverse = false;
</script>

<div class="column-card {colour} {reverse ? 'reverse' : ''} {first ? 'first' : 'second'}">
	<div class="hero-banner-text {colour}">
		<span>{subtitle}</span>
		<h2>{headline}</h2>
		<a {href} class="button {colour}">{buttonText}</a>
	</div>
	<img {src} {alt} />
</div>

<style lang="scss">
	.column-card {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		width: 50%;

		&.reverse {
			flex-direction: column-reverse;
		}

		&.first {
			margin-right: 15px;
		}

		&.second {
			margin-left: 15px;
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
			width: 60%;
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
				font-size: 3.2rem;
				padding: 0 30px;
				text-align: center;
				font-weight: $font-bold;
			}

			span {
				font-size: $font-copy-medium;
				font-weight: $font-medium;
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
