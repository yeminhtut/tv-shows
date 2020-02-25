import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ChannelListContainer from './containers/ChannelListContainer'
import ChannelDetailsContainer from './containers/ChannelDetailsContainer'
import SeasonDetailsContainer from './containers/SeasonDetailsContainer'

class route extends Component {
    render() {
        return (
            <Switch>
                <Route component={SeasonDetailsContainer} path='/tv-shows/:id/season/:seasonNumber' />
                <Route component={ChannelDetailsContainer} path='/tv-shows/:id' />
                <Route component={ChannelListContainer} path='/' />
            </Switch>
        )
    }
}

export default route
