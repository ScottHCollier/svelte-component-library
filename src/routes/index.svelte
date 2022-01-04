<script>
	import Container from '../components/Container.svelte';
	import TwoColumnTest from '../components/TwoColumnTest.svelte';
	import ImageFader from '../components/ImageFader.svelte';
	import HeroBanner from '../components/HeroBanner.svelte';
	import ProductCentred from '../components/ProductCentred.svelte';
	import ImageSlider from '../components/ImageSlider.svelte';
	import TwoColumn from '../components/TwoColumn.svelte';
	import ColumnCard from '../components/ColumnCard.svelte';

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
	<TwoColumn>
		<ColumnCard
			src="assets/products/macbook.png"
			headline="On the go functionality."
			subtitle="MacBook."
			buttonText="Learn more"
			href="/"
			alt="macbook"
			colour="primary"
			first
		/>
		<ColumnCard
			src="assets/products/mac.png"
			headline="Be a sheep, expensively."
			subtitle="Clever little subtitle."
			buttonText="Learn more"
			href="/"
			alt="mac"
			colour="fourth"
			reverse
		/>
	</TwoColumn>
</Container>

<Container fullWidth>
	<ImageSlider {backgroundImages} interval={5454} blocker={0.5} height="700px" />
</Container>

<Container>
	<TwoColumnTest
		reverse
		textTitle="Nonsense from Jeff Goldblum"
		textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing?"
		imageSrc="assets/products/laptop-small.png"
		imageAlt="laptop small"
	/>
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
	<ImageFader {backgroundImages} interval={4000} height="500px" blocker={0.2} />
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

<Container>
	<div class="test">Test div</div>
</Container>

<style lang="scss">
	.test {
		@include flex-box;
		padding: 50px 0;
	}
</style>
