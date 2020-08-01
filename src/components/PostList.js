import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';
export class PostList extends Component {

  componentDidMount(){
    //action creator 
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="item">
      
      </div>
    )
  }
}

export default connect(null, {fetchPosts})(PostList);
