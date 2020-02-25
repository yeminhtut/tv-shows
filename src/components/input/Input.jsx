import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input as AntdInput } from 'antd'
import noop from 'lodash/noop'

class Input extends Component {
    handleChange = e => {
        const { onChange, name } = this.props
        onChange(e.target.value, name, e)
    }

    render() {
        const { autoComplete, className, disabled, name, placeholder, prefix, size, type, value } = this.props

        return (
            <AntdInput
                autoComplete={autoComplete}
                className={className}
                disabled={disabled}
                name={name}
                onChange={this.handleChange}
                placeholder={placeholder}
                prefix={prefix}
                size={size}
                type={type}
                value={value}
            />
        )
    }
}

Input.propTypes = {
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    size: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Input.defaultProps = {
    onChange: noop,
    placeholder: 'Enter data',
    size: 'default',
    type: 'text'
}
export default Input
