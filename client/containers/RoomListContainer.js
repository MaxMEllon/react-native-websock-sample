// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import RoomList from '../presenters/RoomList'
import { fetchRooms } from '../actions'
import Spinner from '../presenters/atoms/Spinner'
import type { Rooms } from '../types'

type Props = {
  rooms: Rooms,
  navigation: any,
  fetchRooms: Function,
}

class RoomListContainer extends Component<Props> {
  onSelectRoom: (_id: number, name: string) => any

  static navigationOptions = {
    title: 'トーク',
  }

  constructor(props: Props) {
    super(props)
    this.onSelectRoom = this.onSelectRoom.bind(this)
  }

  componentDidMount() {
    if (this.props.rooms === null) this.props.fetchRooms()
  }

  onSelectRoom(_id: number, name: string) {
    this.props.navigation.navigate('Message', { _id, name })
  }

  render() {
    const { rooms } = this.props
    if (rooms === null) return <Spinner />
    return <RoomList rooms={rooms} onSelectRoom={this.onSelectRoom} />
  }
}

export default connect(state => ({ rooms: state.rooms }), { fetchRooms })(RoomListContainer)
