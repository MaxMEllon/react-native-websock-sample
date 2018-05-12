// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import RoomList from '../presenters/RoomList'
import { fetchRooms } from '../actions'

type Rooms = {
  _id: number,
  name: string,
}

class RoomListContainer extends Component {
  static navigationOptions = {
    title: 'トーク'
  }

  componentDidMount() {
    if (this.props.rooms === null) this.props.fetchRooms()
  }

  onSelectRoom = (params: Rooms) => {
    this.props.navigation.navigate('Message', params)
  }

  render() {
    const { rooms } = this.props
    if (rooms === null) return <View></View>
    return (
      <RoomList
        rooms={rooms}
        onSelectRoom={this.onSelectRoom}
      />
    )
  }
}

export default connect(state => ({ rooms: state.rooms }), { fetchRooms })(RoomListContainer)
