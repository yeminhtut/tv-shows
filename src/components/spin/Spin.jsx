import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spin as AntdSpin } from 'antd'

class Spin extends Component {
    render() {
        const { className, delay, indicator, size, spinning, children } = this.props

        return (
            <div className={`spinner ${className}`}>
                <AntdSpin delay={delay} indicator={indicator} size={size} spinning={spinning}>
                    {children}
                </AntdSpin>
            </div>
        )
    }
}

Spin.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    delay: PropTypes.number,
    indicator: PropTypes.node,
    size: PropTypes.oneOf(['default', 'large', 'small']),
    spinning: PropTypes.bool,
    tip: PropTypes.string
}
Spin.defaultProps = {
    className: '',
    size: 'default',
    tip: ''
}
export default Spin
