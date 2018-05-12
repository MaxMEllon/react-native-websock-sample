// @flow

import React from 'react';
import { createStackNavigator } from 'react-navigation'
import MessageContainer from './MessageContainer'
import RoomListContainer from './RoomListContainer'

export default createStackNavigator({
  RoomList: { screen: RoomListContainer },
  Message: { screen: MessageContainer },
}, {
  initalRouteName: RoomListContainer,
})

