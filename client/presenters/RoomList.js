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

const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png'

const rooms = [
  {
    key: 1,
    _id: 1,
    name: 'room1',
    leatestMessage: '最新のメッセージ',
    time: '3:31 pm',
  },
  {
    key: 2,
    _id: 2,
    name: 'room2',
    leatestMessage: '最新のメッセージ',
    time: '3:35 pm',
  },
  {
    key: 3,
    _id: 3,
    name: 'room3',
    leatestMessage: '最新のメッセージ',
    time: '4:35 pm',
  },
]

const onSelectRoom = (navigation, id) => navigation.navigate('Message', id)

const Room = ({
  _id,
  name,
  leatestMessage,
  time,
  navigation,
}) => (
  <ListItem avator button onPress={() => onSelectRoom(navigation, _id)}>
    <Body>
      <Text>{name}</Text>
      <Text note>{leatestMessage}</Text>
    </Body>
    <Right>
      <Text note>{time}</Text>
    </Right>
  </ListItem>
)

const RoomList = ({ navigation }) => (
  <Content>
    <List
      dataArray={rooms}
      renderRow={room => <Room {...room} navigation={navigation} />}
    />
  </Content>
)

RoomList.navigationOptions = { title: 'トーク' }

export default RoomList
