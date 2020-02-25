import React, { Component } from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { Pagination as AntdPagination } from 'antd'
import { DEFAULT_PAGINATION_CONFIG } from 'constants/pagination'

class Pagination extends Component {
    getTotal = () => {
        const { total, maxSupportedCount } = this.props

        if (!maxSupportedCount) {
            return total
        }

        return total > maxSupportedCount ? maxSupportedCount : total
    }

    renderTotal = () => {
        const { total } = this.props
        return <span>{`Total ${total} items`}</span>
    }

    render() {
        const { defaultCurrent, defaultPageSize, size, current, pageSize, onChange } = this.props
        return (
            <AntdPagination
                current={current}
                defaultCurrent={defaultCurrent}
                defaultPageSize={defaultPageSize}
                onChange={(current, pageSize) => onChange(current, pageSize)}
                onShowSizeChange={(current, pageSize) => onChange(defaultCurrent, pageSize)}
                pageSize={pageSize}
                showQuickJumper={false}
                showTotal={() => this.renderTotal()}
                size={size}
                total={this.getTotal()}
            />
        )
    }
}

Pagination.propTypes = {
    current: PropTypes.number,
    defaultCurrent: PropTypes.number,
    defaultPageSize: PropTypes.number,
    maxSupportedCount: PropTypes.number,
    onChange: PropTypes.func,
    pageSize: PropTypes.number,
    size: PropTypes.string,
    total: PropTypes.number
}
Pagination.defaultProps = {
    defaultCurrent: DEFAULT_PAGINATION_CONFIG.defaultCurrent,
    defaultPageSize: DEFAULT_PAGINATION_CONFIG.defaultPageSize,
    maxSupportedCount: 0,
    onChange: noop,
    size: '',
    total: 0
}
export default Pagination
