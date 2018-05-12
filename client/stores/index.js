import { createLogger } from 'redux-logger'
// import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
// import rootSaga from './sagas'
import reducer from '../reducers'

const logger = createLogger()

const createMyStore = () => {
  const middlewares = []
  // const sagaMiddleware = createSagaMiddleware()
  middlewares.push(logger)
  // middlewares.push(sagaMiddleware)
  const store = compose(applyMiddleware(...middlewares))(createStore)(reducer)
  // sagaMiddleware.run(rootSaga)
  return store
}

export default createMyStore()
