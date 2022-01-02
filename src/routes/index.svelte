<script>
	import ImageSlider from '../components/ImageSlider.svelte';
	let backgroundImages = [
		'/src/assets/hero-one.jpg',
		'/src/assets/hero-two.jpg',
		'/src/assets/hero-three.jpg'
	];
</script>

<ImageSlider {backgroundImages} interval={8000} height="500px" />

<style lang="scss">
</style>
