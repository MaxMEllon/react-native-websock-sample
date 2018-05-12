import React from 'react'
import styled from 'styled-components/native'
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png'

const Rooms = ({ navigation }) => (
  <Content>
    <List>
      <ListItem avator>
        <Body>
          <Text>部屋名</Text>
          <Text note>最新のメッセージ....</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
      <ListItem avator>
        <Body>
          <Text>部屋名</Text>
          <Text note>最新のメッセージ....</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
      <ListItem avator>
        <Body>
          <Text>部屋名</Text>
          <Text note>最新のメッセージ....</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    </List>
  </Content>
)

Rooms.navigationOptions = {
  title: 'トーク',
}

export default Rooms
