import * as api from '../api';
import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

//Action Creators
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log('FETCH_ALL : ', error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log('CREATE : ', error.message);
	}
};

export const updatePost = (id , post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log('UPDATE : ', error.message);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log('DELETE : ', error.message);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log('LIKE : ', error.message);
	}
};