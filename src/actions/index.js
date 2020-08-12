import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';
//import axios from 'axios';

//--dispatch : we can change any data we want 
//-- getState : we can read any data we want in the whole app

//export const fetchPosts = ()=>
// return async function(dispatch, getState) {
//   const response = await  jsonPlaceholder.get('/posts')
// dispatch({ type: 'FETCH_POSTS', payload: response })
// };
//----------Refactor ---defining a function which returning function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  // dispatch({ type: 'FETCH_POSTS', payload: response });
   dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = (id) => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   // dispatch({ type: 'FETCH_POSTS', payload: response });
//    dispatch({ type: 'FETCH_USER', payload: response.data });
// };

 //---for using memoize we need to write differently
 export const fetchUser =  function(id){
  return _.memoize(async function( dispatch) {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  // dispatch({ type: 'FETCH_POSTS', payload: response });
   dispatch({ type: 'FETCH_USER', payload: response.data });
  });
};