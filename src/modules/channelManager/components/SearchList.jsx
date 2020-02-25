import React from 'react'
import { func, object, array, number, bool } from 'prop-types'
import { Row } from 'components'

const SearchList = () => {
    return (
        <Row className='channel-list' gutter={16}>
            search result
        </Row>
    )
}

SearchList.propTypes = {
    channels: array,
    getChannels: func,
    history: object,
    isLoadingGetAllChannel: bool,
    location: object,
    totalChannelCount: number
}

export default SearchList
