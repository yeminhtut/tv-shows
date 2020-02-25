import { combineReducers } from 'redux'
import { tvshowReducer } from './modules/channelManager/reducer'

const appReducer = combineReducers({
    tvShow: tvshowReducer
})

export default appReducer
