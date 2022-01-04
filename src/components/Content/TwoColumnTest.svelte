<script>
	import ImageCard from '../Atoms/ImageCard.svelte';
	import TextBox from '../Atoms/TextBox.svelte';

	export let reverse;
	export let imageSrc;
	export let imageAlt;
	export let textTitle;
	export let textCopy;
</script>

<div class="two-column" style={reverse ? 'flex-direction: row-reverse' : ''}>
	<ImageCard src={imageSrc} alt={imageAlt} />
	<TextBox title={textTitle} copy={textCopy} />
</div>

<style lang="scss">
	.two-column {
		padding: 50px 10px;
		display: flex;
	}
</style>
