<script>
	import Form from '../../components/Atoms/Form.svelte';
	import { Validators } from '../../utils/Validators';
	import InputText from '../../components/Atoms/InputText.svelte';
	import InputPassword from '../../components/Atoms/InputPassword.svelte';
	import Error from '../../components/Atoms/Error.svelte';
	import Button from '../../components/Atoms/Button.svelte';

	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email;

	let formEl;
	let form = {
		name: {
			validators: [Validators.required]
		},
		email: {
			validators: [Validators.required, Validators.validEmail]
		},
		password: {
			validators: [Validators.required, Validators.minLength(6)]
		}
	};

	const handleLogin = async (e) => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			console.log('Check your email for the login link!');
			formEl.reset();
		} catch (error) {
			console.log(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<div class="sign-in-and-sign-up">
	<div class="sign-up">
		<h2 class="title">I do not have an account</h2>
		<span>Sign up with your email and password</span>
		<Form {form} on:submit={handleLogin} bind:this={formEl}>
			<!-- <div class="input-group">
				<InputText label="Name" name="name" />
				<Error fieldName="name" errorKey="required" message="Name is required" />
			</div> -->
			<div class="input-group">
				<!-- <InputText label="Email" name="email" /> -->

				<input type="text" bind:value={email} />
				<Error fieldName="email" errorKey="required" message="Email is required" />
				<Error fieldName="email" errorKey="validEmail" message="Valid email is required" />
			</div>
			<!-- <div class="input-group">
				<InputPassword label="Password" name="password" />
				<Error fieldName="password" errorKey="required" message="Password is required" />
				<Error fieldName="password" errorKey="minLength" />
			</div> -->
			<!-- <Button type="submit" text="Sign Up" /> -->
			<input
				type="submit"
				class="button"
				value={loading ? 'Loading' : 'Send magic link'}
				disabled={loading}
			/>
		</Form>
	</div>
</div>

<style lang="scss">
	.sign-in-and-sign-up {
		width: 850px;
		display: flex;
		justify-content: space-between;
		margin: 30px auto;
		.sign-up {
			display: flex;
			flex-direction: column;
			width: 380px;

			.title {
				margin: 10px 0;
			}
		}
	}

	.input-group {
		padding-bottom: 20px;
	}
</style>
