import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomList from '../presenters/RoomList'
import { inc } from '../actions'

class RoomListContainer extends Component {
  render() {
    const { navigation } = this.props
    return (
      <RoomList
        navigation={navigation}
      />
    )
  }
}

export default connect(state => state, { inc })(RoomListContainer)
