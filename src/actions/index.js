import jsonPlaceholder from '../apis/jsonPlaceholder';

//export const fetchPosts = ()=>
//dispatch : we can change any data we want 
//getState : we can read any data we want in the whole app
// return async function(dispatch, getState) {
//   const response =await  jsonPlaceholder.get('/posts')
// dispatch({ type: 'FETCH_POSTS', payload: response })
// };
//----------Refactor ---defining a function which returning function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response })
};

