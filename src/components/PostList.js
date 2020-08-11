import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';


export class PostList extends Component {

  componentDidMount(){
    //action creator 
    this.props.fetchPosts();
  }
  renderList(){
    
  }
  render() {
    console.log(this.props.posts);
    return (
      <div className="item">
      Post list 
      </div>
    )
  }
}
//passing data from redux to react with below function-- and state below will have property of post because we assign to it in reducers/index.js
const mapStateToProps = state => {
  return {posts: state.posts};
}
export default connect(
  //null, 
  mapStateToProps,
  {fetchPosts}
  )(PostList);
