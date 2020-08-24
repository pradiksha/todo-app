import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import { fork } from 'redux-saga/effects'
import rootReducer from "../Reducer"
import todoSaga from "Todo/Components/saga"
//import usersSaga from "Users/Components/saga"

const isLogger = true

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if (isLogger) middleware.push(logger)

function* rootSaga() {
  yield fork(todoSaga)
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
