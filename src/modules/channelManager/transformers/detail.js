import map from 'lodash/map'
import moment from 'moment'
import get from 'lodash/get'

const detail = {
    toState: data => ({
        backdropPath: data.backdrop_path,
        companies: data.production_companies,
        creators: map(data.created_by, creator => creator.name),
        firstAirDate: data.first_air_date ? moment(data.first_air_date).format('MMM Do YYYY') : '',
        genres: map(data.genres, genre => genre.name),
        id: data.id,
        languages: data.languages,
        lastAirDate: data.last_air_date,
        lastEpisodeToAir: data.last_episode_to_air || null,
        name: data.name,
        numberOfEpisodes: data.number_of_episodes,
        numberOfSeasons: data.number_of_seasons,
        networks: data.networks,
        nextEpisodeToAir: data.next_episode_to_air,
        overview: data.overview,
        popularity: data.popularity,
        posterPath: data.poster_path,
        seasons: data.seasons,
        video: get(data, 'videos.results', []),
        voteAverage: data.vote_average
    })
}

export default detail
