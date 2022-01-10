<script>
	import Form from '../../components/Atoms/Form.svelte';
	import { Validators } from '$lib/Validators';
	import InputText from '../../components/Atoms/InputText.svelte';
	import InputPassword from '../../components/Atoms/InputPassword.svelte';
	import Error from '../../components/Atoms/Error.svelte';
	import Button from '../../components/Atoms/Button.svelte';
	import { initAuth } from '$lib/firebase';
	import { goto } from '$app/navigation';

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

	const { loginWithEmailPassword, loginWithGoogle, createNewUser, logout, user } = initAuth();
	let error = null;

	const loginHandler = async (e) => {
		const { email, password } = e.detail.data;
		try {
			error = null;
			await loginWithEmailPassword(email, password);
			goto('/');
		} catch (err) {
			error = err;
		}
	};

	const newUserHandler = async (e) => {
		const { name, email, password } = e.detail.data;
		try {
			error = null;
			await createNewUser(name, email, password);
			goto('/');
		} catch (err) {
			error = err;
		}
	};
</script>

{#if $user}
	<div class="logout">
		<h2>{$user.email}</h2>
		<Button type="button" onClick={logout} text="Log out" />
	</div>
{:else}
	<div class="sign-in-and-sign-up">
		<div class="sign-in">
			<h2 class="title">I already have an account</h2>
			<span>Sign in the your email and password</span>
			<Form {form} on:submit={loginHandler}>
				<div class="input-group">
					<InputText label="Email" name="email" />
					<Error fieldName="email" errorKey="required" message="Email is required" />
					<Error fieldName="email" errorKey="validEmail" message="Valid email is required" />
				</div>
				<div class="input-group">
					<InputPassword label="Password" name="password" />
					<Error fieldName="password" errorKey="required" message="Password is required" />
					<Error fieldName="password" errorKey="minLength" />
				</div>
				<div class="buttons">
					<Button colour="primary" type="submit" text="Sign In" />
					<Button
						type="button"
						text="Sign in with Google"
						isGoogleSignIn
						onClick={loginWithGoogle}
					/>
				</div>
			</Form>
		</div>
		<div class="sign-up">
			<h2 class="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<Form {form} on:submit={newUserHandler}>
				<div class="input-group">
					<InputText label="Name" name="name" />
					<Error fieldName="name" errorKey="required" message="Name is required" />
				</div>
				<div class="input-group">
					<InputText label="Email" name="email" />
					<Error fieldName="email" errorKey="required" message="Email is required" />
					<Error fieldName="email" errorKey="validEmail" message="Valid email is required" />
				</div>
				<div class="input-group">
					<InputPassword label="Password" name="password" />
					<Error fieldName="password" errorKey="required" message="Password is required" />
					<Error fieldName="password" errorKey="minLength" />
				</div>
				<Button colour="primary" type="submit" text="Sign Up" />
			</Form>
		</div>
	</div>
{/if}

<style lang="scss">
	.logout {
		@include flex-box;
		flex-direction: column;
		padding: 50px;

		h2 {
			margin-bottom: 40px;
		}
	}

	.sign-in-and-sign-up {
		width: 850px;
		display: flex;
		justify-content: space-between;
		margin: 30px auto;

		.sign-in {
			width: 380px;
			display: flex;
			flex-direction: column;

			.title {
				margin: 10px 0;
			}

			.buttons {
				display: flex;
				justify-content: space-between;
			}
		}

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
