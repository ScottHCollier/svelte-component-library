<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		return {
			redirect: '/signin',
			status: 302
		};
	}
</script>
