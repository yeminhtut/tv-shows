import React, { useState, useEffect } from 'react'
import { func, object, array, number, bool } from 'prop-types'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import { Card, Spin } from 'components'
import { Row, Col, Input, Pagination } from 'antd'
const { Search } = Input;

const ChannelList = props => {
    const { channels, getChannels, searchChannels, totalCount, isLoadingGetAllChannel } = props
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState()

    useEffect(() => {
        handleGetData()
    }, [page, query])

    useEffect(() => {
        if (query) {
          searchChannels({ query })
        }
    }, [query])

    const handleGetData = () => {
        getChannels({ page })
    }

    const handleSearch = value => {
      setQuery(value)
    }

    const handlePaginationChange = currentPage => setPage(currentPage)
    const renderPoster = posterPath => {
      return posterPath ? `https://image.tmdb.org/t/p/w400/${posterPath}` : `https://via.placeholder.com/300/000000?text=No%20Image`
    }
    return (
        <div className='show-list'>
            <Row className='show-list__search'>
              <Col>
                <Search
                  onSearch={handleSearch}
                  placeholder='Search for a tv show'
                />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {map(channels, channel => (
                    <Col key={channel.id} lg={6} sm={8} xs={24}>
                        <Link to={`/tv-shows/${channel.id}`}>
                            <Card
                                cover={renderPoster(channel.posterPath)}
                                title={channel.name}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
            {!query && (
              <div className='show-list__pagination'>
                  <Pagination current={page} onChange={handlePaginationChange} pageSize={20} total={totalCount} />
              </div>
            )}
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
    searchChannels: func,
    totalCount: number
}

export default ChannelList
