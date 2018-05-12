// @flow

import {
  buildActionCreator,
  type ActionCreator,
} from 'hard-reducer'

const { createAction } = buildActionCreator()

export const inc: ActionCreator<number> = createAction('increments number')
