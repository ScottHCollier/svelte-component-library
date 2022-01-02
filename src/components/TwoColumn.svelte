<script>
	import ImageCard from './ImageCard.svelte';
	import TextBox from './TextBox.svelte';
</script>

<div class="two-column">
	<ImageCard />
	<TextBox />
</div>

<style lang="scss">
	.two-column {
		padding: 10px;
		display: flex;
	}
</style>
