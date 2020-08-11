import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';


export default combineReducers({
  // passing object just to pass error 
posts: PostsReducer

}); 