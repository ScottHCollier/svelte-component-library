<script>
	export let blocker;
</script>

<div class="image-blocker" style="background-color: rgba(0, 0, 0, {blocker});" />

<style>
	.image-blocker {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
	}
</style>
