import history from '../history';
import {
	CREATE_POST,
	FETCH_POST,
	// FETCH_POSTS,
	DELETE_POST,
	EDIT_POST,
	CREATE_POST_ERROR
} from './types';

import firebase, { config } from '../config/fbConfig';

const tryBlock = async (dispatch, response, typePost) => {
	try {
		await dispatch({ type: typePost, response });
		if (typePost !== 'FETCH_POST') {
			history.push('/design/collection');
		}
	} catch (error) {
		dispatch({ type: CREATE_POST_ERROR, error });
		history.push('/design/collection');
	}
};

export const createPost = formValues => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const { picture, title, description } = formValues;
	const storage = firebase.storage().ref('collections');
	await storage.child(`${picture[0].name}`).put(picture[0]).then(async () => {
		const imageUrl = await `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/collections%2F${picture[0]
			.name}?alt=media`;
		const firestore = await getFirestore();
		const response = await firestore.collection('collections').add({
			title: title,
			description: description,
			picture: imageUrl,
			time: new Date()
		});
		tryBlock(dispatch, response, CREATE_POST);
	});
};

export const editPost = (id, formValues) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = await getFirestore();
	const response = await firestore.collection('collections').doc(`${id}`).set({
		...formValues
	});

	tryBlock(dispatch, response, EDIT_POST);
};

export const deletePost = (id, formValues) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = await getFirestore();
	const response = await firestore.collection('collections').doc(`${id}`).delete();

	tryBlock(dispatch, response, DELETE_POST);
};

export const fetchPost = id => async (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = await getFirestore();
	const response = await firestore.collection('collections').doc(`${id}`).get();

	tryBlock(dispatch, response, FETCH_POST);
};

// export const fetchPosts = () => async (dispatch, getState, { getFirebase, getFirestore }) => {
// 	const firestore = await getFirestore();
// 	const response = await firestore.collection('collections').get();

// 	//tryBlock(dispatch, response, FETCH_POSTS);
// };
