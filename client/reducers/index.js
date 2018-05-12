// @flow

import { createReducer } from 'hard-reducer'
import * as actions from '../actions'

type State = {
  value: number,
}

const initialState: State = {
  value: 0
}

const reducer =
  createReducer(initialState)
    .case(actions.inc, (state, payload) => {
      return {
        value: state.value + payload
      }
    })

export default reducer
