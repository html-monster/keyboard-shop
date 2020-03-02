import React, { FC } from 'react'

import { SingleProduct } from './types'

const SingleProductContainer: FC<SingleProduct> = ({
  title,
  description,
  images,
}) => {
  return (
    <>
      <h1>Viewing {title}</h1>
      <img src={images?.edges?.[0]?.node?.transformedSrc} alt={title} />
      <p>{description}</p>
    </>
  )
}

export default SingleProductContainer
