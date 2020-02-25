import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col as AntdCol } from 'antd'

class Col extends Component {
    render() {
        const { children, className, offset, order, pull, push, span, xs, sm, md, lg, xl, xxl } = this.props

        return (
            <AntdCol
                className={className}
                lg={lg}
                md={md}
                offset={offset}
                order={order}
                pull={pull}
                push={push}
                sm={sm}
                span={span}
                xl={xl}
                xs={xs}
                xxl={xxl}
            >
                {children}
            </AntdCol>
        )
    }
}

Col.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    lg: PropTypes.number,
    md: PropTypes.number,
    offset: PropTypes.number,
    order: PropTypes.number,
    pull: PropTypes.number,
    push: PropTypes.number,
    sm: PropTypes.number,
    span: PropTypes.number,
    xl: PropTypes.number,
    xs: PropTypes.number,
    xxl: PropTypes.number
}
export default Col
