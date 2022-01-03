<script>
	import Container from '../components/Container.svelte';
	import TwoColumn from '../components/TwoColumn.svelte';
	import ImageFader from '../components/ImageFader.svelte';
	import HeroBanner from '../components/HeroBanner.svelte';
	import ProductCentred from '../components/ProductCentred.svelte';
	import ImageSlider from '../components/ImageSlider.svelte';

	import { backgroundImages } from '../constants/images';
</script>

<Container fullWidth>
	<HeroBanner
		src="assets/default/person-one.png"
		headline="Lean green."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="primary"
	/>
</Container>

<Container fullWidth>
	<ImageSlider {backgroundImages} interval={9454} blocker={0.5} />
</Container>

<Container>
	<ProductCentred
		title="Product showcase"
		subtitle="*Terms and Conditions would probably be pretty good here"
		imageSrc="assets/products/iphone-small.png"
		imageAlt="iphone small"
	/>
</Container>

<Container>
	<HeroBanner
		src="assets/default/person-two.png"
		headline="Slices for half-time."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="tertiary"
		reverse
	/>
</Container>

<Container>
	<ImageFader {backgroundImages} interval={6000} height="500px" blocker={0.2} />
</Container>

<Container>
	<HeroBanner
		src="assets/default/person-three.png"
		headline="Pretty in pink."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="fourth"
	/>
</Container>

<Container>
	<TwoColumn
		reverse
		textTitle="Nonsense from Jeff Goldblum"
		textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing?"
		imageSrc="assets/products/laptop-small.png"
		imageAlt="laptop small"
	/>
</Container>

<Container>
	<HeroBanner
		src="assets/responsive-design/responsive-alternate-large.png"
		headline="Brothers."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="secondary"
	/>
</Container>

<style lang="scss">
</style>
