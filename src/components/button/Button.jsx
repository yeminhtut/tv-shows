import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button as AntdButton, Icon } from 'antd'

class Button extends Component {
    render() {
        const {
            className,
            customIcon,
            disabled,
            ghost,
            name,
            hasCustomIcon,
            htmlType,
            icon,
            loading,
            onClick,
            onFocus,
            onMouseEnter,
            onMouseLeave,
            shape,
            size,
            type,
            value
        } = this.props

        return (
            <AntdButton
                className={className}
                disabled={disabled}
                ghost={ghost}
                htmlType={htmlType}
                icon={icon}
                loading={loading}
                name={name}
                onClick={onClick}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                shape={shape}
                size={size}
                type={type}
            >
                {hasCustomIcon && <Icon className='custom-icon' component={customIcon} style={{ fontSize: '16px' }} />}
                {value}
            </AntdButton>
        )
    }
}

Button.propTypes = {
    className: PropTypes.string,
    customIcon: PropTypes.elementType,
    disabled: PropTypes.bool,
    ghost: PropTypes.bool,
    hasCustomIcon: PropTypes.bool,
    htmlType: PropTypes.string,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    shape: PropTypes.string,
    size: PropTypes.oneOf(['default', 'small', 'large']),
    type: PropTypes.oneOf(['default', 'danger', 'dashed', 'ghost', 'primary']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}
Button.defaultProps = {
    disabled: false,
    hasCustomIcon: false,
    htmlType: 'button',
    loading: false,
    size: 'default',
    type: 'default'
}
export default Button
