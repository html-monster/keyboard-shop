import React, { FC } from 'react'

interface Props {
  title?: string
  description?: string
  imageSrc?: string
}

const SingleProductContainer: FC<Props> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <>
      <h1>Viewing {title}</h1>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
    </>
  )
}

export default SingleProductContainer
