<script>
	import Container from '../components/Atoms/Container.svelte';
	import TwoColumnTest from '../components/Content/TwoColumnTest.svelte';
	import ImageFader from '../components/Content/ImageFader.svelte';
	import HeroBanner from '../components/Content/HeroBanner.svelte';
	import ProductCentred from '../components/Content/ProductCentred.svelte';
	import ImageCarouselFullWidth from '../components/Content/ImageCarouselFullWidth.svelte';
	import ImageCarousel from '../components/Content/ImageCarousel.svelte';
	import TwoColumn from '../components/Content/TwoColumn.svelte';
	import ColumnCard from '../components/Atoms/ColumnCard.svelte';
	import TextSlider from '../components/Atoms/TextSlider.svelte';
	import Tabs from '../components/Content/Tabs.svelte';
	import Accordion from '../components/Content/Accordion.svelte';

	import { backgroundImages, images } from '../constants/images';
</script>

<ImageFader {backgroundImages} interval={4000} height="700px" blocker={0.5} />

<Container fullWidth>
	<HeroBanner
		src="assets/default/person-one.png"
		headline="Lean green."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="primary"
		buttonColour="secondary"
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
		colour="secondary"
		buttonColour="secondary"
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
			colour="tertiary"
			buttonColour="tertiary"
			first
		/>
		<ColumnCard
			src="assets/products/mac.png"
			headline="Be a sheep, expensively."
			subtitle="Big mac."
			buttonText="Learn more"
			href="/"
			alt="mac"
			colour="accent"
			buttonColour="secondary"
			reverse
		/>
	</TwoColumn>
</Container>

<ImageCarouselFullWidth {backgroundImages} interval={5454} blocker={0.5} height="400px" />

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
		colour="accent"
		buttonColour="secondary"
	/>
</Container>

<Container margin>
	<ImageFader {backgroundImages} interval={4000} height="300px" blocker={0.2} />
</Container>

<Container>
	<HeroBanner
		src="assets/responsive-design/responsive-alternate-large.png"
		headline="Brothers."
		subtitle="Clever little subtitle."
		buttonText="Get in touch"
		href="/"
		colour="secondary"
		buttonColour="accent"
	/>
</Container>

<Container margin>
	<Tabs />
</Container>

<Container>
	<ImageCarousel {backgroundImages} interval={4000} blocker={0.5} height="300px" />
</Container>
