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

const Room = ({
  _id,
  name,
  leatestMessage,
  time,
  onSelectRoom,
}) => (
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

const RoomList = ({ rooms, onSelectRoom }) => (
  <Content>
    <List
      dataArray={rooms}
      renderRow={room => <Room {...room} onSelectRoom={onSelectRoom} />}
    />
  </Content>
)

export default RoomList
