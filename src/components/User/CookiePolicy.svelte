<script>
	import Cookie from 'svelte-material-icons/Cookie.svelte';
	import Button from '../Atoms/Button.svelte';

	let cookieConsentOpen = false;
	let firstVisit = true;

	const handleClick = () => {
		cookieConsentOpen = !cookieConsentOpen;

		if (firstVisit) {
			firstVisit = false;
		}
	};
</script>

<div class="cookie-consent-popup" style={firstVisit ? 'position: fixed;' : 'position: absolute;'}>
	<div class="cookie-container-closed">
		<div class="cookie-icon" on:click={handleClick}>
			<Cookie color="black" height="2em" width="2em" />
		</div>
	</div>
</div>

<div class="cookie-consent-options" style={cookieConsentOpen ? '' : 'display: none;'}>
	<span
		>We use cookies to ensure the best possible experience. <a href="/">See how we use cookies</a
		></span
	>
	<Button type="button" text="ACCEPT ALL COOKIES" onClick={handleClick} />
</div>

<style lang="scss">
	.cookie-consent-popup {
		height: 80px;
		width: 80px;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		.cookie-container-closed {
			height: 0;
			border-style: solid;
			border-width: 80px 0 0 80px;
			border-color: transparent transparent transparent rgba(0, 0, 0, 0.137);

			.cookie-icon {
				position: absolute;
				bottom: 12.5%;
				left: 12.5%;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}

	.cookie-consent-options {
		width: 100%;
		height: 100px;
		background-color: black;
		position: fixed;
		bottom: 0;
		color: white;
		@include flex-box;
		flex-direction: column;

		a {
			color: white;
		}
	}
</style>
