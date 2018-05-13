// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageComponent from '../presenters/Message'
import { postMessage, connectSocketServer, disconnectSocketServer } from '../actions'
import type { User, Message } from '../types'

type Props = {
  my: User,
  messages: Array<Message>,
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
    return <MessageComponent messages={messages} my={my} onSend={postMessage} />
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
