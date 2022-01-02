<script>
</script>

<ul class="nav-links">
	<li class="nav-link">
		<a href="/">First</a>
	</li>
	<li class="nav-link">
		<a href="/">Second</a>
	</li>
	<li class="nav-link">
		<a href="/">Third</a>
	</li>
	<li class="nav-link">
		<a href="/">Fourth</a>
	</li>
	<li class="nav-link">
		<a href="/">Fifth</a>
	</li>
	<li class="nav-link">
		<a href="/">Contact</a>
	</li>
</ul>

<style lang="scss">
	.nav-links {
		@include flex-box;

		.nav-link {
			padding: 0 10px;
			text-align: center;
			font-size: $font-copy-medium;
		}
	}
</style>
