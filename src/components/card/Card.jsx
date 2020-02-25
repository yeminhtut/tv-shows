import React from 'react'
import { string } from 'prop-types'

const Card = props => {
    const { title, cover } = props
    return (
        <div className='ant-card ant-card-bordered ant-card-hoverable' style={{ borderRadius: '8px' }}>
            <div
                className='ant-card-cover'
                style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '300px',
                    backgroundImage: `url(${cover})`
                }}
            />
            <div className='ant-card-body'>
                <div className='ant-card-meta'>
                    <div className='ant-card-meta-detail'>
                        <div className='ant-card-meta-title'>{title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    cover: string,
    title: string
}

export default Card
