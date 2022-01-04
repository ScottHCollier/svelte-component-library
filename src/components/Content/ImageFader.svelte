<script>
	import { fade } from 'svelte/transition';
	import ImageBlocker from '../Atoms/ImageBlocker.svelte';

	export let backgroundImages;
	export let interval;
	export let height;
	export let blocker = 0;

	let backgroundIndex = 0;
	setInterval(() => {
		backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
	}, interval);
</script>

<div class="fader-container">
	<div class="image-fader" style="height: {height}">
		{#each [backgroundImages[backgroundIndex]] as image (backgroundIndex)}
			<div class="image" transition:fade style="background-image: url({image.path});" alt="test" />
		{/each}
	</div>
	<ImageBlocker {blocker} />
</div>

<style lang="scss">
	.fader-container {
		position: relative;

		.image-fader {
			position: relative;

			.image {
				height: 100%;
				width: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				position: absolute;
			}
		}
	}
</style>
