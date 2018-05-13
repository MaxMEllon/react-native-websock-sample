// @flow

import React from 'react'
import styled from 'styled-components/native'
import { GiftedChat } from 'react-native-gifted-chat'
import Spinner from './atoms/Spinner'
import type { User, Message } from '../types'

const Wrapper = styled.View`
  flex: 1;
`

type Props = {
  my?: User,
  messages: Array<Message>,
  onSend: any,
}

export default function MessageComponent(props: Props) {
  const { my, messages, onSend } = props
  if (my === null) return <Spinner />
  return (
    <Wrapper>
      <GiftedChat messages={messages} onSend={onSend} user={{ ...my }} />
    </Wrapper>
  )
}
