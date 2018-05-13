// @flow

import React from 'react'
import { ListItem, Body, Right, Text } from 'native-base'
import type { Room } from '../types'

type Props = Room & {
  onSelectRoom: (_id: number, name: string) => any,
}

const RoomComponent = ({ _id, name, leatestMessage, time, onSelectRoom }: Props) => (
  <ListItem avator button onPress={() => onSelectRoom(_id, name)}>
    <Body>
      <Text>{name}</Text>
      <Text note>{leatestMessage}</Text>
    </Body>
    <Right>
      <Text note>{time}</Text>
    </Right>
  </ListItem>
)

export default RoomComponent
