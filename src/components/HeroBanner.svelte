<script>
	export let src;
	export let headline;
	export let subtitle;
	export let buttonText;
	export let colour;
	export let reverse;
</script>

<div class="hero-banner {colour} {reverse ? 'reverse' : ''}">
	<img {src} alt="person" />
	<div class="hero-banner-text {colour}">
		<h2>{headline}</h2>
		<span>{subtitle}</span>
		<a href="/" class="button {colour}">{buttonText}</a>
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

		&.green {
			background-color: $light-green;
		}

		&.blue {
			background-color: $light-blue;
		}

		&.orange {
			background-color: $light-orange;
		}

		&.pink {
			background-color: $light-pink;
		}

		img {
			height: 400px;
		}

		.hero-banner-text {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			&.green {
				color: $dark-green;
			}

			&.blue {
				color: $dark-blue;
			}

			&.orange {
				color: $dark-orange;
			}

			&.pink {
				color: $dark-pink;
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

				&.green {
					color: $dark-green;
					border: 2px solid $dark-green;

					&:hover {
						background-color: $dark-green;
					}
				}

				&.blue {
					color: $dark-blue;
					border: 2px solid $dark-blue;

					&:hover {
						background-color: $dark-blue;
					}
				}

				&.orange {
					color: $dark-orange;
					border: 2px solid $dark-orange;

					&:hover {
						background-color: $dark-orange;
					}
				}
				&.pink {
					color: $dark-pink;
					border: 2px solid $dark-pink;

					&:hover {
						background-color: $dark-pink;
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
