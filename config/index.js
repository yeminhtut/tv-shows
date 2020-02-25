import isObject from 'lodash/isObject'
import mapValues from 'lodash/mapValues'

const settings = {
    apiHost: {
        development: 'https://api.themoviedb.org/',
        production: 'https://api.themoviedb.org/'
    },
    networkTimeout: 60000
}

const env = process.env.BUILD_ENV

const config = mapValues(settings, item => {
    if (!isObject(item)) return item
    if (!item.development || !item.production) return item
    return item[env]
})

export default config
