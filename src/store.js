import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import appReducer from './appReducers'
import { rootEpic } from './middleware/epics'
import errorHandler from './middleware/errorHandler'

const epicMiddleware = createEpicMiddleware()
let store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware, errorHandler))
)

epicMiddleware.run(rootEpic)

export default store
