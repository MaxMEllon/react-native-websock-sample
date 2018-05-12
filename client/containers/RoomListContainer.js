// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import RoomList from '../presenters/RoomList'
import { fetchRooms } from '../actions'
import Spinner from '../presenters/atoms/Spinner'


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

  onSelectRoom = (_id: number, name: string): any => {
    this.props.navigation.navigate('Message', { _id, name })
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
