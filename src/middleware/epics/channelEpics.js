import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import _map from 'lodash/map'

import { actionTypes, actions } from 'appActions'
import { transformApiToState } from 'modules/channelManager/transformer'
import * as Api from 'modules/channelManager/api'

export const getTvShowListEpic = action$ =>
    action$.pipe(
        ofType(actionTypes.CHANNEL.TVSHOW_GET_ALL_REQUEST),
        switchMap(action =>
            from(Api.getChannels(action.payload)).pipe(
                map(data =>
                    actions.CHANNEL.TVSHOW_GET_ALL_RESPONSE(null, {
                        list: _map(data.list, data => transformApiToState('list')(data)),
                        totalCount: data.totalCount,
                        totalPages: data.totalPages
                    })
                ),
                catchError(err => of(actions.CHANNEL.TVSHOW_GET_ALL_RESPONSE(err, {})))
            )
        )
    )

export const searchTvShowsEpic = action$ =>
    action$.pipe(
        ofType(actionTypes.CHANNEL.TVSHOW_SEARCH_REQUEST),
        switchMap(action =>
            from(Api.searchShow(action.payload)).pipe(
                map(data => {
                  return actions.CHANNEL.TVSHOW_SEARCH_RESPONSE(null, {
                      list: _map(data.list, data => transformApiToState('list')(data))
                  })
                }

                ),
                catchError(err => of(actions.CHANNEL.TVSHOW_SEARCH_RESPONSE(err, {})))
            )
        )
    )

export const getChannelEpic = action$ => {
    return action$.pipe(
        ofType(actionTypes.CHANNEL.TVSHOW_GET_REQUEST),
        switchMap(action =>
            from(Api.getChannel(action.payload)).pipe(
                map(data => {
                    return actions.CHANNEL.TVSHOW_GET_RESPONSE(null, {
                        data: transformApiToState('detail')(data)
                    })
                }),
                catchError(err => of(actions.CHANNEL.TVSHOW_GET_RESPONSE(err, {})))
            )
        )
    )
}

export const getSeasonEpic = action$ => {
    return action$.pipe(
        ofType(actionTypes.CHANNEL.SEASON_GET_REQUEST),
        switchMap(action =>
            from(Api.getSeason(action.payload)).pipe(
                map(data => {
                    return actions.CHANNEL.SEASON_GET_RESPONSE(null, {
                        data: transformApiToState('season')(data)
                    })
                }),
                catchError(err => of(actions.CHANNEL.SEASON_GET_RESPONSE(err, {})))
            )
        )
    )
}
