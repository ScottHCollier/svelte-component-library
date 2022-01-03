<script>
	export let fullWidth = false;
</script>

<div class={fullWidth ? 'container full-width' : 'container'}>
	<slot />
</div>

<style lang="scss">
	.container {
		padding-left: $container-padding-width;
		padding-right: $container-padding-width;

		&.full-width {
			margin-left: -$container-padding-width;
			margin-right: -$container-padding-width;
		}
	}
</style>
