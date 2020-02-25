import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Slider, FormItem } from 'components'

class ReduxFormSlider extends Component {
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
                <Slider {...props} name={name} onChange={onChange} value={value} />
            </FormItem>
        )
    }
}

ReduxFormSlider.propTypes = {
    formItemProps: PropTypes.object,
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    meta: PropTypes.object.isRequired
}

export default ReduxFormSlider
