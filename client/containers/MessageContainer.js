// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../presenters/Message'
import { postMessage, connectSocketServer, disconnectSocketServer } from '../actions'
import type { User } from '../types'

type Props = {
  my: User,
  postMessage: any,
  connectSocketServer: any,
  disconnectSocketServer: any,
}

class MessageContainer extends Component<Props> {
  static navigationOptions = opt => ({
    title: opt.navigation.state.params.name,
  })

  componentDidMount() {
    this.props.connectSocketServer()
  }

  componentWillUnmount() {
    this.props.disconnectSocketServer()
  }

  render() {
    const { messages, postMessage, my } = this.props
    return <Message messages={messages} my={my} onSend={postMessage} />
  }
}

export default connect(
  state => ({
    messages: state.messages,
    my: state.my,
  }),
  {
    postMessage,
    connectSocketServer,
    disconnectSocketServer,
  },
)(MessageContainer)
