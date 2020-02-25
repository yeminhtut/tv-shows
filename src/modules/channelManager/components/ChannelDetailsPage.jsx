import React, { Component } from 'react'
import { array, object, func, number, string } from 'prop-types'
import Modal from 'react-modal'
import map from 'lodash/map'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Row, Col, ImageCard, PlayButton, Divider } from 'components'

const serializeArray = inputArr => {
    return inputArr.join(', ')
}

class ChannelDetailsPage extends Component {
    state = {
        showTrailer: false
    }
    componentDidMount = () => {
        const { getShowDetail, match } = this.props
        getShowDetail({ id: match.params.id })
    }

    toggleModal = () => {
        const { showTrailer } = this.state
        this.setState({ showTrailer: !showTrailer })
    }

    renderIframe = trailerUrl => <iframe frameBorder='0' height='100%' src={trailerUrl} width='100%' />

    render() {
        const { backdropPath, creators, genres, id, video, seasons } = this.props
        const trailerUrl = video && video.length > 0 ? `http://www.youtube.com/embed/${video[0].key}?autoplay=1` : null
        return (
            <div className='channel-detail'>
                <div
                    className='detail-header'
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropPath})` }}
                >
                    {trailerUrl && (
                        <div
                            className='show-review__trailer'
                            onClick={this.toggleModal}
                            style={{ width: '100px', height: '100px' }}
                        >
                            <PlayButton />
                        </div>
                    )}
                </div>
                <div style={{ maxWidth: '2200px' }}>
                    <Row align='top' gutter={16} justify='center' type='flex'>
                        <Col lg={20} span={20} xs={24}>
                            <div style={{ padding: '16px' }}>
                                <Row gutter={16}>
                                    <Col lg={6} sm={6} span={6} xs={24}>
                                        <ImageCard
                                            cover={
                                                <img
                                                    alt=''
                                                    src={`https://image.tmdb.org/t/p/w500/${this.props.posterPath}`}
                                                />
                                            }
                                        />
                                    </Col>
                                    <Col lg={16} sm={16} span={16} xs={24}>
                                        <div className='show-review__info'>
                                            <label>Genre</label>
                                            <span>{genres && serializeArray(genres)}</span>
                                        </div>
                                        <div className='show-review__info'>
                                            <label>Creators</label>
                                            <span>{creators && serializeArray(creators)}</span>
                                        </div>
                                        <div className='show-review__info'>
                                            <label>Number of seasons</label>
                                            <span>{this.props.numberOfSeasons}</span>
                                        </div>
                                        <div className='show-review__info'>
                                            <label>First air date</label>
                                            <span>{this.props.firstAirDate}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Divider />
                    {map(seasons, (season, i) => (
                        <div key={season.id}>
                            <Row align='top' gutter={16} justify='center' type='flex'>
                                <Col lg={20} span={20} xs={24}>
                                    <div style={{ padding: '16px' }}>
                                        <Row gutter={16}>
                                            <Col lg={6} sm={6} span={6} xs={24}>
                                                <ImageCard
                                                    cover={
                                                        <img
                                                            alt=''
                                                            src={`https://image.tmdb.org/t/p/w300/${season.poster_path}`}
                                                        />
                                                    }
                                                />
                                            </Col>
                                            <Col lg={16} sm={16} span={16} xs={24}>
                                                <div className='show-review__info'>
                                                    <label>Name</label>
                                                    <span>{season.name}</span>
                                                </div>
                                                <div className='show-review__info'>
                                                    <label>Number of episodes</label>
                                                    <span>{season.episode_count}</span>
                                                </div>
                                                <div className='show-review__info'>
                                                    <label>Air date</label>
                                                    <span>{moment(season.air_date).format('MMM Do YYYY')}</span>
                                                </div>
                                                <div>
                                                    <Link
                                                        className='show-review__link'
                                                        to={`/tv-shows/${id}/season/${season.season_number}`}
                                                    >
                                                        View all episodes
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            {seasons.length - 1 !== i && <Divider />}
                        </div>
                    ))}
                </div>

                <Modal
                    ariaHideApp={false}
                    className='show-review__modal'
                    isOpen={this.state.showTrailer}
                    onRequestClose={this.toggleModal}
                    overlayClassName='show-review__overlay'
                    shouldCloseOnOverlayClick
                >
                    {this.renderIframe(trailerUrl)}
                </Modal>
            </div>
        )
    }
}

ChannelDetailsPage.propTypes = {
    backdropPath: string,
    creators: array,
    firstAirDate: string,
    genres: array,
    getShowDetail: func,
    id: number,
    match: object,
    numberOfSeasons: number,
    overview: string,
    posterPath: string,
    seasons: array,
    video: array
}

export default ChannelDetailsPage
