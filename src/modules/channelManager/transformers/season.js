import moment from 'moment'
import { DATE_FORMAT } from 'constants/formats'

const season = {
    toState: data => ({
        airDate: data.air_date ? moment(data.air_date).format(`${DATE_FORMAT}`) : '-',
        episodes: data.episodes,
        id: data.id || '',
        name: data.name || '',
        overview: data.overview,
        posterPath: data.poster_path,
        seasonNumber: data.season_number
    })
}

export default season
