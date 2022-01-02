<script>
	import { fade } from 'svelte/transition';

	export let backgroundImages;
	export let interval;
	export let height;

	let backgroundIndex = 0;
	setInterval(() => {
		backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
	}, interval);
</script>

<div class="image-slider" style="height: {height}">
	{#each [backgroundImages[backgroundIndex]] as src (backgroundIndex)}
		<div class="image" transition:fade style="background-image: url({src});" alt="test" />
	{/each}
</div>

<style lang="scss">
	.image-slider {
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
</style>
