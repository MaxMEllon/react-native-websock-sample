// @flow

import { createReducer } from 'hard-reducer'
import {
  successFetchRooms,
  failFetchRooms,
} from '../actions'

type State = {
  rooms: any,
}

const initialState: State = {
  rooms: null,
}

const reducer = createReducer(initialState)
  .case(successFetchRooms, (state, payload) => {
    return {
      rooms: payload.rooms,
    }
  })
  .case(failFetchRooms, (state, payload) => {
    return state
  })

export default reducer
