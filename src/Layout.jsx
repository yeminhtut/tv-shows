import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from 'components'
import { Layout as AntdLayout } from 'antd'
const { Content } = AntdLayout

class Layout extends Component {
    render() {
        const { children } = this.props

        return (
            <div className='layout'>
                <Header />
                <div style={{ background: '#f0f2f5' }}>
                    <Content>
                        <div className='layout__main'>{children}</div>
                    </Content>
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node,
    retrieveInitData: PropTypes.func
}

export default Layout
