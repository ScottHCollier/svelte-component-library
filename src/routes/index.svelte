<script>
	import TwoColumn from '../components/TwoColumn.svelte';
	import ImageFader from '../components/ImageFader.svelte';
	import TwoColumnHero from '../components/TwoColumnHero.svelte';
	let backgroundImages = [
		'/src/assets/image-fader/hero-one.jpg',
		'/src/assets/image-fader/hero-two.jpg',
		'/src/assets/image-fader/hero-three.jpg'
	];

	let images = [
		'/src/assets/image-fader/person-one.png',
		'/src/assets/image-fader/person-two.png',
		'/src/assets/image-fader/person-three.png'
	];
</script>

<div class="test">
	<img src="/src/assets/image-fader/person-two.png" alt="person" />
	<div class="text">
		<h1>Hero headline.</h1>
		<p>Clever little subtitle.</p>
		<button>Get in touch</button>
	</div>
</div>

<TwoColumn reverse={false} />

<ImageFader {backgroundImages} interval={3000} height="500px" />

<TwoColumnHero backgroundImages={images} reverse={false} />

<style lang="scss">
	.test {
		background-color: #dfebc0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 70vh;

		img {
			height: 400px;
		}

		.text {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			h1 {
				color: #485861;
				font-size: $font-headline-large;
				padding: 0 100px;
				font-weight: 900;
			}

			p {
				color: #485861;
				font-size: 2.8rem;
				font-weight: 200;
				margin: 10px 0;
			}

			button {
				background-color: transparent;
				color: #485861;
				border: 2px solid #485861;
				padding: 6px 10px;
				border-radius: 5px;
				font-size: 1.2rem;
				margin: 20px 0;
				font-weight: 400;
				transition: all 300ms linear;

				&:hover {
					color: white;
					background-color: #485861;
					cursor: pointer;
				}
			}
		}
	}
</style>
