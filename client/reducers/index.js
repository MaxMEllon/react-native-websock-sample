// @flow

import { createReducer } from 'hard-reducer'
import {
  successFetchRooms,
  failFetchRooms,
} from '../actions'
import type { Rooms, ReducerState } from '../types'

type State = ReducerState

const initialState: State = {
  rooms: null,
}

const reducer = createReducer(initialState)
  .case(successFetchRooms, (state: State, payload: Rooms) => {
    return {
      rooms: payload.rooms,
    }
  })
  .case(failFetchRooms, (state: State, payload: Rooms) => {
    return state
  })

export default reducer
