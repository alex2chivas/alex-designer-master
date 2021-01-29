import { FETCH_POST, CREATE_POST_ERROR } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_POST:
			return state;
		case CREATE_POST_ERROR:
			console.log('create post error', action.error);
			return state;
		default:
			return state;
	}
};
