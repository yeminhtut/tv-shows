import isObject from 'lodash/isObject'
import { error } from 'utils/message'
import { getErrorMessage, errorMessageBlacklist, errorMessageRules } from 'utils/error'

const errorHandler = () => next => action => {
    if (isObject(action.error) && action.error instanceof Error) {
        // eslint-disable-next-line no-console
        console.log('error', action.error)
        if (action.error.response) {
            // EOP errors
            const message = getErrorMessage(action.error.response, errorMessageBlacklist, errorMessageRules)
            if (message) {
                error(message)
            }
        } else if (!action.error.response && action.error.message) {
            // firebase errors or restaurant creation error (no state id)
            error(action.error.message)
        } else {
            // eslint-disable-next-line no-console
            console.warn(action.error)

            if (action.error.code === 'ECONNABORTED') {
                error('network timeout')
            } else {
                error('network error')
            }
        }
    }

    return next(action)
}

export default errorHandler
