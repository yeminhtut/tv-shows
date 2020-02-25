import qs from 'qs'
import omit from 'lodash/omit'

/**
 * Replace the url with given querys
 * @param {object} location - An object from react-router-dom, use withRouter to get the object.
 * @param {object} history - An object from react-router-dom, use withRouter to get the object.
 * @param {object} querys - The querys you want to append to url.
 * @param {array} omitKeys - These keys will be removed before adding the querys.
 *
 * @example
 * // replace the url with /pathname?id=1&isActive=false
 * addQueryString(location, history, {id: 1, q: 'hello', isActive: false}, ['q'])
 */
export function addQueryString(location, history, querys, omitKeys) {
    if (!location || !location.pathname) return
    let url = location.pathname
    const search = location.search.slice(1)
    const originalQuerys = qs.parse(search)
    const newQuerys = omit(originalQuerys, omitKeys)
    const queryString = qs.stringify(
        {
            ...newQuerys,
            ...querys
        },
        { arrayFormat: 'repeat' }
    )
    if (queryString) {
        url += '?' + queryString
        history.replace(url)
    } else {
        history.replace(url)
    }
}

export function parseQueryString(location) {
    if (!location) return {}
    let search = location.search
    if (search.indexOf('?') !== 0) return {}
    search = search.slice(1)
    return qs.parse(search, { arrayFormat: 'repeat' })
}
