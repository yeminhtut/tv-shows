import React, { useState, useEffect } from 'react'
import { func, object, array, number, bool } from 'prop-types'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import { Card, Spin } from 'components'
import { Row, Col, Pagination } from 'antd'

const ChannelList = props => {
    const { channels, getChannels, totalCount, isLoadingGetAllChannel } = props
    const [page, setPage] = useState(1)

    useEffect(() => {
        handleGetData()
    }, [page])

    const handleGetData = () => {
        getChannels({ page })
    }

    const handlePaginationChange = currentPage => setPage(currentPage)
    return (
        <div className='show-list'>
            <Row className='channel-list' gutter={[16, 16]}>
                {map(channels, channel => (
                    <Col key={channel.id} lg={6} sm={8} xs={24}>
                        <Link to={`/tv-shows/${channel.id}`}>
                            <Card
                                cover={`https://image.tmdb.org/t/p/w400/${channel.posterPath}`}
                                title={channel.name}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
            <div className='show-list__pagination'>
                <Pagination current={page} onChange={handlePaginationChange} pageSize={20} total={totalCount} />
            </div>
            {isLoadingGetAllChannel && (
                <div className='show-list__spinner'>
                    <Spin />
                </div>
            )}
        </div>
    )
}

ChannelList.propTypes = {
    channels: array,
    getChannels: func,
    history: object,
    isLoadingGetAllChannel: bool,
    location: object,
    totalCount: number
}

export default ChannelList
