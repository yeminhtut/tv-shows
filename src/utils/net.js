import axios from 'axios'
import qs from 'qs'
import config from '../../config'
import omitBy from 'lodash/omitBy'

// @see https://github.com/ljharb/qs
const qsConfig = {
    arrayFormat: 'repeat',
    filter: (prefix, params) => {
        //remove params if it has empty string value
        if (!prefix) {
            return omitBy(params, val => val === '')
        }
        return params
    }
}

const defaultRequestConfig = {
    baseURL: config.apiHost,
    timeout: config.networkTimeout,
    paramsSerializer: params => qs.stringify(params, qsConfig),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const agent = axios.create({ ...defaultRequestConfig })

const appendHeader = axiosConfig => {
    return axiosConfig
}

const errorHandler = error => {
    return Promise.reject(error)
}

agent.interceptors.request.use(appendHeader, errorHandler)

const get = (uri, options = {}) => {
    return agent.get(uri, options)
}

export { get }
