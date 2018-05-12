// @flow

import {
  buildActionCreator,
  type ActionCreator,
} from 'hard-reducer'
import type { Rooms } from '../types'

const { createRoomAction } = buildActionCreator({ prefix: 'room/' })

export const fetchRooms: ActionCreator<null> = createRoomAction('fetch belong rooms')
export const successFetchRooms: ActionCreator<Rooms> = createRoomAction('successes get rooms from server')
export const failFetchRooms: ActionCreator<Rooms> = createRoomAction('failures get rooms from server')