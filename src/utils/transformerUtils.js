import moment from 'moment-timezone'
import { DATE_FORMAT, TIME_FORMAT } from 'constants/formats'
import get from 'lodash/get'

export const dateToISOString = dateStr => {
    return dateStr ? moment(dateStr).toISOString() : null
}

export const getUserName = (user = {}) => {
    const { firstName = '', lastName = '' } = user
    return lastName ? `${firstName} ${lastName}` : firstName
}

export const getDisplayName = (user = {}) => {
    const email = get(user, 'primaryEmail.email', '')
    const username = get(user, 'lastName', '') ? `${get(user, 'firstName', '')} ${get(user, 'lastName', '')}` : ''
    const displayName = email || username || 'System'

    return displayName
}

export const getDatetime = (date, time, timezone) => {
    return moment
        .tz(`${date} ${time}`, `${DATE_FORMAT} ${TIME_FORMAT}`, timezone)
        .utc()
        .format()
}

export const getDiscountType = (hasDiscountedBookings, hasNonDiscountedBookings) => {
    if (hasDiscountedBookings && hasNonDiscountedBookings) {
        return 'both'
    }
    if (hasDiscountedBookings && !hasNonDiscountedBookings) {
        return 'discountedBookings'
    }
    return 'nonDiscountedBookings'
}
