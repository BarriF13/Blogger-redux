import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchUser} from '../actions'


class UserHeader extends Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }
  render() {
    //need to call the action creator below to get the user names 
    return (
      <div>
        User Header 
      </div>
    )
  }
}

export default connect(null, {fetchUser})(UserHeader)
;