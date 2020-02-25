import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, FormItem } from 'components'

class ReduxFormInput extends Component {
    render() {
        const { input, meta, label, formItemProps, ...props } = this.props
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
                <Input {...props} name={name} onChange={onChange} value={value} />
            </FormItem>
        )
    }
}

ReduxFormInput.propTypes = {
    formItemProps: PropTypes.object,
    input: PropTypes.object.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    meta: PropTypes.object.isRequired
}

export default ReduxFormInput
