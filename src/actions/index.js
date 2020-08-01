import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = ()=>{
  //dispatch : we can change any data we want 
  //getState : we can read any data we want in the whole app
  return function(dispatch, getState) {
    const promise = jsonPlaceholder.get('/posts')
  return  {
      type: 'FETCH_POSTS',
      payload: res
    };
  }
};