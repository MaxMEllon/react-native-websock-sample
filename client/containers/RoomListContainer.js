// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import RoomList from '../presenters/RoomList'
import { fetchRooms } from '../actions'
import Spinner from '../presenters/atoms/Spinner'

type Rooms = {
  _id: number,
  name: string,
}

type Props = {
  rooms: any,
  navigation: any,
  fetchRooms: Function,
}

class RoomListContainer extends Component<Props> {
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
    if (rooms === null) return <Spinner />
    return (
      <RoomList
        rooms={rooms}
        onSelectRoom={this.onSelectRoom}
      />
    )
  }
}

export default connect(state => ({ rooms: state.rooms }), { fetchRooms })(RoomListContainer)
