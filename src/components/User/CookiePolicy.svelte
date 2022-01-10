<script>
	import Cookie from 'svelte-material-icons/Cookie.svelte';
	import Button from '../Atoms/Button.svelte';
	import { onMount } from 'svelte';
	import { readObjectCookie, setCookie } from '$lib/cookies';
	import Switch from '../Atoms/Switch.svelte';

	let cookieConsentOpen = false;
	let cookieConsentSwitchesOpen = false;
	let cookieSet = false;
	let necessary = true;
	let functional = false;
	let analytics = false;
	let personalisation = false;
	let advertising = false;

	onMount(async () => {
		let cookieConsent = await readObjectCookie('_cc');
		if (cookieConsent !== null) {
			necessary = cookieConsent['necessary'];
			functional = cookieConsent['functional'];
			personalisation = cookieConsent['personalisation'];
			analytics = cookieConsent['analytics'];
			advertising = cookieConsent['advertising'];

			cookieSet = true;
		} else {
			cookieConsentOpen = true;
		}
	});

	const handleClick = () => {
		cookieConsentOpen = !cookieConsentOpen;
	};

	const openSwitches = () => {
		cookieConsentSwitchesOpen = !cookieConsentSwitchesOpen;
	};

	const setAllCookies = () => {
		functional = true;
		analytics = true;
		personalisation = true;
		advertising = true;

		let cookieConsent = {
			necessary,
			functional,
			analytics,
			personalisation,
			advertising
		};
		setCookie('_cc', cookieConsent, 365);

		cookieConsentOpen = !cookieConsentOpen;
		cookieSet = true;
	};

	const setCookieConsent = () => {
		let cookieConsent = {
			necessary,
			functional,
			personalisation,
			analytics,
			advertising
		};

		setCookie('_cc', cookieConsent, 365);

		cookieConsentOpen = !cookieConsentOpen;
		cookieSet = true;
	};
</script>

<div
	class="cookie-consent-popup"
	style="{cookieSet ? 'position: absolute;' : 'position: fixed;'} {cookieConsentOpen
		? 'display: none'
		: ''}"
>
	<div class="cookie-container-closed">
		<div class="cookie-icon" on:click={handleClick}>
			<Cookie color="#301533" height="2em" width="2em" />
		</div>
	</div>
</div>

<div class="cookie-consent-options" style={cookieConsentOpen ? '' : 'display: none;'}>
	<span
		>We use cookies to ensure the best possible experience. <a href="/">See how we use cookies</a
		></span
	>
	<ul class="cookie-consent-switches" style={cookieConsentSwitchesOpen ? '' : 'display: none;'}>
		<li>Necessary<Switch bind:checked={necessary} fixed /></li>
		<li>Functional<Switch bind:checked={functional} /></li>
		<li>Analytics<Switch bind:checked={analytics} /></li>
		<li>Personalisation<Switch bind:checked={personalisation} /></li>
		<li>Advertising<Switch bind:checked={advertising} /></li>
	</ul>
	<div class="cookie-consent-buttons">
		{#if !cookieConsentSwitchesOpen}
			<Button colour="fourth" type="button" text="MANAGE COOKIES" onClick={openSwitches} />
		{:else}
			<Button colour="fourth" type="button" text="ACCEPT & CLOSE" onClick={setCookieConsent} />
		{/if}
		<Button colour="fourth" type="button" text="ACCEPT ALL COOKIES" onClick={setAllCookies} />
	</div>
</div>

<style lang="scss">
	$cookie-background: $fourth-light;
	$cookie-foreground: $fourth-dark;

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
			border-color: transparent transparent transparent $cookie-background;

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
		padding: 10px;
		background-color: $cookie-background;
		position: fixed;
		bottom: 0;
		color: $cookie-foreground;
		@include flex-box;
		flex-direction: column;

		a {
			color: $cookie-foreground;
		}
	}

	.cookie-consent-switches {
		width: 300px;
		margin: 15px 0;

		li {
			display: flex;
			justify-content: space-between;
			margin: 10px 0;
		}
	}
</style>
