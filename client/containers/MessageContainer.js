import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../presenters/Message'

class MessageContainer extends Component {
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
