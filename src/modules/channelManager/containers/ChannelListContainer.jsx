import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'appActions'
import ChannelList from '../components/ChannelList'

class ChannelListContainer extends Component {
    render() {
        return <ChannelList {...this.props} />
    }
}

const mapStateToProps = state => ({
    channels: state.tvShow.channelList,
    totalCount: state.tvShow.totalCount,
    isLoadingGetAllChannel: state.tvShow.isLoadingGetAllShow
})

const mapDispatchToProps = dispatch => ({
    getChannels: options => dispatch(actions.CHANNEL.TVSHOW_GET_ALL_REQUEST(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListContainer)
