/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]
const { logger } = require('redux-logger')

const store = createStore(
  combineReducers({ ...rootReducer }),
  applyMiddleware(...middleware, logger),
)

export default store
