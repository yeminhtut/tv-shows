import moment from 'moment-timezone'
import { DATE_FORMAT, TIME_FORMAT } from 'constants/formats'

export const dateToISOString = dateStr => {
    return dateStr ? moment(dateStr).toISOString() : null
}

export const getDatetime = (date, time, timezone) => {
    return moment
        .tz(`${date} ${time}`, `${DATE_FORMAT} ${TIME_FORMAT}`, timezone)
        .utc()
        .format()
}
