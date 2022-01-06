<script>
	import Form from '../../components/Atoms/Form.svelte';
	import { Validators } from '$lib/Validators';
	import { auth, provider, db } from '../../utils/firebase';
	import {
		signInWithEmailAndPassword,
		signInWithPopup,
		GoogleAuthProvider,
		createUserWithEmailAndPassword
	} from 'firebase/auth';
	import { user } from '$lib/sessionStore';

	import { collection, addDoc } from 'firebase/firestore';

	import InputText from '../../components/Atoms/InputText.svelte';
	import InputPassword from '../../components/Atoms/InputPassword.svelte';
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

	const signInWithGoogle = async () => {
		let userValue = null;
		try {
			const result = await signInWithPopup(auth, provider);
			// This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			// const token = credential.accessToken;
			// The signed-in user info.
			userValue = result.user.displayName;
			// console.warn(credential, token, user);
		} catch (error) {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			console.warn(credential, errorCode, errorMessage, email);
		}
		$user = userValue;
	};

	const signInWithEmail = async (e) => {
		try {
			formEl.reset();
			let { email, password } = e.detail.data;
			const success = await signInWithEmailAndPassword(auth, email, password);
			$user = success;
		} catch (error) {
			console.log('Error logging in', error.message);
		}
	};

	const createNewUser = async (e) => {
		try {
			formEl.reset();
			let { name, email, password } = e.detail.data;
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const docRef = await addDoc(collection(db, 'users'), {
				name,
				email
			});
			console.log('Document written with ID: ', docRef.id);
			$user = userCredential.user;
		} catch (error) {
			console.log('Error creating new user', error.message);
		}
	};
</script>

<div class="sign-in-and-sign-up">
	<div class="sign-in">
		<h2 class="title">I already have an account</h2>
		<span>Sign in the your email and password</span>
		<Form {form} on:submit={signInWithEmail} bind:this={formEl}>
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
				<Button type="submit" text="Sign In" />
				<Button
					type="button"
					text="Sign in with Google"
					isGoogleSignIn
					onClick={signInWithGoogle}
				/>
			</div>
		</Form>
	</div>

	<div class="sign-up">
		<h2 class="title">I do not have an account</h2>
		<span>Sign up with your email and password</span>
		<Form {form} on:submit={createNewUser} bind:this={formEl}>
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
