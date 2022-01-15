<script>
</script>

<div class="breadcrumb">
	<ul>
		<li><a href="/styleguide">Level 1</a></li>
		<li class="divider" />
		<li><a href="/styleguide">Level 2</a></li>
		<li class="divider" />
		<li class="active"><a href="/styleguide">Level 3</a></li>
	</ul>
</div>

<style lang="scss">
	.breadcrumb {
		@include flex-box;
		justify-content: start;
		background-color: $tertiary;

		ul {
			@include flex-box;
			flex-direction: row;

			li {
				margin-right: 20px;
				font-size: $font-copy-small;
			}
		}
	}
</style>
