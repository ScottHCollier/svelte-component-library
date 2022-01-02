<script>
	import ImageFader from './ImageFader.svelte';
	import TextBox from './TextBox.svelte';

	export let reverse;
	export let backgroundImages;
</script>

<div class="two-column" style={reverse ? 'flex-direction: row-reverse' : ''}>
	<ImageFader {backgroundImages} interval={3000} height="500px" />
	<TextBox />
</div>

<style lang="scss">
	.two-column {
		padding: 10px;
		display: flex;
	}
</style>
