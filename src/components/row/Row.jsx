import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row as AntdRow } from 'antd'

class Row extends Component {
    render() {
        const { align, children, className, gutter, justify, style, type } = this.props

        return (
            <AntdRow align={align} className={className} gutter={gutter} justify={justify} style={style} type={type}>
                {children}
            </AntdRow>
        )
    }
}

Row.propTypes = {
    align: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    gutter: PropTypes.number,
    justify: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string
}
Row.defaultProps = {
    align: 'top',
    gutter: 0,
    justify: 'start'
}
export default Row
