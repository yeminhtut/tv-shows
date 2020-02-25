import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'appActions'
import ChannelDetailsPage from '../components/ChannelDetailsPage'

class ChannelDetailsContainer extends Component {
    render() {
        return <ChannelDetailsPage {...this.props} />
    }
}

const mapStateToProps = state => ({
    firstAirDate: state.tvShow.channel.firstAirDate,
    name: state.tvShow.channel.name,
    posterPath: state.tvShow.channel.posterPath,
    creators: state.tvShow.channel.creators,
    genres: state.tvShow.channel.genres,
    id: state.tvShow.channel.id,
    numberOfSeasons: state.tvShow.channel.numberOfSeasons,
    overview: state.tvShow.channel.overview,
    backdropPath: state.tvShow.channel.backdropPath,
    seasons: state.tvShow.channel.seasons,
    video: state.tvShow.channel.video
})

const mapDispatchToProps = dispatch => ({
    getShowDetail: options => {
        dispatch(actions.CHANNEL.TVSHOW_GET_REQUEST(options))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetailsContainer)
