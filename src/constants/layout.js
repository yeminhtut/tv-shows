export const FORM_ITEM_LAYOUT = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
}

export const FORM_ITEM_LONGLABEL_LAYOUT = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 10 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
    }
}

export const REQUIRED_FORM_ITEM_LAYOUT = {
    ...FORM_ITEM_LAYOUT,
    required: true
}

export const REQUIRED_FORM_ITEM_LONGLABEL_LAYOUT = {
    ...FORM_ITEM_LONGLABEL_LAYOUT,
    required: true
}
