import React from 'react'
import { string } from 'prop-types'

const ImageCard = props => {
  return (
    <div className='image-card'>
      {props.src && (<img src={`https://image.tmdb.org/t/p/w300/${props.src}`} />)}
    </div>
  )
}


ImageCard.propTypes = {
    src: string
}

export default ImageCard
