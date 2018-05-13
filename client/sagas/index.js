/* eslint no-underscore-dangle: [0] */

import { delay } from 'redux-saga'
import { fork, put, select, call, takeLatest } from 'redux-saga/effects'
import { last } from 'lodash/fp'
import client from 'socket.io-client'
import * as actions from '../actions'
import type { Rooms } from '../types'
import API from '../fetchr/ChatSampleServer'
import socketInitalizer from '../socket-handler'

function* roomsTask(action): any {
  try {
    const rooms: Rooms = yield call(API.getRooms)
    yield delay(300)
    yield put(actions.successFetchRooms(rooms))
  } catch (e) {
    yield put(actions.failFetchRooms(e))
  }
}

function* messageTask(): any {
  yield takeLatest(actions.connectSocketServer._t, function* socketConnectTask() {
    const { socket } = yield select()
    const nextSocket = socket.instance || client('http://localhost:3000')
    if (!nextSocket.eventRegistered) socketInitalizer(nextSocket)
    yield put(
      actions.storedSocketInstance({
        socket: {
          instance: nextSocket,
          eventRegistered: true,
        },
      }),
    )
  })

  yield takeLatest(actions.disconnectSocketServer._t, function* socketDisconnectTask() {
    const { socket } = yield select()
    socket.instance.disconnect()
    yield put(
      actions.storedSocketInstance({
        socket: {
          instance: null,
          eventRegistered: false,
        },
      }),
    )
  })

  yield takeLatest(actions.postMessage._t, function* postMessageTask(actions) {
    const { socket } = yield select()
    const { payload } = actions
    socket.instance.emit('message/to-server', last(payload))
  })
}

export default function* rootSaga(): any {
  yield takeLatest(actions.fetchRooms._t, roomsTask)
  yield fork(messageTask)
}
