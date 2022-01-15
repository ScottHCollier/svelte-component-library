<script>
	import Button from '../Atoms/Button.svelte';

	export let src;
	export let headline;
	export let subtitle;
	export let buttonText;
	export let href;
	export let colour;
	export let buttonColour;
	export let reverse = false;
</script>

<div class="hero-banner {colour} {reverse ? 'reverse' : ''}">
	<img {src} alt="person" />
	<div class="hero-banner-text {colour}">
		<h2>{headline}</h2>
		<h4>{subtitle}</h4>
		<Button text={buttonText} {buttonColour} {href} />
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
			height: 400px;
		}

		.hero-banner-text {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			&.primary {
				color: $primary-text;
			}

			&.secondary {
				color: $secondary-text;
			}

			&.tertiary {
				color: $tertiary-text;
			}

			&.accent {
				color: $accent-text;
			}

			h2 {
				padding: 0 100px;
				font-weight: $font-bold;
			}

			h4 {
				font-weight: $font-light;
				margin: 10px 0;
			}
		}
	}
</style>
