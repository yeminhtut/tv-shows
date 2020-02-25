import React, { Component } from 'react'
import { array, object, func, string } from 'prop-types'
import map from 'lodash/map'
import moment from 'moment'
import { Row, Col, ImageCard } from 'components'

class SeasonDetailsPage extends Component {
    componentDidMount = () => {
        const { getSeasonDetail, match } = this.props
        getSeasonDetail({ id: match.params.id, seasonNumber: match.params.seasonNumber })
    }

    render() {
        const { episodes, posterPath } = this.props
        return (
            <div className='channel-detail'>
                <div
                    className='detail-header'
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})` }}
                ></div>
                <div style={{ maxWidth: '2200px' }}>
                    {map(episodes, episode => (
                        <div key={episode.id}>
                            <Row align='top' gutter={16} justify='center' type='flex'>
                                <Col lg={20} span={20} xs={24}>
                                    <div style={{ padding: '16px' }}>
                                        <Row gutter={16}>
                                            <Col lg={6} sm={6} span={6} xs={24}>
                                                <ImageCard
                                                    cover={
                                                        <img
                                                            alt=''
                                                            src={`https://image.tmdb.org/t/p/w300/${episode.still_path}`}
                                                        />
                                                    }
                                                />
                                            </Col>
                                            <Col lg={16} sm={16} span={16} xs={24}>
                                                <div className='show-review__info'>
                                                    <span>
                                                        {episode.name} ({moment(episode.air_date).format('MMM Do YYYY')}
                                                        )
                                                    </span>
                                                </div>
                                                <div className='show-review__info'>
                                                    <span>{episode.overview}</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

SeasonDetailsPage.propTypes = {
    backdropPath: string,
    episodes: array,
    getSeasonDetail: func,
    match: object,
    overview: string,
    posterPath: string
}

export default SeasonDetailsPage
