import { applyMiddleware, combineReducers, createStore } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import * as reducers from './common/store/reducers'
import sagas from './common/store/sagas'

const saga = createSagaMiddleware.apply(this, sagas)

const logger = createLogger({
  collapsed: true
})

const createStoreWithMiddleware = applyMiddleware(
  logger,
  saga
)(createStore)

const rootReducer = combineReducers(reducers)

const store = createStoreWithMiddleware(rootReducer)

export default store

