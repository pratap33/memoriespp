import axios from 'axios';

const url = 'https://memoriesserver.azurewebsites.net/posts';

export const fetchPosts = async () => {
	let _res = await axios.get(url);
	// console.log('FETCH RESULT   :  ', _res);
	return _res;
};

export const createPost = async (newPost) => {
	let _res = await axios.post(url,newPost);
	// console.log('CREATE RESULT   :  ', _res);
	return _res;
};

export const updatePost = async (id,updatePost) => {
	let _res = await axios.patch(`${url}/${id}`,updatePost);
	// console.log('UPDATE RESULT   :  ', _res);
	return _res;
};

export const deletePost = async (id) => {
	let _res = await axios.delete(`${url}/${id}`);
	// console.log('DELETE RESULT   :  ', _res);
};

export const likePost = async (id) => {
	let _res = await axios.patch(`${url}/${id}/likepost`);
	//  console.log('LIKE RESULT   :  ', _res);
	return _res;
};
