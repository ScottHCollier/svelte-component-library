<script>
	import { user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabaseClient';
	import Auth from '../components/User/Login.svelte';
	import Profile from '../components/User/Profile.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div class="container" style="padding: 50px 0 100px 0;">
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div>
