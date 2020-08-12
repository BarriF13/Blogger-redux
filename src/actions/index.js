import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';




 export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
   //console.log('about to ...');
  await dispatch(fetchPosts());

  console.log(  getState().posts);
 }

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

// --with this solution you can not re fetch users so not a best solution 
// export const fetchUser = (id) =>  dispatch => {
//   _fetchUser(id, dispatch);
//  // const response = await jsonPlaceholder.get(`/users/${id}`);

//   // dispatch({ type: 'FETCH_POSTS', payload: response });
//   // dispatch({ type: 'FETCH_USER', payload: response.data });
// };

//---- for memoizing we need to make a function outside the action creator so we only call it once not each time
// _private function , not should be call unless you know your stuff 
// const _fetchUser = _.memoize( async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

//-- second solution for over fetching issue 
export const fetchUser = (id) => async dispatch => {

 const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
