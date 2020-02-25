import { message as AntdMessage } from 'antd'
import noop from 'lodash/noop'
import config from '../../config'

const isShowingMessage = {}

const triggerMessage = (type, content = '[ no content ]', duration = config.messageDuration, onClose = noop) =>
    AntdMessage[type](content, duration, onClose)

const error = content => {
    if (isShowingMessage[content]) return
    isShowingMessage[content] = true
    triggerMessage('error', content, config.messageDuration, () => {
        isShowingMessage[content] = false
    })
}
const info = content => triggerMessage('info', content)
const success = content => triggerMessage('success', content)
const warning = content => triggerMessage('warning', content)

export { error, info, success, warning }
