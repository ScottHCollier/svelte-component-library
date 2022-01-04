<script>
	export let isGoogleSignIn = false;
	export let text;
	export let type;
</script>

<button {type} class={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}>
	{text}
</button>

<style lang="scss">
	.custom-button {
		min-width: 165px;
		width: auto;
		letter-spacing: 0.5px;
		padding: 15px 35px;
		font-size: $font-copy-small;
		background-color: $black;
		color: white;
		text-transform: uppercase;
		border: 2px solid $black;
		cursor: pointer;

		&:hover {
			background-color: white;
			color: black;
		}

		&.google-sign-in {
			background-color: #4285f4;
			border: 2px solid #4285f4;
			color: white;

			&:hover {
				background-color: #357ae8;
				border: 2px solid #357ae8;
			}
		}
	}
</style>
