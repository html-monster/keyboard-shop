import React, { FC } from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import { Image } from '../../graphql/types'

interface Props {
  title?: string
  description?: string
  handle?: string
  images?: Image[]
}

const ItemStyled = styled.div`
  flex: 1;
  margin: 0 15px;
  text-decoration: none;
`
const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const Item: FC<Props> = ({ handle, title, description, images }) => (
  <ItemStyled>
    <Link href={{ pathname: `/${handle}` }} passHref>
      <LinkStyled>
        <img src={images[0].transformedSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </LinkStyled>
    </Link>
  </ItemStyled>
)

export default Item
