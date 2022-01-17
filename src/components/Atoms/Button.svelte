<script>
	export let isGoogleSignIn = false;
	export let text;
	export let type = null;
	export let onClick = null;
	export let href = null;
	export let buttonColour = null;
	export let width = null;
</script>

{#if onClick}
	<button
		{type}
		on:click|preventDefault={onClick}
		class="{isGoogleSignIn ? 'google-sign-in' : ''} button {buttonColour}"
	>
		{text}
	</button>
{:else if href}
	<a {href}>
		<button class="button {buttonColour}" style={width ? 'width: 265px' : ''}>{text}</button>
	</a>
{:else}
	<button {type} class="{isGoogleSignIn ? 'google-sign-in' : ''} button {buttonColour}">
		{text}
	</button>
{/if}

<style lang="scss">
	.button {
		padding: 5px 20px;
		font-size: $font-button;
		margin: 20px 0;
		font-weight: $font-bold;
		border-radius: 20px;
		background-size: 200%;
		transition: background-position 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
		background-image: linear-gradient(to right, #da22ff 0%, #9733ee 61%, #da22ff 100%);
		border: none;
		color: $white;

		&:hover,
		&:focus,
		&:active {
			background-position: -50%;
			cursor: pointer;
		}

		// &.google-sign-in {
		// 	background-color: #4285f4;
		// 	border: 2px solid #4285f4;
		// 	color: white;

		// 	&:hover {
		// 		background-color: #357ae8;
		// 		border: 2px solid #357ae8;
		// 	}
		// }

		// &.primary {
		// 	color: $primary-button-hover;
		// 	border: 2px solid $primary-button-hover;

		// 	&:hover {
		// 		background-color: $primary-button-hover;
		// 	}
		// }

		// &.secondary {
		// 	background-image: linear-gradient(to left #ffc312, #ee5a24, #ffc312);

		// 	&:hover {
		// 	}
		// }

		// &.tertiary {
		// 	background-color: $tertiary;
		// 	color: $tertiary-button;
		// 	border: 2px solid $tertiary-button-hover;

		// 	&:hover {
		// 		background-color: $tertiary-button-hover;
		// 		color: $primary;
		// 	}
		// }

		// &.accent {
		// 	color: $accent-button-hover;
		// 	border: 2px solid $accent-button;
		// 	background-color: $accent-button;

		// 	&:hover {
		// 		background-color: $accent-button-hover;
		// 		color: $accent-button;
		// 	}
		// }

		// &.black {
		// 	color: $black;
		// 	border: 2px solid $black;

		// 	&:hover {
		// 		background-color: $black;
		// 	}
		// }

		// &:hover {
		// 	color: $white;
		// 	cursor: pointer;
		// }
	}
</style>
