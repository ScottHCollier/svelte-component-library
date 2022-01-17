<script>
	import { flip } from 'svelte/animate';

	export let interval;
	export let sliderMessages;

	setInterval(() => {
		sliderMessages = [...sliderMessages.slice(1, sliderMessages.length), sliderMessages[0]];
	}, interval);
</script>

<div class="slider-container">
	<div class="nav-slider">
		{#each sliderMessages as sliderMessage (sliderMessage.id)}
			<div
				class="message {sliderMessages.indexOf(sliderMessage) === sliderMessages.length - 1
					? 'transitioning'
					: ''}"
				animate:flip={{ duration: 1600 }}
			>
				{sliderMessage.message}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.slider-container {
		@include flex-box;
		overflow-x: hidden;

		.nav-slider {
			height: 30px;
			@include flex-box;
			text-transform: uppercase;
			background-color: $dark-grey;

			.message {
				text-align: center;
				width: 100vw;
				color: $primary-text;
				font-size: $font-copy-medium;
				font-weight: $font-semibold;

				&.transitioning {
					opacity: 0;
				}
			}
		}
	}
</style>
