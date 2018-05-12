// @flow

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Message from '../presenters/Message'
import RoomList from '../presenters/RoomList'

export default createStackNavigator({
  RoomList: { screen: RoomList },
  Message: { screen: Message },
}, {
  initalRouteName: RoomList,
})

