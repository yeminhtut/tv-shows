import { get } from 'utils/net'
const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = '62e23da7b74c42cbcec47852fe7319c7'

export const getChannels = options => {
    const params = { language: 'en-US', ...options }
    return get(`${baseUrl}/discover/tv?api_key=${apiKey}`, { params }).then(res => {
        return {
            list: res.data.results,
            totalCount: res.data.total_results,
            totalPages: res.data.total_pages
        }
    })
}
export const getChannel = params => {
    return get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=${apiKey}&append_to_response=videos,images`).then(
        res => {
            return res.data
        }
    )
}

export const getSeason = params => {
    const { id, seasonNumber } = params
    return get(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${apiKey}&append_to_response=videos,images`
    ).then(res => {
        return res.data
    })
}

export const searchShow = options => {
    const params = {page: 1, ...options }
    return get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}`, { params }).then(
        res => ({
          list: res.data.results
        })
    )
}
