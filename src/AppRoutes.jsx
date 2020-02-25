import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorNotFound from './pages/error_not_found'
import Layout from './Layout'
import ChannelManagerRoute from './modules/channelManager/route'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Layout>
                <Switch>
                    <Route component={ChannelManagerRoute} path='/' />
                    <Route component={ErrorNotFound} />
                </Switch>
            </Layout>
        </Switch>
    </BrowserRouter>
)

export default AppRoutes
