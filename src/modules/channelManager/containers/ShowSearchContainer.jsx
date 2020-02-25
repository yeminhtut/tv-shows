import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'appActions'
import SearchList from '../components/SearchList'

class ChannelListContainer extends Component {
    render() {
        return <SearchList {...this.props} />
    }
}

const mapStateToProps = state => ({
    channels: state.tvShow.channelList,
    totalChannelCount: state.tvShow.totalChannelCount,
    isLoadingGetAllChannel: state.tvShow.isLoadingGetAllShow
})

const mapDispatchToProps = dispatch => ({
    searchShow: options => dispatch(actions.CHANNEL.TVSHOW_SEARCH_REQUEST(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListContainer)
