import moment from 'moment'
import { DATE_FORMAT } from 'constants/formats'

const list = {
    toState: data => {
        return {
            firstAirDate: data.first_air_date ? moment(data.first_air_date).format(`${DATE_FORMAT}`) : '-',
            id: data.id || '',
            name: data.name || '',
            originCountry: data.origin_country || [],
            overview: data.overview,
            originalLanguage: data.original_language,
            popularity: data.popularity,
            posterPath: data.poster_path,
            voteAverage: data.vote_average,
            voteCount: data.vote_count
        }
    }
}

export default list
