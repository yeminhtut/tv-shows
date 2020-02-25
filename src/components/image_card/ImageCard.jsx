import React from 'react'
import { node } from 'prop-types'

const ImageCard = props => <div className='image-card'>{props.cover}</div>

ImageCard.propTypes = {
    cover: node
}

export default ImageCard
