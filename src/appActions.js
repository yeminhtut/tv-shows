import { generateReduxActions } from './utils/reduxHelper'
import { actions as channelActions } from './modules/channelManager/action'
const { actions, actionTypes } = generateReduxActions([
    {
        namespace: 'CHANNEL',
        actions: channelActions
    }
])

export { actions, actionTypes }
