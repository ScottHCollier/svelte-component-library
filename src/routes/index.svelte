<script>
	import TwoColumn from '../components/TwoColumn.svelte';
	import ImageFader from '../components/ImageFader.svelte';
	import HeroBanner from '../components/HeroBanner.svelte';

	let backgroundImages = [
		'/src/assets/image-fader/hero-one.jpg',
		'/src/assets/image-fader/hero-two.jpg',
		'/src/assets/image-fader/hero-three.jpg'
	];
</script>

<HeroBanner
	src="/src/assets/image-fader/person-one.png"
	headline="Hero headline."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	colour="green"
	reverse={false}
/>

<HeroBanner
	src="/src/assets/image-fader/person-two.png"
	headline="Hero headline."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	colour="orange"
	reverse={true}
/>

<ImageFader {backgroundImages} interval={3000} height="500px" />

<HeroBanner
	src="/src/assets/image-fader/person-three.png"
	headline="Hero headline."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	colour="pink"
	reverse={false}
/>

<TwoColumn
	reverse={true}
	textTitle="Title"
	textCopy="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! You really think you can fly that thing? Jaguar shark! So tell me - does it really exist? Must go faster... go, go, go, go, go!"
	imageSrc="./src/assets/products/laptop-small.png"
	imageAlt="laptop small"
/>

<HeroBanner
	src="/src/assets/responsive-design/responsive-alternate-large.png"
	headline="Hero headline."
	subtitle="Clever little subtitle."
	buttonText="Get in touch"
	colour="blue"
	reverse={false}
/>

<style lang="scss">
</style>
