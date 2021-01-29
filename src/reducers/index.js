import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import postReducer from './postsReducer';

export default combineReducers({
	form: formReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	post: postReducer
});
