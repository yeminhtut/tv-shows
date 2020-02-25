import React, { Component } from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import { Menu as AntdMenu } from 'antd'

class Menu extends Component {
    render() {
        const { className, mode, items, selectedKey, onClick } = this.props
        return (
            <AntdMenu className={className} mode={mode} onClick={onClick} selectedKeys={[selectedKey]}>
                {map(items, item => (
                    <AntdMenu.Item disabled={item.disabled} key={item.key}>
                        {item.label}
                    </AntdMenu.Item>
                ))}
            </AntdMenu>
        )
    }
}

Menu.propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            disabled: PropTypes.bool,
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ),
    mode: PropTypes.string,
    onClick: PropTypes.func,
    selectedKey: PropTypes.string
}
Menu.defaultProps = {
    className: '',
    items: [],
    mode: 'horizontal',
    selectedKey: ''
}
export default Menu
