import React, { Component } from 'react'
import styled from 'styled-components/native'
import { GiftedChat } from 'react-native-gifted-chat'
import Spinner from './atoms/Spinner'

const Wrapper = styled.View`
  flex: 1;
`

/* eslint no-underscore-dangle: [0] */
export default class Message extends Component {
  render() {
    const { my, messages, onSend } = this.props
    if (my === null) return <Spinner />
    return (
      <Wrapper>
        <GiftedChat messages={messages} onSend={onSend} user={{ ...my }} />
      </Wrapper>
    )
  }
}
