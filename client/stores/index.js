import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../sagas'
import reducer from '../reducers'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const middlewares = []
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
middlewares.push(sagaMiddleware)

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose

const createMyStore = () => {
  const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))
  sagaMiddleware.run(rootSaga)
  return store
}

export default createMyStore()
