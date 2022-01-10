<script>
	export let isGoogleSignIn = false;
	export let text;
	export let type = null;
	export let onClick = null;
	export let href = null;
	export let colour = null;
</script>

{#if onClick}
	<button
		{type}
		on:click|preventDefault={onClick}
		class="{isGoogleSignIn ? 'google-sign-in' : ''} button {colour}"
	>
		{text}
	</button>
{:else if href}
	<a class="button {colour}" {href}>{text}</a>
{:else}
	<button {type} class="{isGoogleSignIn ? 'google-sign-in' : ''} button {colour}">
		{text}
	</button>
{/if}

<style lang="scss">
	.button {
		background-color: transparent;
		padding: 6px 10px;
		border-radius: 5px;
		font-size: $font-button;
		min-width: 165px;
		width: auto;
		margin: 20px 0;
		font-weight: $font-medium;
		transition: all 300ms linear;

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
			color: $primary-dark;
			border: 2px solid $primary-dark;

			&:hover {
				background-color: $primary-dark;
			}
		}

		&.secondary {
			color: $secondary-dark;
			border: 2px solid $secondary-dark;

			&:hover {
				background-color: $secondary-dark;
			}
		}

		&.tertiary {
			color: $tertiary-dark;
			border: 2px solid $tertiary-dark;

			&:hover {
				background-color: $tertiary-dark;
			}
		}
		&.fourth {
			color: $fourth-dark;
			border: 2px solid $fourth-dark;

			&:hover {
				background-color: $fourth-dark;
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
