import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'

const ImageCard = props => {
  return (
    <div
      className={cx(
          {
              'image-card': true,
              'image-card__transparent': props.src,
          }
      )}
      >
      {props.src && (<img src={`https://image.tmdb.org/t/p/w300/${props.src}`} />)}
    </div>
  )
}


ImageCard.propTypes = {
    src: string
}

export default ImageCard
