import React, { Component } from 'react';
import { connect } from 'react-redux';
import {   fetchPostsAndUsers } from '../actions';
import UserHeader from '../components/UserHeader';


export class PostList extends Component {

  componentDidMount() {
    //action creator 
    this.props.fetchPostsAndUsers();
  }
  //make a function just for rendering the list 
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.posts);
    return (
      <div className="ui relaxed divided list">
       {this.renderList()}
      </div>
    )
  }
}
//passing data from redux to react with below function-- and state below will have property of post because we assign to it in reducers/index.js
const mapStateToProps = state => {
  return { posts: state.posts };
}
export default connect(
  //null, 
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
