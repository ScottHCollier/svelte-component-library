<script>
	export let src;
	export let alt;
</script>

<img class="image-card" {src} {alt} />

<style lang="scss">
	.image-card {
		padding: 0 40px;
		max-width: 400px;
		object-fit: contain;
	}
</style>
