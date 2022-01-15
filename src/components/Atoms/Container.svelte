<script>
	export let fullWidth = false;
	export let margin = false;
	export let backgroundColour = null;
</script>

<div
	class="container {fullWidth ? 'full-width' : ''} {margin ? 'margin' : ''} {backgroundColour
		? `${backgroundColour}`
		: ''}"
>
	<slot />
</div>

<style lang="scss">
	.container {
		padding-left: $container-margin-width;
		padding-right: $container-margin-width;

		&.full-width {
			margin-left: -$container-margin-width;
			margin-right: -$container-margin-width;
		}

		&.margin {
			margin-top: 30px;
			margin-bottom: 30px;
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
		&.fourth {
			background-color: $accent;
		}
	}
</style>
