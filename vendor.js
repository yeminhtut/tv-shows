const vendorChunkConfig = {
    coreVendor: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        'react-router-dom',
        'react-router-last-location',
        'axios',
        '@firebase',
        'rxjs',
        'redux-observable',
        'qs'
    ],
    uiVendor: ['antd', '@ant-design', '@antv/g2'],
    otherVendor: [
        'classnames',
        'lodash',
        'moment',
        'moment-timezone',
        'normalize.css',
        'prop-types',
        'react-big-calendar',
        'react-cropper',
        'react-google-maps',
        'react-sortable-hoc',
        'redux-form',
        'xlsx'
    ]
}

module.exports = vendorChunkConfig
