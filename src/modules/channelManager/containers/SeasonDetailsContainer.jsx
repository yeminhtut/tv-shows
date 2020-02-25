import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'appActions'
import SeasonDetailsPage from '../components/SeasonDetailsPage'

class SeasonDetailsContainer extends Component {
    render() {
        return <SeasonDetailsPage {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        name: state.tvShow.season.name,
        posterPath: state.tvShow.season.posterPath,
        episodes: state.tvShow.season.episodes,
        seasonNumber: state.tvShow.season.seasonNumber,
        overview: state.tvShow.season.overview
    }
}

const mapDispatchToProps = dispatch => ({
    getSeasonDetail: options => {
        dispatch(actions.CHANNEL.SEASON_GET_REQUEST(options))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonDetailsContainer)
