import { actionTypes } from 'appActions'
import { generateDefaultState, handleGeneratedApiActions } from 'utils/reduxHelper'

const defaultState = {
    ...generateDefaultState('channel', ['GET_ALL', 'GET']),
    ...generateDefaultState('season', ['GET'])
}

function tvshowReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANNEL.TVSHOW_GET_ALL_REQUEST:
            return {
                ...state,
                isLoadingGetAllShow: true,
                error: null
            }

        case actionTypes.CHANNEL.TVSHOW_GET_ALL_RESPONSE:
            return {
                ...state,
                isLoadingGetAllShow: false,
                error: action.error,
                channelList: action.payload.list,
                totalCount: action.payload.totalCount
            }

        case actionTypes.CHANNEL.TVSHOW_GET_REQUEST:
            return {
                ...state,
                isLoadingGetTvShow: true,
                error: null
            }

        case actionTypes.CHANNEL.TVSHOW_GET_RESPONSE:
            return {
                ...state,
                channel: action.payload.data,
                isLoadingGetTvShow: false,
                error: action.error
            }

        case actionTypes.CHANNEL.SEASON_GET_REQUEST:
            return {
                ...state,
                isLoadingGetSeason: true,
                error: null
            }

        case actionTypes.CHANNEL.SEASON_GET_RESPONSE:
            return {
                ...state,
                season: action.payload.data,
                isLoadingGetSeason: false,
                error: action.error
            }

        default:
            return handleGeneratedApiActions(state, action, 'CHANNEL')
    }
}

export { tvshowReducer, defaultState }
