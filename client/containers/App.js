// @flow

import React from 'react';
import { StackNavigator } from 'react-navigation';
import Dashboard from '../presenters/Dashboard'
import Chat from '../presenters/Chat'

export default StackNavigator({
  Chat: { screen: Chat },
  Dashboard: { screen: Dashboard },
}, {
  initalRouteName: Dashboard,
})

