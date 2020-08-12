import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import usersReducer from './userReducer';


export default combineReducers({
  // passing object just to pass error 
posts: PostsReducer,
users : usersReducer

}); 