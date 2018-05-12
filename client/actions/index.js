// @flow

import { buildActionCreator, type ActionCreator } from 'hard-reducer'
import type { Rooms } from '../types'

const { createAction } = buildActionCreator({ prefix: 'room: ' })

export const fetchRooms: ActionCreator<null> = createAction('fetch belong rooms')
export const successFetchRooms: ActionCreator<Rooms> = createAction(
  'successes get rooms from server',
)
export const failFetchRooms: ActionCreator<any> = createAction('failures get rooms from server')
