import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCL3pktI2E-XWUO71YfW5e8GqH2BwHJhgc',
	authDomain: 'scott-collier-web-dev.firebaseapp.com',
	projectId: 'scott-collier-web-dev',
	storageBucket: 'scott-collier-web-dev.appspot.com',
	messagingSenderId: '328823740857',
	appId: '1:328823740857:web:fd4d9b0b8821819f4dbe68',
	measurementId: 'G-V1V2JQQJYF'
};

const firebase = initializeApp(config);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const db = getFirestore(firebase);

export const auth = getAuth(firebase);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const id = userAuth.uid;
	const userRef = doc(db, 'users', id);
	const userSnap = await getDoc(userRef);

	if (!userSnap.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(doc(db, 'users', id), {
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userSnap;
};

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		// This gives you a Google Access Token. You can use it to access the Google API.
		// const credential = GoogleAuthProvider.credentialFromResult(result);
		// const token = credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		// console.warn(credential, token, user);
		console.log(user.displayName);
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
