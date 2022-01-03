<script>
	export let fullWidth = false;
</script>

<div class={fullWidth ? 'container full-width' : 'container'}>
	<slot />
</div>

<style lang="scss">
	.container {
		padding-left: 15%;
		padding-right: 15%;

		&.full-width {
			margin-left: -15%;
			margin-right: -15%;
		}
	}
</style>
