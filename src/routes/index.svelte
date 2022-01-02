<script>
	import TwoColumn from '../components/TwoColumn.svelte';
	import ImageFader from '../components/ImageFader.svelte';
	let backgroundImages = [
		'/src/assets/image-fader/hero-one.jpg',
		'/src/assets/image-fader/hero-two.jpg',
		'/src/assets/image-fader/hero-three.jpg'
	];
</script>

<ImageFader {backgroundImages} interval={8000} height="500px" />

<TwoColumn />

<style lang="scss">
</style>
