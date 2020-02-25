import React from 'react'
import { string } from 'prop-types'

const ImageCard = props => {
  const renderPoster = poster => {
    const imagePath = poster ? `https://image.tmdb.org/t/p/w400/${poster}` : `https://via.placeholder.com/300/000000?text=No%20Image`
    return (
      <img alt='' src={imagePath} />
    )
  }
  return (
    <div
      className='image-card'
      >
      {renderPoster(props.src)}
    </div>
  )
}


ImageCard.propTypes = {
    src: string
}

export default ImageCard
