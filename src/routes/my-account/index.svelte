<script context="module">
	import { initAuth } from '$lib/firebase';
	let { user } = initAuth();

	let user_value;

	user.subscribe((value) => {
		user_value = value;
	});

	export async function load({ params, fetch, session, stuff }) {
		if (user_value === null) {
			return {
				redirect: '/signin',
				status: 302
			};
		} else {
			return {
				redirect: '/my-account/home',
				status: 302
			};
		}
	}
</script>
