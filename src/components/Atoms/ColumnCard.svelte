<script>
	import Button from '../Atoms/Button.svelte';

	export let src;
	export let alt;
	export let headline;
	export let subtitle;
	export let buttonText;
	export let href;
	export let colour;
	export let buttonColour;
	export let first = false;
	export let reverse = false;
</script>

<div class="column-card {colour} {reverse ? 'reverse' : ''} {first ? 'first' : 'second'}">
	<div class="hero-banner-text {colour}">
		<span>{subtitle}</span>
		<h2>{headline}</h2>
		<Button {href} {buttonColour} text={buttonText} />
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
			background-color: $primary;
		}

		&.secondary {
			background-color: $secondary;
		}

		&.tertiary {
			background-color: $tertiary;
		}

		&.accent {
			background-color: $accent;
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
				color: $secondary;
			}

			&.secondary {
				color: $primary;
			}

			&.tertiary {
				color: $secondary;
			}

			&.accent {
				color: $primary;
			}

			h2 {
				font-size: 3.2rem;
				padding: 0 30px;
				text-align: center;
				font-weight: $font-bold;
			}

			span {
				font-size: $font-copy-medium;
				font-weight: $font-regular;
			}

			.button {
				background-color: transparent;

				padding: 6px 10px;
				border-radius: 5px;
				font-size: $font-button;
				margin: 20px 0;
				font-weight: $font-regular;
				transition: all 300ms linear;

				&.primary {
					color: $primary;
					border: 2px solid $primary;

					&:hover {
						background-color: $primary;
					}
				}

				&.secondary {
					color: $secondary;
					border: 2px solid $secondary;

					&:hover {
						background-color: $secondary;
					}
				}

				&.tertiary {
					color: $tertiary;
					border: 2px solid $tertiary;

					&:hover {
						background-color: $tertiary;
					}
				}
				&.accent {
					color: $accent;
					border: 2px solid $accent;

					&:hover {
						background-color: $accent;
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
