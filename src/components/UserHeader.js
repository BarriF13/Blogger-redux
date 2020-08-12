import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchUser} from '../actions'


class UserHeader extends Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }
  render() {
    //need to call the action creator below to get the user names 
    const user = this.props.users.find((user)=> user.id === this.props.userId);
    if(!user) {
      return null;
    }
    return (
      <div className="header">
        {user.name}
      </div>
    )
  }
}
const mapToStateProps=state =>{
  return { users : state.users};
};
export default connect(
  mapToStateProps, 
  {fetchUser})
  (UserHeader)
; 