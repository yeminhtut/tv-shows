import React, { useEffect } from 'react'
import { array, object, func, string } from 'prop-types'
import map from 'lodash/map'
import moment from 'moment'
import { Row, Col, ImageCard } from 'components'
import { getTruncatedText } from '../../../utils/configUtils'

const SeasonDetailsPage = props => {
  const { episodes, getSeasonDetail, match, posterPath } = props
  const { id, seasonNumber } = match.params
  useEffect(() => {
      getSeasonDetail({ id, seasonNumber })
  }, [id, seasonNumber])

  const renderAirDate = airDate => airDate ? (moment(airDate).format('MMM Do YYYY')) : ''

  return (
    <div className='channel-detail'>
        <div
            className='detail-header'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})` }}
        ></div>
        <div className='show-review__content'>
            {map(episodes, episode => (
                <div key={episode.id}>
                    <Row align='top' gutter={16} justify='center' type='flex'>
                        <Col lg={20} span={20} xs={24}>
                          <Row className='show-review__content--row' gutter={16}>
                              <Col lg={6} sm={6} span={6} xs={24}>
                                  <ImageCard
                                      src={episode.still_path}
                                  />
                              </Col>
                              <Col lg={16} sm={16} span={16} xs={24}>
                                  <div className='show-review__info'>
                                      <span>
                                          {episode.name} {renderAirDate(episode.air_date)}
                                      </span>
                                  </div>
                                  <div className='show-review__info'>
                                      <span>{getTruncatedText(episode.overview, 300)}</span>
                                  </div>
                              </Col>
                          </Row>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    </div>
  )
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
