import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'

const AntdFormItem = Form.Item

class FormItem extends Component {
    render() {
        const {
            className,
            colon,
            hasFeedback,
            help,
            validateStatus,
            label,
            extra,
            labelCol,
            loading,
            wrapperCol,
            required,
            style
        } = this.props

        const validateStatusVal = loading ? 'validating' : validateStatus

        return (
            <AntdFormItem
                className={className}
                colon={colon}
                extra={extra}
                hasFeedback={hasFeedback}
                help={help}
                label={label}
                labelCol={labelCol}
                required={required}
                style={style}
                validateStatus={validateStatusVal}
                wrapperCol={wrapperCol}
            >
                {this.props.children}
            </AntdFormItem>
        )
    }
}

FormItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    colon: PropTypes.bool,
    extra: PropTypes.string,
    hasFeedback: PropTypes.bool,
    help: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    labelCol: PropTypes.object,
    loading: PropTypes.bool,
    required: PropTypes.bool,
    style: PropTypes.object,
    validateStatus: PropTypes.string,
    wrapperCol: PropTypes.object
}
FormItem.defaultProps = {
    colon: true,
    hasFeedback: false,
    help: '',
    validateStatus: undefined
}
export default FormItem
