import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../presenters/Message'

class MessageContainer extends Component {
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
