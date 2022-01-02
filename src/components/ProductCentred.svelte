<script>
	export let title;
	export let subtitle;
	export let imageSrc;
	export let imageAlt;
</script>

<div class="product-centered">
	<div class="left-column" />
	<div class="centre-column">
		<span>{title}</span>
		<p>{subtitle}</p>
		<img src={imageSrc} alt={imageAlt} />
	</div>
	<div class="right-column" />
</div>

<style lang="scss">
	.product-centered {
		padding: 20px;
		@include flex-box;
		overflow: hidden;
		height: 400px;

		.centre-column {
			@include flex-box;
			flex-direction: column;
			transform: translateY(25%);

			p {
				font-size: $font-copy-small;
			}

			img {
				transform: translateY(-15%);
			}
		}
	}
</style>
