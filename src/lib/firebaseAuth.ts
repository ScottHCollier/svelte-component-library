import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	measurementId
} from '$lib/env';

import { goto } from '$app/navigation';
import { readable } from 'svelte/store';

const config = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	measurementId
};

// small mapper function
const userMapper = (claims) => ({
	id: claims.user_id,
	name: claims.name,
	email: claims.email,
	picture: claims.picture
});

export const initAuth = (useRedirect = false) => {
	const firebase = initializeApp(config);
	const auth = getAuth(firebase);
	const db = getFirestore(firebase);

	const loginWithEmailPassword = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log('Error logging in', error.message);
		}
	};

	const createNewUser = async (name, email, password) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await addDoc(collection(db, 'users'), {
				name,
				email
			});
		} catch (error) {
			console.log('Error creating new user', error.message);
		}
	};

	const loginWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		provider.setCustomParameters({ prompt: 'select_account' });

		try {
			if (useRedirect) {
				await signInWithRedirect(auth, provider);
				goto('/');
			} else {
				await signInWithPopup(auth, provider);
				goto('/');
			}
			// This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			// const token = credential.accessToken;
			// // The signed-in user info.
			// const user = credential.idToken;
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
	};

	const logout = () => auth.signOut();

	// wrap Firebase user in a Svelte readable store
	const user = readable(null, (set) => {
		const unsub = auth.onAuthStateChanged(async (fireUser) => {
			if (fireUser) {
				const token = await fireUser.getIdTokenResult();
				const user = userMapper(token.claims);
				set(user);
			} else {
				set(null);
			}
		});

		return unsub;
	});

	return {
		user,
		loginWithGoogle,
		loginWithEmailPassword,
		createNewUser,
		logout
	};
};
