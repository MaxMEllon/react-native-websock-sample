// @flow

import React from 'react'
import {
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import Room from './Room'

import type { Rooms } from '../types'

type Props = {
  rooms: Rooms,
  onSelectRoom: (_id: number, name: string) => any,
}

const RoomList = ({ rooms, onSelectRoom }: Props) => (
  <Content>
    <List
      dataArray={rooms}
      renderRow={room => <Room {...room} onSelectRoom={onSelectRoom} />}
    />
  </Content>
)

export default RoomList