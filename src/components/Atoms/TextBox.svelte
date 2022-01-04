<script>
	export let title;
	export let copy;
</script>

<div class="text-box">
	<h3>{title}</h3>
	<p>{copy}</p>
</div>

<style lang="scss">
	.text-box {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding: 40px 60px 40px 40px;

		h3 {
			margin-bottom: 30px;
		}
	}
</style>
