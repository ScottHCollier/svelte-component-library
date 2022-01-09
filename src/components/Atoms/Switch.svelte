<script>
	export let checked = false;
</script>

<label class="switch">
	<input type="checkbox" bind:checked />
	<span class="slider" />
</label>

<style lang="scss">
	.switch {
		position: relative;
		display: inline-block;
		width: 44px;
		height: 24px;
		margin: 3px 0;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgb(78, 78, 78);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: #29ce3f;
	}

	input:checked + .slider {
		box-shadow: 0 0 1px #29ce3f;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(20px);
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}
</style>
