<script>
	export let interval;
	export let sliderMessages;
	export let sliderInitial;

	let sliderIndex = 1;

	let sliderText = sliderInitial;

	setInterval(() => {
		if (sliderIndex === sliderMessages.length) {
			sliderIndex = 0;
		}
		sliderText = sliderMessages[sliderIndex];
		sliderIndex++;
	}, interval);
</script>

<div class="nav-slider">
	{sliderText}
</div>

<style lang="scss">
	.nav-slider {
		height: 30px;
		background-color: $secondary;
		@include flex-box;
		padding: 0 $nav-padding-width;
		font-size: $font-copy-small;
		color: $secondary-text-colour;
	}
</style>
