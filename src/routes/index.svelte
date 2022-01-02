<script>
	import TwoColumn from '../components/TwoColumn.svelte';
	import ImageFader from '../components/ImageFader.svelte';
	import HeroBanner from '../components/HeroBanner.svelte';
	import ProductCentred from '../components/ProductCentred.svelte';

	let backgroundImages = [
		'/src/assets/image-fader/hero-one.jpg',
		'/src/assets/image-fader/hero-two.jpg',
		'/src/assets/image-fader/hero-three.jpg'
	];
</script>

<HeroBanner
	src="/src/assets/image-fader/person-one.png"
	headline="Lean green."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	href="/"
	colour="primary"
/>

<ProductCentred
	title="Product showcase"
	subtitle="*Terms and Conditions would probably be pretty good here"
	imageSrc="./src/assets/products/iphone-small.png"
	imageAlt="iphone small"
/>

<HeroBanner
	src="/src/assets/image-fader/person-two.png"
	headline="Slices for half-time."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	href="/"
	colour="tertiary"
	reverse
/>

<ImageFader {backgroundImages} interval={6000} height="500px" />

<HeroBanner
	src="/src/assets/image-fader/person-three.png"
	headline="Pretty in pink."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	href="/"
	colour="fourth"
/>

<TwoColumn
	reverse
	textTitle="Nonsense from Jeff Goldblum"
	textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing?"
	imageSrc="./src/assets/products/laptop-small.png"
	imageAlt="laptop small"
/>

<HeroBanner
	src="/src/assets/responsive-design/responsive-alternate-large.png"
	headline="Brothers."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	href="/"
	colour="secondary"
/>

<style lang="scss">
</style>
