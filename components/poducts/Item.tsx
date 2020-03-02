import React, { FC } from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import { Product } from './types'

const ItemStyled = styled.div`
  flex: 1;
  margin: 0 15px;
  text-decoration: none;
`
const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
`

type Props = {
  product: Product['node']
}

const Item: FC<Props> = ({
  product: { handle, title, description, images },
}) => (
  <ItemStyled>
    <Link href={{ pathname: `/${handle}` }} passHref>
      <LinkStyled>
        <img src={images?.edges?.[0]?.node?.transformedSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </LinkStyled>
    </Link>
  </ItemStyled>
)

export default Item
