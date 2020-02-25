import { generateApiActions } from 'utils/reduxHelper'

export const actions = {
    ...generateApiActions('tvShow', ['GET', 'GET_ALL', 'SEARCH']),
    ...generateApiActions('season', ['GET'])
}
