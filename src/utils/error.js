import some from 'lodash/some'
import find from 'lodash/find'
import get from 'lodash/get'
import isString from 'lodash/isString'
import isFunction from 'lodash/isFunction'

// if any function return true, then won't show error message
export const errorMessageBlacklist = []

// return custom error message
export const errorMessageRules = [
    err => {
        if (err.status === 400 && get(err, 'data.errors.0.code', '') === 'RequiredFieldMissing') {
            return get(err, 'data.errors.0.message', '')
        }
    }
]

export const shouldShowErrorMessage = (error, rules) => {
    return !some(rules, rule => rule(error))
}

export const getErrorMessageByRules = (error, rules) => {
    const ruleFunction = find(rules, rule => isString(rule(error)))
    if (isFunction(ruleFunction)) {
        return ruleFunction(error)
    }
    return get(error, 'data.errors.0.message', JSON.stringify(error.data))
}

export const getErrorMessage = (error, errorMessageBlacklist, errorMessageRules) => {
    const newError = {
        config: error.config || {},
        data: error.data || {},
        headers: error.headers || {},
        status: error.status || '',
        statusText: error.statusText || ''
    }
    newError.url = newError.config.url || ''

    if (!shouldShowErrorMessage(newError, errorMessageBlacklist)) return null
    return getErrorMessageByRules(newError, errorMessageRules)
}
