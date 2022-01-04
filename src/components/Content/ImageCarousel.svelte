<script>
	import { flip } from 'svelte/animate';
	import ImageBlocker from '../Atoms/ImageBlocker.svelte';

	export let interval = 3000;
	export let blocker = 0;
	export let backgroundImages;
	export let height = '500px';

	setInterval(() => {
		backgroundImages = [...backgroundImages.slice(1, backgroundImages.length), backgroundImages[0]];
	}, interval);
</script>

<div class="slider-container">
	<div class="slider" style="height: {height};">
		{#each backgroundImages as image (image.id)}
			<div
				class="image {backgroundImages.indexOf(image) === backgroundImages.length - 1
					? 'transitioning'
					: ''}"
				style="background-image: url({image.path});"
				animate:flip={{ duration: 1600 }}
			/>
		{/each}
	</div>
	<ImageBlocker {blocker} />
</div>

<style lang="scss">
	.slider-container {
		@include flex-box;
		position: relative;
		overflow-x: hidden;

		.slider {
			@include flex-box;

			.image {
				height: 100%;
				width: $image-carousel-vw;
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;

				&.transitioning {
					opacity: 0;
				}
			}
		}
	}
</style>
