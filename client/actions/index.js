// @flow

import {
  buildActionCreator,
  type ActionCreator,
} from 'hard-reducer'

const { createAction } = buildActionCreator()

export const fetchRooms: ActionCreator<null> = createAction('fetch belong rooms')
export const successFetchRooms: ActionCreator<any> = createAction('successes get rooms from server')
export const failFetchRooms: ActionCreator<any> = createAction('failures get rooms from server')

