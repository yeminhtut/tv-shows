import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Toggle, FormItem } from 'components'

class ReduxFormToggle extends Component {
    render() {
        const { input, label, meta, formItemProps, ...props } = this.props
        const { onChange, value, name } = input
        const { touched, error } = meta
        const isError = touched && !!error

        return (
            <FormItem
                hasFeedback={isError}
                help={isError && error}
                label={label}
                validateStatus={isError ? 'error' : undefined}
                {...formItemProps}
            >
                <Toggle {...props} name={name} onChange={onChange} value={value === true || value === 'true'} />
            </FormItem>
        )
    }
}

ReduxFormToggle.propTypes = {
    formItemProps: PropTypes.object,
    input: PropTypes.object.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    meta: PropTypes.object.isRequired
}

export default ReduxFormToggle
