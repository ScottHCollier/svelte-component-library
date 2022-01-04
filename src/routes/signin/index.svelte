<script>
	import Form from '../../components/Atoms/Form.svelte';
	import { Validators } from '../../utils/Validators';

	import Input from '../../components/Atoms/Input.svelte';
	import Error from '../../components/Atoms/Error.svelte';
	import Button from '../../components/Atoms/Button.svelte';

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

	function onSubmit(e) {
		if (e?.detail?.valid) {
			console.log(e.detail.data);
			formEl.reset();
		} else {
			console.log('Invalid Form');
		}
	}
</script>

<div class="sign-in-and-sign-up">
	<div class="sign-in">
		<h2 class="title">I already have an account</h2>
		<span>Sign in the your email and password</span>
		<Form {form} on:submit={onSubmit} bind:this={formEl}>
			<div class="input-group">
				<Input label="Email" name="email" />
				<Error fieldName="email" errorKey="required" message="Email is required" />
				<Error fieldName="email" errorKey="validEmail" message="Valid email is required" />
			</div>
			<div class="input-group">
				<Input label="Password" name="password" />
				<Error fieldName="password" errorKey="required" message="Password is required" />
				<Error fieldName="password" errorKey="minLength" />
			</div>
			<div class="buttons">
				<Button type="submit" text="Sign In" />
				<Button type="button" text="Sign in with Google" isGoogleSignIn />
			</div>
		</Form>
	</div>

	<div class="sign-up">
		<h2 class="title">I do not have an account</h2>
		<span>Sign up with your email and password</span>
		<Form {form} on:submit={onSubmit} bind:this={formEl}>
			<div class="input-group">
				<Input label="Name" name="name" />
				<Error fieldName="name" errorKey="required" message="Name is required" />
			</div>
			<div class="input-group">
				<Input label="Email" name="email" />
				<Error fieldName="email" errorKey="required" message="Email is required" />
				<Error fieldName="email" errorKey="validEmail" message="Valid email is required" />
			</div>
			<div class="input-group">
				<Input label="Password" name="password" />
				<Error fieldName="password" errorKey="required" message="Password is required" />
				<Error fieldName="password" errorKey="minLength" />
			</div>
			<Button type="submit" text="Sign Up" />
		</Form>
	</div>
</div>

<style lang="scss">
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
