// @flow

import React from 'react'
import { View } from 'react-native'
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

import type { Rooms } from '../types'

type Props = {
  _id: number,
  name: string,
  leatestMessage: string,
  time: string,
  onSelectRoom: (_id: number, name: string) => any,
}

const Room = ({
  _id,
  name,
  leatestMessage,
  time,
  onSelectRoom,
}: Props) => (
  <ListItem avator button onPress={() => onSelectRoom({ _id, name })}>
    <Body>
      <Text>{name}</Text>
      <Text note>{leatestMessage}</Text>
    </Body>
    <Right>
      <Text note>{time}</Text>
    </Right>
  </ListItem>
)

export default Room