// @flow

import React from 'react'
import { ListItem, Body, Right, Text } from 'native-base'

type Props = {
  _id: number,
  name: string,
  leatestMessage: string,
  time: string,
  onSelectRoom: (_id: number, name: string) => any,
}

const Room = ({ _id, name, leatestMessage, time, onSelectRoom }: Props) => (
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

export default Room
