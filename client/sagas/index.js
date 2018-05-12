import axios from 'axios'
import { fork, put, take, call, select, takeLatest, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as actions from '../actions'
import API from '../fetchr/ChatSampleServer'

function* roomsTask(action) {
  try {
    const rooms = yield call(API.getRooms)
    yield delay(1000)
    yield put(actions.successFetchRooms(rooms))
  } catch (e) {
    yield put(actions.failFetchRooms(e))
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.fetchRooms._t, roomsTask)
}
