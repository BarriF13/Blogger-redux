import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


export class PostList extends Component {

  componentDidMount() {
    //action creator 
    this.props.fetchPosts();
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
  { fetchPosts }
)(PostList);
