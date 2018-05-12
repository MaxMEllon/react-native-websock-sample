// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../presenters/Message'

type Props = {
  navigation: any,
}

class MessageContainer extends Component<Props> {
  static navigationOptions = (opt) => {
    return {
      title: opt.navigation.state.params.name
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <Message
        navigation={navigation}
      />
    )
  }
}

export default connect(state => state)(MessageContainer)
