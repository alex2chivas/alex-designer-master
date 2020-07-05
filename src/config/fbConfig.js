import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/storage';
import 'firebase/auth';

// Initialize Firebase
export const config = {
	apiKey: 'AIzaSyAOJwk3u8NXMNA5FShY8Lk831xDlc16S8Q',
	authDomain: 'design-project-f36fd.firebaseapp.com',
	databaseURL: 'https://design-project-f36fd.firebaseio.com',
	projectId: 'design-project-f36fd',
	storageBucket: 'design-project-f36fd.appspot.com',
	messagingSenderId: '538102459582',
	appId: '1:538102459582:web:688c09a5b95b064d5142ef',
	measurementId: 'G-NJRC3Z3XV7'
};

firebase.initializeApp(config);

export const firebaseAppAuth = firebase.auth();

export const providers = {
	googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const storage = firebase.storage();

export { storage, firebase as default };
