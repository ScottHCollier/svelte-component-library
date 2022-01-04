<script>
	export let fullWidth = false;
</script>

<div class={fullWidth ? 'container full-width' : 'container'}>
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
	}
</style>
