<script>
	export let isGoogleSignIn = false;
	export let text;
	export let type = null;
	export let onClick = null;
	export let href = null;
	export let buttonColour = null;
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
	<a class="button {buttonColour}" {href}>{text}</a>
{:else}
	<button {type} class="{isGoogleSignIn ? 'google-sign-in' : ''} button {buttonColour}">
		{text}
	</button>
{/if}

<style lang="scss">
	.button {
		background-color: transparent;
		padding: 6px 10px;
		font-size: $font-button;
		width: 245px;
		margin: 20px 0;
		font-weight: $font-regular;
		transition: all 300ms linear;
		@include flex-box;

		&.google-sign-in {
			background-color: #4285f4;
			border: 2px solid #4285f4;
			color: white;

			&:hover {
				background-color: #357ae8;
				border: 2px solid #357ae8;
			}
		}

		&.primary {
			color: $primary-button-hover;
			border: 2px solid $primary-button-hover;

			&:hover {
				background-color: $primary-button-hover;
			}
		}

		&.secondary {
			color: $secondary-button-hover;
			border: 2px solid $secondary-button-hover;

			&:hover {
				background-color: $secondary-button-hover;
				color: $secondary-button;
			}
		}

		&.tertiary {
			background-color: $tertiary;
			color: $tertiary-button;
			border: 2px solid $tertiary-button-hover;

			&:hover {
				background-color: $tertiary-button-hover;
				color: $primary;
			}
		}

		&.accent {
			color: $accent-button-hover;
			border: 2px solid $accent-button;
			background-color: $accent-button;

			&:hover {
				background-color: $accent-button-hover;
				color: $accent-button;
			}
		}

		&.black {
			color: $black;
			border: 2px solid $black;

			&:hover {
				background-color: $black;
			}
		}

		&:hover {
			color: $white;
			cursor: pointer;
		}
	}
</style>
