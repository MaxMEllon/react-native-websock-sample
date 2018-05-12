// @flow

import { delay } from 'redux-saga'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import type { Rooms } from '../types'
import API from '../fetchr/ChatSampleServer'

function* roomsTask(action): any {
  try {
    const rooms: Rooms = yield call(API.getRooms)
    yield delay(300)
    yield put(actions.successFetchRooms(rooms))
  } catch (e) {
    yield put(actions.failFetchRooms(e))
  }
}

export default function* rootSaga(): any {
  /* eslint no-underscore-dangle: [0] */
  yield takeLatest(actions.fetchRooms._t, roomsTask)
}
