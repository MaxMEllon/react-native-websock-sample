import React from 'react'
import Expo from 'expo'
import { Provider } from 'react-redux'
import App from './containers/App'
import store from './stores'

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

if (process.env.NODE_ENV === 'development') Expo.KeepAwake.activate()

Expo.registerRootComponent(Root)
