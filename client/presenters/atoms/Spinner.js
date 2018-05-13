// @flow

import React from 'react'
import styled from 'styled-components/native'
import SpinKit from 'react-native-loading-spinner-overlay'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Spinner = () => (
  <Wrapper>
    <SpinKit
      visible
      textContent="読み込み中"
      textStyle={{ color: '#fff' }}
      overlayColor="rgba(0, 0, 0, .1)"
      size="large"
    />
  </Wrapper>
)

export default Spinner
