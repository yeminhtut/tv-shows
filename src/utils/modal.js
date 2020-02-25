import { Modal as AntdModal } from 'antd'
import noop from 'lodash/noop'

const triggerModal = (type, options) =>
    AntdModal[type]({
        cancelText: 'Cancel',
        content: '',
        okText: 'Yes',
        onCancel: noop,
        onOk: noop,
        title: '',
        ...options
    })

const confirm = options => triggerModal('confirm', options)
const success = options => triggerModal('success', options)
const warning = options => triggerModal('warning', options)

export { confirm, success, warning }
